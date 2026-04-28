# HAIBAZO Coding Projects - Tổng hợp Dự án

Chào mừng bạn đến với repository tổng hợp các dự án và bài kiểm tra năng lực tại HAIBAZO. Repository này bao gồm các giải pháp kỹ thuật từ ứng dụng quản lý sách đến các trò chơi tương tác.

## 🚀 Danh sách Dự án

### 1. Game Click Circles (Entrance Test)
Trò chơi rèn luyện sự tập trung và tốc độ, nơi người chơi click vào các điểm theo thứ tự số tăng dần.
- **Công nghệ**: React 19, Vite, CSS Vanilla.
- **Thư mục**: [`game_click_circles/`](game_click_circles/)
- **Tài liệu**: [Chi tiết Game Click Circles](game_click_circles/README.md)

### 2. Book Review Web Application
Ứng dụng Full-stack cho phép người dùng quản lý sách, viết đánh giá và theo dõi các tác giả yêu thích.
- **Công nghệ**: 
  - **Backend**: Java Spring Boot, PostgreSQL.
  - **Frontend**: React, Glassmorphism UI.
  - **Infrastucture**: Docker, Docker Compose.
- **Thư mục**: [`book_review_web/`](book_review_web/)
- **Tài liệu**: [Chi tiết Book Review App](book_review_web/README.md)

## 📂 Cấu trúc Repository
```text
HAIBAZO/
├── game_click_circles/ # Dự án Game Click Circles
│   ├── src/            # Mã nguồn React
│   └── docs/           # Tài liệu yêu cầu
├── book_review_web/    # Dự án Book Review App
│   ├── backend/        # Mã nguồn Spring Boot
│   ├── frontend/       # Mã nguồn React
│   └── docs/           # Tài liệu thiết kế
└── README.md           # Tệp này (Tổng quan)
```

## 🛠 Hướng dẫn Khởi chạy chung

Để khám phá các dự án, bạn có thể di chuyển vào từng thư mục cụ thể và làm theo hướng dẫn trong file `README.md` riêng của từng dự án.

### Ví dụ chạy Game Click Circles:
```bash
cd game_click_circles
npm install
npm run dev
```

### Ví dụ chạy Book Review (Yêu cầu Docker):
```bash
cd book_review_web
docker-compose up -d
```

---
*Dự án được thực hiện bởi [Tên của bạn/HAIBAZO].*
