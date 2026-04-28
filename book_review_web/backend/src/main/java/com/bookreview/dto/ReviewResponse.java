package com.bookreview.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewResponse {

    private Long id;
    private Long bookId;
    private String bookTitle;
    private String authorName;
    private String review;
}
