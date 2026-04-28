# 🎨 Frontend Architecture - Book Review App

## 🏗️ Tổng quan

Frontend sử dụng ReactJS theo hướng:

- Component-based architecture
- Separation: UI ↔ Logic ↔ API
- Reusable components
- State management đơn giản (useState / useEffect)

---

## 📦 Folder Structure

src/
│
├── components/ # Reusable UI components
├── pages/ # Page-level components
├── services/ # API calls (Axios)
├── hooks/ # Custom hooks
├── layouts/ # Layout (Sidebar, Header)
├── routes/ # Routing config
├── utils/ # Helper functions
├── constants/ # Static data
└── App.jsx

---

## 🧭 Routing

Sử dụng React Router

/authors
/books
/reviews

---

## 🧱 Layout System

### MainLayout

- Sidebar
- Header
- Content

---

## 🧩 Component Design

### Reusable Components

- Table
- Pagination
- Modal
- FormInput
- SelectDropdown
- ConfirmDialog
- LoadingSpinner

---

## 📄 Pages

### AuthorsPage

- List authors
- Open modal create/update
- Delete confirm

---

### BooksPage

- List books
- Dropdown chọn author
- CRUD

---

### ReviewsPage

- List reviews
- Dropdown chọn book
- CRUD

---

## 🔌 API Layer (services/)

Sử dụng Axios

### authorService.js

- getAuthors(params)
- createAuthor(data)
- updateAuthor(id, data)
- deleteAuthor(id)

---

### bookService.js

- getBooks()
- createBook()
- updateBook()
- deleteBook()

---

### reviewService.js

- getReviews()
- createReview()
- updateReview()
- deleteReview()

---

## 🧠 State Management

Không cần Redux, dùng:

- useState
- useEffect
- custom hook nếu cần

Ví dụ:

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)

---

## 📊 Data Flow

UI → Call API → Update State → Re-render UI

---

## 📝 Form Handling

Có thể dùng:

- React Hook Form (recommended)
- hoặc controlled input

Validation:

- Required field
- Show error dưới input

---

## 🔄 Pagination

- Backend trả:
  - page
  - size
  - total

Frontend:

- Render pagination component
- Call API khi đổi page

---

## 🎨 UI/UX Best Practices

- Loading spinner khi call API
- Disable button khi submit
- Toast message:
  - Success
  - Error
- Confirm trước khi delete

---

## ⚠️ Error Handling

- Try/catch API
- Show message rõ ràng
- Fallback UI khi lỗi

---

## 🚀 Performance

- Lazy load pages
- Memo component nếu cần
- Debounce search (future)

---

## 📱 Responsive

- Grid system
- Sidebar collapse trên mobile

---

## 📈 Mở rộng tương lai

- Global state (Redux/Zustand)
- Dark mode
- Search/filter
- Infinite scroll
- Caching (React Query)
