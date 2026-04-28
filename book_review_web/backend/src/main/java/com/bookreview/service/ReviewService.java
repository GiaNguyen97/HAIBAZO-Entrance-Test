package com.bookreview.service;

import com.bookreview.dto.PageResponseDTO;
import com.bookreview.dto.ReviewDTO;

public interface ReviewService {
    PageResponseDTO<ReviewDTO> getAllReviews(int page, int size);
    ReviewDTO createReview(ReviewDTO reviewDTO);
    ReviewDTO updateReview(Long id, ReviewDTO reviewDTO);
    void deleteReview(Long id);
}
