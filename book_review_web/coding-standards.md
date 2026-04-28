# 📏 Coding Standards & Best Practices - Book Review App

Tài liệu này định nghĩa các nguyên tắc lập trình để đảm bảo:

- Code dễ đọc
- Dễ maintain
- Dễ scale
- Tránh bug ngầm

---

## 🧠 1. Nguyên tắc SOLID

### S - Single Responsibility Principle

👉 Mỗi class chỉ có **1 lý do để thay đổi**

✅ NÊN:

- Controller chỉ handle request/response
- Service xử lý business logic
- Repository chỉ query DB

❌ KHÔNG NÊN:

- Viết logic business trong Controller
- Nhồi tất cả vào 1 class

---

### O - Open/Closed Principle

👉 Mở rộng được, không sửa code cũ

✅ NÊN:

- Dùng interface
- Strategy pattern khi cần

❌ KHÔNG NÊN:

- if/else dài để xử lý nhiều case

---

### L - Liskov Substitution Principle

👉 Class con thay thế class cha mà không phá logic

❌ KHÔNG NÊN:

- Override method nhưng thay đổi behavior hoàn toàn

---

### I - Interface Segregation Principle

👉 Interface nhỏ, đúng mục đích

❌ KHÔNG NÊN:

- Interface “god” chứa quá nhiều method

---

### D - Dependency Inversion Principle

👉 Phụ thuộc abstraction, không phụ thuộc implementation

✅ NÊN:

- Inject interface (Spring @Service, @Repository)

---

## 🗄️ 2. Nguyên tắc ACID (Database)

### A - Atomicity

- Transaction phải **all or nothing**

### C - Consistency

- Data luôn hợp lệ sau transaction

### I - Isolation

- Transaction không ảnh hưởng nhau

### D - Durability

- Data không mất sau commit

👉 Trong Spring:

- dùng `@Transactional`

---

## 📛 3. Quy tắc đặt tên

### Class

- PascalCase
- Ví dụ:
  - `AuthorService`
  - `BookController`

---

### Method

- camelCase + động từ

✅:

- `getAllAuthors()`
- `createBook()`

❌:

- `authorList()`
- `doStuff()`

---

### Variable

- rõ nghĩa, không viết tắt khó hiểu

❌:

a, b, x1, tmp

✅:

authorName
bookList
reviewContent

---

### API Endpoint

✅:

GET /api/books
POST /api/books
PUT /api/books/{id}
DELETE /api/books/{id}

❌:

/getBooks
/deleteBook

---

## 🧱 4. Clean Code Rules

### ✅ NÊN

- Function ngắn (< 30 dòng)
- 1 function = 1 nhiệm vụ
- Code đọc như tiếng Anh
- Early return để giảm nesting

---

### ❌ KHÔNG NÊN

- Nested if quá sâu
- Function dài 200 dòng
- Copy-paste code

---

## 🔄 5. DRY - Don't Repeat Yourself

❌:

- Lặp lại logic validate nhiều nơi

✅:

- Tạo util / reusable function

---

## ⚡ 6. KISS - Keep It Simple

👉 Đừng over-engineer

❌:

- Dùng design pattern khi chưa cần

✅:

- Giải pháp đơn giản nhất chạy được

---

## 🚫 7. Những lỗi phổ biến cần tránh

### Backend

❌ Trả trực tiếp Entity ra API  
👉 dễ lộ dữ liệu, khó maintain

❌ Không validate input  
👉 bug + security risk

❌ Không handle exception  
👉 crash toàn bộ API

---

### Frontend

❌ Gọi API trong render  
👉 gây loop vô hạn

❌ Không handle loading state  
👉 UX kém

❌ Hardcode URL API  
👉 khó deploy

---

## 🔐 8. Security cơ bản

- Không trust input từ client
- Validate tất cả dữ liệu
- Không expose stack trace

---

## 📊 9. Logging

### ✅ NÊN

- Log ở Service layer
- Log error + context

### ❌ KHÔNG NÊN

- Log spam
- Log dữ liệu nhạy cảm

---

## 🧪 10. Testing mindset

- Test:
  - Service logic
  - API response

- Case:
  - success
  - fail
  - edge case

---

## 📦 11. Git Best Practices

### Commit message

✅:

feat: add author CRUD API
fix: handle null author in book creation

❌:

update code
fix bug

---

## 🚀 12. Performance cơ bản

### Backend

- Pagination bắt buộc
- Không query N+1

### Frontend

- Tránh re-render không cần thiết
- Debounce input search

---

## 📌 13. Rule tổng kết (QUAN TRỌNG)

### Luôn nhớ

- Code cho **người đọc**, không phải máy
- Đơn giản > thông minh
- Rõ ràng > ngắn gọn
- Consistency > đúng tuyệt đối

---

## 🧠 Mental Model (Senior mindset)

- "Code này 3 tháng nữa mình có đọc hiểu không?"
- "Nếu feature tăng gấp đôi thì có chịu nổi không?"
- "Người khác vào project có hiểu không?"

Nếu câu trả lời là ❌ → cần refactor
