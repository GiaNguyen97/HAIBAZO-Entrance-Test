# Game Click Circles - Overview

## 1. Mục tiêu

Trò chơi yêu cầu người chơi click các hình tròn theo thứ tự tăng dần từ 1 → N trong thời gian nhanh nhất.

---

## 2. Công nghệ

- Frontend: React (Gralde, Vite)
- Không yêu cầu backend (có thể mở rộng sau)

---

## 3. UI chính

- Title: LET'S PLAY / GAME OVER / ALL CLEARED
- Input: Points (số lượng node)
- Timer: hiển thị thời gian (0.0s)
- Button: Play / Restart
- Toggle: Auto Play
- Play Area: vùng chứa các node
- Status: Next: X

---

## 4. Flow chính

### Khi nhấn Play

- Generate N nodes
- Random position
- z-index: số nhỏ nằm trên
- Timer bắt đầu chạy
- Next = 1

---

## 5. Gameplay

### Click đúng

- Node chuyển đỏ
- Bắt đầu countdown ~3s
- Fade out → remove
- Next + 1

### Click sai

- GAME OVER
- Dừng timer
- Freeze game

### Win

- Khi tất cả node biến mất
- Hiển thị ALL CLEARED
- Dừng timer

---

## 6. Tính năng

- Restart bất kỳ lúc nào
- Auto Play
- Toggle Auto/Manual

---

## 7. Test Cases

1. Normal play
2. Game over
3. Rapid clicks
4. Auto play
5. Mix auto/manual
6. Stress test (2000 nodes)
