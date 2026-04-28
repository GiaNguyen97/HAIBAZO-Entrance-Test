package com.bookreview.service.impl;

import com.bookreview.dto.AuthorDTO;
import com.bookreview.entity.Author;
import com.bookreview.entity.Book;
import com.bookreview.exception.ResourceNotFoundException;
import com.bookreview.mapper.AuthorMapper;
import com.bookreview.repository.AuthorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthorServiceImplTest {

    @Mock
    private AuthorRepository authorRepository;

    @Mock
    private AuthorMapper authorMapper;

    @InjectMocks
    private AuthorServiceImpl authorService;

    private Author author;
    private AuthorDTO authorDTO;

    @BeforeEach
    void setUp() {
        author = new Author();
        author.setId(1L);
        author.setName("Robert C. Martin");
        author.setBooks(new ArrayList<>());

        authorDTO = new AuthorDTO();
        authorDTO.setId(1L);
        authorDTO.setName("Robert C. Martin");
    }

    @Test
    @DisplayName("Nên tạo tác giả thành công")
    void createAuthor_Success() {
        // Given
        when(authorMapper.toEntity(any(AuthorDTO.class))).thenReturn(author);
        when(authorRepository.save(any(Author.class))).thenReturn(author);
        when(authorMapper.toDTO(any(Author.class))).thenReturn(authorDTO);

        // When
        AuthorDTO result = authorService.createAuthor(authorDTO);

        // Then
        assertThat(result).isNotNull();
        assertThat(result.getName()).isEqualTo("Robert C. Martin");
        verify(authorRepository, times(1)).save(any(Author.class));
    }

    @Test
    @DisplayName("Nên ném ngoại lệ khi xóa tác giả đang có sách")
    void deleteAuthor_HasBooks_ThrowsException() {
        // Given
        List<Book> books = new ArrayList<>();
        books.add(new Book());
        author.setBooks(books);
        when(authorRepository.findById(1L)).thenReturn(Optional.of(author));

        // When & Then
        assertThatThrownBy(() -> authorService.deleteAuthor(1L))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Cannot delete author because they have associated books");
        
        verify(authorRepository, never()).delete(any(Author.class));
    }

    @Test
    @DisplayName("Nên xóa tác giả thành công khi không có sách")
    void deleteAuthor_NoBooks_Success() {
        // Given
        author.setBooks(new ArrayList<>());
        when(authorRepository.findById(1L)).thenReturn(Optional.of(author));

        // When
        authorService.deleteAuthor(1L);

        // Then
        verify(authorRepository, times(1)).delete(author);
    }
}
