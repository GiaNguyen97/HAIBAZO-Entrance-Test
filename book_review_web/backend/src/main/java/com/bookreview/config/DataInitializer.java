package com.bookreview.config;

import com.bookreview.entity.Author;
import com.bookreview.entity.Book;
import com.bookreview.entity.Review;
import com.bookreview.repository.AuthorRepository;
import com.bookreview.repository.BookRepository;
import com.bookreview.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;
    private final ReviewRepository reviewRepository;

    @Override
    public void run(String... args) {
        if (authorRepository.count() == 0) {
            // 1. Tạo tác giả
            Author uncleBob = new Author();
            uncleBob.setName("Robert C. Martin");
            
            Author martinFowler = new Author();
            martinFowler.setName("Martin Fowler");
            
            Author joshuaBloch = new Author();
            joshuaBloch.setName("Joshua Bloch");

            authorRepository.saveAll(Arrays.asList(uncleBob, martinFowler, joshuaBloch));

            // 2. Tạo sách
            Book cleanCode = new Book();
            cleanCode.setTitle("Clean Code");
            cleanCode.setAuthor(uncleBob);
            
            Book refactoring = new Book();
            refactoring.setTitle("Refactoring");
            refactoring.setAuthor(martinFowler);
            
            Book effectiveJava = new Book();
            effectiveJava.setTitle("Effective Java");
            effectiveJava.setAuthor(joshuaBloch);

            bookRepository.saveAll(Arrays.asList(cleanCode, refactoring, effectiveJava));

            // 3. Tạo đánh giá (Reviews)
            Review r1 = new Review();
            r1.setReview("Cuốn sách gối đầu giường của mọi lập trình viên!");
            r1.setBook(cleanCode);
            
            Review r2 = new Review();
            r2.setReview("Kỹ thuật refactor cực kỳ chi tiết và hữu ích.");
            r2.setBook(refactoring);
            
            Review r3 = new Review();
            r3.setReview("Kiến thức Java chuyên sâu, rất đáng đọc.");
            r3.setBook(effectiveJava);

            reviewRepository.saveAll(Arrays.asList(r1, r2, r3));
            
            System.out.println(">>> Mock data has been initialized!");
        }
    }
}
