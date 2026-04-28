package com.bookreview.service.impl;

import com.bookreview.dto.ReviewDTO;
import com.bookreview.entity.Book;
import com.bookreview.entity.Review;
import com.bookreview.exception.ResourceNotFoundException;
import com.bookreview.mapper.ReviewMapper;
import com.bookreview.repository.BookRepository;
import com.bookreview.repository.ReviewRepository;
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
class ReviewServiceImplTest {

    @Mock
    private ReviewRepository reviewRepository;

    @Mock
    private BookRepository bookRepository;

    @Mock
    private ReviewMapper reviewMapper;

    @InjectMocks
    private ReviewServiceImpl reviewService;

    private Book book;
    private Review review;
    private ReviewDTO reviewDTO;

    @BeforeEach
    void setUp() {
        book = new Book();
        book.setId(1L);
        book.setTitle("Test Book");

        review = new Review();
        review.setId(1L);
        review.setReview("Great book!");
        review.setBook(book);

        reviewDTO = new ReviewDTO();
        reviewDTO.setId(1L);
        reviewDTO.setBookId(1L);
        reviewDTO.setReview("Great book!");
    }

    @Test
    @DisplayName("Nên tạo review thành công khi dữ liệu hợp lệ")
    void createReview_Success() {
        // Given
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));
        when(reviewMapper.toEntity(any(ReviewDTO.class))).thenReturn(review);
        when(reviewRepository.save(any(Review.class))).thenReturn(review);
        when(reviewMapper.toDTO(any(Review.class))).thenReturn(reviewDTO);

        // When
        ReviewDTO result = reviewService.createReview(reviewDTO);

        // Then
        assertThat(result).isNotNull();
        assertThat(result.getReview()).isEqualTo("Great book!");
        verify(reviewRepository, times(1)).save(any(Review.class));
    }

    @Test
    @DisplayName("Nên ném ngoại lệ khi tạo review cho sách không tồn tại")
    void createReview_BookNotFound() {
        // Given
        when(bookRepository.findById(1L)).thenReturn(Optional.empty());

        // When & Then
        assertThatThrownBy(() -> reviewService.createReview(reviewDTO))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessageContaining("Book not found");
        
        verify(reviewRepository, never()).save(any(Review.class));
    }

    @Test
    @DisplayName("Nên xóa review thành công")
    void deleteReview_Success() {
        // Given
        when(reviewRepository.findById(1L)).thenReturn(Optional.of(review));

        // When
        reviewService.deleteReview(1L);

        // Then
        verify(reviewRepository, times(1)).delete(review);
    }

    @Test
    @DisplayName("Nên ném ngoại lệ khi xóa review không tồn tại")
    void deleteReview_NotFound() {
        // Given
        when(reviewRepository.findById(1L)).thenReturn(Optional.empty());

        // When & Then
        assertThatThrownBy(() -> reviewService.deleteReview(1L))
                .isInstanceOf(ResourceNotFoundException.class);
    }
}
