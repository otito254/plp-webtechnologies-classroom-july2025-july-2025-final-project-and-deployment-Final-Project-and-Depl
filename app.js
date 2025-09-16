/**
 * Cloud AI DevSecOps Portfolio Website JavaScript
 * Handles navigation, project filtering, blog functionality, and form validation
 */

// Project Data
const projectData = [
  {
    id: 1,
    name: "CloudMind AI Hub",
    category: "cloud-ai",
    tagline: "Multi-cloud AI model deployment & marketplace",
    tech_stack: ["AWS", "OCI", "Docker", "Kubernetes", "TensorFlow"],
    description: "Enterprise-grade AI model deployment platform supporting multiple cloud providers with automated scaling and marketplace functionality.",
    features: ["Multi-cloud deployment", "Auto-scaling", "Model marketplace", "API management"],
    demo_url: "https://cloudmind-demo.com",
    github_url: "https://github.com/username/cloudmind-ai-hub",
    icon: "🧠"
  },
  {
    id: 2,
    name: "SecureChat Pro",
    category: "cloud-ai",
    tagline: "Enterprise messaging with end-to-end encryption",
    tech_stack: ["Node.js", "Redis", "WebRTC", "JWT", "AES-256"],
    description: "Secure enterprise messaging platform with end-to-end encryption, real-time communication, and enterprise-grade security features.",
    features: ["End-to-end encryption", "Real-time messaging", "File sharing", "Admin controls"],
    demo_url: "https://securechat-demo.com",
    github_url: "https://github.com/username/securechat-pro",
    icon: "💬"
  },
  {
    id: 3,
    name: "WorkflowGenius",
    category: "ai-agents",
    tagline: "Oracle Fusion AI business process automation",
    tech_stack: ["Oracle Fusion", "AI Agent Studio", "REST APIs", "Python"],
    description: "Intelligent workflow automation system built on Oracle Fusion Cloud with AI agents for business process optimization.",
    features: ["AI-powered automation", "Oracle Fusion integration", "Process optimization", "Analytics dashboard"],
    demo_url: "https://workflowgenius-demo.com",
    github_url: "https://github.com/username/workflow-genius",
    icon: "⚡"
  },
  {
    id: 4,
    name: "DataStream Analytics",
    category: "ai-agents",
    tagline: "Real-time analytics dashboard with ML insights",
    tech_stack: ["Apache Kafka", "Spark", "React", "D3.js", "PostgreSQL"],
    description: "Real-time data processing and visualization platform with machine learning insights and predictive analytics.",
    features: ["Real-time processing", "ML insights", "Interactive dashboards", "Predictive analytics"],
    demo_url: "https://datastream-demo.com",
    github_url: "https://github.com/username/datastream-analytics",
    icon: "📊"
  },
  {
    id: 5,
    name: "SecureCI Pipeline",
    category: "devsecops",
    tagline: "Automated security scanning & CI/CD",
    tech_stack: ["Jenkins", "Docker", "SonarQube", "OWASP ZAP", "Terraform"],
    description: "Complete DevSecOps pipeline with automated security scanning, vulnerability assessment, and compliance reporting.",
    features: ["Security automation", "Vulnerability scanning", "Compliance reporting", "Pipeline integration"],
    demo_url: "https://secureci-demo.com",
    github_url: "https://github.com/username/secure-ci-pipeline",
    icon: "🔒"
  },
  {
    id: 6,
    name: "CloudGuard Monitor",
    category: "devsecops",
    tagline: "AI-powered cloud monitoring & alerting",
    tech_stack: ["Prometheus", "Grafana", "Python", "AWS CloudWatch", "ML"],
    description: "Intelligent cloud monitoring solution with AI-powered anomaly detection and predictive alerting capabilities.",
    features: ["AI anomaly detection", "Predictive alerts", "Multi-cloud monitoring", "Custom dashboards"],
    demo_url: "https://cloudguard-demo.com",
    github_url: "https://github.com/username/cloudguard-monitor",
    icon: "👁️"
  },
  {
    id: 7,
    name: "TalentFlow HRM",
    category: "enterprise",
    tagline: "Modern HR management system",
    tech_stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    description: "Comprehensive HR management platform with employee onboarding, performance tracking, and analytics.",
    features: ["Employee management", "Performance analytics", "Onboarding workflows", "Reporting dashboard"],
    demo_url: "https://talentflow-demo.com",
    github_url: "https://github.com/username/talentflow-hrm",
    icon: "👥"
  },
  {
    id: 8,
    name: "EconoTrack Expense Manager",
    category: "enterprise",
    tagline: "AI-enabled expense tracking",
    tech_stack: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "AI/ML"],
    description: "Smart expense management system with AI-powered receipt scanning and automated categorization.",
    features: ["AI receipt scanning", "Auto-categorization", "Expense analytics", "Approval workflows"],
    demo_url: "https://econotrack-demo.com",
    github_url: "https://github.com/username/econotrack",
    icon: "💰"
  },
  {
    id: 9,
    name: "ShopSmart AI",
    category: "ecommerce",
    tagline: "Personalized shopping with AI recommendations",
    tech_stack: ["React", "Python", "TensorFlow", "Redis", "PostgreSQL"],
    description: "E-commerce platform with AI-driven product recommendations and personalized shopping experiences.",
    features: ["AI recommendations", "Personalization", "Real-time analytics", "Inventory management"],
    demo_url: "https://shopsmart-demo.com",
    github_url: "https://github.com/username/shopsmart-ai",
    icon: "🛒"
  },
  {
    id: 10,
    name: "InventoryIQ",
    category: "ecommerce",
    tagline: "Predictive inventory forecasting platform",
    tech_stack: ["Angular", "Python", "Scikit-learn", "MySQL", "Docker"],
    description: "Advanced inventory management with predictive analytics and automated reorder suggestions.",
    features: ["Demand forecasting", "Auto-reordering", "Supply chain optimization", "Analytics dashboard"],
    demo_url: "https://inventoryiq-demo.com",
    github_url: "https://github.com/username/inventoryiq",
    icon: "📦"
  },
  {
    id: 11,
    name: "OmniCloud Orchestrator",
    category: "integration",
    tagline: "Multi-cloud orchestration & cost optimization",
    tech_stack: ["Terraform", "Kubernetes", "AWS", "OCI", "Python"],
    description: "Unified platform for managing and optimizing resources across multiple cloud providers.",
    features: ["Multi-cloud management", "Cost optimization", "Resource automation", "Compliance monitoring"],
    demo_url: "https://omnicloud-demo.com",
    github_url: "https://github.com/username/omnicloud-orchestrator",
    icon: "🌐"
  },
  {
    id: 12,
    name: "AgentFlow Studio",
    category: "integration",
    tagline: "Visual AI-agent builder for enterprise workflows",
    tech_stack: ["React", "Node.js", "AI Agent Studio", "MongoDB", "WebSockets"],
    description: "Visual development platform for creating and deploying AI agents in enterprise environments.",
    features: ["Visual workflow builder", "AI agent deployment", "Real-time monitoring", "Enterprise integration"],
    demo_url: "https://agentflow-demo.com",
    github_url: "https://github.com/username/agentflow-studio",
    icon: "🤖"
  }
];

