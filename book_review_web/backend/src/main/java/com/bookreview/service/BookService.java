package com.bookreview.service;

import com.bookreview.dto.BookDTO;
import com.bookreview.dto.PageResponseDTO;

public interface BookService {
    PageResponseDTO<BookDTO> getAllBooks(int page, int size);
    BookDTO createBook(BookDTO bookDTO);
    BookDTO updateBook(Long id, BookDTO bookDTO);
    void deleteBook(Long id);
}
