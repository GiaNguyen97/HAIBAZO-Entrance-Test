# Backend Design (Optional / Extendable)

## 1. Mục tiêu

Hiện tại game không cần backend, nhưng có thể mở rộng để:

- Lưu leaderboard
- Lưu lịch sử chơi
- Analytics

---

## 2. Kiến trúc đề xuất

- REST API hoặc GraphQL
- Node.js (Express/NestJS)

---

## 3. Data Model

### Player

- id
- name

### Game Session

- id
- playerId
- points
- time
- status (WIN / LOSE)
- createdAt

---

## 4. API Design

### POST /game/start

- input: points
- output: gameId

### POST /game/end

- input: gameId, time, status

### GET /leaderboard

- top fastest times

---

## 5. Performance

- Cache leaderboard
- Pagination

---

## 6. Không bắt buộc

Frontend có thể chạy standalone hoàn toàn.
