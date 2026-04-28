package com.bookreview.service.impl;

import com.bookreview.dto.BookDTO;
import com.bookreview.entity.Author;
import com.bookreview.entity.Book;
import com.bookreview.exception.ResourceNotFoundException;
import com.bookreview.mapper.BookMapper;
import com.bookreview.repository.AuthorRepository;
import com.bookreview.repository.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BookServiceImplTest {

    @Mock
    private BookRepository bookRepository;

    @Mock
    private AuthorRepository authorRepository;

    @Mock
    private BookMapper bookMapper;

    @InjectMocks
    private BookServiceImpl bookService;

    private Author author;
    private Book book;
    private BookDTO bookDTO;

    @BeforeEach
    void setUp() {
        author = new Author();
        author.setId(1L);
        author.setName("John Doe");

        book = new Book();
        book.setId(1L);
        book.setTitle("Clean Code");
        book.setAuthor(author);

        bookDTO = new BookDTO();
        bookDTO.setId(1L);
        bookDTO.setTitle("Clean Code");
        bookDTO.setAuthorId(1L);
    }

    @Test
    @DisplayName("Nên tạo sách thành công khi có tác giả hợp lệ")
    void createBook_Success() {
        // Given
        when(authorRepository.findById(1L)).thenReturn(Optional.of(author));
        when(bookMapper.toEntity(any(BookDTO.class))).thenReturn(book);
        when(bookRepository.save(any(Book.class))).thenReturn(book);
        when(bookMapper.toDTO(any(Book.class))).thenReturn(bookDTO);

        // When
        BookDTO result = bookService.createBook(bookDTO);

        // Then
        assertThat(result).isNotNull();
        assertThat(result.getTitle()).isEqualTo("Clean Code");
        verify(bookRepository, times(1)).save(any(Book.class));
    }

    @Test
    @DisplayName("Nên ném ngoại lệ khi tạo sách với tác giả không tồn tại")
    void createBook_AuthorNotFound() {
        // Given
        when(authorRepository.findById(1L)).thenReturn(Optional.empty());

        // When & Then
        assertThatThrownBy(() -> bookService.createBook(bookDTO))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessageContaining("Author not found");
        
        verify(bookRepository, never()).save(any(Book.class));
    }

    @Test
    @DisplayName("Nên tìm thấy sách theo ID")
    void deleteBook_Success() {
        // Given
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        // When
        bookService.deleteBook(1L);

        // Then
        verify(bookRepository, times(1)).delete(book);
    }
}
