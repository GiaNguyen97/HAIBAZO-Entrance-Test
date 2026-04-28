# 🧠 Backend Architecture - Book Review App

## 🏗️ Tổng quan

Backend được xây dựng bằng Spring Boot theo mô hình:

- Controller → Service → Repository → Database
- RESTful API
- Validation + Exception Handling
- Pagination + DTO Mapping

---

## 📦 Package Structure

com.bookreview
│
├── controller # REST API
├── service # Business logic
├── repository # JPA Repository
├── entity # Database entities
├── dto # Data Transfer Object
├── mapper # Convert Entity ↔ DTO
├── exception # Custom exception + handler
├── config # Config (CORS, DB,...)
└── util # Helper class

---

## 🗄️ Database Design

### authors

- id (PK)
- name (varchar)

### books

- id (PK)
- title (varchar)
- author_id (FK → authors.id)

### reviews

- id (PK)
- book_id (FK → books.id)
- review (text)

---

## 🔗 Entity Relationship

- Author (1) —— (N) Book
- Book (1) —— (N) Review

---

## 📄 Entity Layer

### Author

- id
- name
- List<Book> books

### Book

- id
- title
- Author author
- List<Review> reviews

### Review

- id
- Book book
- review

---

## 📥 DTO Design

### AuthorDTO

- id
- name
- bookCount

### BookDTO

- id
- title
- authorName

### ReviewDTO

- id
- bookTitle
- authorName
- review

---

## 🔄 Mapper

- Convert Entity ↔ DTO
- Có thể dùng:
  - MapStruct (recommended)
  - hoặc manual mapping

---

## 🧠 Service Layer Logic

### AuthorService

- getAll(page, size)
- create(authorDTO)
- update(id, authorDTO)
- delete(id)

👉 Khi delete:

- Check nếu author có book → reject hoặc cascade

---

### BookService

- getAll(page, size)
- create(bookDTO)
- update(id, bookDTO)
- delete(id)

👉 Validate:

- Author phải tồn tại

---

### ReviewService

- getAll(page, size)
- create(reviewDTO)
- update(id, reviewDTO)
- delete(id)

👉 Validate:

- Book phải tồn tại

---

## 🌐 Controller Layer

### Base URL

/api/authors
/api/books
/api/reviews

---

### Response Format

```json
{
  "data": [],
  "page": 1,
  "size": 10,
  "total": 100
}
