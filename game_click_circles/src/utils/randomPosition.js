export const getRandomPosition = () => {
  // Trả về tọa độ ngẫu nhiên từ 0% đến 90% để tránh circle bị tràn ra ngoài GameBoard
  return {
    x: 5 + Math.random() * 80, // Giới hạn từ 5% đến 85%
    y: 5 + Math.random() * 80  // Giới hạn từ 5% đến 85%
  };
};
