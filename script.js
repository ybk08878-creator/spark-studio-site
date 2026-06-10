const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "未填姓名";
    const contact = data.get("contact") || "未填 Email";
    const project = data.get("project") || "未選擇";
    const message = data.get("message") || "未填需求";
    const subject = encodeURIComponent(`網站需求諮詢 - ${name}`);
    const body = encodeURIComponent(
      `姓名：${name}\nEmail：${contact}\n想做的內容：${project}\n\n需求簡述：\n${message}`
    );

    window.location.href = `mailto:ybk08878@gmail.com?subject=${subject}&body=${body}`;
  });
}
