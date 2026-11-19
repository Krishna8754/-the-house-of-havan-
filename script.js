// IMPORTANT: Replace this with your WhatsApp number in international format.
// India example: 919876543210 (country code 91, no +, spaces or dashes).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const message = encodeURIComponent("Hello The House of Havan, I would like to enquire about room availability and booking in Manali.");
document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  link.addEventListener("click", event => {
    if (WHATSAPP_NUMBER.includes("X")) {
      event.preventDefault();
      alert("Please add your hotel's WhatsApp number in script.js first.");
    }
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
