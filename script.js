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
        pdf: "https://drive.google.com/drive/folders/1wZYNzzs49yKQ8ybYzpvS7Uw8noiIRu1z?usp=drive_link",
        doc: "https://drive.google.com/drive/folders/1wZYNzzs49yKQ8ybYzpvS7Uw8noiIRu1z?usp=drive_link",
        code: "https://drive.google.com/drive/folders/1wZYNzzs49yKQ8ybYzpvS7Uw8noiIRu1z?usp=drive_link",
        img: "https://drive.google.com/drive/folders/1wZYNzzs49yKQ8ybYzpvS7Uw8noiIRu1z?usp=drive_link",
        all: "https://drive.google.com/drive/folders/1wZYNzzs49yKQ8ybYzpvS7Uw8noiIRu1z?usp=drive_link"
    };

    // Files Database Array
    const libraryFiles = [
        { name: "2023-html-MayurSir.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "actionlistener.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "adptor class.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "AllStudents.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "ANDROID_RIPAL PANDYA.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "andriodsybulls.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "ASP.NET-Practical.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "C language_hp.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "C language_km.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "ch 4 -5.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "COA(Computer Organization and Architecture).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "COMPLETION CERTIFICATE BBA.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "COMPOSITION 1.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "CSS Material.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "css_matarial_final.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "dbms-2.zip", category: "code", type: "Archive File", icon: "fa-file-archive" },
        { name: "DBMS-1.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "DBMS-2.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "ethics-values.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "for nodel officer.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "FY Exam.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "HTML.doc", category: "code", type: "Document File", icon: "fa-file-alt" },
        { name: "IMG-20250614-WA0000.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "IMG-20250614-WA0001.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "IMG-20250614-WA0002.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "IMG-20250614-WA0003.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "IMG-20250715-WA0002.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "IMG-20250715-WA0003.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "IMG-20250909-WA0000.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "IMG-20250911-WA0039.jpg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "JAVA-Practical.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "java script Builtinfunction_ array.doc", category: "code", type: "Document File", icon: "fa-file-alt" },
        { name: "javascript new material .doc", category: "code", type: "Document File", icon: "fa-file-alt" },
        { name: "js-2.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "layout manager.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "Microsoft PowerPoint Basics.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "networking.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "Notes_260325_140843.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "OS Question Bank.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "other-material.txt", category: "code", type: "Text File", icon: "fa-file-alt" },
        { name: "PHP-Practical.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "PHP-Theory.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "Programme file Definition(1).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "programms.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "python.zip", category: "code", type: "Archive File", icon: "fa-file-archive" },
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
        { name: "sem 4 assignment.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 4 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 4 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 5 assignment.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 5 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 5 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 5 LEB file.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 6 final exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "sem 6 internal exam(as per NEP).pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "Share UNIT1 Basics of html_Ripal Pandya.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "Sueprvisor List-BCA-2025-26.xlsx", category: "code", type: "Spreadsheet", icon: "fa-file-excel" },
        { name: "unit 3.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "unit 5.doc", category: "code", type: "Document File", icon: "fa-file-alt" },
        { name: "unit-01....pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "UNIT-02_260105_110010.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "unit-4.docx", category: "doc", type: "Word Document", icon: "fa-file-word" },
        { name: "Unit3_Topic4_Content_Provider_Complete_Presentation.pptx", category: "code", type: "Presentation", icon: "fa-file-powerpoint" },
        { name: "Unit_3_PPT_Master_Upto_Topic3.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "WhatsApp Image 2025-03-26 at 7.01.37 AM (1).jpeg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "WhatsApp Image 2025-03-26 at 7.01.37 AM.jpeg", category: "img", type: "Image File", icon: "fa-file-image" },
        { name: "word-1.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" },
        { name: "Word-Shortcuts.pdf", category: "pdf", type: "PDF Document", icon: "fa-file-pdf" }
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
