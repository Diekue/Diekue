<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfólio - Técnico de Suporte TI</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(to bottom, #d2b48c, #8b5e3c); /* bege claro ao marrom */
      color: #2c1b0f;
      overflow-x: hidden;
      position: relative;
      z-index: 0;
    }

    canvas#background {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }

    header {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(139, 94, 60, 0.95);
      padding: 15px 20px;
      border-bottom: 2px solid #5e3b26;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      font-size: 2em;
      color: #f5f5dc;
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    nav ul li a {
      color: inherit;
      text-decoration: none;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 4px;
      transition: background 0.3s, color 0.3s;
    }

    nav ul li a:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
    }

    section {
      margin-top: 100px;
      padding: 60px 20px;
      text-align: center;
      border-radius: 12px;
      margin: 40px 20px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      animation: fadeIn 1s ease forwards;
      opacity: 0;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }

    h2 {
      font-size: 2.2em;
      margin-bottom: 20px;
      background: linear-gradient(to right, #8b5e3c, #5e3b26);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .whatsapp-link {
      display: inline-block;
      margin-top: 30px;
      padding: 12px 24px;
      background: linear-gradient(to right, #8b5e3c, #5e3b26);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.3s;
    }

    .whatsapp-link:hover {
      transform: scale(1.05);
    }

    .social-icons {
      margin-top: 20px;
    }

    .social-icons a {
      margin: 0 10px;
      color: #8b5e3c;
      font-size: 1.5em;
      transition: color 0.3s;
      position: relative;
    }

    .social-icons a:hover {
      color: #5e3b26;
    }

    .social-icons a::after {
      content: attr(title);
      position: absolute;
      bottom: -24px;
      font-size: 0.7em;
      color: #aaa;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .social-icons a:hover::after {
      opacity: 1;
    }

    footer {
      background-color: rgba(139, 94, 60, 0.9);
      text-align: center;
      padding: 20px;
      border-top: 2px solid #5e3b26;
      font-size: 0.9em;
      color: #fff;
    }

    #topBtn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: linear-gradient(45deg, #8b5e3c, #5e3b26);
      color: #fff;
      border: none;
      padding: 12px 16px;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
      display: none;
      box-shadow: 0 0 10px #00000055;
      transition: background 0.3s, transform 0.3s;
      z-index: 1000;
    }

    #topBtn:hover {
      transform: scale(1.1);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 500px;
      margin: 0 auto;
    }

    form input,
    form textarea {
      padding: 10px;
      border-radius: 6px;
      border: none;
      font-size: 1em;
    }

    form button {
      background: linear-gradient(to right, #8b5e3c, #5e3b26);
      color: white;
      padding: 10px;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.3s;
    }

    form button:hover {
      transform: scale(1.05);
    }

    .mode-toggle {
      cursor: pointer;
      font-size: 1.4em;
      color: #f5f5dc;
      margin-left: 20px;
    }

    @media (max-width: 768px) {
      nav ul {
        flex-direction: column;
        background-color: rgba(139, 94, 60, 0.95);
        position: absolute;
        top: 70px;
        right: 0;
        width: 200px;
        display: none;
      }

      nav ul.show {
        display: flex;
      }

      .menu-toggle {
        display: block;
        font-size: 1.8em;
        cursor: pointer;
        color: #f5f5dc;
      }
    }

    .menu-toggle {
      display: none;
    }
  </style>
</head>
<body>
  <canvas id="background"></canvas>
  <header>
    <h1>Diekue</h1>
    <div class="menu-toggle" onclick="toggleMenu()"><i class="fas fa-bars"></i></div>
    <nav>
      <ul id="nav-list">
        <li><a href="#sobre">Sobre Mim</a></li>
        <li><a href="#serviços">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><span class="mode-toggle" onclick="toggleMode()" title="Modo Claro/Escuro">🌓</span></li>
      </ul>
    </nav>
  </header>

  <section id="sobre">
    <h2>Sobre Mim</h2>
    <p>Sou um técnico de suporte de TI com experiência em resolução de problemas, atendimento ao cliente e gerenciamento de sistemas.</p>
  </section>

  <section id="serviços">
    <h2>Serviços</h2>
    <ul>
      <li>Suporte Técnico</li>
      <li>Configuração de Redes</li>
      <li>Manutenção de Computadores</li>
      <li>Treinamento de Usuários</li>
    </ul>
    <a href="https://wa.me/+5521984312209" class="whatsapp-link">Fale comigo no WhatsApp</a>
  </section>

  <section id="contato">
    <h2>Contato</h2>
    <form>
      <input type="text" placeholder="Seu nome" required>
      <input type="email" placeholder="Seu email" required>
      <textarea rows="5" placeholder="Sua mensagem" required></textarea>
      <button type="submit">Enviar Mensagem</button>
    </form>
    <div class="social-icons">
      <a href="https://linkedin.com" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com" title="GitHub" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://instagram.com" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Diego Soeiro. Todos os direitos reservados. | <a href="#" style="color:#f5f5dc">Baixar Currículo</a></p>
  </footer>

  <button id="topBtn" title="Voltar ao topo">↑</button>

  <script>
    const topBtn = document.getElementById("topBtn");
    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };
    topBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function toggleMenu() {
      const navList = document.getElementById("nav-list");
      navList.classList.toggle("show");
    }

    function toggleMode() {
      document.body.classList.toggle("light-mode");
    }

    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const colors = ['#deb887', '#8b5e3c', '#a0522d'];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.fillStyle = 'rgba(210, 180, 140, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  </script>
</body>
</html>
