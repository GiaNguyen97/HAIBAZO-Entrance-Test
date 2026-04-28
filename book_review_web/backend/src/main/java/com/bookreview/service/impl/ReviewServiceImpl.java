package com.bookreview.service.impl;

import com.bookreview.dto.PageResponseDTO;
import com.bookreview.dto.ReviewDTO;
import com.bookreview.entity.Book;
import com.bookreview.entity.Review;
import com.bookreview.exception.ResourceNotFoundException;
import com.bookreview.mapper.ReviewMapper;
import com.bookreview.repository.BookRepository;
import com.bookreview.repository.ReviewRepository;
import com.bookreview.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final BookRepository bookRepository;
    private final ReviewMapper reviewMapper;

    @Override
    public PageResponseDTO<ReviewDTO> getAllReviews(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Review> reviewPage = reviewRepository.findAll(pageable);

        return new PageResponseDTO<>(
                reviewPage.getContent().stream().map(reviewMapper::toDTO).collect(Collectors.toList()),
                reviewPage.getNumber(),
                reviewPage.getSize(),
                reviewPage.getTotalElements()
        );
    }

    @Override
    @Transactional
    public ReviewDTO createReview(ReviewDTO reviewDTO) {
        Book book = bookRepository.findById(reviewDTO.getBookId())
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + reviewDTO.getBookId()));

        Review review = reviewMapper.toEntity(reviewDTO);
        review.setBook(book);
        Review savedReview = reviewRepository.save(review);
        return reviewMapper.toDTO(savedReview);
    }

    @Override
    @Transactional
    public ReviewDTO updateReview(Long id, ReviewDTO reviewDTO) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));

        Book book = bookRepository.findById(reviewDTO.getBookId())
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + reviewDTO.getBookId()));

        review.setReview(reviewDTO.getReview());
        review.setBook(book);
        Review updatedReview = reviewRepository.save(review);
        return reviewMapper.toDTO(updatedReview);
    }

    @Override
    @Transactional
    public void deleteReview(Long id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));

        reviewRepository.delete(review);
    }
}
