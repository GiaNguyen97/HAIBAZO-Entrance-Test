package com.bookreview.service.impl;

import com.bookreview.dto.AuthorDTO;
import com.bookreview.dto.PageResponseDTO;
import com.bookreview.entity.Author;
import com.bookreview.exception.ResourceNotFoundException;
import com.bookreview.mapper.AuthorMapper;
import com.bookreview.repository.AuthorRepository;
import com.bookreview.service.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final AuthorMapper authorMapper;

    @Override
    public PageResponseDTO<AuthorDTO> getAllAuthors(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Author> authorPage = authorRepository.findAll(pageable);
        
        return new PageResponseDTO<>(
                authorPage.getContent().stream().map(authorMapper::toDTO).collect(Collectors.toList()),
                authorPage.getNumber(),
                authorPage.getSize(),
                authorPage.getTotalElements()
        );
    }

    @Override
    @Transactional
    public AuthorDTO createAuthor(AuthorDTO authorDTO) {
        Author author = authorMapper.toEntity(authorDTO);
        Author savedAuthor = authorRepository.save(author);
        return authorMapper.toDTO(savedAuthor);
    }

    @Override
    @Transactional
    public AuthorDTO updateAuthor(Long id, AuthorDTO authorDTO) {
        Author author = authorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Author not found with id: " + id));
        
        author.setName(authorDTO.getName());
        Author updatedAuthor = authorRepository.save(author);
        return authorMapper.toDTO(updatedAuthor);
    }

    @Override
    @Transactional
    public void deleteAuthor(Long id) {
        Author author = authorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Author not found with id: " + id));
        
        if (!author.getBooks().isEmpty()) {
            throw new RuntimeException("Cannot delete author because they have associated books");
        }
        
        authorRepository.delete(author);
    }
}
