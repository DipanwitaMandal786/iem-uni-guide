const animatedElements = document.querySelectorAll(".fade-up");

const revealOnScroll = () => {
  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
const aiButton = document.getElementById("ai-button");
const aiPanel = document.getElementById("ai-panel");
const aiClose = document.getElementById("ai-close");
const aiSend = document.getElementById("ai-send");
const aiInput = document.getElementById("ai-input");
const aiMessages = document.getElementById("ai-messages");

aiButton.addEventListener("click", () => {
  aiPanel.style.display = "flex";
});

aiClose.addEventListener("click", () => {
  aiPanel.style.display = "none";
});

aiSend.addEventListener("click", sendMessage);
aiInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = aiInput.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "ai-message user";
  userMsg.textContent = text;
  aiMessages.appendChild(userMsg);

  aiInput.value = "";
  aiMessages.scrollTop = aiMessages.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "ai-message bot";
    botMsg.textContent = "I’m learning 🤖 — AI backend coming soon!";
    aiMessages.appendChild(botMsg);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }, 800);
}

