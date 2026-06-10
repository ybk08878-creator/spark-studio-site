const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", () => {
    const button = form.querySelector("button");
    button.textContent = "送出中...";
    button.disabled = true;
  });
}
