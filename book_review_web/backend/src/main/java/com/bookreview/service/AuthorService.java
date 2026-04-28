package com.bookreview.service;

import com.bookreview.dto.AuthorDTO;
import com.bookreview.dto.PageResponseDTO;

public interface AuthorService {
    PageResponseDTO<AuthorDTO> getAllAuthors(int page, int size);
    AuthorDTO createAuthor(AuthorDTO authorDTO);
    AuthorDTO updateAuthor(Long id, AuthorDTO authorDTO);
    void deleteAuthor(Long id);
}
