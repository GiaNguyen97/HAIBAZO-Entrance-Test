package com.bookreview.mapper;

import com.bookreview.dto.BookDTO;
import com.bookreview.entity.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BookMapper {

    @Mapping(source = "author.id", target = "authorId")
    @Mapping(source = "author.name", target = "authorName")
    BookDTO toDTO(Book book);

    @Mapping(target = "author", ignore = true)
    @Mapping(target = "reviews", ignore = true)
    Book toEntity(BookDTO bookDTO);
}
