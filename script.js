// Video Sound Toggle for Intro Avatar
function toggleVideoSound() {
    var video = document.getElementById('intro-video');
    var btn = document.getElementById('unmute-btn');
    if (!video || !btn) return;
    
    if (video.muted) {
        video.muted = false;
        video.volume = 1.0;
        video.currentTime = 0;
        video.play();
        btn.innerHTML = '🔇 Sound Off';
        btn.style.background = 'var(--bg-dark-green)';
        btn.style.color = 'white';
        btn.style.borderColor = 'var(--bg-dark-green)';
    } else {
        video.muted = true;
        btn.innerHTML = '🔊 Sound On';
        btn.style.background = 'white';
        btn.style.color = 'var(--text-charcoal)';
        btn.style.borderColor = 'var(--accent-gold)';
    }
}

// Loop the video manually when it ends
document.addEventListener('DOMContentLoaded', function() {
    var introVideo = document.getElementById('intro-video');
    if (introVideo) {
        introVideo.addEventListener('ended', function() {
            introVideo.currentTime = 0;
            introVideo.play();
        });
    }
});

// Mobile Menu Toggle & Active Navigation Tracking
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const sections = document.querySelectorAll('section');

    // Toggle Mobile Navigation Menu
    if (mobileMenuToggle && navLinksContainer) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinksContainer.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinksContainer.classList.contains('active') && 
                !navLinksContainer.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuToggle && navLinksContainer) {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Active link highlighting based on current section on scroll (single-page anchor navigation)
    const trackedSections = document.querySelectorAll('section[id]');
    if (trackedSections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            trackedSections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 140) {
                    current = section.getAttribute('id');
                }
            });

            // Remove active from all nav links first, then add to current
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (current && (href === `#${current}` || href === `#home` && current === 'home')) {
                    // Map sub-sections to their parent nav link
                    if (href === `#${current}`) {
                        link.classList.add('active');
                    }
                }
            });

            // If no section matched or we're at the top, activate Home
            if (!current || current === 'home' || current === 'audit' || current === 'roi-calculator') {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#home') {
                        link.classList.add('active');
                    }
                });
            }
            // Map sub-sections of projects (gallery, seo, ai, skills, etc.) to Projects nav
            const projectSubSections = ['comparison-slider-section'];
            if (current && !['home', 'audit', 'roi-calculator', 'services', 'about', 'projects', 'contact'].includes(current)) {
                // Unknown section ID - check if it's within projects area
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#projects') {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // --- Dynamic Typing Effect ---
    const typedTextSpan = document.getElementById('typed-text');
    if (typedTextSpan) {
        const roles = ["Web Developer.", "SEO Specialist.", "Digital Marketer.", "Prompt Engineer."];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typingSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentRole.length) {
                // Pause at the end of word
                typingSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 400; // Pause before starting next word
            }

            setTimeout(type, typingSpeed);
        }

        // Start typing effect after a small delay
        setTimeout(type, 1000);
    }

    // --- Scroll Reveal Animations (Enhanced with stagger) ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    // --- Generate Floating Background Particles ---
    const particlesContainer = document.querySelector('.particles-container');
    if (particlesContainer) {
        const numParticles = 6;
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('bg-particle');
            
            // Randomize sizes and placement
            const size = Math.floor(Math.random() * 150) + 80; // 80px to 230px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${Math.random() * 80}%`;
            particle.style.left = `${Math.random() * 90}%`;
            
            // Randomize animation delays and durations
            particle.style.animationDelay = `${Math.random() * -10}s`;
            particle.style.animationDuration = `${Math.random() * 8 + 8}s`; // 8s to 16s
            
            particlesContainer.appendChild(particle);
        }
    }

    // --- Generate Ambient Floating Particles ---
    const ambientContainer = document.querySelector('.ambient-particles');
    if (ambientContainer) {
        const particleCount = 12;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.classList.add('ambient-particle');
            const size = Math.floor(Math.random() * 80) + 30;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.setProperty('--duration', `${Math.random() * 12 + 10}s`);
            p.style.setProperty('--delay', `${Math.random() * -15}s`);
            ambientContainer.appendChild(p);
        }
    }

    // --- Counter Animation on Scroll ---
    const counterElements = document.querySelectorAll('[data-count-to]');
    if (counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count-to'), 10);
                    const suffix = el.getAttribute('data-count-suffix') || '';
                    const prefix = el.getAttribute('data-count-prefix') || '';
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    el.classList.add('counting');

                    function updateCount(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const currentVal = Math.round(eased * target);
                        el.textContent = prefix + currentVal.toLocaleString('en-IN') + suffix;
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            el.classList.remove('counting');
                        }
                    }

                    requestAnimationFrame(updateCount);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(el => counterObserver.observe(el));
    }

    // --- Page Load Overlay ---
    const pageOverlay = document.querySelector('.page-load-overlay');
    if (pageOverlay) {
        setTimeout(() => {
            pageOverlay.classList.add('loaded');
        }, 900);
        // Remove from DOM after animation
        setTimeout(() => {
            pageOverlay.remove();
        }, 1600);
    }

    // --- Interactive Brand Audit Logic ---
    const auditForm = document.getElementById('audit-form');
    const auditFormContainer = document.getElementById('audit-form-container');
    const auditScanningContainer = document.getElementById('audit-scanning-container');
    const auditResultsContainer = document.getElementById('audit-results-container');
    const scannedDomainSpan = document.getElementById('scanned-domain');
    const scanningStepText = document.getElementById('scanning-step-text');
    const scanningProgressBar = document.getElementById('scanning-progress-bar');
    const auditResetBtn = document.getElementById('audit-reset-btn');
    const auditInput = document.getElementById('audit-input');

    if (auditForm && auditFormContainer && auditScanningContainer && auditResultsContainer) {
        auditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const businessInput = auditInput.value.trim();
            if (!businessInput) return;

            // 1. Switch to Scanning View
            auditFormContainer.classList.add('audit-state-hidden');
            auditScanningContainer.classList.remove('audit-state-hidden');
            
            // Reset loading elements
            scanningProgressBar.style.width = '0%';
            
            // Steps of scanning process
            const steps = [
                { percentage: 25, text: "Connecting to search index nodes..." },
                { percentage: 50, text: "Scanning domain & checking metadata tags..." },
                { percentage: 75, text: "Analyzing Google Maps citations & reviews..." },
                { percentage: 90, text: "Testing mobile page layouts & speed scores..." },
                { percentage: 100, text: "Compiling presence reports..." }
            ];

            let stepIndex = 0;

            function runStep() {
                if (stepIndex < steps.length) {
                    const currentStep = steps[stepIndex];
                    scanningStepText.textContent = currentStep.text;
                    scanningProgressBar.style.width = `${currentStep.percentage}%`;
                    
                    stepIndex++;
                    // Delay for next scanning step
                    setTimeout(runStep, 800);
                } else {
                    // 2. Complete and Switch to Results
                    setTimeout(() => {
                        scannedDomainSpan.textContent = businessInput;
                        
                        const auditResultsGrid = document.getElementById('audit-results-grid');
                        const resultsActionBanner = document.querySelector('.results-action-banner');
                        
                        const inputLower = businessInput.toLowerCase();
                        const isOwnProject = inputLower.includes('aarohi') || 
                                             inputLower.includes('siddhivinayak') || 
                                             inputLower.includes('aarohifoamlamination') || 
                                             inputLower.includes('siddhivinayakpg') || 
                                             inputLower.includes('realestate') || 
                                             inputLower.includes('saumya') || 
                                             inputLower.includes('bansal');
                                             
                        if (isOwnProject) {
                            // Show high scores (Our Project profile)
                            if (auditResultsGrid) {
                                auditResultsGrid.innerHTML = `
                                    <!-- SEO Score Card -->
                                    <div class="result-score-card">
                                        <div class="score-radial-progress" style="--score-color: #2ecc71; border-color: #2ecc71; box-shadow: 0 0 15px rgba(46, 204, 113, 0.4);">
                                            <span class="score-number">98%</span>
                                        </div>
                                        <h4>Local SEO Score</h4>
                                        <p class="score-comment" style="color: #2ecc71;">EXCELLENT VISIBILITY</p>
                                        <ul class="score-bullets">
                                            <li>✅ Ranking on Page 1 for local search</li>
                                            <li>✅ Metadata and headings fully optimized</li>
                                            <li>✅ High search engine index match</li>
                                        </ul>
                                    </div>

                                    <!-- GBP Listing Score Card -->
                                    <div class="result-score-card">
                                        <div class="score-radial-progress" style="--score-color: #2ecc71; border-color: #2ecc71; box-shadow: 0 0 15px rgba(46, 204, 113, 0.4);">
                                            <span class="score-number">95%</span>
                                        </div>
                                        <h4>Google Business Profile</h4>
                                        <p class="score-comment" style="color: #2ecc71;">FULLY OPTIMIZED</p>
                                        <ul class="score-bullets">
                                            <li>✅ Active reviews with keyword replies</li>
                                            <li>✅ Profile details and category complete</li>
                                            <li>✅ Highly ranked Local Pack presence</li>
                                        </ul>
                                    </div>

                                    <!-- Speed & Performance Score Card -->
                                    <div class="result-score-card">
                                        <div class="score-radial-progress" style="--score-color: #2ecc71; border-color: #2ecc71; box-shadow: 0 0 15px rgba(46, 204, 113, 0.4);">
                                            <span class="score-number">97%</span>
                                        </div>
                                        <h4>Website Performance</h4>
                                        <p class="score-comment" style="color: #2ecc71;">BLAZING FAST</p>
                                        <ul class="score-bullets">
                                            <li>✅ Optimized images and files</li>
                                            <li>✅ Fully passed Core Web Vitals</li>
                                            <li>✅ SSL secure & responsive load</li>
                                        </ul>
                                    </div>
                                `;
                            }
                            if (resultsActionBanner) {
                                resultsActionBanner.innerHTML = `
                                    <h4>This digital brand is built & managed by Saumya Bansal!</h4>
                                    <p>All visibility, speed, and ranking metrics are optimized. Want the same results for your business?</p>
                                    <a href="#contact" class="glow-pill-btn">Book a Free Strategy Call <span>→</span></a>
                                `;
                            }
                        } else {
                            // Show lower scores (Other standard client profile - needs work)
                            const randomSEO = Math.floor(Math.random() * 15) + 55;
                            const randomGBP = Math.floor(Math.random() * 15) + 45;
                            const randomSpeed = Math.floor(Math.random() * 15) + 62;
                            
                            if (auditResultsGrid) {
                                auditResultsGrid.innerHTML = `
                                    <!-- SEO Score Card -->
                                    <div class="result-score-card">
                                        <div class="score-radial-progress" style="--score-color: #EC922C; border-color: #EC922C; box-shadow: 0 0 15px rgba(236, 146, 44, 0.4);">
                                            <span class="score-number">${randomSEO}%</span>
                                        </div>
                                        <h4>Local SEO Score</h4>
                                        <p class="score-comment" style="color: #EC922C;">MEDIUM VISIBILITY</p>
                                        <ul class="score-bullets">
                                            <li>⚠️ Missing core Google Maps directory matches</li>
                                            <li>✅ Heading tags are active</li>
                                            <li>⚠️ High competitor ranking gap detected</li>
                                        </ul>
                                    </div>

                                    <!-- GBP Listing Score Card -->
                                    <div class="result-score-card">
                                        <div class="score-radial-progress" style="--score-color: #e74c3c; border-color: #e74c3c; box-shadow: 0 0 15px rgba(231, 76, 60, 0.4);">
                                            <span class="score-number">${randomGBP}%</span>
                                        </div>
                                        <h4>Google Business Profile</h4>
                                        <p class="score-comment" style="color: #e74c3c;">ACTION REQUIRED</p>
                                        <ul class="score-bullets">
                                            <li>❌ No active customer reviews in 30 days</li>
                                            <li>⚠️ Missing search keywords in description</li>
                                            <li>✅ Business listing address verified</li>
                                        </ul>
                                    </div>

                                    <!-- Speed & Performance Score Card -->
                                    <div class="result-score-card">
                                        <div class="score-radial-progress" style="--score-color: #EC922C; border-color: #EC922C; box-shadow: 0 0 15px rgba(236, 146, 44, 0.4);">
                                            <span class="score-number">${randomSpeed}%</span>
                                        </div>
                                        <h4>Website Performance</h4>
                                        <p class="score-comment" style="color: #EC922C;">NEEDS TUNING</p>
                                        <ul class="score-bullets">
                                            <li>⚠️ Unoptimized large images slow down mobile</li>
                                            <li>✅ Safe SSL security configuration</li>
                                            <li>⚠️ Render blocking script tags found</li>
                                        </ul>
                                    </div>
                                `;
                            }
                            if (resultsActionBanner) {
                                resultsActionBanner.innerHTML = `
                                    <h4>Want to fix these warnings and double your business leads?</h4>
                                    <p>Get a customized action plan from Saumya Bansal. No commitment required.</p>
                                    <a href="#contact" class="glow-pill-btn">Book My Free Fix Call <span>→</span></a>
                                `;
                            }
                        }

                        auditScanningContainer.classList.add('audit-state-hidden');
                        auditResultsContainer.classList.remove('audit-state-hidden');
                    }, 500);
                }
            }

            // Start scanning process
            setTimeout(runStep, 300);
        });

        // Reset click handler
        if (auditResetBtn) {
            auditResetBtn.addEventListener('click', () => {
                auditResultsContainer.classList.add('audit-state-hidden');
                auditFormContainer.classList.remove('audit-state-hidden');
                auditInput.value = '';
                auditInput.focus();
            });
        }
    }

    // --- 3D Mouse Tilt Effect ---
    const tiltElements = document.querySelectorAll('.tilt-3d');
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left; // mouse x within element
            const y = e.clientY - rect.top;  // mouse y within element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angle (max 15 degrees)
            const rotateX = ((centerY - y) / centerY) * 15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        element.addEventListener('mouseleave', () => {
            // Reset to flat position smoothly
            element.style.transition = 'transform 0.5s ease';
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
        
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'none';
        });
    });
});