// Blog Data
const blogData = [
  {
    id: 1,
    title: "Building Secure DevSecOps Pipelines in 2025",
    excerpt: "Learn how to implement security-first CI/CD pipelines with automated scanning and compliance reporting.",
    tags: ["DevSecOps", "Security", "CI/CD"],
    date: "2025-09-10",
    read_time: "8 min",
    content: "Comprehensive guide to modern DevSecOps practices..."
  },
  {
    id: 2,
    title: "Prompt Engineering Best Practices for Enterprise AI",
    excerpt: "Advanced techniques for designing effective prompts for large language models in enterprise environments.",
    tags: ["AI", "Prompt Engineering", "LLM"],
    date: "2025-09-05",
    read_time: "12 min",
    content: "Deep dive into enterprise prompt engineering strategies..."
  },
  {
    id: 3,
    title: "Multi-Cloud AI Deployments with Oracle and AWS",
    excerpt: "Strategies for deploying AI workloads across multiple cloud providers for optimal performance and cost efficiency.",
    tags: ["Cloud", "AI", "Multi-Cloud"],
    date: "2025-08-28",
    read_time: "10 min",
    content: "Complete guide to multi-cloud AI architecture..."
  },
  {
    id: 4,
    title: "Implementing Zero-Trust Architecture in Cloud Environments",
    excerpt: "How to design and implement zero-trust security models for cloud-native applications.",
    tags: ["Security", "Cloud", "DevSecOps"],
    date: "2025-08-20",
    read_time: "15 min",
    content: "Zero-trust principles for modern cloud security..."
  },
  {
    id: 5,
    title: "AI-Driven Infrastructure Monitoring and Alerting",
    excerpt: "Leveraging machine learning for intelligent infrastructure monitoring and predictive maintenance.",
    tags: ["AI", "DevOps", "Monitoring"],
    date: "2025-08-15",
    read_time: "9 min",
    content: "AI-powered monitoring solutions and implementation..."
  },
  {
    id: 6,
    title: "Kubernetes Security Hardening Guide",
    excerpt: "Essential security practices and configurations for production Kubernetes clusters.",
    tags: ["Security", "Kubernetes", "DevSecOps"],
    date: "2025-08-10",
    read_time: "11 min",
    content: "Complete Kubernetes security hardening checklist..."
  }
];

