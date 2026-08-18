import { portfolioData } from "./portfolioData";

export const agentQuickPrompts = [
  "Where does Ahad currently work & what did he build at FlyRank AI?",
  "Explain Project GIGI: How does the AI agent execute Linux commands safely?",
  "How does the Spring Boot Inventory Engine prevent race conditions?",
  "Explain the C++ Thread-Safe Connection Pool & 0 Deadlocks guarantee",
  "What are Ahad's greatest technical strengths & why hire him?",
  "What is Ahad's education, contact info & availability?"
];

export function generateAgentResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();
  const { profile, experience, education, caseStudies } = portfolioData;

  // =========================================================================
  // 1. WORK HISTORY / PREVIOUS COMPANIES / CURRENT COMPANY / FLYRANK AI
  // =========================================================================
  if (
    /last work|worked at|previous company|current company|work history|where does (he|ahad) work|flyrank|internship|experience|job|employer|current role/i.test(query)
  ) {
    const exp = experience[0];
    return `### 💼 Work Experience & Current Role

**Role:** **${exp.role}**  
**Company:** **${exp.company}** (${exp.period})  
**Location:** ${exp.location} | **Type:** ${exp.type}

**Key Impact & Production Deliverables at FlyRank AI:**
* **Storage Layer Evolution:** Architected and shipped a Task Management REST API in Node.js and Express, migrating its storage engine across 3 successive backends (**In-Memory $\\to$ SQLite $\\to$ Containerized PostgreSQL 16**) with **100% contract parity** and zero breaking changes for API clients.
* **Containerized Deployment:** Containerized the full service using **Docker & Docker Compose** as part of a high-standard production pipeline.
* **Contract Verification Testing:** Engineered rigorous automated API contract tests validating backward compatibility across all storage engine transitions.

**Tech Stack Used at FlyRank:** ${exp.stack.join(", ")}

Would you like to know more about his **Flagship Spring Boot Microservice** or his **Project GIGI Autonomous AI Agent**?`;
  }

  // =========================================================================
  // 2. PROJECT GIGI: AUTONOMOUS AI DESKTOP AGENT (LITELLM / GEMINI / OLLAMA)
  // =========================================================================
  if (
    /project gigi|gigi|desktop agent|autonomous agent|litellm|gemini|ollama|react loop|tool calling|regex gate|security gate|psutil|destructive commands/i.test(query)
  ) {
    const gigi = caseStudies.find(c => c.id === "project-gigi-agent");
    return `### 🤖 ${gigi.title} (Flagship Autonomous AI Project)

**Tech Stack:** ${gigi.stack.join(", ")}
🔗 **Repository:** [View on GitHub](${gigi.githubUrl})

**How Project GIGI Works:**
1. **Autonomous ReAct Agent Loop:** Implements a Reasoning + Acting loop that accepts natural language instructions (e.g. *"Check CPU load and kill PID 4092"* or *"Launch VSCode and open workspace"*), translates intent into structured JSON tool calls, and observes output in a continuous feedback loop.
2. **Hybrid Cloud/Edge LLM Routing:** Uses a unified **LiteLLM** gateway to dynamically route routine OS tasks to local edge models (**Ollama / Llama 3**) for zero-cost sub-second inference, and cascades complex multi-step reasoning to **Google Gemini**.
3. **Sub-0.01s Deterministic Regex Security Gate:** Before any LLM-generated shell command reaches the OS kernel, it passes through a hard deterministic regex filter that intercepts dangerous commands (\`sudo\`, \`rm -rf\`, fork bombs \`:(){ :|:& };:\`, \`mkfs\`) in **under 0.01 seconds**, completely eliminating AI hallucination risks.
4. **Native OS Tool Suite:** Equipped with live system telemetry streaming CPU, memory, and disk stats via **psutil**, and process management via Python's **subprocess** module.

**Key Metric:** <0.01s deterministic security gate validation time.`;
  }

  // =========================================================================
  // 3. FLAGSHIP ENTERPRISE: INVENTORY & ORDER ENGINE (SPRING BOOT 3.3)
  // =========================================================================
  if (
    /inventory|spring|spring boot|order processing|pessimistic|optimistic|overselling|rabbitmq|resilience4j|bucket4j|testcontainers|flyway/i.test(query)
  ) {
    const study = caseStudies.find(c => c.id === "inventory-order-engine");
    return `### 🚀 ${study.title} (Flagship Enterprise Microservice)

**Tech Stack:** ${study.stack.join(", ")}
🔗 **Repository:** [View on GitHub](${study.githubUrl})

**Architectural Solutions to Concurrency & Scale:**
* **Pessimistic Row-Level Locking:** Enforces \`@Lock(LockModeType.PESSIMISTIC_WRITE)\` directly on the PostgreSQL stock row. When 500+ users checkout simultaneously, the database serializes stock decrements, guaranteeing **zero inventory overselling**.
* **Redis Distributed Caching:** Caches high-traffic product catalog queries, achieving **<20ms p95 response times** and cutting redundant database load by over 75%.
* **RabbitMQ Asynchronous Decoupling:** Employs topic exchanges to asynchronously dispatch order events to notification and billing services, returning immediate HTTP 200 responses to the user.
* **Fault Tolerance & Rate Limiting:** Integrates **Bucket4j** (token bucket algorithm) for IP-based rate limiting, **Resilience4j** circuit breakers with fallback methods, and **Flyway** schema migrations.
* **Testing Rigor:** 100% verified using **Testcontainers** spinning up ephemeral PostgreSQL and Redis instances during automated integration test runs.`;
  }

  // =========================================================================
  // 4. LOW-LEVEL SYSTEMS: C++17 THREAD-SAFE CONNECTION POOL
  // =========================================================================
  if (
    /c\+\+|connection pool|thread|concurrency|mutex|semaphore|pthreads|deadlock|race condition|starvation|raii|valgrind|helgrind/i.test(query)
  ) {
    const study = caseStudies.find(c => c.id === "threadsafe-connection-pool");
    return `### ⚡ ${study.title} (High-Performance Concurrent Systems)

**Tech Stack:** ${study.stack.join(", ")}
🔗 **Repository:** [View on GitHub](${study.githubUrl})

**Concurrency Architecture:**
* **8 Concurrent Worker Threads:** Coordinates multi-threaded resource acquisition under high-frequency simulated database transactions.
* **Dual Synchronization Primitives:** Combines **POSIX counting semaphores** (tracking available connection slots) and **std::mutex** (protecting internal queue state) with **std::condition_variable** for blocking waits.
* **Starvation Prevention:** Uses a fair FIFO acquisition queue so high-priority threads don't starve newly arriving requests.
* **Strict RAII Exception Safety:** Custom \`ConnectionGuard\` RAII wrappers ensure acquired connections are deterministically recycled to the pool even if worker threads throw exceptions.
* **Verification:** **0 deadlocks** and **0 memory leaks** verified across 100,000 continuous iterations using **Valgrind Memcheck** and **Helgrind**.`;
  }

  // =========================================================================
  // 5. QUANTITATIVE TRADING: XAU/USD GOLD & FOREX ENGINE (PYTHON & MT5)
  // =========================================================================
  if (
    /trading|scalp|quant|xauusd|gold|metatrader|mt5|forex|5\/8 ema|moving average|correlation|hedge|slippage|risk management/i.test(query)
  ) {
    const study = caseStudies.find(c => c.id === "algorithmic-trading-systems");
    return `### 📈 ${study.title}

**Tech Stack:** ${study.stack.join(", ")}

**Trading Systems Architecture:**
* **5/8 EMA Cross Momentum Engine:** Quantitative scalping bot tuned for Gold (XAU/USD) volatility, confirming fast/slow exponential moving average crossovers with dynamic take-profit tiers.
* **Correlation Auto-Hedging Bot:** Scrapes and computes live currency correlation matrices via MetaTrader 5 API to automatically open inversely correlated hedge positions during high volatility.
* **Sub-85ms Execution Latency:** Low-latency Python IPC bridge streaming real-time market ticks into vectorized NumPy/Pandas compute buffers.
* **Capital Protection:** Automated ATR (Average True Range) trailing stop-loss, slippage controls, and trade journaling logging entry/exit ticks across **340+ live paper trades**.`;
  }

  // =========================================================================
  // 6. MACHINE LEARNING: ISLAMABAD HOUSE PRICE PREDICTION
  // =========================================================================
  if (
    /real estate|price prediction|house price|scikit|xgboost|gradient boosting|selenium|beautifulsoup|flask|islamabad/i.test(query)
  ) {
    const study = caseStudies.find(c => c.id === "real-estate-prediction-pipeline");
    return `### 🏡 ${study.title}

**Tech Stack:** ${study.stack.join(", ")}
🔗 **Repository:** [View on GitHub](${study.githubUrl})

**Pipeline Architecture:**
* **Automated Data Harvesting:** Custom Selenium and BeautifulSoup web scraper harvesting real-time property listings across Islamabad sectors.
* **Feature Engineering:** Rigorous data sanitization, unit standardization (Marlas to Sq. Ft.), outlier filtering, and one-hot encoding for neighborhood sectors (e.g. F-7, G-11, DHA).
* **Model Benchmarking:** Evaluated 5 regression models (Linear Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost). **Gradient Boosting** achieved top accuracy (**R² ≈ 0.56**).
* **Serving:** Deployed via an interactive Flask web interface for instant user valuations.`;
  }

  // =========================================================================
  // 7. BEHAVIORAL: WHY HIRE AHAD / STRENGTHS / WEAKNESSES / VALUE PROPOSITION
  // =========================================================================
  if (
    /why (should we )?hire|why choose|strengths|greatest strength|weakness|value proposition|what makes (him|ahad) special|stand out|fit/i.test(query)
  ) {
    return `### 🌟 Why Hire Ahad Iqbal?

1. **Rare Hybrid of Systems Depth + Applied AI:**  
   Unlike pure frontend or purely theoretical AI engineers, Ahad understands the **entire low-latency infrastructure stack**—from C++ memory allocation and POSIX semaphores to Spring Boot distributed transactions, Docker containerization, and LLM tool-calling agent loops.
2. **Proven Production Rigor & Concurrency Obsession:**  
   He doesn't build simple toy CRUD apps. His projects solve real production nightmares: preventing database overselling during flash sales with pessimistic locking, preventing deadlocks in C++ thread pools, and intercepting destructive AI commands in <0.01s.
3. **Engineering Discipline & Testing:**  
   He writes defensive, test-driven code using **Testcontainers, Mockito, JUnit 5, and Valgrind**, ensuring zero memory leaks and zero contract breaks.
4. **Fast Execution & Adaptability:**  
   Currently interning as a Backend AI Engineer at FlyRank AI while completing his BS CS at COMSATS (Grade: A-), consistently delivering production-grade milestones ahead of schedule.`;
  }

  // =========================================================================
  // 8. AVAILABILITY, NOTICE PERIOD, ROLES & RELOCATION
  // =========================================================================
  if (
    /available|notice period|start date|when can (he|ahad) start|relocat|remote|salary|compensation|full time|contract|seeking/i.test(query)
  ) {
    return `### 🎯 Availability & Target Opportunities

* **Status:** **Available Immediately** for Backend Engineering, Distributed Systems, and Applied AI roles.
* **Role Types:** Full-Time, Part-Time, or High-Impact Engineering Internships.
* **Work Mode:** Open to **Global Remote** and **On-Site / Relocation** (Islamabad / Worldwide).
* **Notice Period:** None (Ready for immediate onboarding).
* **Direct Hiring Contact:** Reach out directly at [ahadparhar@gmail.com](mailto:${profile.email}) or on WhatsApp/Phone at **${profile.phone}**.`;
  }

  // =========================================================================
  // 9. EDUCATION & ACADEMIC CREDENTIALS
  // =========================================================================
  if (
    /education|university|college|degree|comsats|punjab group|gpa|cgpa|grade|graduation|coursework|academic/i.test(query)
  ) {
    const cu = education.degrees[0];
    const pgc = education.degrees[1];
    return `### 🎓 Academic Background & Credentials

**Higher Education:**
* **${cu.degree}**
* **Institution:** **${cu.institution}**
* **Timeline:** ${cu.period}
* **Graduation Honors:** **${cu.grade}**
* **Specialized Coursework:** ${cu.highlights[0]}

**Prior Education:**
* **${pgc.degree}** — ${pgc.institution} (${pgc.period})

**6 Verified Amigoscode Certifications:**
* Advanced Spring Boot & Enterprise Architecture
* Spring Data JPA & Hibernate Performance
* Java Unit Testing (TDD & Mockito)
* Building Scalable REST APIs with Spring Boot
* Java Streams & Functional Programming
* Up and Running with SQL & Relational Databases`;
  }

  // =========================================================================
  // 10. TECHNICAL SKILLS & LANGUAGES MATRIX
  // =========================================================================
  if (
    /skills|languages|stack|technologies|tools|databases|java|python|c\+\+|sql|javascript|docker|git/i.test(query)
  ) {
    return `### 🛠️ Ahad's Technical Profile & Skills

* **Languages:** **Java** (17/21, Streams, Virtual Threads), **Python** (FastAPI, AsyncIO, Pandas, NumPy), **C++** (11/17, POSIX Threads), **SQL**, **JavaScript/TypeScript**, **HTML5/CSS3**
* **Backend & Enterprise:** Spring Boot 3.x, Spring Data JPA / Hibernate, Node.js & Express, FastAPI, Flask, REST API Architecture, JWT RBAC
* **Databases & Caching:** PostgreSQL 16 (Pessimistic Locking, Indexing, EXPLAIN ANALYZE), Redis (Cache-Aside), MongoDB, SQLite
* **AI & Agentic Systems:** LiteLLM, Google Gemini, Ollama, ReAct Agent Loops, Regex Security Gates, Scikit-learn, XGBoost
* **Concurrency & DevOps:** POSIX Threads (\`pthreads\`), Semaphores, Mutexes, RabbitMQ, Docker & Docker Compose, Resilience4j, Bucket4j, Testcontainers, Maven, Git/GitHub`;
  }

  // =========================================================================
  // 11. SYSTEM DESIGN & TECHNICAL COMPARISONS (RECRUITER DEEP-DIVES)
  // =========================================================================
  if (
    /pessimistic vs optimistic|locking|acid|rest vs grpc|microservices vs monolith|n\+1|indexing|explain analyze|tdd|token bucket/i.test(query)
  ) {
    return `### 📐 Ahad's Approach to System Design & Concurrency

* **Pessimistic vs Optimistic Locking:**  
  * *Optimistic Locking (\`@Version\`)* works well when write conflicts are rare (e.g. updating profile settings).  
  * *Pessimistic Write Locking (\`@Lock(LockModeType.PESSIMISTIC_WRITE)\`)* is essential under high contention (e.g. flash-sale stock checkouts) to prevent race conditions and eliminate retry storms.
* **Distributed Caching (Cache-Aside):**  
  Reads check Redis first; on miss, fetch from PostgreSQL, write to Redis with a TTL, and invalidate on updates to maintain cache consistency.
* **Defensive Resilience:**  
  Uses **Bucket4j** token-bucket rate limiting at the controller boundary and **Resilience4j** circuit breakers on third-party integrations (e.g. payment/email gateways) to prevent cascading microservice failures.
* **Containerized Integration Testing (TDD):**  
  Uses **Testcontainers** to test against real PostgreSQL and Redis containers rather than relying on H2 in-memory mocks, ensuring real SQL dialect fidelity.`;
  }

  // =========================================================================
  // 12. CONTACT INFO, PHONE, EMAIL, GITHUB, LINKEDIN
  // =========================================================================
  if (
    /contact|email|phone|call|whatsapp|reach|linkedin|github|resume|cv|social/i.test(query)
  ) {
    return `### 📬 Get in Touch with Ahad Iqbal

* 📱 **Phone / WhatsApp:** **[+92 329 6068899](tel:+923296068899)**
* 📧 **Direct Email:** **[ahadparhar@gmail.com](mailto:${profile.email})**
* 💼 **LinkedIn:** **[linkedin.com/in/ahad-iqbal-70a496292](${profile.linkedinUrl})**
* 💻 **GitHub:** **[github.com/AhadiCoDeR1v1](${profile.githubUrl})**
* 📍 **Location:** ${profile.location} (Sargodha / Islamabad, Pakistan)

You can also send a live message directly through the **Contact Gateway** on this website!`;
  }

  // =========================================================================
  // 13. GREETINGS
  // =========================================================================
  if (/^(hi|hello|hey|greetings|hola|salam|assalam)/i.test(query)) {
    return `Hello! 👋 I am **Ahad's AI Systems Copilot**.

I have complete knowledge of Ahad Iqbal's engineering background, including:
* **Work Experience:** Backend AI Engineer Intern at **FlyRank AI**
* **Flagship AI Project:** **Project GIGI** (Autonomous AI Desktop Agent with LiteLLM & regex security gate)
* **Enterprise Backend:** Spring Boot 3.3 Inventory Engine with pessimistic locking
* **Systems Concurrency:** C++17 Thread-Safe Connection Pool
* **Education & Certs:** COMSATS University Islamabad (Grade: A-) & 6 Amigoscode certs
* **Contact & Hiring:** Immediate availability, direct email & phone

What would you like to know?`;
  }

  // =========================================================================
  // 14. COMPREHENSIVE INTELLIGENT FALLBACK
  // =========================================================================
  return `Thank you for asking about **"${userQuery}"**!

Here is what you should know about **Ahad Iqbal**:
* **Current Role:** Backend AI Engineer — Intern at **FlyRank AI** (Jul 2026 – Present)
* **Education:** **BS Computer Science** from **COMSATS University Islamabad** (Grade: A-, Expected Jun 2028)
* **Flagship Projects:**
  1. **Project GIGI:** Autonomous AI Desktop Agent (LiteLLM, Gemini, Ollama, sub-0.01s regex safety gate)
  2. **Inventory Engine:** Spring Boot 3.3 microservice with pessimistic locking & Redis caching
  3. **C++ Connection Pool:** Multi-threaded pool with 0 deadlocks under 100k iterations
  4. **Quant Trading Engine:** 5/8 EMA XAU/USD scalping bot with sub-85ms execution
* **Direct Contact:** [ahadparhar@gmail.com](mailto:${profile.email}) | **+92 329 6068899**

Feel free to ask a more specific question, or click one of the suggested prompts below!`;
}
