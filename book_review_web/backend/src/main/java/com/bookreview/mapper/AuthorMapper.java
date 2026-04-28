package com.bookreview.mapper;

import com.bookreview.dto.AuthorDTO;
import com.bookreview.entity.Author;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AuthorMapper {

    @Mapping(target = "bookCount", expression = "java(author.getBooks() != null ? author.getBooks().size() : 0)")
    AuthorDTO toDTO(Author author);

    @Mapping(target = "books", ignore = true)
    Author toEntity(AuthorDTO authorDTO);
}