// ==========================================
// BEFORE/AFTER COMPARISON SLIDER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('before-after-slider');
    const afterImage = document.getElementById('slider-image-after');
    const handle = document.getElementById('slider-handle');

    if (slider && afterImage && handle) {
        let isResizing = false;

        function updateSlider(clientX) {
            const rect = slider.getBoundingClientRect();
            const x = clientX - rect.left;
            let percentage = (x / rect.width) * 100;

            // Boundaries
            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;

            afterImage.style.width = percentage + '%';
            handle.style.left = percentage + '%';
        }

        function onStart() {
            isResizing = true;
        }

        function onEnd() {
            isResizing = false;
        }

        function onMove(e) {
            if (!isResizing) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            updateSlider(clientX);
        }

        // Mouse Events
        handle.addEventListener('mousedown', onStart);
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('mousemove', onMove);

        // Touch Events
        handle.addEventListener('touchstart', onStart);
        window.addEventListener('touchend', onEnd);
        window.addEventListener('touchmove', onMove);

        // Allow clicking anywhere on slider to jump to it
        slider.addEventListener('click', (e) => {
            if (e.target !== handle && !handle.contains(e.target)) {
                updateSlider(e.clientX);
            }
        });
    }
});

// ==========================================
// FLOATING CHAT WIDGET LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('chat-trigger-btn');
    const windowEl = document.getElementById('chat-window');

    if (trigger && windowEl) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            windowEl.classList.toggle('active');
            
            // Remove notification badge once clicked
            const badge = trigger.querySelector('.chat-badge');
            if (badge) badge.remove();
        });

        // Close on clicking outside
        document.addEventListener('click', (e) => {
            if (windowEl.classList.contains('active') && !windowEl.contains(e.target)) {
                windowEl.classList.remove('active');
            }
        });
    }
});

function triggerChatOption(type) {
    const phone = '917435967985';
    let text = '';

    if (type === 'seo') {
        text = 'Hi Saumya, I checked your portfolio and would like a Free SEO Audit for my business!';
    } else if (type === 'web') {
        text = "Hi Saumya, I'm interested in building a website. Let's connect.";
    } else {
        text = 'Hi Saumya, I would like to chat about growing my business online.';
    }

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
}

// ==========================================
// SCROLL PROGRESS BAR LOGIC
// ==========================================
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    
    progressBar.style.width = scrolled + '%';
});

// ==========================================
// SMOOTH PARALLAX SCROLL FOR HERO
// ==========================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-section-figma');
    if (!hero) return;
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
        const avatar = hero.querySelector('.hero-avatar-wrapper');
        const textContent = hero.querySelector('.hero-text-content');
        if (avatar) {
            avatar.style.transform = `translateY(${scrollY * 0.08}px)`;
        }
        if (textContent) {
            textContent.style.transform = `translateY(${scrollY * 0.12}px)`;
        }
    }
});
