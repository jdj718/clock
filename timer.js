const 시작_시간 = new Date();

function settime() {
  const 현재_시간 = new Date();

  const 연도 = 현재_시간.getFullYear().toString().padStart(2, "0");
  const 달 = 현재_시간.getMonth() + 1;
  const 날짜 = 현재_시간.getDate().toString().padStart(2, "0");
  const 시간 = 현재_시간.getHours().toString().padStart(2, "0");
  const 분 = 현재_시간.getMinutes().toString().padStart(2, "0");
  const 초 = 현재_시간.getSeconds().toString().padStart(2, "0");
  const timeh1 = document.querySelector(".time");
  timeh1.innerText = `${연도}/${달}/${날짜}/${시간}:${분}:${초}`;
}

setInterval(settime, 1000);
