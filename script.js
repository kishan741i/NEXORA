    const audio = document.getElementById('bgAudio');
    audio.volume = 0.01; // 1% Volume

    // Music play karne ka function jo user ki kisi bhi activity par chalega
    function triggerMusic() {
        audio.play().then(() => {
            // Ek baar gaana shuru hone ke baad saare event listeners hata do taaki baar-baar play na ho
            window.removeEventListener('click', triggerMusic);
            window.removeEventListener('touchstart', triggerMusic);
            window.removeEventListener('scroll', triggerMusic);
            window.removeEventListener('keydown', triggerMusic);
        }).catch(err => {
            // Browser policy ki wajah se agar block hua toh silently ignore karega
        });
    }

    // User ke click, touch, scroll ya keypress karte hi music chalu ho jayega
    window.addEventListener('click', triggerMusic);
    window.addEventListener('touchstart', triggerMusic);
    window.addEventListener('scroll', triggerMusic);
    window.addEventListener('keydown', triggerMusic);
    
    // Browser ke default scroll restoration ko manual kar dete hain
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Page load ya reload hone par window ko top par bhej dega
    window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0);
    });

    // Extra safety ke liye page load hone par bhi top par scroll karein
    window.onload = function () {
        window.setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    };

    // CATEGORY-WISE GOOGLE DRIVE FOLDER LINKS DALEN:

    const categoryLinks = {
        pdf: "https://drive.google.com/drive/folders/1hQQ5s9Pu1ibDKDUYU2cb555qbXZdJqWZ?usp=drive_link",
        doc: "https://drive.google.com/drive/folders/1BISmcwYOLl3op18dgXSpZ6DiUsYR5k0T?usp=drive_link",
        code: "https://drive.google.com/drive/folders/1Cs4HoianSon-55zcPWta4gmqudGUroXT?usp=drive_link",
        img: "https://drive.google.com/drive/folders/1ZJYKMHLf7bGQGM_tzfW-h10XBvtomycD?usp=drive_link",
        all: "https://drive.google.com/drive/folder_link"
    };

    // Files Database Array
    const libraryFiles = [
        { name: "DBMS-draft.sql", category: "code", type: "SQL File", icon: "fa-file-code" },
    { name: "DBMS-output.sql", category: "code", type: "SQL File", icon: "fa-file-code" },
    { name: "DBMS-pl-sql.sql", category: "code", type: "SQL File", icon: "fa-file-code" },
    { name: "DBMS-Practical.pptx", category: "code", type: "Presentation", icon: "fa-file-powerpoint" },
    { name: "DBMS-sql sequence.sql", category: "code", type: "SQL File", icon: "fa-file-code" },
    { name: "DBMS-sql view.sql", category: "code", type: "SQL File", icon: "fa-file-code" },
    { name: "DBMS-sql.sql", category: "code", type: "SQL File", icon: "fa-file-code" },
    { name: "Python AI ML-Unit3_Topic4_Content_Provider_Complete_Presentation.pptx", category: "code", type: "Presentation", icon: "fa-file-powerpoint" },
    { name: "python.zip", category: "code", type: "Archive File", icon: "fa-file-archive" },
    { name: "Sueprvisor List-BCA-2025-26.xlsx", category: "code", type: "Spreadsheet", icon: "fa-file-excel" },
    { name: "C Language-programms.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "COMPLETION CERTIFICATE BBA.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "DBMS-pl-sql-copy-past(password-asus 8).docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "DBMS-pl-sql.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "DBMS-pl-sql.txt", category: "code", type: "Text File", icon: "fa-file-alt" },
    { name: "DBMS-sql.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "DBMS-sql.txt", category: "code", type: "Text File", icon: "fa-file-alt" },
    { name: "DBMS-tables.txt", category: "code", type: "Text File", icon: "fa-file-alt" },
    { name: "DBMS-unit-3.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "DBMS-unit-4.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "for nodel officer.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Java-actionlistener.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Java-adptor class.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Java-layout manager.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Operating System-OS Question Bank.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Web Dev-css_matarial_final.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Web Dev-HTML.doc", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Web Dev-java script Builtinfunction_ array.doc", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Web Dev-javascript new material.doc", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "Web Dev-unit 5.doc", category: "doc", type: "Word Document", icon: "fa-file-word" },
    { name: "ASP.NET-IMG-20250614-WA0000.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "ASP.NET-IMG-20250614-WA0001.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "ASP.NET-IMG-20250614-WA0002.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "ASP.NET-IMG-20250614-WA0003.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "ASP.NET-IMG-20250715-WA0002.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "ASP.NET-IMG-20250715-WA0003.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "ASP.NET-IMG-20250909-WA0000.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "ASP.NET-IMG-20250911-WA0039.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "DBMS-WhatsApp Image 2025-03-26 at 7.01.37 AM (1).jpeg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "DBMS-WhatsApp Image 2025-03-26 at 7.01.37 AM.jpeg", category: "img", type: "Image File", icon: "fa-file-image" },
    { name: "andriodsybulls.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "ANDROID_RIPAL PANDYA.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "ASP.NET-Practical.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "C Language-Programme file Definition(1).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "C language_hp.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "C language_km.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Cloud Computing-Notes_260325_140843.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Cloud Computing-unit-01....pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Cloud Computing-UNIT-02_260105_110010.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "COA(Computer Organization and Architecture).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "DBMS-1.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "DBMS-2.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "IKS-ethics-values.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Java-js-2.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "JAVA-Practical.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "PHP-Practical.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "PHP-Theory.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Python AI ML-Unit_3_PPT_Master_Upto_Topic3.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "REACT-JS(SEM-6).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 1 assignment.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 1 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 1 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 1 LEB file.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 2 assignment.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 2 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 2 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 3 assignment.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 3 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 3 internal exam(as per NEP) (1).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 4 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 4 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 5 assignment.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 5 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 5 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 5 LEB file.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 6 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "sem 6 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-2023-html-MayurSir.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-ch 4 -5.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-CSS  Material.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-FY Exam.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-Microsoft PowerPoint Basics.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-networking.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-Share UNIT1 Basics of html_Ripal Pandya.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-unit 3.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-word-1.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
    { name: "Web Dev-Word-Shortcuts.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" }
    ];
    
    // Render Files on Page Load
    function renderFiles(filesToRender = libraryFiles) {
        const grid = document.getElementById('fileGrid');
        grid.innerHTML = '';

        filesToRender.forEach(file => {
            const card = document.createElement('div');
            card.className = 'file-card';
            
            // File ke category ke hisab se corresponding Google Drive folder link assign hogi
            const folderUrl = categoryLinks[file.category] || categoryLinks['all'];
            card.setAttribute('data-link', folderUrl);

            card.innerHTML = `
                <div class="file-icon"><i class="fa ${file.icon}"></i></div>
                <div class="file-info">
                    <span class="file-name">${file.name}</span>
                    <span class="file-ext">${file.type}</span>
                </div>
            `;

            // Card click karne par us category ka folder naye tab mein khulega
            card.addEventListener('click', function() {
                const url = this.getAttribute('data-link');
                window.open(url, '_blank');
            });

            grid.appendChild(card);
        });

        document.getElementById('fileCount').innerText = filesToRender.length + " Files";
    }


    // Modal Control Functions
    function openModal() {
        document.getElementById("elibModal").style.display = "block";
        document.body.style.overflow = "hidden";
        renderFiles();
    }

    function closeModal() {
        document.getElementById("elibModal").style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Search Filter Logic
    function filterFiles() {
        let input = document.getElementById('searchInput').value.toLowerCase();
        let filtered = libraryFiles.filter(file => file.name.toLowerCase().includes(input));
        renderFiles(filtered);
    }

    // Category Filter Logic
    function filterCategory(category, element) {
        let chips = document.getElementsByClassName('chip');
        for (let chip of chips) {
            chip.classList.remove('active');
        }
        element.classList.add('active');

        if (category === 'all') {
            renderFiles(libraryFiles);
        } else {
            let filtered = libraryFiles.filter(file => file.category === category);
            renderFiles(filtered);
        }
    }

    // Close modal on outside click
    window.onclick = function(event) {
        let modal = document.getElementById("elibModal");
        if (event.target == modal) {
            closeModal();
        }
    }

        function openDemo(demoUrl, projectTitle) {
            document.getElementById('demo-iframe').src = demoUrl;
            document.getElementById('demo-title').innerText = "Live Demo: " + projectTitle;
            document.getElementById('demo-modal').classList.add('show-modal');
            
            // Background scroll rokne ke liye
            document.body.style.overflow = 'hidden'; 
        
            const mainWrapper = document.getElementById('main-wrapper');
            if(mainWrapper) mainWrapper.classList.add('blur-background');
        }
        
        function closeDemo() {
            document.getElementById('demo-modal').classList.remove('show-modal');
            
            // Background scroll wapas chalu karne ke liye
            document.body.style.overflow = 'auto'; 
        
            const mainWrapper = document.getElementById('main-wrapper');
            if(mainWrapper) mainWrapper.classList.remove('blur-background');
        
            setTimeout(() => {
                document.getElementById('demo-iframe').src = "";
            }, 300);
        }


        
        function openInDrive(id) { window.open(`https://drive.google.com/open?id=${id}`, '_blank'); }
        
        // Admin key bypass ke liye (agar zaroorat ho)
        const _0xk = atob("Q1hMMjQxMg==");
        
        function checkSundayRedirect() {
            const params = new URLSearchParams(window.location.search);
            const adminKey = params.get("access");
            
            // Agar admin key match ho jaye toh redirect nahi hoga
            if(adminKey === _0xk) {
                return;
            }
            
            const now = new Date();
            const day = now.getDay(); // 0 matlab Sunday hota hai
            
            // Agar Sunday hai toh is link par redirect kar do
            if (day === 0) {
                window.location.href = "http://kishan741i.github.io/3d-model";
            }
        }
        
        // Page load hote hi check karega
        checkSundayRedirect();

        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');

        let particlesArray = [];
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

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
                ctx.fillStyle = 'rgba(99, 102, 241, 0.9)'; // Aapka accent color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            let numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }
        initParticles();

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();

        document.addEventListener("DOMContentLoaded", () => {
        const bgWrapper = document.getElementById("dynamic-bg-wrapper");

        // 1. Apne videos ki list yahan set karein (Aap jitne chahein utne mp4/webm add kar sakte hain)
        const videoPlaylist = [
            "./public_encryption.webm"
        ];

        // 2. LocalStorage se pichla index nikalna (Pehli baar open karne par 0 set hoga)
        let currentIndex = parseInt(localStorage.getItem("bgSequenceIndex")) || 0;

        // Total items = Videos + 1 (Iframe ke liye)
        const totalItems = videoPlaylist.length + 1; 

        // 3. Logic Check: Kya is baar iframe load karne ki baari hai?
        if (currentIndex === videoPlaylist.length) {
            // Last element: Iframe load hoga
            bgWrapper.innerHTML = `
            <iframe src="./red-spider-lily-flower.html"></iframe>
            `;
            
            // Agle refresh par loop ko wapas 0 (Pehle video) par lane ke liye
            localStorage.setItem("bgSequenceIndex", 0);
        } else {
            // Normal Flow: Video load hoga
            const currentVideoSrc = videoPlaylist[currentIndex];
            bgWrapper.innerHTML = `
            <video autoplay muted loop playsinline>
                <source src="${currentVideoSrc}" type="video/mp4">
            </video>
            `;
            
            // Index ko +1 badhana taaki agle reload par next video aaye
            localStorage.setItem("bgSequenceIndex", currentIndex + 1);
        }
        });