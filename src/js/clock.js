const clock = document.querySelector("h2#clock");

function newTime() {
  const cDate = new Date();
  const cMonth = cDate.getMonth() + 1;
  const cDay = cDate.getDate();
  const cHour = cDate.getHours();
  const cMin = cDate.getMinutes();
  const cSec = cDate.getSeconds();
  clock.innerText = `${cMonth}월 ${cDay}일 ${cHour}시 ${cMin}분 ${cSec}초`;
}
newTime();
//계속 업데이트해야되므로
setInterval(newTime, 1000);
