package com.bookreview.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDTO {
    private Long id;

    @NotNull(message = "Please select book")
    private Long bookId;

    private String bookTitle;
    private String authorName;

    @NotBlank(message = "Please enter review")
    private String review;
}