// Application State
const state = {
  currentSection: 'home',
  activeFilter: 'all',
  activeBlogFilter: 'all',
  isMenuOpen: false,
  filteredProjects: [...projectData],
  filteredBlogs: [...blogData]
};

// DOM Elements
let elements = {};

/**
 * Initialize DOM elements
 */
function initializeElements() {
  elements = {
    // Navigation
    navLinks: document.querySelectorAll('.nav-link'),
    mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
    nav: document.querySelector('.nav'),
    
    // Hero section
    viewWorkBtn: document.querySelector('.view-work-btn'),
    
    // Portfolio
    portfolioGrid: document.getElementById('portfolioGrid'),
    portfolioFilters: document.querySelectorAll('.filter-btn'),
    
    // Blog
    blogGrid: document.getElementById('blogGrid'),
    blogSearch: document.getElementById('blogSearch'),
    blogTags: document.querySelectorAll('.tag-btn'),
    
    // Contact form
    contactForm: document.getElementById('contactForm'),
    
    // Sections
    sections: document.querySelectorAll('section[id]')
  };
}

/**
 * Navigation System
 */
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    console.log('🧭 Initializing navigation...');
    
    // Add click listeners to navigation links
    elements.navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(`Nav link ${index} clicked, href: ${href}`);
        
        if (href && href.startsWith('#')) {
          const targetSection = href.substring(1);
          console.log(`Scrolling to section: ${targetSection}`);
          this.scrollToSection(targetSection);
          this.setActiveLink(link);
          this.closeMobileMenu();
        }
      });
    });

    // View Work button
    if (elements.viewWorkBtn) {
      elements.viewWorkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('View Work button clicked');
        this.scrollToSection('portfolio');
      });
    } else {
      console.warn('View Work button not found');
    }

    // Handle mobile menu
    this.setupMobileMenu();

    // Intersection Observer for active section tracking
    this.setupIntersectionObserver();
  }

  scrollToSection(sectionId) {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const section = document.getElementById(sectionId);
    
    if (section) {
      console.log(`Section found: ${sectionId}`);
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const sectionTop = section.offsetTop - headerHeight;
      
      console.log(`Scrolling to position: ${sectionTop}`);
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      state.currentSection = sectionId;
      
      // Update active nav link
      const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (targetLink) {
        this.setActiveLink(targetLink);
      }
    } else {
      console.error(`Section not found: ${sectionId}`);
    }
  }

  setActiveLink(activeLink) {
    elements.navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
    console.log(`Active link set to: ${activeLink.textContent}`);
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          const sectionId = entry.target.id;
          state.currentSection = sectionId;
          
          // Update active nav link
          const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
          if (activeLink) {
            this.setActiveLink(activeLink);
          }
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    });

    elements.sections.forEach(section => {
      observer.observe(section);
    });
  }

  setupMobileMenu() {
    if (!elements.mobileMenuToggle) {
      console.warn('Mobile menu toggle not found');
      return;
    }

    console.log('🔧 Setting up mobile menu');

    elements.mobileMenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Mobile menu toggle clicked');
      this.toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (state.isMenuOpen && 
          !elements.nav.contains(e.target) && 
          !elements.mobileMenuToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.isMenuOpen) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    if (state.isMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    console.log('📱 Opening mobile menu');
    elements.nav.classList.add('active');
    elements.mobileMenuToggle.classList.add('active');
    state.isMenuOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    console.log('📱 Closing mobile menu');
    elements.nav.classList.remove('active');
    elements.mobileMenuToggle.classList.remove('active');
    state.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}

/**
 * Portfolio System
 */
class Portfolio {
  constructor() {
    this.init();
  }

  init() {
    console.log('💼 Initializing portfolio...');
    this.renderProjects();
    this.setupFilters();
  }

  renderProjects(projects = projectData) {
    if (!elements.portfolioGrid) {
      console.warn('Portfolio grid not found');
      return;
    }

    console.log(`Rendering ${projects.length} projects`);

    elements.portfolioGrid.innerHTML = projects.map(project => `
      <div class="project-card" data-category="${project.category}">
        <div class="project-image">
          ${project.icon}
        </div>
        <div class="project-content">
          <h3>${project.name}</h3>
          <p class="project-tagline">${project.tagline}</p>
          <div class="tech-stack">
            ${project.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <p class="project-description">${project.description}</p>
          <div class="project-links">
            <a href="${project.demo_url}" target="_blank" class="project-link" rel="noopener">View Demo</a>
            <a href="${project.github_url}" target="_blank" class="project-link" rel="noopener">GitHub</a>
          </div>
        </div>
      </div>
    `).join('');

    // Trigger animation for new projects
    this.animateProjectCards();
  }

  setupFilters() {
    if (!elements.portfolioFilters.length) {
      console.warn('Portfolio filters not found');
      return;
    }

    console.log(`Setting up ${elements.portfolioFilters.length} portfolio filters`);

    elements.portfolioFilters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        e.preventDefault();
        const filterValue = filter.getAttribute('data-filter');
        console.log(`Portfolio filter clicked: ${filterValue}`);
        this.filterProjects(filterValue);
        this.setActiveFilter(filter);
      });
    });
  }

  filterProjects(filterValue) {
    state.activeFilter = filterValue;
    console.log(`Filtering projects by: ${filterValue}`);
    
    if (filterValue === 'all') {
      state.filteredProjects = [...projectData];
    } else {
      state.filteredProjects = projectData.filter(project => project.category === filterValue);
    }
    
    console.log(`Filtered to ${state.filteredProjects.length} projects`);
    this.renderProjects(state.filteredProjects);
  }

  setActiveFilter(activeFilter) {
    elements.portfolioFilters.forEach(filter => filter.classList.remove('active'));
    activeFilter.classList.add('active');
    console.log(`Active portfolio filter: ${activeFilter.textContent}`);
  }

  animateProjectCards() {
    const cards = elements.portfolioGrid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
}

