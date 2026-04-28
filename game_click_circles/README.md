# HAIBAZO - Game Click Circles

## 📝 Giới thiệu
Dự án này là một trò chơi đơn giản nhưng yêu cầu sự tập trung và tốc độ. Người chơi cần click vào các hình tròn (node) theo thứ tự số tăng dần từ 1 đến N trong thời gian ngắn nhất có thể.

## 🚀 Tính năng chính
- **Cài đặt số lượng điểm (Points):** Cho phép người chơi nhập số lượng hình tròn muốn thử thách.
- **Đếm thời gian (Timer):** Theo dõi thời gian thực hiện bài test với độ chính xác cao.
- **Chế độ Auto Play:** Tự động hóa quá trình click để kiểm tra logic và hiệu năng.
- **Phản hồi trực quan:** Node chuyển màu đỏ và mờ dần khi được click đúng.
- **Trạng thái trò chơi:** Hiển thị thông báo khi thắng cuộc (ALL CLEARED) hoặc khi click sai (GAME OVER).

## 🛠 Công nghệ sử dụng
- **React 19**: Thư viện UI chính.
- **Vite**: Công cụ build và môi trường phát triển nhanh chóng.
- **Vanilla CSS**: Sử dụng cho giao diện hiện đại, mượt mà và hiệu ứng animation.

## 📦 Cấu trúc thư mục
- `src/components/`: Chứa các thành phần giao diện nhỏ (Node, Controls, Status).
- `src/hooks/`: Chứa các logic tùy chỉnh như đếm giờ (Timer) hoặc tự động chơi (AutoPlay).
- `src/utils/`: Các hàm hỗ trợ tính toán vị trí ngẫu nhiên, định dạng thời gian.
- `src/App.jsx`: Quản lý trạng thái tổng thể của trò chơi.

## 💻 Hướng dẫn chạy dự án

### 1. Cài đặt các thư viện cần thiết:
```bash
npm install
```

### 2. Khởi chạy ứng dụng ở chế độ phát triển:
```bash
npm run dev
```

### 3. Xây dựng bản sản xuất (Production):
```bash
npm run build
```

## 📜 Tài liệu liên quan
- [Tổng quan dự án](docs/01-overview.md)
- [Yêu cầu Backend](docs/02-backend.md)
- [Yêu cầu Frontend](docs/03-frontend.md)
- [Tiêu chuẩn Clean Code](docs/04-clean-code.md)

---
*Dự án thực hiện cho bài kiểm tra đầu vào tại HAIBAZO.*
