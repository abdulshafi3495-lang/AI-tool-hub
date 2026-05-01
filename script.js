
(function () {
  const ready = (callback) => document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", callback) : callback();
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHTML = (value) => String(value || "").replace(/[&<>'"]/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[ch]));

  const compareTools = [{"id": 1, "name": "Ahrefs", "category": "Digital Marketing & SEO", "purpose": "Special for backlink analysis, keyword research and SEO audits.", "url": "https://ahrefs.com/", "pricing": "Free/Premium", "level": "Basic → Advanced", "score": 4.9, "icon": "📈"}, {"id": 2, "name": "SEMrush", "category": "Digital Marketing & SEO", "purpose": "Special for SEO research, competitor analysis and marketing intelligence.", "url": "https://www.semrush.com/", "pricing": "Trial/Paid", "level": "Basic → Advanced", "score": 4.8, "icon": "📈"}, {"id": 3, "name": "Google Analytics", "category": "Digital Marketing & SEO", "purpose": "Special for tracking website traffic, users and conversions.", "url": "https://analytics.google.com/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.7, "icon": "📈"}, {"id": 4, "name": "Google Search Console", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://search.google.com/search-console/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.6, "icon": "📈"}, {"id": 5, "name": "Google Keyword Planner", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://ads.google.com/home/tools/keyword-planner/", "pricing": "Free/Premium", "level": "Basic → Advanced", "score": 4.5, "icon": "📈"}, {"id": 6, "name": "Google Trends", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://trends.google.com/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.4, "icon": "📈"}, {"id": 7, "name": "Moz", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://moz.com/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.3, "icon": "📈"}, {"id": 8, "name": "Ubersuggest", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://neilpatel.com/ubersuggest/", "pricing": "Trial/Paid", "level": "Basic → Advanced", "score": 4.2, "icon": "📈"}, {"id": 9, "name": "Screaming Frog SEO Spider", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://www.screamingfrog.co.uk/seo-spider/", "pricing": "Trial/Paid", "level": "Basic → Advanced", "score": 4.9, "icon": "📈"}, {"id": 10, "name": "Surfer SEO", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://surferseo.com/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.8, "icon": "📈"}, {"id": 11, "name": "Yoast SEO", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://yoast.com/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.7, "icon": "📈"}, {"id": 12, "name": "Rank Math", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://rankmath.com/", "pricing": "Premium", "level": "Basic → Advanced", "score": 4.6, "icon": "📈"}, {"id": 13, "name": "SE Ranking", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://www.google.com/search?q=SE%20Ranking%20official%20website", "pricing": "Paid", "level": "Basic → Advanced", "score": 4.5, "icon": "📈"}, {"id": 14, "name": "SpyFu", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://www.google.com/search?q=SpyFu%20official%20website", "pricing": "Trial/Paid", "level": "Basic → Advanced", "score": 4.4, "icon": "📈"}, {"id": 15, "name": "AnswerThePublic", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://answerthepublic.com/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.3, "icon": "📈"}, {"id": 16, "name": "Similarweb", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://www.similarweb.com/", "pricing": "Premium", "level": "Basic → Advanced", "score": 4.2, "icon": "📈"}, {"id": 17, "name": "Hotjar", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://www.hotjar.com/", "pricing": "Paid", "level": "Basic → Advanced", "score": 4.9, "icon": "📈"}, {"id": 18, "name": "Microsoft Clarity", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://clarity.microsoft.com/", "pricing": "Free", "level": "Basic → Advanced", "score": 4.8, "icon": "📈"}, {"id": 19, "name": "Majestic", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://www.google.com/search?q=Majestic%20official%20website", "pricing": "Free/Premium", "level": "Basic → Advanced", "score": 4.7, "icon": "📈"}, {"id": 20, "name": "Sitebulb", "category": "Digital Marketing & SEO", "purpose": "Special for website ranking, keyword research and traffic analysis.", "url": "https://www.google.com/search?q=Sitebulb%20official%20website", "pricing": "Paid", "level": "Basic → Advanced", "score": 4.6, "icon": "📈"}, {"id": 21, "name": "Canva", "category": "Graphic Design", "purpose": "Special for posters, thumbnails, presentations and quick designs.", "url": "https://www.canva.com/", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.5, "icon": "🎨"}, {"id": 22, "name": "Adobe Photoshop", "category": "Graphic Design", "purpose": "Special for professional image editing and photo manipulation.", "url": "https://www.adobe.com/products/photoshop.html", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.4, "icon": "🎨"}, {"id": 23, "name": "Adobe Illustrator", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.adobe.com/products/illustrator.html", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.3, "icon": "🎨"}, {"id": 24, "name": "Adobe Express", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.adobe.com/express/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.2, "icon": "🎨"}, {"id": 25, "name": "Photopea", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.photopea.com/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.9, "icon": "🎨"}, {"id": 26, "name": "Pixlr", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://pixlr.com/", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.8, "icon": "🎨"}, {"id": 27, "name": "CorelDRAW", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.google.com/search?q=CorelDRAW%20official%20website", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.7, "icon": "🎨"}, {"id": 28, "name": "Affinity Designer", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.google.com/search?q=Affinity%20Designer%20official%20website", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.6, "icon": "🎨"}, {"id": 29, "name": "Affinity Photo", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.google.com/search?q=Affinity%20Photo%20official%20website", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.5, "icon": "🎨"}, {"id": 30, "name": "GIMP", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.gimp.org/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.4, "icon": "🎨"}, {"id": 31, "name": "Inkscape", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://inkscape.org/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.3, "icon": "🎨"}, {"id": 32, "name": "VistaCreate", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.google.com/search?q=VistaCreate%20official%20website", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.2, "icon": "🎨"}, {"id": 33, "name": "Placeit", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.google.com/search?q=Placeit%20official%20website", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.9, "icon": "🎨"}, {"id": 34, "name": "Remove.bg", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.remove.bg/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.8, "icon": "🎨"}, {"id": 35, "name": "Font Awesome", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://fontawesome.com/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.7, "icon": "🎨"}, {"id": 36, "name": "Flaticon", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.flaticon.com/", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.6, "icon": "🎨"}, {"id": 37, "name": "Iconfinder", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.iconfinder.com/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.5, "icon": "🎨"}, {"id": 38, "name": "Coolors", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://coolors.co/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.4, "icon": "🎨"}, {"id": 39, "name": "Khroma", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://www.google.com/search?q=Khroma%20official%20website", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.3, "icon": "🎨"}, {"id": 40, "name": "Looka", "category": "Graphic Design", "purpose": "Special for posters, logos, brand graphics and creative design.", "url": "https://looka.com/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.2, "icon": "🎨"}, {"id": 41, "name": "ChatGPT", "category": "AI Content Creation", "purpose": "Special for content writing, coding help, summaries and brainstorming.", "url": "https://chatgpt.com/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.9, "icon": "✍️"}, {"id": 42, "name": "Jasper AI", "category": "AI Content Creation", "purpose": "Special for marketing copy, blog drafts and brand-focused content.", "url": "https://www.jasper.ai/", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.8, "icon": "✍️"}, {"id": 43, "name": "Copy.ai", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.copy.ai/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.7, "icon": "✍️"}, {"id": 44, "name": "Writesonic", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://writesonic.com/", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.6, "icon": "✍️"}, {"id": 45, "name": "Rytr", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://rytr.me/", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.5, "icon": "✍️"}, {"id": 46, "name": "Anyword", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.google.com/search?q=Anyword%20official%20website", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.4, "icon": "✍️"}, {"id": 47, "name": "Frase", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.frase.io/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.3, "icon": "✍️"}, {"id": 48, "name": "Scalenut", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.google.com/search?q=Scalenut%20official%20website", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.2, "icon": "✍️"}, {"id": 49, "name": "INK", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.google.com/search?q=INK%20official%20website", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.9, "icon": "✍️"}, {"id": 50, "name": "QuillBot", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://quillbot.com/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.8, "icon": "✍️"}, {"id": 51, "name": "Grammarly", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.grammarly.com/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.7, "icon": "✍️"}, {"id": 52, "name": "Hemingway Editor", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://hemingwayapp.com/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.6, "icon": "✍️"}, {"id": 53, "name": "LanguageTool", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://languagetool.org/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.5, "icon": "✍️"}, {"id": 54, "name": "Notion AI", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.notion.so/product/ai", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.4, "icon": "✍️"}, {"id": 55, "name": "Claude", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://claude.ai/", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.3, "icon": "✍️"}, {"id": 56, "name": "Gemini", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://gemini.google.com/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.2, "icon": "✍️"}, {"id": 57, "name": "Perplexity", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.perplexity.ai/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.9, "icon": "✍️"}, {"id": 58, "name": "Wordtune", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.google.com/search?q=Wordtune%20official%20website", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.8, "icon": "✍️"}, {"id": 59, "name": "DeepL Write", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.deepl.com/write", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.7, "icon": "✍️"}, {"id": 60, "name": "Sudowrite", "category": "AI Content Creation", "purpose": "Special for content writing, blogs, scripts and text improvement.", "url": "https://www.google.com/search?q=Sudowrite%20official%20website", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.6, "icon": "✍️"}, {"id": 61, "name": "DALL·E", "category": "AI Image Generation", "purpose": "Special for generating images from detailed text prompts.", "url": "https://openai.com/dall-e/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.5, "icon": "🖼️"}, {"id": 62, "name": "Midjourney", "category": "AI Image Generation", "purpose": "Special for artistic AI images and concept visuals.", "url": "https://www.midjourney.com/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.4, "icon": "🖼️"}, {"id": 63, "name": "Leonardo AI", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://leonardo.ai/", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.3, "icon": "🖼️"}, {"id": 64, "name": "Ideogram", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://ideogram.ai/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.2, "icon": "🖼️"}, {"id": 65, "name": "Adobe Firefly", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://www.adobe.com/products/firefly.html", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.9, "icon": "🖼️"}, {"id": 66, "name": "Stable Diffusion", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://stability.ai/", "pricing": "Free/Premium", "level": "Intermediate → Advanced", "score": 4.8, "icon": "🖼️"}, {"id": 67, "name": "DreamStudio", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://dreamstudio.ai/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.7, "icon": "🖼️"}, {"id": 68, "name": "Playground AI", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://playground.com/", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.6, "icon": "🖼️"}, {"id": 69, "name": "NightCafe", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://nightcafe.studio/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.5, "icon": "🖼️"}, {"id": 70, "name": "Bing Image Creator", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://www.bing.com/images/create", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.4, "icon": "🖼️"}, {"id": 71, "name": "Canva AI Image Generator", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://www.canva.com/ai-image-generator/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.3, "icon": "🖼️"}, {"id": 72, "name": "Craiyon", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://www.craiyon.com/", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.2, "icon": "🖼️"}, {"id": 73, "name": "Lexica", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://lexica.art/", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.9, "icon": "🖼️"}, {"id": 74, "name": "Krea AI", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://www.krea.ai/", "pricing": "Premium", "level": "Intermediate → Advanced", "score": 4.8, "icon": "🖼️"}, {"id": 75, "name": "Clipdrop", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://clipdrop.co/", "pricing": "Paid", "level": "Intermediate → Advanced", "score": 4.7, "icon": "🖼️"}, {"id": 76, "name": "Runway Image Tools", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://www.google.com/search?q=Runway%20Image%20Tools%20official%20website", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.6, "icon": "🖼️"}, {"id": 77, "name": "Pika Art", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://pika.art/", "pricing": "Free", "level": "Intermediate → Advanced", "score": 4.5, "icon": "🖼️"}, {"id": 78, "name": "Freepik AI Image Generator", "category": "AI Image Generation", "purpose": "Special for creating images from prompts and visual ideas.", "url": "https://www.google.com/search?q=Freepik%20AI%20Image%20Generator%20official%20website", "pricing": "Trial/Paid", "level": "Intermediate → Advanced", "score": 4.4, "icon": "🖼️"}, {"id": 79, "name": "Visual Studio Code", "category": "Web Development", "purpose": "Special for coding websites, apps and programming projects.", "url": "https://code.visualstudio.com/", "pricing": "Free/Premium", "level": "Basic", "score": 4.3, "icon": "💻"}, {"id": 80, "name": "React", "category": "Web Development", "purpose": "Special for building interactive web interfaces.", "url": "https://react.dev/", "pricing": "Free", "level": "Basic", "score": 4.2, "icon": "💻"}];

  const roleData = {
    student: {
      title: "Best AI tools for students",
      summary: "Use research, writing, citation, note-taking and assignment planning tools to study faster and organize academic work.",
      tools: ["ChatGPT", "Google Scholar", "Zotero", "QuillBot", "Canva", "Notion AI"],
      prompts: ["Create an assignment outline on [topic] for [class level] with headings and references.", "Explain [concept] in simple English and Urdu with examples.", "Generate 10 viva questions with short answers for [topic]."],
      workflow: ["Define assignment topic and required word count.", "Collect sources and citations.", "Create outline, draft, edit and verify facts."],
      links: [["Education tools", "tools.html"], ["Study prompts", "prompt-library.html"]]
    },
    jobholder: {
      title: "Best AI tools for jobholders",
      summary: "Use AI to improve emails, reports, Excel workflows, meeting notes, resumes and job application communication.",
      tools: ["ChatGPT", "Grammarly", "Microsoft Excel", "Canva", "LinkedIn", "Notion"],
      prompts: ["Rewrite this email professionally and make it concise: [paste email].", "Create a weekly work report from these bullet points: [points].", "Improve my resume headline for [job role] using these skills: [skills]."],
      workflow: ["Draft task content.", "Improve clarity and tone.", "Export final version to email, report or resume."],
      links: [["Resume prompts", "prompt-library.html"], ["Mini generators", "free-tools.html"]]
    },
    shopkeeper: {
      title: "Best AI tools for shopkeepers",
      summary: "Generate product descriptions, WhatsApp marketing messages, customer replies, invoice text and Facebook ad copy.",
      tools: ["Canva", "ChatGPT", "Facebook Ads Manager", "WhatsApp Business", "Google Sheets", "Meta Business Suite"],
      prompts: ["Write a short product description for [product] with price [price] and benefits [benefits].", "Create a WhatsApp marketing message for [offer] for local customers.", "Write a polite customer reply for this complaint: [complaint]."],
      workflow: ["Enter product and offer details.", "Generate description, WhatsApp message and ad copy.", "Post on WhatsApp, Facebook and store page."],
      links: [["Business generators", "free-tools.html"], ["Submit a tool", "contact.html"]]
    },
    freelancer: {
      title: "Best AI tools for freelancers",
      summary: "Use proposal writing, portfolio design, gig descriptions, invoice text and client communication prompts.",
      tools: ["Fiverr", "Upwork", "Canva", "ChatGPT", "Grammarly", "Behance"],
      prompts: ["Write a Fiverr gig description for [service] with packages and FAQs.", "Create an Upwork proposal for this job post: [paste post].", "Rewrite this client reply in a confident professional tone: [text]."],
      workflow: ["Select niche and offer.", "Create profile, gig and proposal drafts.", "Improve portfolio and client communication."],
      links: [["Freelancing tools", "tools.html"], ["Compare platforms", "compare-tools.html"]]
    },
    teacher: {
      title: "Best AI tools for teachers",
      summary: "Create lesson plans, quizzes, rubrics, explanations, activities, worksheets and lecture notes.",
      tools: ["ChatGPT", "Canva", "Google Classroom", "Khan Academy", "Google Scholar", "Turnitin"],
      prompts: ["Design a lesson plan for [topic] with learning outcomes and assessment.", "Create 10 MCQs with answer key for [topic] at intermediate level.", "Create a marking rubric for this task: [task]."],
      workflow: ["Define CLO/topic and level.", "Generate lecture, activity and assessment.", "Review accuracy and align with course outcomes."],
      links: [["Education tools", "tools.html"], ["Teaching prompts", "prompt-library.html"]]
    },
    youtuber: {
      title: "Best AI tools for YouTubers",
      summary: "Plan video ideas, titles, scripts, thumbnails, captions and video editing workflow.",
      tools: ["YouTube Studio", "vidIQ", "TubeBuddy", "Canva", "CapCut", "OBS Studio"],
      prompts: ["Generate 10 YouTube title ideas for [topic] targeting [audience].", "Write a 5-minute YouTube script on [topic] with hook and CTA.", "Suggest thumbnail text and description for this video: [topic]."],
      workflow: ["Research topic and keyword.", "Generate title, script and thumbnail idea.", "Edit, publish and review analytics."],
      links: [["YouTube tools", "tools.html"], ["Title generator", "free-tools.html"]]
    },
    developer: {
      title: "Best AI tools for developers",
      summary: "Use AI for code generation, debugging, documentation, API testing, hosting and deployment workflows.",
      tools: ["VS Code", "GitHub", "ChatGPT", "React", "Firebase", "Postman"],
      prompts: ["Debug this code and explain the issue: [paste code].", "Create a responsive HTML/CSS/JS component for [feature].", "Write technical documentation for this function: [code]."],
      workflow: ["Define feature requirements.", "Generate code and test locally.", "Deploy, monitor and document changes."],
      links: [["Developer tools", "tools.html"], ["Compare tools", "compare-tools.html"]]
    },
    marketer: {
      title: "Best AI tools for marketers",
      summary: "Create SEO outlines, Facebook ads, captions, campaign ideas, analytics reports and content calendars.",
      tools: ["Ahrefs", "SEMrush", "Google Trends", "Meta Business Suite", "Canva", "Buffer"],
      prompts: ["Create a Facebook ad copy for [product] targeting [audience].", "Generate an SEO blog outline for keyword [keyword].", "Create a 7-day social media content calendar for [business]."],
      workflow: ["Select keyword or audience.", "Generate ad, caption and content plan.", "Publish, test and track performance."],
      links: [["Marketing tools", "tools.html"], ["Ad prompts", "prompt-library.html"]]
    }
  };

  const prompts = [
    {category:"Students", title:"Assignment Outline", text:"Act as an academic writing assistant. Create a clear assignment outline on [TOPIC] for [CLASS/LEVEL]. Include introduction, main headings, subheadings, key points, conclusion and 5 credible source ideas."},
    {category:"Students", title:"Exam Preparation", text:"Create a 7-day study plan for [SUBJECT]. Include daily topics, practice tasks, revision slots, and 10 self-test questions."},
    {category:"Shopkeepers", title:"Product Description", text:"Write a persuasive product description for [PRODUCT NAME]. Mention features: [FEATURES], price: [PRICE], target customer: [CUSTOMER], and include a short call-to-action for WhatsApp orders."},
    {category:"Shopkeepers", title:"Customer Reply", text:"Write a polite customer reply in simple English and Urdu/Roman Urdu for this message: [CUSTOMER MESSAGE]. Keep it helpful and professional."},
    {category:"Resume Writing", title:"Resume Headline", text:"Create 10 professional resume headlines for a [JOB ROLE] with these skills: [SKILLS]. Keep each headline under 18 words."},
    {category:"Resume Writing", title:"Cover Letter", text:"Write a concise job application email for [JOB TITLE] at [COMPANY]. Mention my skills: [SKILLS], experience: [EXPERIENCE], and ask for interview consideration."},
    {category:"YouTube Scripts", title:"Video Script", text:"Write a YouTube script on [TOPIC] for [AUDIENCE]. Include hook, intro, 5 main points, examples, transitions and closing CTA. Tone: [TONE]."},
    {category:"YouTube Scripts", title:"Title Ideas", text:"Generate 20 clickable YouTube titles for [VIDEO TOPIC]. Keep them clear, non-misleading and suitable for beginners."},
    {category:"Facebook Ads", title:"Facebook Ad Copy", text:"Create 5 Facebook ad copies for [PRODUCT/SERVICE]. Target audience: [AUDIENCE]. Mention benefit: [BENEFIT]. Include headline, primary text and CTA."},
    {category:"Facebook Ads", title:"Campaign Ideas", text:"Suggest 10 Facebook ad campaign ideas for [BUSINESS TYPE] with objective, audience, offer and creative angle."},
    {category:"Urdu Content", title:"Urdu Post", text:"Write a simple Urdu/Roman Urdu social media post about [TOPIC] for [AUDIENCE]. Keep it natural, useful and easy to understand."},
    {category:"Urdu Content", title:"Urdu Blog Outline", text:"Create an Urdu blog outline for [KEYWORD]. Include title, introduction, headings, FAQs and a short meta description."},
    {category:"Freelancers", title:"Fiverr Gig", text:"Write a Fiverr gig title, description, 5 bullet points, 3 package ideas and FAQs for this service: [SERVICE]."},
    {category:"Freelancers", title:"Client Proposal", text:"Write a personalized freelancing proposal for this job post: [JOB POST]. Mention relevant experience: [EXPERIENCE] and ask one smart question."},
    {category:"Jobholders", title:"Professional Email", text:"Rewrite this email professionally, clearly and politely. Keep it concise and action-oriented: [EMAIL TEXT]."},
    {category:"Jobholders", title:"Weekly Report", text:"Create a professional weekly report from these points: [POINTS]. Include completed tasks, pending tasks, blockers and next week plan."}
  ];

  function copyText(text, button) {
    const done = () => {
      if (!button) return;
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => { button.textContent = original; }, 1400);
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done).catch(done);
    else {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      done();
    }
  }

  ready(function () {
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    const menuToggle = $("#menuToggle");
    const navMenu = $("#navMenu");
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });
    }

    $$('[data-scroll-top]').forEach((btn) => btn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'})));
    $$('.accordion-btn').forEach((btn) => btn.addEventListener('click', () => btn.closest('.accordion')?.classList.toggle('active')));

    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.08 }) : null;
    $$('.reveal').forEach((el) => observer ? observer.observe(el) : el.classList.add('visible'));

    const homeSearch = $('#homeSearch');
    if (homeSearch) {
      homeSearch.addEventListener('input', () => {
        const query = homeSearch.value.toLowerCase().trim();
        const cards = $$('#homeToolGrid .tool-card');
        let visible = 0;
        cards.forEach((card) => {
          const match = !query || (card.dataset.title || card.textContent).toLowerCase().includes(query);
          card.style.display = match ? '' : 'none';
          if (match) visible++;
        });
        const empty = $('#homeEmptyState');
        if (empty) empty.style.display = visible ? 'none' : 'block';
      });
    }

    // Role-based finder
    const roleFinder = $('[data-role-finder]');
    if (roleFinder) {
      const renderRole = (role) => {
        const data = roleData[role] || roleData.student;
        $('#roleTitle').textContent = data.title;
        $('#roleSummary').textContent = data.summary;
        $('#roleTools').innerHTML = data.tools.map((tool) => `<span>${escapeHTML(tool)}</span>`).join('');
        $('#rolePrompts').innerHTML = data.prompts.map((prompt) => `<div class="prompt-mini-card"><p>${escapeHTML(prompt)}</p><button class="copy-prompt-btn" type="button" data-copy-prompt="${escapeHTML(prompt)}">Copy Prompt</button></div>`).join('');
        $('#roleWorkflow').innerHTML = data.workflow.map((step) => `<li>${escapeHTML(step)}</li>`).join('');
        $('#roleLinks').innerHTML = data.links.map(([label, href]) => `<a href="${escapeHTML(href)}">${escapeHTML(label)}</a>`).join('');
        $$('.role-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.role === role));
      };
      $$('.role-tab').forEach((tab) => tab.addEventListener('click', () => renderRole(tab.dataset.role)));
      roleFinder.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-copy-prompt]');
        if (btn) copyText(btn.dataset.copyPrompt, btn);
      });
      renderRole('student');
    }

    // Prompt library
    const promptGrid = $('#promptGrid');
    if (promptGrid) {
      const categorySelect = $('#promptCategory');
      const search = $('#promptSearch');
      const count = $('#promptResultCount');
      const empty = $('#promptEmptyState');
      const renderPrompts = () => {
        const q = (search?.value || '').toLowerCase().trim();
        const cat = categorySelect?.value || 'all';
        const filtered = prompts.filter((item) => (cat === 'all' || item.category === cat) && (!q || `${item.category} ${item.title} ${item.text}`.toLowerCase().includes(q)));
        promptGrid.innerHTML = filtered.map((item) => `<article class="prompt-card reveal"><span class="prompt-tag">${escapeHTML(item.category)}</span><h3>${escapeHTML(item.title)}</h3><div class="prompt-text">${escapeHTML(item.text)}</div><button class="copy-prompt-btn" type="button" data-copy-prompt="${escapeHTML(item.text)}">Copy Prompt</button></article>`).join('');
        if (count) count.textContent = `Showing ${filtered.length} of ${prompts.length} prompts.`;
        if (empty) empty.style.display = filtered.length ? 'none' : 'block';
      };
      search?.addEventListener('input', renderPrompts);
      categorySelect?.addEventListener('change', renderPrompts);
      $('#promptReset')?.addEventListener('click', () => { search.value = ''; categorySelect.value = 'all'; renderPrompts(); });
      promptGrid.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-copy-prompt]');
        if (btn) copyText(btn.dataset.copyPrompt, btn);
      });
      renderPrompts();
    }

    // Free mini tools
    document.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-generate]');
      if (!btn) return;
      const type = btn.dataset.generate;
      const value = (id) => ($(`#${id}`)?.value || '').trim();
      const set = (id, text) => { const output = $(`#${id}`); if (output) { output.value = text; output.focus(); output.select(); } };
      if (type === 'resume') set('resumeOutput', `Results-driven ${value('resumeRole') || 'professional'} skilled in ${value('resumeSkill') || 'modern digital tools'}, focused on measurable performance and practical problem solving.`);
      if (type === 'product') set('productOutput', `${value('productName') || 'This product'} is designed for customers who want ${value('productBenefit') || 'quality, value and reliability'}. It is a practical choice for daily use. Order now to get a useful and affordable product for your needs.`);
      if (type === 'whatsapp') set('whatsappOutput', `Assalam-o-Alaikum! Special offer for ${value('whatsappAudience') || 'our customers'}: ${value('whatsappOffer') || 'new products are available today'}. Reply now to place your order or ask for details.`);
      if (type === 'instagram') set('instagramOutput', `New update: ${value('captionTopic') || 'fresh content'}. A ${value('captionTone') || 'friendly'} reminder to check this out today. Save this post and message us for details. #AITools #SmallBusiness #DigitalGrowth`);
      if (type === 'youtube') set('youtubeOutput', `1. ${value('videoTopic') || 'AI tools'} Explained for ${value('videoAudience') || 'Beginners'}\n2. Best ${value('videoTopic') || 'AI tools'} You Should Try Today\n3. How ${value('videoAudience') || 'Beginners'} Can Use ${value('videoTopic') || 'AI tools'} Step by Step`);
      if (type === 'meta') set('metaOutput', `Meta Title: ${value('pageKeyword') || 'AI Tools'} | ${value('pageBenefit') || 'Find Useful Tools Fast'}\nMeta Description: Discover ${value('pageKeyword') || 'AI tools'} to ${value('pageBenefit') || 'complete digital work faster'}. Browse practical tools, prompts and workflows on AI Tools Hub.`);
      if (type === 'email') set('emailOutput', `Subject: Application for ${value('jobRole') || 'the advertised role'}\n\nDear Hiring Manager,\n\nI am applying for the ${value('jobRole') || 'available position'}. I have practical skills in ${value('jobSkill') || 'relevant tools and technologies'} and can contribute with a focused, problem-solving approach. I would appreciate the opportunity to discuss how my skills match your requirements.\n\nRegards,\n[Your Name]`);
      if (type === 'assignment') set('assignmentOutput', `Assignment Outline: ${value('assignmentTopic') || 'Selected Topic'}\nLevel: ${value('assignmentLevel') || 'Academic'}\n\n1. Introduction\n2. Background and key concepts\n3. Main applications\n4. Benefits and limitations\n5. Real-world examples\n6. Conclusion\n7. References`);
    });

    // Compare page
    const pickerGrid = $('#comparePickerGrid');
    if (pickerGrid) {
      const selected = new Map();
      const category = $('#compareCategory');
      const search = $('#compareSearch');
      const status = $('#compareStatus');
      const tableWrap = $('#comparisonTableWrap');
      const table = $('#comparisonTable');
      const categories = [...new Set(compareTools.map((t) => t.category).filter(Boolean))].sort();
      if (category) category.innerHTML += categories.map((cat) => `<option>${escapeHTML(cat)}</option>`).join('');

      const params = new URLSearchParams(location.search);
      const ids = (params.get('ids') || '').split(',').map((id) => Number(id)).filter(Boolean);
      ids.forEach((id) => { const tool = compareTools.find((t) => Number(t.id) === id); if (tool) selected.set(tool.id, tool); });

      const renderTable = () => {
        const tools = [...selected.values()];
        if (!tools.length) { tableWrap.hidden = true; return; }
        const rows = [
          ['Tool', ...tools.map((t) => t.name)],
          ['Best For', ...tools.map((t) => t.purpose || t.category)],
          ['Pricing', ...tools.map((t) => t.pricing || 'Check official site')],
          ['Skill Level', ...tools.map((t) => t.level || 'General')],
          ['Use Case', ...tools.map((t) => t.category || 'AI workflow')],
          ['Official Link', ...tools.map((t) => `<a class="text-link" href="${escapeHTML(t.url)}" target="_blank" rel="noopener noreferrer">Open official site</a>`)]
        ];
        table.innerHTML = rows.map((row, i) => `<tr>${row.map((cell) => i === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`).join('')}</tr>`).join('');
        tableWrap.hidden = false;
      };

      const renderPicker = () => {
        const q = (search?.value || '').toLowerCase().trim();
        const cat = category?.value || 'all';
        const filtered = compareTools.filter((tool) => (cat === 'all' || tool.category === cat) && (!q || `${tool.name} ${tool.category} ${tool.purpose}`.toLowerCase().includes(q))).slice(0, 60);
        pickerGrid.innerHTML = filtered.map((tool) => `<article class="compare-picker-card ${selected.has(tool.id) ? 'selected' : ''}"><div class="tool-topline"><div class="tool-icon" aria-hidden="true">${escapeHTML(tool.icon || '🧰')}</div><span class="badge">${escapeHTML(tool.pricing || 'Listed')}</span></div><h3>${escapeHTML(tool.name)}</h3><p>${escapeHTML(tool.purpose || tool.category)}</p><p><strong>${escapeHTML(tool.level || 'General')}</strong></p><button class="btn ${selected.has(tool.id) ? 'btn-primary' : 'btn-outline'} small-btn" type="button" data-compare-pick="${tool.id}">${selected.has(tool.id) ? 'Selected' : 'Add to Compare'}</button></article>`).join('');
        if (status) status.textContent = selected.size ? `${selected.size} selected. Select up to 3 tools.` : 'Select 2 or 3 tools for comparison.';
        renderTable();
      };

      pickerGrid.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-compare-pick]');
        if (!btn) return;
        const id = Number(btn.dataset.comparePick);
        const tool = compareTools.find((item) => Number(item.id) === id);
        if (!tool) return;
        if (selected.has(id)) selected.delete(id);
        else {
          if (selected.size >= 3) { if (status) status.textContent = 'Comparison limit: select up to 3 tools.'; return; }
          selected.set(id, tool);
        }
        renderPicker();
      });
      search?.addEventListener('input', renderPicker);
      category?.addEventListener('change', renderPicker);
      $('#compareClear')?.addEventListener('click', () => { selected.clear(); if (search) search.value = ''; if (category) category.value = 'all'; renderPicker(); });
      renderPicker();
    }

    // Contact Firebase submission
    const contactForm = $('#contactForm');
    if (contactForm && !contactForm.dataset.boundEnhanced) {
      contactForm.dataset.boundEnhanced = '1';
      const subject = $('#subject');
      const toolFields = $('#toolSubmissionFields');
      const toggleToolFields = () => { if (toolFields) toolFields.hidden = subject?.value !== 'Tool Submission'; };
      subject?.addEventListener('change', toggleToolFields);
      toggleToolFields();

      contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const message = $('#contactMessage');
        const payload = {
          name: $('#name')?.value?.trim() || '',
          email: $('#email')?.value?.trim() || '',
          subject: $('#subject')?.value || '',
          message: $('#message')?.value?.trim() || '',
          toolName: $('#toolName')?.value?.trim() || '',
          toolUrl: $('#toolUrl')?.value?.trim() || '',
          toolCategory: $('#toolCategory')?.value || '',
          toolPricing: $('#toolPricing')?.value || '',
          targetUsers: $('#targetUsers')?.value?.trim() || '',
          status: 'pending',
          createdAt: new Date().toISOString()
        };
        if (!payload.name || !payload.email || !payload.subject || !payload.message) {
          if (message) message.textContent = 'Please complete name, email, subject and message.';
          return;
        }
        try {
          if (window.firebase && firebase.firestore) {
            const db = firebase.firestore();
            await db.collection('contacts').add(payload);
            if (payload.subject === 'Tool Submission') await db.collection('toolSubmissions').add(payload);
            if (message) message.textContent = 'Submitted successfully. Your message has been saved for review.';
            contactForm.reset();
            toggleToolFields();
          } else {
            if (message) message.textContent = 'Firebase is not loaded. Check firebase-config.js before publishing.';
          }
        } catch (error) {
          if (message) message.textContent = 'Submission failed. Check Firebase rules/configuration.';
          console.error(error);
        }
      });
    }

    // Admin dashboard
    const adminForm = $('#adminLoginForm');
    if (adminForm) {
      const msg = $('#adminAuthMessage');
      const list = $('#adminSubmissionList');
      const renderSubmissions = async () => {
        if (!firebase?.firestore) return;
        const snapshot = await firebase.firestore().collection('toolSubmissions').where('status', '==', 'pending').orderBy('createdAt', 'desc').limit(30).get();
        if (snapshot.empty) { list.innerHTML = '<p class="empty-state" style="display:block">No pending submissions.</p>'; return; }
        list.innerHTML = snapshot.docs.map((doc) => {
          const item = doc.data();
          return `<article class="admin-submission-card"><h3>${escapeHTML(item.toolName || item.subject || 'Tool submission')}</h3><p>${escapeHTML(item.message || '')}</p><p><strong>URL:</strong> <a class="text-link" href="${escapeHTML(item.toolUrl || '#')}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.toolUrl || 'Not provided')}</a></p><p><strong>Category:</strong> ${escapeHTML(item.toolCategory || 'Not provided')} | <strong>Pricing:</strong> ${escapeHTML(item.toolPricing || 'Not provided')}</p><div class="admin-actions"><button class="btn btn-primary small-btn" type="button" data-admin-action="approved" data-doc-id="${doc.id}">Approve</button><button class="btn btn-outline small-btn" type="button" data-admin-action="rejected" data-doc-id="${doc.id}">Reject</button></div></article>`;
        }).join('');
      };
      adminForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        try {
          await firebase.auth().signInWithEmailAndPassword($('#adminEmail').value, $('#adminPassword').value);
          msg.textContent = 'Signed in.';
          await renderSubmissions();
        } catch (error) {
          msg.textContent = 'Sign in failed. Check Firebase Auth and admin account.';
          console.error(error);
        }
      });
      list?.addEventListener('click', async (event) => {
        const btn = event.target.closest('[data-admin-action]');
        if (!btn) return;
        try {
          await firebase.firestore().collection('toolSubmissions').doc(btn.dataset.docId).update({status: btn.dataset.adminAction, reviewedAt: new Date().toISOString()});
          await renderSubmissions();
        } catch (error) {
          msg.textContent = 'Could not update submission status.';
          console.error(error);
        }
      });
    }
  });
})();
