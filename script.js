// AI Tools Hub - shared JavaScript for all pages

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Active navbar link
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

// Dynamic year
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Home page search
const homeSearch = document.getElementById("homeSearch");
const homeToolGrid = document.getElementById("homeToolGrid");
const homeEmptyState = document.getElementById("homeEmptyState");

if (homeSearch && homeToolGrid) {
  homeSearch.addEventListener("input", () => {
    const query = homeSearch.value.trim().toLowerCase();
    const cards = homeToolGrid.querySelectorAll(".tool-card");
    let visibleCount = 0;

    cards.forEach((card) => {
      const text = `${card.dataset.title || ""} ${card.innerText}`.toLowerCase();
      const isVisible = text.includes(query);
      card.style.display = isVisible ? "block" : "none";
      if (isVisible) visibleCount += 1;
    });

    if (homeEmptyState) {
      homeEmptyState.style.display = visibleCount === 0 ? "block" : "none";
    }
  });
}

// Tools page filtering and sorting
const toolSearch = document.getElementById("toolSearch");
const toolSort = document.getElementById("toolSort");
const toolsGrid = document.getElementById("toolsGrid");
const toolsEmptyState = document.getElementById("toolsEmptyState");
const chips = document.querySelectorAll(".chip[data-filter]");
let activeFilter = "all";

function updateTools() {
  if (!toolsGrid) return;

  const query = toolSearch ? toolSearch.value.trim().toLowerCase() : "";
  const cards = Array.from(toolsGrid.querySelectorAll(".detailed-tool"));
  let visibleCount = 0;

  cards.forEach((card) => {
    const searchableText = [
      card.dataset.title,
      card.dataset.category,
      card.dataset.group,
      card.dataset.pricing,
      card.dataset.level,
      card.dataset.summary,
      card.innerText
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(query);
    const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
    const isVisible = matchesSearch && matchesFilter;

    card.style.display = isVisible ? "block" : "none";
    if (isVisible) visibleCount += 1;
  });

  if (toolsEmptyState) {
    toolsEmptyState.style.display = visibleCount === 0 ? "block" : "none";
  }
}

function sortTools() {
  if (!toolsGrid || !toolSort) return;

  const cards = Array.from(toolsGrid.querySelectorAll(".detailed-tool"));
  const sortValue = toolSort.value;

  if (sortValue === "name") {
    cards.sort((a, b) => (a.dataset.title || "").localeCompare(b.dataset.title || ""));
  }

  if (sortValue === "rating" || sortValue === "default") {
    cards.sort((a, b) => Number(b.dataset.rating || 0) - Number(a.dataset.rating || 0));
  }

  cards.forEach((card) => toolsGrid.appendChild(card));
  updateTools();
}

if (toolSearch) {
  toolSearch.addEventListener("input", updateTools);
}

if (toolSort) {
  toolSort.addEventListener("change", sortTools);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    updateTools();
  });
});

document.querySelectorAll("[data-scroll-filter]").forEach((card) => {
  card.addEventListener("click", () => {
    const filterValue = card.dataset.scrollFilter;
    const targetChip = document.querySelector(`.chip[data-filter="${filterValue}"]`);
    if (targetChip) targetChip.click();
    document.getElementById("toolsGrid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Tool details modal
const toolModal = document.getElementById("toolModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");
const modalMeta = document.getElementById("modalMeta");
const modalVisit = document.getElementById("modalVisit");
const modalGroup = document.getElementById("modalGroup");

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".detailed-tool");
    if (!card) return;

    const title = card.dataset.title || button.dataset.openModal || "Tool";
    const summary = card.dataset.summary || "This tool can improve productivity and workflow quality.";
    const pricing = card.dataset.pricing || "Pricing not listed";
    const level = card.dataset.level || "General";
    const rating = card.dataset.rating || "-";
    const group = card.dataset.group || "Tool details";
    const url = card.dataset.url || "#";

    if (modalGroup) modalGroup.textContent = group;
    if (modalTitle) modalTitle.textContent = title;
    if (modalText) modalText.textContent = summary;
    if (modalMeta) {
      modalMeta.innerHTML = `
        <span>${pricing}</span>
        <span>${level}</span>
        <span>Hub score ${rating}</span>
      `;
    }
    if (modalVisit) modalVisit.href = url;

    if (toolModal) {
      toolModal.classList.add("active");
      toolModal.setAttribute("aria-hidden", "false");
    }
  });
});

