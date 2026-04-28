# Frontend Design (React)

## 1. Cấu trúc thư mục

src/
│
├── components/
│   ├── GameBoard.jsx
│   ├── Circle.jsx
│   ├── ControlPanel.jsx
│
├── hooks/
│   ├── useGameLogic.js
│   ├── useTimer.js
│
├── utils/
│   ├── randomPosition.js
│
├── constants/
│   ├── gameStatus.js
│
└── App.jsx

---

## 2. State chính

- points
- circles []
- next
- status (IDLE / PLAYING / GAME_OVER / WIN)
- time
- autoPlay

---

## 3. Circle Object

{
  id: number,
  x: number,
  y: number,
  isClicked: boolean,
  isFading: boolean,
  zIndex: number
}

---

## 4. Logic chính

### Generate Circles

- Random position
- zIndex = N - id

---

### Click Handler

IF id === next:

- mark clicked
- start fade + countdown
- next++

ELSE:

- GAME OVER

---

### Fade Logic

- setTimeout ~3s
- remove khỏi DOM

---

### Timer

- setInterval (100ms)
- tăng time

---

### Auto Play

- tìm circle = next
- trigger click sau delay

---

## 5. Performance (Case 2000 nodes)

- React.memo cho Circle
- useCallback cho handlers
- Virtualization (optional)
- requestAnimationFrame thay vì setInterval (advanced)

---

## 6. Edge Cases

- Click spam
- Toggle auto liên tục
- Restart giữa game