/**
 * Blog System
 */
class Blog {
  constructor() {
    this.init();
  }

  init() {
    console.log('📝 Initializing blog...');
    this.renderBlogPosts();
    this.setupSearch();
    this.setupTagFilters();
  }

  renderBlogPosts(posts = blogData) {
    if (!elements.blogGrid) {
      console.warn('Blog grid not found');
      return;
    }

    console.log(`Rendering ${posts.length} blog posts`);

    elements.blogGrid.innerHTML = posts.map(post => `
      <article class="blog-card">
        <h3>${post.title}</h3>
        <div class="blog-meta">
          <span>${post.date}</span>
          <span>${post.read_time}</span>
        </div>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-tags-list">
          ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
        </div>
      </article>
    `).join('');

    // Trigger animation
    this.animateBlogCards();
  }

  setupSearch() {
    if (!elements.blogSearch) {
      console.warn('Blog search not found');
      return;
    }

    console.log('🔍 Setting up blog search');

    elements.blogSearch.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      console.log(`Blog search: ${searchTerm}`);
      this.filterBlogPosts(searchTerm, state.activeBlogFilter);
    });
  }

  setupTagFilters() {
    if (!elements.blogTags.length) {
      console.warn('Blog tags not found');
      return;
    }

    console.log(`Setting up ${elements.blogTags.length} blog tag filters`);

    elements.blogTags.forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.preventDefault();
        const tagValue = tag.getAttribute('data-tag');
        console.log(`Blog tag clicked: ${tagValue}`);
        this.filterByTag(tagValue);
        this.setActiveTag(tag);
      });
    });
  }

  filterBlogPosts(searchTerm = '', tagFilter = 'all') {
    let filtered = [...blogData];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Filter by tag
    if (tagFilter !== 'all') {
      filtered = filtered.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === tagFilter.toLowerCase())
      );
    }

    console.log(`Filtered to ${filtered.length} blog posts`);
    state.filteredBlogs = filtered;
    this.renderBlogPosts(filtered);
  }

  filterByTag(tagValue) {
    state.activeBlogFilter = tagValue;
    const searchTerm = elements.blogSearch ? elements.blogSearch.value.toLowerCase() : '';
    this.filterBlogPosts(searchTerm, tagValue);
  }

  setActiveTag(activeTag) {
    elements.blogTags.forEach(tag => tag.classList.remove('active'));
    activeTag.classList.add('active');
    console.log(`Active blog tag: ${activeTag.textContent}`);
  }

  animateBlogCards() {
    const cards = elements.blogGrid.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
}

