# Clean Code, MVC, SOLID Guidelines

## 1. Clean Code

### Naming

- rõ nghĩa: handleCircleClick, nextTarget
- tránh viết tắt

### Function nhỏ

- mỗi function 1 nhiệm vụ

### Tránh lặp code (DRY)

---

## 2. MVC trong React

### Model

- game state (circles, next, time)

### View

- JSX components

### Controller

- handlers (click, start, restart)

---

## 3. SOLID

### S - Single Responsibility

- mỗi component làm 1 việc
- Circle chỉ render + animation

---

### O - Open/Closed

- dễ mở rộng (thêm mode chơi)

---

### L - Liskov

- component thay thế không phá logic

---

### I - Interface Segregation

- props rõ ràng, không dư thừa

---

### D - Dependency Injection

- hooks tách logic khỏi UI

---

## 4. Best Practices React

- dùng hooks thay class
- tránh state global không cần thiết
- tách logic vào custom hooks

---

## 5. Anti-patterns cần tránh

❌ setState lồng nhau  
❌ logic trong JSX  
❌ component quá lớn  
❌ re-render không kiểm soát  

---

## 6. Testing

- Unit test logic game
- Test click đúng/sai
- Test auto play

---

## 7. Maintainability

- code dễ đọc > code ngắn
- comment khi logic phức tạp
