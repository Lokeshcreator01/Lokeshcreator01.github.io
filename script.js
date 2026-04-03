document.addEventListener('DOMContentLoaded', () => {
    
    // --- Starry Background Canvas ---
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');
    let width, height, stars;

    function initStars() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        stars = [];
        const numStars = Math.floor((width * height) / 10000); // Density

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                opacity: Math.random(),
                speed: Math.random() * 0.05
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw subtle grid lines or constellations if desired, here just stars
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();

            // Animate twinkle and slight movement
            star.opacity += (Math.random() - 0.5) * 0.1;
            if (star.opacity < 0.1) star.opacity = 0.1;
            if (star.opacity > 1) star.opacity = 1;
            
            star.y -= star.speed;
            if (star.y < 0) {
                star.y = height;
                star.x = Math.random() * width;
            }
        });
        requestAnimationFrame(drawStars);
    }

    window.addEventListener('resize', initStars);
    initStars();
    drawStars();

    // --- Dynamic Data Fetching & Injection ---
    async function loadPortfolioData() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            
            populatePersonal(data.personal);
            setupTypewriter(data.personal.roles);
            populateStatsAndFeatures(data.stats, data.features);
            populateSkills(data.skills);
            populateProjects(data.projects);
            populateContact(data.personal);
            
        } catch (error) {
            console.error("Error loading portfolio data:", error);
        }
    }

    function populatePersonal(personal) {
        document.querySelectorAll('.dyn-name').forEach(el => el.textContent = personal.name);
        document.querySelectorAll('.dyn-name-first').forEach(el => el.textContent = personal.firstName);
        document.querySelectorAll('.dyn-hero-desc').forEach(el => el.textContent = personal.bio);
        document.querySelectorAll('.dyn-about-desc').forEach(el => el.textContent = personal.aboutBio);
    }

    function setupTypewriter(roles) {
        const typeTarget = document.getElementById('typewriter');
        if (!typeTarget || !roles || roles.length === 0) return;
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }
            
            typeTarget.textContent = currentRole.substring(0, charIndex);
            
            let speed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentRole.length) {
                speed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500; // Pause before new word
            }
            
            setTimeout(type, speed);
        }
        type();
    }

    function populateStatsAndFeatures(stats, features) {
        const statsC = document.getElementById('about-stats');
        if (statsC && stats) {
            statsC.innerHTML = stats.map(s => `
                <div class="stat-item">
                    <span class="stat-num">${s.num}</span>
                    <span class="stat-label">${s.label}</span>
                </div>
            `).join('');
        }

        const featC = document.getElementById('about-features');
        if (featC && features) {
            featC.innerHTML = features.map(f => `
                <div class="feature-card">
                    <div class="feature-icon"><i class="${f.icon}"></i></div>
                    <h3 class="feature-title">${f.title}</h3>
                    <p class="feature-desc">${f.desc}</p>
                </div>
            `).join('');
        }
    }

    function populateSkills(skills) {
        const container = document.getElementById('skills-container');
        if (!container || !skills) return;

        container.innerHTML = skills.map(skill => `
            <div class="skill-bar-card">
                <div class="skill-icon-box"><i class="${skill.icon}"></i></div>
                <div class="skill-info">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-pct">${skill.pct}%</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: 0%;" data-target="${skill.pct}%"></div>
                    </div>
                </div>
            </div>
        `).join('');

        // Animate fills on scroll using IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fill = entry.target;
                    fill.style.width = fill.getAttribute('data-target');
                    observer.unobserve(fill);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.progress-fill').forEach(fill => observer.observe(fill));
    }

    function populateProjects(projects) {
        const container = document.getElementById('projects-container');
        if (!container || !projects) return;

        container.innerHTML = projects.map(p => `
            <div class="project-card">
                <div class="project-img-box">
                    <div class="project-icon" style="color: #fff; background-color: ${p.brandColor}"><i class="${p.icon}"></i></div>
                </div>
                <h3 class="project-title">${p.name}</h3>
                <p class="project-desc">${p.description}</p>
                <div class="project-tags">
                    ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
                <a href="${p.link}" target="_blank" class="btn btn-outline btn-full text-center">View Project <i class="fa-solid fa-arrow-up-right-from-square" style="margin-left: 5px;"></i></a>
            </div>
        `).join('');
    }

    function populateContact(personal) {
        const cInfo = document.getElementById('contact-info');
        if (!cInfo) return;

        cInfo.innerHTML = `
            <div class="c-card">
                <div class="c-card-icon"><i class="fa-regular fa-envelope"></i></div>
                <div class="c-card-content">
                    <h4>Email</h4>
                    <p>${personal.email}</p>
                </div>
            </div>
            <div class="c-card">
                <div class="c-card-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="c-card-content">
                    <h4>Location</h4>
                    <p>${personal.location}</p>
                </div>
            </div>
        `;
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    loadPortfolioData();
});
