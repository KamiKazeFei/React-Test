import { useEffect, useRef, useState } from "react";

const Wheel = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [spinning, setSpinning] = useState(false);
  const wheelRadius = 150;
  const segments = 8; // 分割成 8 部分
  const segmentColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#9B59B6",
    "#E74C3C",
    "#1ABC9C",
    "#2C3E50",
  ];
  let angle = 0; // 初始角度
  let spinAngleStart = 0;
  let spinTime = 0;
  let spinTimeTotal = 0;

  const drawWheel = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // 繪製輪盤的每個區域
    for (let i = 0; i < segments; i++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(
        0,
        0,
        wheelRadius,
        (i * 2 * Math.PI) / segments,
        ((i + 1) * 2 * Math.PI) / segments
      );

      ctx.font = "35px Arial";
      ctx.fillStyle = segmentColors[i];
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
    }

    // 繪製分隔線
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    for (let i = 0; i < segments; i++) {
      ctx.rotate((2 * Math.PI) / segments);
      ctx.beginPath();
      ctx.moveTo(wheelRadius, 0);
      ctx.lineTo(wheelRadius - 10, 0);
      ctx.stroke();
    }

    // 繪製指示箭頭
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(0, -wheelRadius - 10);
    ctx.lineTo(10, -wheelRadius - 40);
    ctx.lineTo(-10, -wheelRadius - 40);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  };

  const rotateWheel = () => {
    const canvas = canvasRef.current;
    const spinAngle = spinAngleStart * (1 - spinTime / spinTimeTotal); // 減速效果
    angle += spinAngle;
    spinTime++;

    if (spinTime >= spinTimeTotal) {
      spinTime = 0;
      setSpinning(false);
    } else {
      if (!canvas) {
        return;
      }
      canvas.style.transform = `rotate(${angle}deg)`; // 使用 transform 來旋轉畫布
    }
  };

  useEffect(() => {
    drawWheel(); // 初始渲染
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (spinning) {
      spinTime = 0;
      spinAngleStart = Math.random() * 10 + 10; // 初始旋轉速度
      spinTimeTotal = Math.random() * 100 + 200; // 旋轉持續時間
      rotateWheel(); // 初始觸發旋轉
    }
  }, [spinning]);

  return (
    <div className="wheel-container">
      <div className="pointer"></div>
      <canvas ref={canvasRef} width={400} height={400}></canvas>
      <br />
      <button
        onClick={() => {
          setSpinning(true);
        }}
      >
        旋轉輪盤
      </button>
    </div>
  );
};

export default Wheel;
