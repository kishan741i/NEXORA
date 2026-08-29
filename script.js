/* =====================================================
   NEXORA — MAIN SCRIPT
===================================================== */

/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const audio = document.getElementById("bgAudio");

if (audio) {
  audio.volume = 0.01;

  function triggerMusic() {
    audio
      .play()
      .then(() => {
        window.removeEventListener("click", triggerMusic);
        window.removeEventListener("touchstart", triggerMusic);
        window.removeEventListener("scroll", triggerMusic);
        window.removeEventListener("keydown", triggerMusic);
      })
      .catch(() => {
        // Browser autoplay policy
      });
  }

  window.addEventListener("click", triggerMusic);
  window.addEventListener("touchstart", triggerMusic);
  window.addEventListener("scroll", triggerMusic);
  window.addEventListener("keydown", triggerMusic);
}

/* =====================================================
   FORCE PAGE TO TOP ON LOAD
===================================================== */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});

/* =====================================================
   E-LIBRARY GOOGLE DRIVE LINKS
===================================================== */

const categoryLinks = {
  pdf: "https://drive.google.com/drive/folders/1hQQ5s9Pu1ibDKDUYU2cb555qbXZdJqWZ?usp=drive_link",

  doc: "https://drive.google.com/drive/folders/1BISmcwYOLl3op18dgXSpZ6DiUsYR5k0T?usp=drive_link",

  code: "https://drive.google.com/drive/folders/1Cs4HoianSon-55zcPWta4gmqudGUroXT?usp=drive_link",

  img: "https://drive.google.com/drive/folders/1ZJYKMHLf7bGQGM_tzfW-h10XBvtomycD?usp=drive_link",

  all: "#",
};

/* =====================================================
   E-LIBRARY FILE DATABASE
===================================================== */

