# 📚 Book Review Web Application

Ứng dụng web quản lý đánh giá sách (Book Review) chuyên nghiệp, được xây dựng với kiến trúc Full-stack hiện đại.

## 🚀 Tổng quan dự án

Dự án này cho phép người dùng quản lý danh sách tác giả, đầu sách và các bài đánh giá tương ứng. Hệ thống được thiết kế để tối ưu hóa trải nghiệm người dùng với giao diện mượt mà và khả năng xử lý dữ liệu mạnh mẽ ở backend.

---

## 🛠️ Công nghệ sử dụng

### Backend
- **Ngôn ngữ:** Java 17+
- **Framework:** Spring Boot 3.x
- **Persistence:** Spring Data JPA
- **Database:** PostgreSQL
- **Build Tool:** Gradle

### Frontend
- **Framework:** ReactJS (Vite)
- **Styling:** Tailwind CSS / Vanilla CSS
- **Routing:** React Router DOM
- **API Client:** Axios

---

## ✨ Tính năng chính

- 👤 **Quản lý Tác giả:** Xem danh sách (phân trang), thêm mới, cập nhật và xóa tác giả.
- 📖 **Quản lý Sách:** Liên kết sách với tác giả, CRUD sách với phân trang.
- 📝 **Quản lý Đánh giá:** Viết cảm nhận cho từng cuốn sách, quản lý danh sách đánh giá.
- 🎨 **Giao diện hiện đại:** Responsive, sử dụng Modal, Spinner và Toast thông báo chuyên nghiệp.
- 🔍 **Xử lý dữ liệu:** Phân trang từ phía Server (Server-side pagination) giúp tối ưu hiệu năng.

---

## 📂 Cấu trúc thư mục

```text
book_review_web/
├── backend/            # Mã nguồn Spring Boot
├── frontend/           # Mã nguồn ReactJS (Vite)
├── docker-compose.yml  # Cấu hình Docker cho Database
├── PROJECT_PLAN.md     # Kế hoạch phát triển chi tiết
└── README.md           # Hướng dẫn này
```

---

## 🏃‍♂️ Hướng dẫn chạy dự án

### 1. Yêu cầu hệ thống
- Java 17 hoặc mới hơn.
- Node.js (v18+).
- Docker & Docker Compose (để chạy PostgreSQL).

### 2. Cài đặt Database
Sử dụng Docker để khởi chạy PostgreSQL nhanh chóng:
```bash
docker-compose up -d
```

### 3. Chạy Backend
```bash
cd backend
./gradlew bootRun
```
Backend sẽ chạy tại: `http://localhost:8080`

### 4. Chạy Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend sẽ chạy tại: `http://localhost:5173`

---

## 🔗 API Endpoints tiêu biểu

| Method | Endpoint | Mô tả |
|---|---|---|
| `GET` | `/api/authors` | Lấy danh sách tác giả (có phân trang) |
| `POST` | `/api/books` | Thêm mới một cuốn sách |
| `GET` | `/api/reviews` | Lấy danh sách tất cả đánh giá |

---

## 📝 Ghi chú
- Đảm bảo bạn đã cấu hình đúng thông tin database trong file `backend/src/main/resources/application.properties` hoặc `application.yml`.
- Các tệp cấu hình môi trường `.env` cần được tạo ở thư mục frontend nếu cần thiết.

---

## 🤝 Liên hệ
- Dự án được phát triển bởi: **HAIBAZO Team** (CodeGym)
- Kế hoạch chi tiết tại: [PROJECT_PLAN.md](file:///e:/CODEGYM/bai_tap_code_gym/HAIBAZO/book_review_web/PROJECT_PLAN.md)
