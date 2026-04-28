package com.bookreview.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PageResponse<T> {

    private List<T> data;
    private int page;
    private int size;
    private long total;
    private int totalPages;
}
