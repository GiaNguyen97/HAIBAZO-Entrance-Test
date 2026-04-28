package com.bookreview.mapper;

import com.bookreview.dto.ReviewDTO;
import com.bookreview.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    @Mapping(source = "book.id", target = "bookId")
    @Mapping(source = "book.title", target = "bookTitle")
    @Mapping(source = "book.author.name", target = "authorName")
    ReviewDTO toDTO(Review review);

    @Mapping(target = "book", ignore = true)
    Review toEntity(ReviewDTO reviewDTO);
}
