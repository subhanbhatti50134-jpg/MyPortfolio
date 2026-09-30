import { useEffect } from 'react';
import './styles.css';

const PAGE_HTML = `<div id="loader">
<div class="loader-pct"><span id="pct-num">0</span><span class="sign">%</span></div>
<div class="loader-bar-wrap"><div class="loader-bar" id="loader-bar"></div></div>
<div class="loader-tag">Engineering Digital Experiences</div>
<div class="loader-credit">Subhan Bhatti © 2026</div>
</div><div id="nav-overlay">
<button aria-label="Close menu" class="nav-close" id="nav-close">
<svg fill="none" stroke="currentColor" stroke-width="1.8" viewbox="0 0 24 24"><line x1="4" x2="20" y1="4" y2="20"></line><line x1="20" x2="4" y1="4" y2="20"></line></svg>
</button>
<a class="nav-link" href="#hero"><span>01</span>Home</a>
<a class="nav-link" href="#about"><span>02</span>Profile</a>
<a class="nav-link" href="#expertise"><span>03</span>Expertise</a>
<a class="nav-link" href="#projects"><span>04</span>Projects</a>
<a class="nav-link" href="#toolkit"><span>05</span>Toolkit</a>
<a class="nav-link" href="#contact"><span>06</span>Contact</a>
</div><header id="site-header">
<button aria-label="Open menu" class="menu-btn" id="menu-open">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
<div class="nav-pills">
<span>CS STUDENT</span><span class="dot">●</span>
<span>FULL-STACK LEARNER</span><span class="dot">●</span>
<span>VIBE CODER</span>
</div>
<a class="contact-btn" href="#contact">Contact
    <svg fill="none" stroke="currentColor" stroke-width="2.2" viewbox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
</header><section id="hero">
<div class="wrap">
<div class="hero-top">
<div>
<h1 class="hero-name"><span class="first">SUBHAN</span> BHATTI</h1>
<div class="hero-role">Computer Science Student</div>
</div>
<div class="hero-tagline"><b>Curious by nature.</b><br/>Building, breaking, learning.</div>
</div>
<div class="hero-stage">
<div class="hero-bg-text">CURIOUS</div>
<div class="hero-photo"><img alt="Subhan Bhatti" src="/assets/subhan.jpg"/></div>
<div class="hero-socials">
<a href="https://www.linkedin.com/in/subhanbhatti50134" rel="noopener" target="_blank">
<svg fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.16-1.72 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2 3.61 4.59v4.72z"></path></svg>
          LINKEDIN
        </a>
<a href="http://github.com/subhanbhatti50134-jpg" rel="noopener" target="_blank">
<svg fill="currentColor" viewbox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.39-1.24.71-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"></path></svg>
          GITHUB
        </a>
</div>
<div class="hero-role-tag">
<span class="l1">FULL-STACK</span>
<span class="l2">LEARNER</span>
</div>
</div>
<div class="hero-bio reveal">
      Computer science student bridging foundational CS principles with hands-on full-stack and AI development. Strong grasp of Python, C++, OOP, data structures and algorithms — currently expanding into agentic AI and modern web development, one project at a time.
    </div>
</div>
<div class="scroll-cue">
<svg fill="none" height="12" stroke="#fff" stroke-width="2" viewbox="0 0 24 24" width="12"><path d="M12 4v16M5 13l7 7 7-7"></path></svg>
</div>
</section><section id="about">
<div class="wrap">
<div class="about-grid">
<div class="reveal">
<div class="profile-tag">The Profile / 01</div>
<h2 class="profile-name">SUBHAN<br/><span class="l2">BHATTI.</span></h2>
<p class="profile-bio">
          Computer Science (ADP) student at UMT Lahore, building a bridge between core CS fundamentals and applied software engineering. Proficient in Python and C++, with a strong foundation in object-oriented programming, data structures, and algorithmic problem-solving. Currently deepening my full-stack skills and exploring agentic AI — drawn to projects where clean logic meets thoughtful design.
        </p>
<div class="about-buttons">
<a class="btn-solid" download="Subhan_Bhatti_CV_ATS_v2" href="/assets/Subhan_Bhatti_CV_ATS_v2.pdf">
<svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M12 3v13M6 11l6 6 6-6M5 21h14"></path></svg>
            Download Resume
          </a>
<a class="btn-outline" href="#contact">
<svg fill="none" stroke="currentColor" stroke-width="2.2" viewbox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg>
            Get In Touch
          </a>
</div>
<div class="about-location">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Lahore, Pakistan — Open to Internships
        </div>
</div>
<div class="reveal">
<div class="timeline-head">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5zm4 2.5v5c0 1 4 3 6 3s6-2 6-3v-5"></path></svg>
<span class="eyebrow">Education</span>
</div>
<div class="timeline-item current">
<div class="timeline-date">March 2026 — March 2027</div>
<div class="timeline-title">PNY Trainings — Agentic AI</div>
<div class="timeline-desc">Hands-on training in agentic AI systems and computer science, building practical skills in next-generation AI engineering.</div>
</div>
<div class="timeline-item current">
<div class="timeline-date">2025 — 2027</div>
<div class="timeline-title">UMT Lahore — Associate's, CS</div>
<div class="timeline-desc">Associate's degree in Computer Science at University of Management and Technology, covering core programming, OOP, and software fundamentals.</div>
</div>
<div class="timeline-item">
<div class="timeline-date">2023 — 2025</div>
<div class="timeline-title">Superior College — Pre-Medical</div>
<div class="timeline-desc">Intermediate studies in Pre-Medicine before transitioning fully into computer science and software development.</div>
</div>
<div class="cert-head">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="8" r="6"></circle><path d="M9 13.5L7 22l5-3 5 3-2-8.5"></path></svg>
<span class="eyebrow">Experience</span>
</div>
<div class="cert-grid">
<div class="cert-card">
<div><div class="cert-name">ARCH TECHNOLOGIES</div><div class="cert-sub">C++ Intern · 2026</div></div>
<div class="cert-star"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"></path></svg></div>
</div>
<div class="cert-card">
<div><div class="cert-name">KARACHI HOUSE</div><div class="cert-sub">Digital Marketing · 2025</div></div>
<div class="cert-star"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"></path></svg></div>
</div>
</div>
<div class="cert-hint">Click any card for details →</div>
</div>
</div>
</div>
</section><section id="expertise">
<div class="wrap">
<div class="acc-item open" data-acc="">
<div class="acc-head">
<div class="acc-left"><span class="acc-num">01</span><span class="acc-title">PROBLEM SOLVING</span></div>
<div class="acc-icons">
<div class="acc-link"><svg fill="none" stroke="currentColor" stroke-width="2.2" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></div>
<div class="acc-toggle">−</div>
</div>
</div>
<div class="acc-body">
<div class="acc-body-inner"><p>Breaking down complex logic into clean, working code — built on a foundation of strong data structures and algorithmic thinking from C++ and Python.</p></div>
</div>
</div>
<div class="acc-item" data-acc="">
<div class="acc-head">
<div class="acc-left"><span class="acc-num">02</span><span class="acc-title">OOP &amp; C++ / PYTHON</span></div>
<div class="acc-icons">
<div class="acc-link"><svg fill="none" stroke="currentColor" stroke-width="2.2" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></div>
<div class="acc-toggle">+</div>
</div>
</div>
<div class="acc-body">
<div class="acc-body-inner"><p>Writing efficient, maintainable software using object-oriented principles — encapsulation, inheritance, and clean separation of concerns.</p></div>
</div>
</div>
<div class="acc-item" data-acc="">
<div class="acc-head">
<div class="acc-left"><span class="acc-num">03</span><span class="acc-title">FULL-STACK LEARNING</span></div>
<div class="acc-icons">
<div class="acc-link"><svg fill="none" stroke="currentColor" stroke-width="2.2" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></div>
<div class="acc-toggle">+</div>
</div>
</div>
<div class="acc-body">
<div class="acc-body-inner"><p>Actively expanding into HTML, CSS, and modern web development — learning to ship real, responsive applications end to end.</p></div>
</div>
</div>
<div class="acc-item" data-acc="">
<div class="acc-head">
<div class="acc-left"><span class="acc-num">04</span><span class="acc-title">AGENTIC AI</span></div>
<div class="acc-icons">
<div class="acc-link"><svg fill="none" stroke="currentColor" stroke-width="2.2" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></div>
<div class="acc-toggle">+</div>
</div>
</div>
<div class="acc-body">
<div class="acc-body-inner"><p>Currently training in agentic AI systems — exploring how autonomous, reasoning-driven software is shaping the next generation of engineering.</p></div>
</div>
</div>
</div>
<div class="marquee-wrap">
<div class="marquee-track" id="marquee">
<span><span class="dot">●</span>PYTHON<span class="dot">●</span>C++<span class="dot">●</span>OOP<span class="dot">●</span>DATA STRUCTURES<span class="dot">●</span>ALGORITHMS<span class="dot">●</span>HTML<span class="dot">●</span>CSS<span class="dot">●</span>VIBE CODING</span>
</div>
</div>
</section><section id="projects">
<div class="wrap">
<!-- LEFT: info panel -->
<div class="proj-left-panel">
<div class="proj-header reveal">
<h2 class="proj-h1">CODE<br/><span class="l2">PRACTICE.</span></h2>
<p class="proj-sub">A curated set of C++, Python, and web projects from my learning journey so far.</p>
</div>
<!-- Slide info items (stacked vertically, one visible at a time) -->
<div class="proj-info-stage" id="proj-info-stage">
<div class="proj-slide-info active" data-proj="0">
<span class="pnum">01</span>
<div class="proj-tags"><span class="proj-tag">C++ · OOP</span></div>
<h3 class="proj-title">ATM SIMULATION</h3>
<div class="proj-divider"></div>
<span class="proj-stack-label">Stack &amp; Architecture</span>
<span class="proj-stack">C++ / OOP / FILE I/O</span>
<p class="proj-desc">A console-based banking simulation with account creation, balance checks, withdrawals, deposits, and simple file persistence for user data.</p>
<a class="proj-explore" href="https://github.com/subhanbhatti50134-jpg/ATM-Stimulation" rel="noopener" target="_blank">
            View Repository <span class="arrow-circ"><svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></span>
</a>
</div>
<div class="proj-slide-info" data-proj="1">
<span class="pnum">02</span>
<div class="proj-tags"><span class="proj-tag">C++ · DATA STRUCTURES</span></div>
<h3 class="proj-title">STUDENT MANAGEMENT SYSTEM</h3>
<div class="proj-divider"></div>
<span class="proj-stack-label">Stack &amp; Architecture</span>
<span class="proj-stack">C++ / OOP / FILE HANDLING</span>
<p class="proj-desc">A structured student record manager with add, search, update, and delete flows designed to practice object-oriented design and file handling.</p>
<a class="proj-explore" href="https://github.com/subhanbhatti50134-jpg/Student-Management-System-using-OOP-C-" rel="noopener" target="_blank">
            View Repository <span class="arrow-circ"><svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></span>
</a>
</div>
<div class="proj-slide-info" data-proj="2">
<span class="pnum">03</span>
<div class="proj-tags"><span class="proj-tag">C++ · LOGIC</span></div>
<h3 class="proj-title">NUMBER GUESSING GAME</h3>
<div class="proj-divider"></div>
<span class="proj-stack-label">Stack &amp; Architecture</span>
<span class="proj-stack">C++ / RANDOMIZATION</span>
<p class="proj-desc">A logic game that generates random numbers and guides the player through repeated guesses, hints, and win-state feedback.</p>
<a class="proj-explore" href="https://github.com/subhanbhatti50134-jpg/Number-Guessing-Game" rel="noopener" target="_blank">
            View Repository <span class="arrow-circ"><svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></span>
</a>
</div>
<div class="proj-slide-info" data-proj="3">
<span class="pnum">04</span>
<div class="proj-tags"><span class="proj-tag">C++ · VECTORS</span></div>
<h3 class="proj-title">TO-DO LIST APPLICATION</h3>
<div class="proj-divider"></div>
<span class="proj-stack-label">Stack &amp; Architecture</span>
<span class="proj-stack">C++ / VECTORS / CLI</span>
<p class="proj-desc">A command-line productivity tool that lets users add, remove, and track tasks while strengthening practice with vectors and basic state management.</p>
<a class="proj-explore" href="https://github.com/subhanbhatti50134-jpg/To-Do-List-Application" rel="noopener" target="_blank">
            View Repository <span class="arrow-circ"><svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></span>
</a>
</div>
<div class="proj-slide-info" data-proj="4">
<span class="pnum">05</span>
<div class="proj-tags"><span class="proj-tag">HTML · CSS · JS</span></div>
<h3 class="proj-title">PERSONAL PORTFOLIO</h3>
<div class="proj-divider"></div>
<span class="proj-stack-label">Stack &amp; Architecture</span>
<span class="proj-stack">HTML / CSS / JAVASCRIPT</span>
<p class="proj-desc">This portfolio site itself, built to showcase skills, projects, and learning progress using a polished one-page layout and interactive UI behavior.</p>
<a class="proj-explore" href="https://github.com/subhanbhatti50134-jpg/My-Portfolio" rel="noopener" target="_blank">
            View Repository <span class="arrow-circ"><svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></span>
</a>
</div>
<div class="proj-slide-info" data-proj="5">
<span class="pnum">06</span>
<div class="proj-tags"><span class="proj-tag">PYTHON · FLASK</span></div>
<h3 class="proj-title">STREAMCAM</h3>
<div class="proj-divider"></div>
<span class="proj-stack-label">Stack &amp; Architecture</span>
<span class="proj-stack">PYTHON / FLASK / OPENCV</span>
<p class="proj-desc">A lightweight Python webcam streaming server built with Flask and OpenCV, serving a live video feed over the local network in real time.</p>
<a class="proj-explore" href="https://github.com/subhanbhatti50134-jpg/StreamCam" rel="noopener" target="_blank">
            View Repository <span class="arrow-circ"><svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></span>
</a>
</div>
<div class="proj-slide-info" data-proj="6">
<span class="pnum">07</span>
<div class="proj-tags"><span class="proj-tag">TYPESCRIPT · WEB APP</span></div>
<h3 class="proj-title">JEWELLERS RATE PORTAL</h3>
<div class="proj-divider"></div>
<span class="proj-stack-label">Stack &amp; Architecture</span>
<span class="proj-stack">TYPESCRIPT / NEXT.JS / VERCEL</span>
<p class="proj-desc">A live rate portal built for Saleem Nadeem Jewellers, letting visitors check up-to-date gold and silver rates through a clean, deployed web interface.</p>
<a class="proj-explore" href="https://github.com/subhanbhatti50134-jpg/Saleem-Nadeem-Jewellers-Rate-portal" rel="noopener" target="_blank">
            View Repository <span class="arrow-circ"><svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></span>
</a>
</div>
</div><!-- /proj-info-stage -->
<!-- Bottom bar: counter + nav -->
<div class="proj-bottom-bar">
<div class="proj-counter">
<span class="num" id="proj-num">01 / 07</span>
<div class="proj-dots" id="proj-dots"></div>
</div>
<div class="proj-nav">
<button aria-label="Previous project" class="proj-arrow" id="proj-prev">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
</button>
<button aria-label="Next project" class="proj-arrow" id="proj-next">
<svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</button>
</div>
</div>
</div><!-- /proj-left-panel -->
<!-- RIGHT: image panel -->
<div class="proj-right-panel">
<div class="proj-img-stage" id="proj-img-stage">
<!-- Project 0: ATM — CSS terminal UI -->
<div class="proj-img-item active" data-proj="0">
<div class="pv-glow" style="background:radial-gradient(circle,#7c3aed,transparent 70%);"></div>
<div class="atm-terminal-wrap">
<!-- top window: main menu -->
<div class="atm-window atm-window-top">
<div class="atm-titlebar">
<span class="atm-tab">C:\\Program\\ATM Simulation ×</span>
<div class="atm-winbtns">
<span>─</span><span>□</span><span>✕</span>
</div>
</div>
<div class="atm-body">
<p class="atm-center atm-white">ATM SIMULATION SYSTEM</p>
<p class="atm-center atm-grey">==================== MAIN MENU ====================</p>
<p class="atm-line">1.  Check Balance</p>
<p class="atm-line">2.  Deposit Money</p>
<p class="atm-line">3.  Withdraw Money</p>
<p class="atm-line">4.  Logout</p>
<p class="atm-line atm-mt"> </p>
<p class="atm-line">Enter your choice: <span class="atm-cursor">|</span></p>
</div>
</div>
<!-- bottom window: output -->
<div class="atm-window atm-window-bot">
<div class="atm-body atm-body-bot">
<p class="atm-line atm-green">Your current balance: $1000.00</p>
<p class="atm-line atm-green">Deposit successful! New balance: $1250.00</p>
<p class="atm-line atm-green">Withdrawal successful! New balance: $1150.00</p>
<p class="atm-line atm-cursor-line"><span class="atm-cursor">█</span></p>
</div>
<!-- purple corner accent -->
<div class="atm-corner-accent">
<svg fill="none" height="28" stroke="#c084fc" stroke-width="1.5" viewbox="0 0 24 24" width="28"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</div>
</div>
</div>
</div>
<!-- Project 1: Student Mgmt — CSS terminal UI -->
<div class="proj-img-item" data-proj="1">
<div class="pv-glow" style="background:radial-gradient(circle,#9333ea,transparent 70%);"></div>
<div class="sms-terminal-wrap">
<!-- single window -->
<div class="sms-window">
<div class="sms-titlebar">
<span class="sms-title-text">Student Management System</span>
<span class="sms-close">✕</span>
</div>
<!-- top: menu -->
<div class="sms-body sms-menu">
<p class="sms-line">------ STUDENT MANAGEMENT SYSTEM ------</p>
<p class="sms-line">1.Add Student</p>
<p class="sms-line">2.Display All</p>
<p class="sms-line">3.Exit</p>
<p class="sms-line sms-mt">Enter your choice: <span class="sms-cursor">|</span></p>
</div>
<!-- divider -->
<div class="sms-divider"></div>
<!-- bottom: records -->
<div class="sms-body sms-records">
<p class="sms-line">Automatically loaded 5 students from database.</p>
<p class="sms-line sms-sep">================================================================</p>
<p class="sms-line sms-center">ALL STUDENT RECORDS</p>
<p class="sms-line sms-sep">================================================================</p>
<p class="sms-line">[1] Name: John Doe   | Age: 20 | ID: S101 | Major: CS      | GPA: 3.8</p>
<p class="sms-line">[2] Name: Jane Smith  | Age: 19 | ID: S102 | Major: EE      | GPA: 3.5</p>
<p class="sms-line">[3] Name: Alex Green  | Age: 21 | ID: S103 | Major: Business| GPA: 3.2</p>
<p class="sms-line">[4] Name: Sarah Lee   | Age: 18 | ID: S104 | Major: Biotech  | GPA: 4.0</p>
</div>
</div>
<!-- decorative accents -->
<div class="sms-star sms-star-br">✦</div>
<div class="sms-star sms-star-bl">★</div>
</div>
</div>
<!-- Project 2: Number Guessing -->
<div class="proj-img-item" data-proj="2">
<div class="pv-glow" style="background:radial-gradient(circle,#c026d3,transparent 70%);"></div>
<div class="img-placeholder">
<svg fill="none" height="80" stroke="#a855f7" stroke-width=".8" viewbox="0 0 24 24" width="80"><circle cx="12" cy="12" r="9"></circle><text fill="#a855f7" font-size="9" stroke="none" text-anchor="middle" x="12" y="16">?</text></svg>
<span class="img-label">NUMBER GAME</span>
</div>
</div>
<!-- Project 3: To-Do -->
<div class="proj-img-item" data-proj="3">
<div class="pv-glow" style="background:radial-gradient(circle,#7c3aed,transparent 70%);"></div>
<div class="img-placeholder">
<svg fill="none" height="80" stroke="#a855f7" stroke-width=".8" viewbox="0 0 24 24" width="80"><rect height="16" rx="2" width="16" x="4" y="4"></rect><line x1="8" x2="16" y1="10" y2="10"></line><line x1="8" x2="13" y1="14" y2="14"></line></svg>
<span class="img-label">TO-DO LIST</span>
</div>
</div>
<!-- Project 4: Portfolio -->
<div class="proj-img-item" data-proj="4">
<div class="pv-glow" style="background:radial-gradient(circle,#a855f7,transparent 70%);"></div>
<div class="img-placeholder">
<svg fill="none" height="80" stroke="#a855f7" stroke-width=".8" viewbox="0 0 24 24" width="80"><rect height="16" rx="2" width="20" x="2" y="4"></rect><line x1="2" x2="22" y1="9" y2="9"></line><circle cx="5.5" cy="6.5" r="1"></circle><circle cx="8.5" cy="6.5" r="1"></circle></svg>
<span class="img-label">PORTFOLIO</span>
</div>
</div>
<!-- Project 5: StreamCam -->
<div class="proj-img-item" data-proj="5">
<div class="pv-glow" style="background:radial-gradient(circle,#9333ea,transparent 70%);"></div>
<div class="stream-terminal-wrap">
<div class="stream-window">
<div class="stream-titlebar">
<span class="stream-tab">~/streamcam $ python app.py ×</span>
<div class="stream-winbtns"><span>─</span><span>□</span><span>✕</span></div>
</div>
<div class="stream-feed">
<div class="stream-feed-glow"></div>
<div class="stream-rec"><span class="dot"></span>LIVE</div>
<svg class="stream-cam-icon" fill="none" height="64" stroke="#a855f7" stroke-width=".8" viewbox="0 0 24 24" width="64"><path d="M23 7l-7 5 7 5V7z"></path><rect height="14" rx="2" width="15" x="1" y="5"></rect></svg>
<div class="stream-overlay-label">192.168.1.12:5000/video_feed</div>
</div>
<div class="stream-body">
<p class="atm-line atm-green">* Running on http://0.0.0.0:5000</p>
<p class="atm-line atm-grey">Flask + OpenCV — local network stream active</p>
</div>
</div>
</div>
</div>
<!-- Project 6: Jewellers Rate Portal -->
<div class="proj-img-item" data-proj="6">
<div class="pv-glow" style="background:radial-gradient(circle,#c084fc,transparent 70%);"></div>
<div class="jewel-terminal-wrap">
<div class="jewel-window">
<div class="jewel-titlebar">
<span class="jewel-title-text">Saleem Nadeem Jewellers — Rate Portal</span>
<span class="sms-close">✕</span>
</div>
<div class="jewel-body">
<div class="jewel-row">
<span class="jewel-metal"><span class="jewel-dot" style="background:#f5d142;"></span>Gold (24K / Tola)</span>
<span class="jewel-price">Rs 271,500</span>
</div>
<div class="jewel-row">
<span class="jewel-metal"><span class="jewel-dot" style="background:#facc6b;"></span>Gold (22K / Tola)</span>
<span class="jewel-price">Rs 248,950</span>
</div>
<div class="jewel-row">
<span class="jewel-metal"><span class="jewel-dot" style="background:#d8d8d8;"></span>Silver (Tola)</span>
<span class="jewel-price">Rs 3,240</span>
</div>
<div class="jewel-updated">Last updated: Live — Auto-refreshing</div>
</div>
</div>
</div>
</div>
</div><!-- /proj-img-stage -->
</div><!-- /proj-right-panel -->
</div>
</section><section id="toolkit">
<div class="wrap">
<div class="toolkit-head reveal">
<div>
<span class="eyebrow">My Digital Toolkit / 03</span>
<h2 class="toolkit-h1">THE<br/><span class="l2">FOUNDATION.</span></h2>
</div>
<p class="toolkit-sub">Core languages and concepts I rely on, with new tools added every term.</p>
</div>
<div class="skill-grid">
<div class="skill-card reveal">
<div class="skill-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path></svg></div>
<div class="skill-cat">Core Languages</div>
<div class="skill-row"><div class="sr-top"><span>C++</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="90"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>Python</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="85"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>HTML</span><span>80%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="80"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>CSS</span><span>75%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="75"></div></div></div>
</div>
<div class="skill-card reveal">
<div class="skill-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="3" y="14"></rect><rect height="7" width="7" x="14" y="14"></rect></svg></div>
<div class="skill-cat">CS Fundamentals</div>
<div class="skill-row"><div class="sr-top"><span>OOP</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="90"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>Data Structures</span><span>80%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="80"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>Algorithms</span><span>78%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="78"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>Problem Solving</span><span>88%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="88"></div></div></div>
</div>
<div class="skill-card reveal">
<div class="skill-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"></path></svg></div>
<div class="skill-cat">Currently Learning</div>
<div class="skill-row"><div class="sr-top"><span>Agentic AI</span><span>40%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="40"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>JavaScript</span><span>45%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="45"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>Full-Stack Dev</span><span>35%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="35"></div></div></div>
</div>
<div class="skill-card reveal">
<div class="skill-icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg></div>
<div class="skill-cat">Tools &amp; Workflow</div>
<div class="skill-row"><div class="sr-top"><span>Git &amp; GitHub</span><span>80%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="80"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>VS Code</span><span>90%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="90"></div></div></div>
<div class="skill-row"><div class="sr-top"><span>Vibe Coding</span><span>85%</span></div><div class="skill-bar-track"><div class="skill-bar-fill" data-w="85"></div></div></div>
</div>
</div>
</div>
</section><section id="philosophy">
<div class="wrap">
<h2 class="philo-h1 reveal">DRIVEN BY <span class="accent">CURIOSITY</span>,<br/>BUILT ON FUNDAMENTALS.</h2>
<div class="philo-grid">
<div class="philo-col reveal">
<span class="philo-eyebrow">01 /// The Approach</span>
<h3 class="philo-title">Fundamentals First.</h3>
<p class="philo-text">I believe strong software starts with strong basics — clean OOP design, solid data structures, and algorithms that actually make sense before any framework enters the picture.</p>
</div>
<div class="philo-col reveal">
<span class="philo-eyebrow">02 /// The Mindset</span>
<h3 class="philo-title">Eager To Learn.</h3>
<p class="philo-text">Every project, internship, and training program is a chance to pick up something new — from C++ memory management to the fundamentals of agentic AI systems.</p>
</div>
<div class="philo-col reveal">
<span class="philo-eyebrow">03 /// The Method</span>
<h3 class="philo-title">Build To Understand.</h3>
<p class="philo-text">I learn best by building — whether it's a CLI game in C++ or my own portfolio site, shipping something real teaches more than theory alone ever could.</p>
</div>
</div>
</div>
</section><section id="contact">
<div class="wrap">
<div class="contact-grid reveal">
<div class="reveal">
<h2 class="contact-h1"><span class="ghost">LET'S</span><br/>BUILD <span class="accent">SOMETHING.</span></h2>
<p class="contact-note">I'm currently open to internships, junior dev roles, and collaborative learning projects.</p>
<button class="copy-email-btn" id="copy-email-btn">
<svg fill="none" stroke="currentColor" stroke-width="2.2" viewbox="0 0 24 24"><rect height="14" rx="2" width="18" x="3" y="5"></rect><path d="M3 7l9 6 9-6"></path></svg>
          Copy Email
        </button>
</div>
<div class="social-list reveal">
<a href="http://github.com/subhanbhatti50134-jpg" rel="noopener" target="_blank">GITHUB <svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></a>
<a href="https://www.linkedin.com/in/subhanbhatti50134" rel="noopener" target="_blank">LINKEDIN <svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></a>
<a href="mailto:subhanbhatti50134@gmail.com">EMAIL <svg fill="none" stroke="currentColor" stroke-width="2.3" viewbox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"></path></svg></a>
</div>
</div>
<div class="footer-bar">
<span>© 2026 Subhan Bhatti. All Rights Reserved.</span>
<a href="#hero">Back To Top ↑</a>
<span>Engineered In Pakistan.</span>
</div>
</div>
</section>`;

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const resetScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScrollToTop();
    window.addEventListener('pageshow', resetScrollToTop);
    window.addEventListener('load', resetScrollToTop);

    // Loader
    const pctEl = document.getElementById('pct-num');
    const bar = document.getElementById('loader-bar');
    const loader = document.getElementById('loader');
    let pct = 0;

    const loaderInterval = setInterval(() => {
      pct += Math.floor(Math.random() * 9) + 4;

      if (pct >= 100) {
        pct = 100;
        clearInterval(loaderInterval);
        pctEl.textContent = pct;
        bar.style.width = '100%';
        setTimeout(() => loader.classList.add('done'), 350);
      } else {
        pctEl.textContent = pct;
        bar.style.width = pct + '%';
      }
    }, 110);

    // Header scroll state
    const header = document.getElementById('site-header');
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Navigation overlay
    const overlay = document.getElementById('nav-overlay');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    const openMenu = () => overlay.classList.add('open');
    const closeMenu = () => overlay.classList.remove('open');

    menuOpen.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    // Accordion
    const accItems = document.querySelectorAll('[data-acc]');
    const accCleanups = [];

    accItems.forEach((item) => {
      const toggle = item.querySelector('.acc-toggle');
      const head = item.querySelector('.acc-head');

      const toggleItem = (forceOpen = false) => {
        const wasOpen = item.classList.contains('open');

        accItems.forEach((other) => {
          other.classList.remove('open');
          other.querySelector('.acc-toggle').textContent = '+';
        });

        if (forceOpen || !wasOpen) {
          item.classList.add('open');
          toggle.textContent = '−';
        }
      };

      const onHeadClick = () => toggleItem();
      head.addEventListener('click', onHeadClick);

      let onEnter;
      let onLeave;
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        onEnter = () => toggleItem(true);
        onLeave = () => {
          item.classList.remove('open');
          toggle.textContent = '+';
        };
        item.addEventListener('mouseenter', onEnter);
        item.addEventListener('mouseleave', onLeave);
      }

      accCleanups.push(() => {
        head.removeEventListener('click', onHeadClick);
        if (onEnter) item.removeEventListener('mouseenter', onEnter);
        if (onLeave) item.removeEventListener('mouseleave', onLeave);
      });
    });

    // Project carousel
    const infoItems = document.querySelectorAll('.proj-slide-info');
    const imgItems = document.querySelectorAll('.proj-img-item');
    const dotsWrap = document.getElementById('proj-dots');
    const numEl = document.getElementById('proj-num');
    const prevBtn = document.getElementById('proj-prev');
    const nextBtn = document.getElementById('proj-next');
    const total = infoItems.length;
    let current = 0;
    let isAnimating = false;
    let projectTimeout;

    infoItems.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'pdot' + (i === 0 ? ' active' : '');
      dotsWrap.appendChild(d);
    });

    const dots = dotsWrap.querySelectorAll('.pdot');

    const updateProjectUI = () => {
      numEl.textContent =
        String(current + 1).padStart(2, '0') +
        ' / ' +
        String(total).padStart(2, '0');

      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
      prevBtn.classList.toggle('disabled', current === 0);
      nextBtn.classList.toggle('disabled', current === total - 1);
    };

    const goTo = (idx) => {
      if (isAnimating || idx === current || idx < 0 || idx >= total) return;

      isAnimating = true;

      const prevIdx = current;
      const goingForward = idx > prevIdx;
      const exitClass = goingForward ? 'exit-up' : 'exit-down';

      infoItems[prevIdx].classList.remove('active');
      infoItems[prevIdx].classList.add(exitClass);
      imgItems[prevIdx].classList.remove('active');

      current = idx;

      projectTimeout = setTimeout(() => {
        infoItems[prevIdx].classList.remove(exitClass);
        infoItems[current].classList.add('active');
        imgItems[current].classList.add('active');
        updateProjectUI();

        projectTimeout = setTimeout(() => {
          isAnimating = false;
        }, 520);
      }, 230);
    };

    updateProjectUI();

    const onPrev = () => {
      if (current > 0) goTo(current - 1);
    };

    const onNext = () => {
      if (current < total - 1) goTo(current + 1);
    };

    prevBtn.addEventListener('click', onPrev);
    nextBtn.addEventListener('click', onNext);

    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el, index) => {
      el.style.setProperty('--delay', `${Math.min(index * 90, 540)}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    // Skill bars
    const skillCards = document.querySelectorAll('.skill-card');
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach((skillBar) => {
              skillBar.style.width = skillBar.dataset.w + '%';
            });
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    skillCards.forEach((card) => skillObserver.observe(card));

    // Copy email
    const copyBtn = document.getElementById('copy-email-btn');
    const originalCopyContent = copyBtn.innerHTML;
    let copyTimeout;

    const copyEmail = () => {
      navigator.clipboard
        .writeText('subhanbhatti50134@gmail.com')
        .then(() => {
          copyBtn.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M20 6L9 17l-5-5"/></svg> Copied!';

          copyTimeout = setTimeout(() => {
            copyBtn.innerHTML = originalCopyContent;
          }, 2000);
        })
        .catch(() => {
          alert('subhanbhatti50134@gmail.com');
        });
    };

    copyBtn.addEventListener('click', copyEmail);

    return () => {
      clearInterval(loaderInterval);
      clearTimeout(projectTimeout);
      clearTimeout(copyTimeout);

      window.removeEventListener('pageshow', resetScrollToTop);
      window.removeEventListener('load', resetScrollToTop);
      window.removeEventListener('scroll', handleScroll);

      menuOpen.removeEventListener('click', openMenu);
      menuClose.removeEventListener('click', closeMenu);
      navLinks.forEach((link) => link.removeEventListener('click', closeMenu));

      accCleanups.forEach((cleanup) => cleanup());

      prevBtn.removeEventListener('click', onPrev);
      nextBtn.removeEventListener('click', onNext);

      revealObserver.disconnect();
      skillObserver.disconnect();

      copyBtn.removeEventListener('click', copyEmail);
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
  );
}
