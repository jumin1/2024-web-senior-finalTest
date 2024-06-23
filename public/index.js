document.addEventListener("DOMContentLoaded", () => {
  // regex 정규식을 사용하여 이메일 검증 구현
  const emailInput = document.getElementById("emailInput");
  const checkButton = document.getElementById("checkButton");
  const message = document.getElementById("message");

  if (emailInput && checkButton) {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

    checkButton.addEventListener("click", () => {
      const email = emailInput.value;
      if (emailRegEx.test(email)) {
        message.textContent = "환영합니다!";
        message.style.color = "green";
        setTimeout(() => {
          goPage3();
        }, 1000);
      } else {
        message.textContent = "이메일 형식이 올바르지 않습니다.";
        message.style.color = "red";
      }
    });
}

  function goPage3() {
    window.location.href = "/page3.html";
}

  const startButton = document.getElementById("startButton");

  if (startButton) {
    startButton.addEventListener("click", () => {
      goPage2();
    });
}

  function goPage2() {
    window.location.href = "/page2.html";
}
});