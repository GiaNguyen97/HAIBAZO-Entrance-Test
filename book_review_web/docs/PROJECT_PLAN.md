# 📚 BOOK REVIEW Web App - Development Plan

Bản kế hoạch này mô tả chi tiết các bước xây dựng một ứng dụng web **Book Review** sử dụng:

- **Backend:** Spring Boot (Java)  
- **Frontend:** ReactJS  
- **Database:** PostgreSQL  

Dự án được chia thành **5 giai đoạn chính** để đảm bảo tiến độ và chất lượng.

---

## 🚀 Giai đoạn 1: Khởi tạo dự án & Chuẩn bị (Ngày 1)

### 1. Repository

- Tạo repository **public trên GitHub**
- Tách riêng:
  - `backend/`
  - `frontend/`

### 2. Screen Recording

- Thiết lập phần mềm quay màn hình
- Ghi lại toàn bộ quá trình phát triển từ đầu

### 3. Database (PostgreSQL)

- Cài đặt và cấu hình PostgreSQL
- Thiết kế các bảng:
  - `authors`
  - `books`
  - `reviews`

### 4. Backend (Spring Boot)

- Khởi tạo project Spring Boot
- Cấu hình kết nối PostgreSQL

### 5. Frontend (ReactJS)

- Khởi tạo project ReactJS
- Cài đặt thư viện:
  - React Router
  - Axios
  - UI Framework (Material UI / Ant Design / Tailwind CSS)

---

## ⚙️ Giai đoạn 2: Phát triển Backend (Ngày 2 - 3)

### 📌 Authors API

- GET list (có phân trang)
  - Fields: `No`, `Name`, `Books`, `Actions`
- POST create
  - Validate `Name`
- PUT update
- DELETE remove

### 📌 Books API

- GET list (phân trang)
  - Fields: `No`, `Title`, `Author`, `Actions`
- POST create
  - Validate:
    - Title (required)
    - Author (required)
- PUT update
- DELETE remove

### 📌 Reviews API

- GET list (phân trang)
  - Fields: `No`, `Book`, `Author`, `Review`, `Actions`
- POST create
  - Validate:
    - Book (required)
    - Review (required)
- PUT update
- DELETE remove

---

## 🎨 Giai đoạn 3: Phát triển Frontend (Ngày 4 - 6)

### 🌐 Layout chung

- Sidebar/Menu:
  - Authors
  - Books
  - Reviews

---

### 👤 Module Authors

#### List Screen

- Bảng:
  - No | Name | Books | Actions
- Phân trang
- Actions:
  - Update (Modal)
  - Delete (Confirm Modal)

#### Create Screen

- Form:
  - Name
- Validation:
  - `* Please enter name`

---

### 📖 Module Books

#### List Screen

- Bảng:
  - No | Title | Author | Actions
- Phân trang
- Modal:
  - Update
  - Delete

#### Create Screen

- Form:
  - Title (input)
  - Author (dropdown)
- Validation:
  - `Please enter name`
  - `Please select author`

---

### 📝 Module Reviews

#### List Screen

- Bảng:
  - No | Book | Author | Review | Actions
- Phân trang
- Modal:
  - Update
  - Delete

#### Create Screen

- Form:
  - Book (dropdown)
  - Review (textarea)
- Validation:
  - `Please select book`
  - `Please enter review`

---

## 🔗 Giai đoạn 4: Tích hợp & Kiểm thử (Ngày 7)

### 1. Kết nối API

- Gắn backend vào frontend bằng Axios
- Đảm bảo:
  - CRUD hoạt động đầy đủ
  - Data sync chính xác

### 2. Kiểm tra Validation

- Test tất cả form:
  - Authors
  - Books
  - Reviews

### 3. Tối ưu UI/UX

- Loading spinner
- Hover effects
- Error message:
  - Màu đỏ
  - Rõ ràng, dễ đọc

---

## 🌍 Giai đoạn 5: Deploy & Báo cáo (Ngày 8)

### 1. Deploy Database

- Supabase / ElephantSQL / Render

### 2. Deploy Backend

- Render / Railway

### 3. Deploy Frontend

- Vercel / Netlify

### 4. Screen Recording

- Upload:
  - YouTube hoặc Google Drive
- Lấy URL chia sẻ

---

## 📦 Deliverables

- 🔗 GitHub Repository URL  
- 🌐 Web App URL  
- 🎥 Screen Recording URL  

---

## ✅ Ghi chú

- UI cần:
  - Hiện đại
  - Trực quan
  - Responsive (nếu có thể)
- Code cần:
  - Clean
  - Dễ maintain
  - Có cấu trúc rõ ràng

---
