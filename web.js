const title = document.querySelector('.title');
let angle = 0;

function rotate() {
  angle += 1; // 숫자 크면 더 빨리 돎
  // 위치 이동 + 회전 둘 다 적용
  title.style.transform = `translateX(-50%) rotate(${angle}deg)`;
  requestAnimationFrame(rotate);
}

rotate();