function closeModal() {
  if (!toolModal) return;
  toolModal.classList.remove("active");
  toolModal.setAttribute("aria-hidden", "true");
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (toolModal) {
  toolModal.addEventListener("click", (event) => {
    if (event.target === toolModal) closeModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// Accordion
const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const button = accordion.querySelector(".accordion-btn");
  if (!button) return;
  button.addEventListener("click", () => {
    accordions.forEach((item) => {
      if (item !== accordion) item.classList.remove("active");
    });
    accordion.classList.toggle("active");
  });
});

// Blog page article rendering, filters and full article modal
const blogArticles = [
  {
    id: "ai-tools-productivity",
    title: "Top AI tools for daily productivity",
    category: "tools",
    label: "Tools",
    readTime: "5 min read",
    date: "2026-04-30",
    summary: "Compare AI assistants for notes, scheduling, email drafting, research and document summarization.",
    content: `
      <p>Productivity tools should reduce repetitive work instead of adding another dashboard to manage. For most users, the strongest setup includes one assistant for writing, one note summarizer, one calendar/task tool and one research tool.</p>
      <h3>Recommended workflow</h3>
      <ul>
        <li>Use an AI assistant to draft emails, outlines and quick summaries.</li>
        <li>Use a meeting-note tool to convert calls into action items.</li>
        <li>Use a research summarizer for long PDFs, reports and webpages.</li>
        <li>Use automation tools to connect forms, sheets and email alerts.</li>
      </ul>
      <p>Before using any productivity platform, check export options, privacy settings and whether the tool supports your existing workflow.</p>
    `
  },
  {
    id: "seo-content-ai-safely",
    title: "Writing SEO content with AI safely",
    category: "marketing",
    label: "Digital Marketing",
    readTime: "6 min read",
    date: "2026-04-29",
    summary: "Use AI for outlines, keyword clusters and drafts while keeping factual verification and human editing.",
    content: `
      <p>AI can accelerate SEO writing, but it should not replace editorial judgment. A practical SEO workflow starts with search intent, keyword grouping and competitor review before generating a draft.</p>
      <h3>Safe SEO workflow</h3>
      <ul>
        <li>Create keyword clusters instead of targeting one isolated keyword.</li>
        <li>Generate an outline based on user intent.</li>
        <li>Write the first draft with AI, then verify facts manually.</li>
        <li>Add screenshots, examples, tables and original experience.</li>
      </ul>
      <p>The strongest articles combine AI speed with human expertise, examples and source verification.</p>
    `
  },
  {
    id: "web-development-ai-stack",
    title: "Best AI workflow for web development projects",
    category: "web",
    label: "Web Dev",
    readTime: "7 min read",
    date: "2026-04-28",
    summary: "A basic-to-advanced workflow for using AI in HTML, CSS, JavaScript, testing and deployment.",
    content: `
      <p>For web development, AI is most useful when the task is broken into small modules: layout, component behavior, validation, accessibility and deployment. Do not ask AI to build the full product in one prompt.</p>
      <h3>Basic to advanced workflow</h3>
      <ul>
        <li><strong>Basic:</strong> Generate page sections, responsive CSS and simple JavaScript interactions.</li>
        <li><strong>Intermediate:</strong> Add filters, search, modals, API calls and form validation.</li>
        <li><strong>Advanced:</strong> Add authentication, database storage, admin dashboards and hosting automation.</li>
      </ul>
      <p>For this AI Tools Hub project, Firebase Hosting should be used first. Firestore and authentication can be added later for dynamic tools, contact messages and blog posting.</p>
    `
  },
  {
    id: "urdu-english-ai-writing",
    title: "AI tools for English and Urdu text writing",
    category: "writing",
    label: "English/Urdu",
    readTime: "6 min read",
    date: "2026-04-27",
    summary: "Use AI for English rewriting, Urdu drafting, translation, captions and professional tone improvement.",
    content: `
      <p>English and Urdu writing require different handling. English tools are usually stronger for grammar, structure and professional tone, while Urdu content needs careful review for script quality, idioms and natural phrasing.</p>
      <h3>Useful tasks</h3>
      <ul>
        <li>English grammar correction and email polishing.</li>
        <li>Urdu social media captions and product descriptions.</li>
        <li>Roman Urdu to English conversion.</li>
        <li>English to Urdu explanation for educational content.</li>
      </ul>
      <p>Always review Urdu output manually because machine-generated Urdu can sound unnatural or overly literal.</p>
    `
  },
  {
    id: "video-creation-ai-tools",
    title: "AI video creation workflow for beginners",
    category: "video",
    label: "Video Creation",
    readTime: "7 min read",
    date: "2026-04-26",
    summary: "Plan scripts, scenes, voiceover, captions and short-form videos using AI-assisted tools.",
    content: `
      <p>AI video creation becomes easier when the process is separated into script, storyboard, voiceover, visuals, editing and captions. A single tool rarely handles all stages perfectly.</p>
      <h3>Recommended process</h3>
      <ul>
        <li>Write a short script with a clear hook.</li>
        <li>Generate a scene-by-scene storyboard.</li>
        <li>Create voiceover using a text-to-speech tool.</li>
        <li>Add captions, background music and transitions.</li>
        <li>Export in vertical format for TikTok, Shorts and Reels.</li>
      </ul>
      <p>For professional work, check license rules for generated voice, images and music.</p>
    `
  },
  {
    id: "chatbot-setup-checklist",
    title: "AI chatbot setup checklist for business websites",
    category: "business",
    label: "Business",
    readTime: "6 min read",
    date: "2026-04-25",
    summary: "Plan knowledge base, escalation rules, analytics, privacy policy and maintenance cycle.",
    content: `
      <p>A chatbot should answer common questions, collect leads and escalate complex cases. It should not pretend to solve every business problem automatically.</p>
      <h3>Checklist</h3>
      <ul>
        <li>Prepare FAQs, pricing details, policies and contact information.</li>
        <li>Set escalation rules for complex or sensitive queries.</li>
        <li>Track unresolved questions to improve the knowledge base.</li>
        <li>Add privacy notice if user data is collected.</li>
      </ul>
      <p>Start with 20 to 30 high-frequency questions, then expand based on analytics.</p>
    `
  },
  {
    id: "prompting-image-generators",
    title: "Prompting image generators effectively",
    category: "tools",
    label: "Design",
    readTime: "7 min read",
    date: "2026-04-24",
    summary: "Structure prompts with subject, style, lighting, camera, composition and constraints.",
    content: `
      <p>A strong image prompt contains more than a subject. It describes style, composition, lighting, mood, color palette, aspect ratio and what should be excluded.</p>
      <h3>Prompt template</h3>
      <ul>
        <li>Subject: what should appear in the image.</li>
        <li>Style: realistic, vector, 3D, minimal, cinematic.</li>
        <li>Composition: close-up, wide shot, centered, top-down.</li>
        <li>Lighting: soft, studio, neon, natural daylight.</li>
        <li>Constraints: no text, no watermark, no distorted hands.</li>
      </ul>
      <p>Iterate prompts in small steps instead of rewriting everything after each result.</p>
    `
  },
  {
    id: "landing-page-conversion",
    title: "How to improve landing page conversion with AI",
    category: "marketing",
    label: "Marketing",
    readTime: "5 min read",
    date: "2026-04-23",
    summary: "Use AI to test headlines, calls to action, feature sections and customer objections.",
    content: `
      <p>AI can generate multiple landing page variations quickly, but conversion improvement still depends on user clarity and testing.</p>
      <h3>What to optimize</h3>
      <ul>
        <li>Headline clarity.</li>
        <li>Call-to-action wording.</li>
        <li>Benefit-focused feature sections.</li>
        <li>FAQ answers for buyer objections.</li>
        <li>Testimonials and trust signals.</li>
      </ul>
      <p>Use AI to create variants, then compare real performance through analytics.</p>
    `
  },
  {
    id: "firebase-static-site",
    title: "Deploying a static website on Firebase Hosting",
    category: "web",
    label: "Web Dev",
    readTime: "8 min read",
    date: "2026-04-22",
    summary: "Prepare HTML, CSS and JavaScript files, initialize hosting and deploy.",
    content: `
      <p>Firebase Hosting is suitable for static websites built with HTML, CSS and JavaScript. Your files should be tested locally before deployment.</p>
      <h3>Deployment steps</h3>
      <ul>
        <li>Create a Firebase project.</li>
        <li>Add a Web App.</li>
        <li>Install Firebase CLI on your computer.</li>
        <li>Run <code>firebase login</code>.</li>
        <li>Run <code>firebase init hosting</code>.</li>
        <li>Deploy using <code>firebase deploy</code>.</li>
      </ul>
      <p>After deployment, Firebase gives a public URL that can be shared with users.</p>
    `
  },
  {
    id: "roman-urdu-content-strategy",
    title: "Roman Urdu content strategy for social media",
    category: "writing",
    label: "Urdu Text",
    readTime: "5 min read",
    date: "2026-04-21",
    summary: "Use Roman Urdu for local audience communication while keeping tone clear and brand-safe.",
    content: `
      <p>Roman Urdu is useful for Pakistani social media audiences, especially for informal product explanations, reels captions and WhatsApp marketing.</p>
      <h3>Practical rules</h3>
      <ul>
        <li>Keep sentences short.</li>
        <li>Avoid mixing too many English technical words unless the audience understands them.</li>
        <li>Use clear calls to action.</li>
        <li>Review spelling consistency for brand terms.</li>
      </ul>
      <p>For formal pages, use English or proper Urdu script. For conversational campaigns, Roman Urdu can work better.</p>
    `
  },
  {
    id: "short-video-script-template",
    title: "Short video script template for AI tool reviews",
    category: "video",
    label: "Video",
    readTime: "4 min read",
    date: "2026-04-20",
    summary: "A simple hook-problem-demo-result structure for Shorts, Reels and TikTok videos.",
    content: `
      <p>A short video should communicate one clear idea. Avoid long introductions and show the result early.</p>
      <h3>Template</h3>
      <ul>
        <li><strong>Hook:</strong> This free AI tool can create...</li>
        <li><strong>Problem:</strong> Show the manual task.</li>
        <li><strong>Demo:</strong> Record the tool in action.</li>
        <li><strong>Result:</strong> Show the final output.</li>
        <li><strong>CTA:</strong> Ask viewers to save or visit the website.</li>
      </ul>
      <p>Keep the first version under 35 seconds and use captions for mobile viewers.</p>
    `
  },
  {
    id: "ai-tool-selection-framework",
    title: "Framework for selecting free and paid AI tools",
    category: "tools",
    label: "Tools",
    readTime: "6 min read",
    date: "2026-04-19",
    summary: "Evaluate tools using task fit, privacy, pricing, export support and reliability.",
    content: `
      <p>Free tools are useful for testing, but production work needs reliability, data safety and export control. A tool should be selected based on the task, not only popularity.</p>
      <h3>Evaluation points</h3>
      <ul>
        <li>Does it solve the exact task?</li>
        <li>Is the free plan enough?</li>
        <li>Can output be exported?</li>
        <li>Does it store sensitive data?</li>
        <li>Is the output consistent?</li>
      </ul>
      <p>Use paid tools only when they save time, improve quality or support commercial use.</p>
    `
  }
];

const blogGrid = document.getElementById("blogGrid");
const blogSearch = document.getElementById("blogSearch");
const blogEmptyState = document.getElementById("blogEmptyState");
const latestPostsBtn = document.getElementById("latestPostsBtn");
const blogFilterButtons = document.querySelectorAll("[data-blog-filter]");
const articleModal = document.getElementById("articleModal");
const articleModalClose = document.getElementById("articleModalClose");
const articleModalCategory = document.getElementById("articleModalCategory");
const articleModalTitle = document.getElementById("articleModalTitle");
const articleModalMeta = document.getElementById("articleModalMeta");
const articleModalBody = document.getElementById("articleModalBody");
const featuredReadBtn = document.getElementById("featuredReadBtn");
const featuredTitle = document.getElementById("featuredTitle");
const featuredSummary = document.getElementById("featuredSummary");
const featuredMeta = document.getElementById("featuredMeta");
let activeBlogFilter = "all";

function formatBlogDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function renderFeaturedArticle() {
  if (!featuredReadBtn || !featuredTitle || !featuredSummary || !featuredMeta || blogArticles.length === 0) return;
  const featured = [...blogArticles].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  featuredTitle.textContent = featured.title;
  featuredSummary.textContent = featured.summary;
  featuredMeta.innerHTML = `<span>${featured.readTime}</span><span>${featured.label}</span><span>${formatBlogDate(featured.date)}</span>`;
  featuredReadBtn.addEventListener("click", () => openArticle(featured.id));
}

function renderBlogArticles() {
  if (!blogGrid) return;
  const query = blogSearch ? blogSearch.value.trim().toLowerCase() : "";
  const sortedArticles = [...blogArticles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const visibleArticles = sortedArticles.filter((article) => {
    const text = `${article.title} ${article.label} ${article.summary} ${article.category}`.toLowerCase();
    const matchesSearch = text.includes(query);
    const matchesFilter = activeBlogFilter === "all" || article.category === activeBlogFilter;
    return matchesSearch && matchesFilter;
  });

  blogGrid.innerHTML = visibleArticles.map((article) => `
    <article class="blog-card enhanced-blog-card reveal visible" data-category="${article.category}">
      <span class="badge">${article.label}</span>
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
      <div class="post-meta"><span>${article.readTime}</span><span>${formatBlogDate(article.date)}</span></div>
      <button class="btn btn-outline small-btn" type="button" data-read-article="${article.id}">Read Article</button>
    </article>
  `).join("");

  if (blogEmptyState) {
    blogEmptyState.style.display = visibleArticles.length === 0 ? "block" : "none";
  }

  blogGrid.querySelectorAll("[data-read-article]").forEach((button) => {
    button.addEventListener("click", () => openArticle(button.dataset.readArticle));
  });
}

function openArticle(articleId) {
  const article = blogArticles.find((item) => item.id === articleId);
  if (!article || !articleModal) return;

  if (articleModalCategory) articleModalCategory.textContent = article.label;
  if (articleModalTitle) articleModalTitle.textContent = article.title;
  if (articleModalMeta) {
    articleModalMeta.innerHTML = `<span>${article.readTime}</span><span>${formatBlogDate(article.date)}</span><span>${article.label}</span>`;
  }
  if (articleModalBody) articleModalBody.innerHTML = article.content;

  articleModal.classList.add("active");
  articleModal.setAttribute("aria-hidden", "false");
}

function closeArticleModal() {
  if (!articleModal) return;
  articleModal.classList.remove("active");
  articleModal.setAttribute("aria-hidden", "true");
}

if (blogSearch) {
  blogSearch.addEventListener("input", renderBlogArticles);
}

blogFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    blogFilterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeBlogFilter = button.dataset.blogFilter;
    renderBlogArticles();
  });
});

