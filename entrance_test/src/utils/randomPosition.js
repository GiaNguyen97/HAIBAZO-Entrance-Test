export const getRandomPosition = () => {
  // Trả về tọa độ ngẫu nhiên từ 0% đến 90% để tránh circle bị tràn ra ngoài GameBoard
  return {
    x: Math.random() * 90,
    y: Math.random() * 90
  };
};