/**
 * Contact Form Validation
 */
class ContactForm {
  constructor() {
    this.validationRules = {
      name: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
      message: {
        required: true,
        minLength: 10
      }
    };
    this.init();
  }

  init() {
    if (!elements.contactForm) {
      console.warn('Contact form not found');
      return;
    }

    console.log('📞 Initializing contact form');

    elements.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Contact form submitted');
      this.validateAndSubmitForm();
    });

    // Real-time validation
    const inputs = elements.contactForm.querySelectorAll('.form-control');
    console.log(`Found ${inputs.length} form inputs`);
    
    inputs.forEach((input, index) => {
      input.addEventListener('blur', () => {
        console.log(`Input ${index} blurred: ${input.name}`);
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        this.clearError(input);
      });
    });
  }

  validateAndSubmitForm() {
    const formData = new FormData(elements.contactForm);
    let isValid = true;
    let errors = [];

    console.log('Validating form fields...');

    // Validate each field
    for (const [fieldName, rules] of Object.entries(this.validationRules)) {
      const field = elements.contactForm.querySelector(`[name="${fieldName}"]`);
      if (field) {
        const fieldValue = formData.get(fieldName);
        console.log(`Validating ${fieldName}: "${fieldValue}"`);
        
        if (!this.validateField(field, fieldValue, rules)) {
          isValid = false;
          errors.push(fieldName);
        }
      } else {
        console.warn(`Field not found: ${fieldName}`);
      }
    }

    console.log(`Form validation result: ${isValid ? 'VALID' : 'INVALID'}`);
    if (errors.length > 0) {
      console.log(`Validation errors in: ${errors.join(', ')}`);
    }

    if (isValid) {
      this.submitForm(formData);
    } else {
      console.log('Form submission blocked due to validation errors');
    }
  }

  validateField(field, value = null, rules = null) {
    const fieldName = field.getAttribute('name');
    const fieldValue = value !== null ? String(value).trim() : field.value.trim();
    const fieldRules = rules || this.validationRules[fieldName];
    
    if (!fieldRules) return true;

    // Clear previous errors
    this.clearError(field);

    // Required validation
    if (fieldRules.required && !fieldValue) {
      this.showError(field, `${this.getFieldLabel(field)} is required`);
      return false;
    }

    // Skip other validations if field is empty and not required
    if (!fieldValue) return true;

    // Minimum length validation
    if (fieldRules.minLength && fieldValue.length < fieldRules.minLength) {
      this.showError(field, `${this.getFieldLabel(field)} must be at least ${fieldRules.minLength} characters long`);
      return false;
    }

    // Pattern validation
    if (fieldRules.pattern && !fieldRules.pattern.test(fieldValue)) {
      let errorMessage;
      switch (fieldName) {
        case 'email':
          errorMessage = 'Please enter a valid email address';
          break;
        case 'name':
          errorMessage = 'Name should only contain letters and spaces';
          break;
        default:
          errorMessage = `Please enter a valid ${this.getFieldLabel(field).toLowerCase()}`;
      }
      this.showError(field, errorMessage);
      return false;
    }

    return true;
  }

  showError(field, message) {
    field.classList.add('error');
    const errorElement = document.getElementById(`${field.getAttribute('name')}Error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
      console.log(`Showing error for ${field.name}: ${message}`);
    } else {
      console.warn(`Error element not found for field: ${field.name}`);
    }
  }

  clearError(field) {
    field.classList.remove('error');
    const errorElement = document.getElementById(`${field.getAttribute('name')}Error`);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  }

  getFieldLabel(field) {
    const label = field.previousElementSibling;
    return label && label.tagName === 'LABEL' ? 
           label.textContent.replace('*', '').trim() : 
           field.getAttribute('name');
  }

  async submitForm(formData) {
    const submitButton = elements.contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    console.log('📤 Submitting form...');
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('✅ Form submitted successfully:', Object.fromEntries(formData));
      
      this.showSuccessMessage();
      elements.contactForm.reset();
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      this.showErrorMessage();
    } finally {
      // Restore button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }

  showSuccessMessage() {
    this.showStatusMessage('✓ Thank you! Your message has been sent successfully.', 'success');
  }

  showErrorMessage() {
    this.showStatusMessage('✗ Sorry, there was an error sending your message. Please try again.', 'error');
  }

  showStatusMessage(message, type) {
    // Remove any existing status messages
    const existingMessage = elements.contactForm.querySelector('.status-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const statusMessage = document.createElement('div');
    statusMessage.className = `status status--${type} status-message`;
    statusMessage.innerHTML = message;
    statusMessage.style.marginTop = 'var(--space-16)';
    
    elements.contactForm.appendChild(statusMessage);
    
    setTimeout(() => {
      if (statusMessage.parentNode) {
        statusMessage.remove();
      }
    }, 5000);
  }
}

/**
 * Scroll Animations
 */
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    // Only run animations if user hasn't requested reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.cert-card, .service-card, .skill-category, .contact-card');
    animatedElements.forEach(el => observer.observe(el));
  }
}

/**
 * Application Initialization
 */
class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }

  start() {
    console.log('🚀 Cloud AI DevSecOps Portfolio Initializing...');
    
    // Initialize DOM elements first
    initializeElements();
    
    // Verify critical elements exist
    if (!elements.sections.length) {
      console.error('❌ No sections found! Check HTML structure.');
      return;
    }
    
    // Initialize all modules
    try {
      console.log('🔧 Initializing modules...');
      
      this.navigation = new Navigation();
      this.portfolio = new Portfolio();
      this.blog = new Blog();
      this.contactForm = new ContactForm();
      this.scrollAnimations = new ScrollAnimations();
      
      // Set initial active nav link for home section
      const homeLink = document.querySelector('.nav-link[href="#home"]');
      if (homeLink) {
        homeLink.classList.add('active');
        console.log('🏠 Home link set as active');
      }
      
      console.log('✅ All modules initialized successfully');
      console.log('📊 Elements found:', {
        sections: elements.sections.length,
        navLinks: elements.navLinks.length,
        portfolioFilters: elements.portfolioFilters.length,
        blogTags: elements.blogTags.length,
        hasContactForm: !!elements.contactForm,
        hasMobileToggle: !!elements.mobileMenuToggle,
        hasViewWorkBtn: !!elements.viewWorkBtn,
        hasPortfolioGrid: !!elements.portfolioGrid,
        hasBlogGrid: !!elements.blogGrid
      });
      
      console.log('📈 Data loaded:', {
        projects: projectData.length,
        blogPosts: blogData.length
      });
      
    } catch (error) {
      console.error('❌ Initialization error:', error);
    }
  }
}

// Start the application
const app = new App();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { App, Navigation, Portfolio, Blog, ContactForm };
}