if (latestPostsBtn) {
  latestPostsBtn.addEventListener("click", () => {
    const allButton = document.querySelector('[data-blog-filter="all"]');
    if (allButton) allButton.click();
    document.getElementById("blogList")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (articleModalClose) {
  articleModalClose.addEventListener("click", closeArticleModal);
}

if (articleModal) {
  articleModal.addEventListener("click", (event) => {
    if (event.target === articleModal) closeArticleModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeArticleModal();
});

renderFeaturedArticle();
renderBlogArticles();

// Newsletter demo
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = newsletterEmail.value.trim();

    if (!isValidEmail(email)) {
      newsletterMessage.style.color = "#ff6b6b";
      newsletterMessage.textContent = "Please enter a valid email address.";
      return;
    }

    const subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions") || "[]");
    subscriptions.push({ email, createdAt: new Date().toISOString() });
    localStorage.setItem("newsletterSubscriptions", JSON.stringify(subscriptions));

    newsletterMessage.style.color = "#29d391";
    newsletterMessage.textContent = "Subscription saved locally. Firebase can store it online later.";
    newsletterForm.reset();
  });
}

// Contact form validation + Firebase Firestore save
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    clearErrors(contactForm);

    if (contactMessage) {
      contactMessage.textContent = "";
      contactMessage.style.color = "";
    }

    let isValid = true;

    if (name.length < 3) {
      showError(contactForm.name, "Name must be at least 3 characters.");
      isValid = false;
    }

    if (!isValidEmail(email)) {
      showError(contactForm.email, "Enter a valid email address.");
      isValid = false;
    }

    if (!subject) {
      showError(contactForm.subject, "Please select a subject.");
      isValid = false;
    }

    if (message.length < 10) {
      showError(contactForm.message, "Message must be at least 10 characters.");
      isValid = false;
    }

    if (!isValid) {
      if (contactMessage) {
        contactMessage.style.color = "#ff6b6b";
        contactMessage.textContent = "Please fix the highlighted fields.";
      }
      return;
    }

    const firestoreDb = window.db || (typeof db !== "undefined" ? db : null);

    if (!firestoreDb) {
      if (contactMessage) {
        contactMessage.style.color = "#ff6b6b";
        contactMessage.textContent = "Firestore is not connected. Check firebase-config.js.";
      }
      console.error("Firestore database object is missing. Use window.db = firebase.firestore(); in firebase-config.js");
      return;
    }

    if (contactMessage) {
      contactMessage.style.color = "#00d4ff";
      contactMessage.textContent = "Sending message...";
    }

    try {
      await firestoreDb.collection("contacts").add({
        name,
        email,
        subject,
        message,
        source: "AI Tools Hub Contact Page",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      if (contactMessage) {
        contactMessage.style.color = "#29d391";
        contactMessage.textContent = "Message sent successfully.";
      }

      contactForm.reset();
    } catch (error) {
      console.error("Firestore contact form error:", error);

      if (contactMessage) {
        contactMessage.style.color = "#ff6b6b";
        contactMessage.textContent = "Message not sent. Check Console error.";
      }
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
  const group = input.closest(".form-group");
  const error = group ? group.querySelector(".error-message") : null;
  if (error) error.textContent = message;
}

function clearErrors(form) {
  form.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });
}

// Back to top buttons
document.querySelectorAll("[data-scroll-top]").forEach((button) => {
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Run once on tools page so hidden state and default order are correct.
sortTools();