const libraryFiles = [
  {
    name: "DBMS-draft.sql",
    category: "code",
    type: "SQL File",
    icon: "fa-file-code",
  },
  {
    name: "DBMS-output.sql",
    category: "code",
    type: "SQL File",
    icon: "fa-file-code",
  },
  {
    name: "DBMS-pl-sql.sql",
    category: "code",
    type: "SQL File",
    icon: "fa-file-code",
  },
  {
    name: "DBMS-Practical.pptx",
    category: "code",
    type: "Presentation",
    icon: "fa-file-powerpoint",
  },
  {
    name: "DBMS-sql sequence.sql",
    category: "code",
    type: "SQL File",
    icon: "fa-file-code",
  },
  {
    name: "DBMS-sql view.sql",
    category: "code",
    type: "SQL File",
    icon: "fa-file-code",
  },
  {
    name: "DBMS-sql.sql",
    category: "code",
    type: "SQL File",
    icon: "fa-file-code",
  },

  {
    name: "Python AI ML-Unit3_Topic4_Content_Provider_Complete_Presentation.pptx",
    category: "code",
    type: "Presentation",
    icon: "fa-file-powerpoint",
  },

  {
    name: "python.zip",
    category: "code",
    type: "Archive File",
    icon: "fa-file-archive",
  },

  {
    name: "Sueprvisor List-BCA-2025-26.xlsx",
    category: "code",
    type: "Spreadsheet",
    icon: "fa-file-excel",
  },

  {
    name: "C Language-programms.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "COMPLETION CERTIFICATE BBA.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "DBMS-pl-sql-copy-past(password-asus 8).docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "DBMS-pl-sql.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "DBMS-pl-sql.txt",
    category: "code",
    type: "Text File",
    icon: "fa-file-alt",
  },
  {
    name: "DBMS-sql.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "DBMS-sql.txt",
    category: "code",
    type: "Text File",
    icon: "fa-file-alt",
  },
  {
    name: "DBMS-tables.txt",
    category: "code",
    type: "Text File",
    icon: "fa-file-alt",
  },
  {
    name: "DBMS-unit-3.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "DBMS-unit-4.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "for nodel officer.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Java-actionlistener.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Java-adptor class.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Java-layout manager.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Operating System-OS Question Bank.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Web Dev-css_matarial_final.docx",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Web Dev-HTML.doc",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Web Dev-java script Builtinfunction_array.doc",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Web Dev-javascript new material.doc",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },
  {
    name: "Web Dev-unit 5.doc",
    category: "doc",
    type: "Word Document",
    icon: "fa-file-word",
  },

  {
    name: "ASP.NET-IMG-20250614-WA0000.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },
  {
    name: "ASP.NET-IMG-20250614-WA0001.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },
  {
    name: "ASP.NET-IMG-20250614-WA0002.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },
  {
    name: "ASP.NET-IMG-20250614-WA0003.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },
  {
    name: "ASP.NET-IMG-20250715-WA0002.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },
  {
    name: "ASP.NET-IMG-20250715-WA0003.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },
  {
    name: "ASP.NET-IMG-20250909-WA0000.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },
  {
    name: "ASP.NET-IMG-20250911-WA0039.jpg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },

  {
    name: "DBMS-WhatsApp Image 2025-03-26 at 7.01.37 AM (1).jpeg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },

  {
    name: "DBMS-WhatsApp Image 2025-03-26 at 7.01.37 AM.jpeg",
    category: "img",
    type: "Image File",
    icon: "fa-file-image",
  },

  {
    name: "andriodsybulls.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "ANDROID_RIPAL PANDYA.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "ASP.NET-Practical.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "C Language-Programme file Definition(1).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "C language_hp.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "C language_km.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Cloud Computing-Notes_260325_140843.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Cloud Computing-unit-01....pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Cloud Computing-UNIT-02_260105_110010.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "COA(Computer Organization and Architecture).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "DBMS-1.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "DBMS-2.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "IKS-ethics-values.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Java-js-2.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "JAVA-Practical.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "PHP-Practical.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "PHP-Theory.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Python AI ML-Unit_3_PPT_Master_Upto_Topic3.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "REACT-JS(SEM-6).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 1 assignment.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 1 final exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 1 internal exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 1 LEB file.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 2 assignment.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 2 final exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 2 internal exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 3 assignment.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 3 final exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 3 internal exam(as per NEP) (1).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 4 final exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 4 internal exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 5 assignment.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 5 final exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 5 internal exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 5 LEB file.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 6 final exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "sem 6 internal exam(as per NEP).pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-2023-html-MayurSir.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-ch 4 -5.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-CSS Material.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-FY Exam.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-Microsoft PowerPoint Basics.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-networking.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-Share UNIT1 Basics of html_Ripal Pandya.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-unit 3.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-word-1.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
  {
    name: "Web Dev-Word-Shortcuts.pdf",
    category: "pdf",
    type: "PDF Document",
    icon: "fa-file-pdf",
  },
];

/* =====================================================
   E-LIBRARY RENDER
===================================================== */

function renderFiles(filesToRender = libraryFiles) {
  const grid = document.getElementById("fileGrid");

  if (!grid) return;

  grid.innerHTML = "";

  filesToRender.forEach((file) => {
    const card = document.createElement("div");

    card.className = "file-card";

    const folderUrl = categoryLinks[file.category] || categoryLinks.all;

    card.setAttribute("data-link", folderUrl);

    card.innerHTML = `
            <div class="file-icon">
                <i class="fa ${file.icon}"></i>
            </div>

            <div class="file-info">
                <span class="file-name">
                    ${file.name}
                </span>

                <span class="file-ext">
                    ${file.type}
                </span>
            </div>
        `;

    card.addEventListener("click", () => {
      if (folderUrl && folderUrl !== "#") {
        window.open(folderUrl, "_blank");
      }
    });

    grid.appendChild(card);
  });

  const count = document.getElementById("fileCount");

  if (count) {
    count.innerText = filesToRender.length + " Files";
  }
}

/* =====================================================
   E-LIBRARY MODAL
===================================================== */

function openModal() {
  const modal = document.getElementById("elibModal");

  if (!modal) return;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  renderFiles();

  /* ================= MOBILE MENU HIDE ================= */

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  if (mobileMenuBtn && window.innerWidth <= 768) {
    mobileMenuBtn.style.display = "none";
  }

  /* ================================
       BACKGROUND BLUR
    ================================= */

  const mainWrapper = document.getElementById("main-wrapper");

  if (mainWrapper) {
    mainWrapper.classList.add("blur-background");
  }
}

function closeModal() {
  const modal = document.getElementById("elibModal");

  if (!modal) return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";

  /* ================= MOBILE MENU SHOW ================= */

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  if (mobileMenuBtn && window.innerWidth <= 768) {
    mobileMenuBtn.style.display = "";
  }

  const mainWrapper = document.getElementById("main-wrapper");

  if (mainWrapper) {
    mainWrapper.classList.remove("blur-background");
  }

  /* ================================
       CLEAR IFRAME
    ================================= */

  setTimeout(() => {
    if (iframe) {
      iframe.src = "";
    }
  }, 300);
}

/* =====================================================
   E-LIBRARY SEARCH
===================================================== */

function filterFiles() {
  const input = document.getElementById("searchInput");

  if (!input) return;

  const query = input.value.trim().toLowerCase();

  const filtered = libraryFiles.filter((file) =>
    file.name.toLowerCase().includes(query),
  );

  renderFiles(filtered);
}

/* =====================================================
   E-LIBRARY CATEGORY FILTER
===================================================== */

function filterCategory(category, element) {
  const chips = document.getElementsByClassName("chip");

  for (const chip of chips) {
    chip.classList.remove("active");
  }

  if (element) {
    element.classList.add("active");
  }

  if (category === "all") {
    renderFiles(libraryFiles);

    return;
  }

  const filtered = libraryFiles.filter((file) => file.category === category);

  renderFiles(filtered);
}

/* =====================================================
   E-LIBRARY OUTSIDE CLICK
===================================================== */

window.addEventListener("click", (event) => {
  const modal = document.getElementById("elibModal");

  if (modal && event.target === modal) {
    closeModal();
  }
});

/* =====================================================
   LIVE DEMO MODAL
===================================================== */

function openDemo(demoUrl, projectTitle) {
  const modal = document.getElementById("demo-modal");

  const iframe = document.getElementById("demo-iframe");

  const title = document.getElementById("demo-title");

  const menuButton = document.getElementById("mobile-menu-btn");

  if (!modal || !iframe) return;

  /* ================================
       SET DEMO
    ================================= */

  iframe.src = demoUrl;

  if (title) {
    title.innerText = "Live Demo: " + projectTitle;
  }

  /* ================================
       OPEN MODAL
    ================================= */

  modal.classList.add("show-modal");

  document.body.style.overflow = "hidden";

  /* ================================
       HIDE MOBILE MENU BUTTON
       ONLY ON MOBILE
    ================================= */

  if (menuButton && window.innerWidth <= 768) {
    menuButton.style.display = "none";
  }

  /* ================================
       BACKGROUND BLUR
    ================================= */

  const mainWrapper = document.getElementById("main-wrapper");

  if (mainWrapper) {
    mainWrapper.classList.add("blur-background");
  }
}

function closeDemo() {
  const modal = document.getElementById("demo-modal");

  const iframe = document.getElementById("demo-iframe");

  const menuButton = document.getElementById("mobile-menu-btn");

  if (!modal) return;

  /* ================================
       CLOSE MODAL
    ================================= */

  modal.classList.remove("show-modal");

  /* ================================
       RESTORE MOBILE MENU
    ================================= */

  if (menuButton && window.innerWidth <= 768) {
    menuButton.style.display = "flex";
  }

  /* ================================
       RESTORE SCROLL
    ================================= */

  document.body.style.overflow = "";

  /* ================================
       REMOVE BACKGROUND BLUR
    ================================= */

  const mainWrapper = document.getElementById("main-wrapper");

  if (mainWrapper) {
    mainWrapper.classList.remove("blur-background");
  }

  /* ================================
       CLEAR IFRAME
    ================================= */

  setTimeout(() => {
    if (iframe) {
      iframe.src = "";
    }
  }, 300);
}

/* =====================================================
   GOOGLE DRIVE
===================================================== */

function openInDrive(id) {
  if (!id) return;

  const url = `https://drive.google.com/open?id=${id}`;

  window.open(url, "_blank");
}

/* =====================================================
   SUNDAY REDIRECT
===================================================== */

const adminKey = atob("Q1hMMjQxMg==");

function checkSundayRedirect() {
  const params = new URLSearchParams(window.location.search);

  const access = params.get("access");

  if (access === adminKey) {
    return;
  }

  const now = new Date();

  if (now.getDay() === 0) {
    window.location.href = "http://kishan741i.github.io/NEXORA";
  }
}

/* =====================================================
   PARTICLE BACKGROUND
===================================================== */

const canvas = document.getElementById("particle-canvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  let particlesArray = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    initParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;

      this.y = Math.random() * canvas.height;

      this.size = Math.random() * 1.5 + 0.5;

      this.speedX = (Math.random() - 0.5) * 0.5;

      this.speedY = (Math.random() - 0.5) * 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;

      if (this.x < 0) this.x = canvas.width;

      if (this.y > canvas.height) this.y = 0;

      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = "rgba(99, 102, 241, 0.9)";

      ctx.beginPath();

      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];

    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    requestAnimationFrame(animateParticles);
  }

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();

  animateParticles();
}

/* =====================================================
   DYNAMIC BACKGROUND
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const bgWrapper = document.getElementById("dynamic-bg-wrapper");

  if (!bgWrapper) return;

  const videoPlaylist = ["assets/public_encryption.webm"];

  let currentIndex = parseInt(localStorage.getItem("bgSequenceIndex")) || 0;

  const totalItems = videoPlaylist.length + 1;

  if (currentIndex >= videoPlaylist.length) {
    bgWrapper.innerHTML = `
                <iframe
                    src="assets/red-spider-lily-flower.html">
                </iframe>
            `;

    localStorage.setItem("bgSequenceIndex", "0");
  } else {
    const currentVideoSrc = videoPlaylist[currentIndex];

    bgWrapper.innerHTML = `
                <video
                    autoplay
                    muted
                    loop
                    playsinline>
                    <source
                        src="${currentVideoSrc}"
                        type="video/webm">
                </video>
            `;

    localStorage.setItem("bgSequenceIndex", currentIndex + 1);
  }
});

/* =====================================================
   MOBILE SIDEBAR
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("mobile-sidebar");

  const overlay = document.getElementById("mobile-sidebar-overlay");

  const menuButton = document.getElementById("mobile-menu-btn");

  const closeButton = document.getElementById("close-sidebar");

  if (!sidebar || !overlay || !menuButton || !closeButton) {
    return;
  }

  /* Open Sidebar */

  function openSidebar() {
    sidebar.classList.add("active");

    overlay.classList.add("active");

    document.body.style.overflow = "hidden";
  }

  /* Close Sidebar */

  function closeSidebar() {
    sidebar.classList.remove("active");

    overlay.classList.remove("active");

    /*
     * Agar koi modal open nahi hai
     * tabhi body scroll restore karein.
     */

    const demoModal = document.getElementById("demo-modal");

    const libraryModal = document.getElementById("elibModal");

    const demoOpen = demoModal && demoModal.classList.contains("show-modal");

    const libraryOpen = libraryModal && libraryModal.style.display === "block";

    if (!demoOpen && !libraryOpen) {
      document.body.style.overflow = "";
    }
  }

  /* Menu Button */

  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();

    openSidebar();
  });

  /* Close Button */

  closeButton.addEventListener("click", closeSidebar);

  /* Overlay */

  overlay.addEventListener("click", closeSidebar);

  /* =================================================
           MOBILE LINKS → EXISTING DEMO MODAL
        ================================================= */

  const demoLinks = document.querySelectorAll(".mobile-demo-link");

  demoLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const url = link.dataset.url;

      const title = link.dataset.title || "Live Preview";

      if (!url) return;

      /*
       * Sidebar close
       */

      closeSidebar();

      /*
       * Existing demo modal
       */

      openDemo(url, title);
    });
  });

  /* ESC key */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });
});

checkSundayRedirect();

/* =================================
   DESKTOP APP DOWNLOAD POPUP
================================= */

document.addEventListener("DOMContentLoaded", function () {
  const appModal = document.getElementById("app-download-modal");
  const closeBtn = document.getElementById("close-app-download");

  if (!appModal || !closeBtn) return;

  // Sirf Desktop par popup show hoga
  function showAppPopup() {
    if (window.innerWidth > 768) {
      appModal.classList.add("show");

      // Website ka background scroll lock
      document.body.style.overflow = "hidden";
    }
  }

  // Close popup
  function closeAppPopup() {
    appModal.classList.remove("show");

    // Scroll wapas enable
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeAppPopup);

  // Popup ke bahar click karne par close
  appModal.addEventListener("click", function (event) {
    if (event.target === appModal) {
      closeAppPopup();
    }
  });

  // Website load hone ke baad popup
  setTimeout(showAppPopup, 800);
});