import { portfolioData } from "./portfolioData";

export const agentQuickPrompts = [
  "What are Ahad's core backend skills?",
  "How does the Spring Boot Inventory Engine prevent race conditions?",
  "Explain the C++ Thread-Safe Connection Pool",
  "Tell me about the XAUUSD Quantitative Scalping Engine",
  "What is Ahad's education & certifications?",
  "How can I contact or hire Ahad?"
];

export function generateAgentResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();
  const { profile, education, certifications, caseStudies } = portfolioData;

  // 1. GREETINGS & CASUAL
  if (/^(hi|hello|hey|greetings|hola|salam|assalam)/i.test(query)) {
    return `Hello! 👋 I am **Ahad's AI Engineering Agent**. 

I can answer any technical or professional questions about Ahad's architecture, case studies, concurrency benchmarks, education, or how to get in touch with him.

What would you like to explore? Feel free to ask a custom question or pick one of the suggested prompts below!`;
  }

  // 2. WHO IS AHAD / SUMMARY / POSITIONING
  if (/who is ahad|about ahad|tell me about (him|ahad)|summary|overview|background|bio/i.test(query)) {
    return `**Ahad Iqbal** is a **Backend AI Engineer & Full-Stack Systems Developer** based in ${profile.location}.

🎓 **Education:** ${education.degree} from **${education.institution}** (${education.grade}).
💡 **Core Focus:** Building high-throughput, low-latency microservices (Java/Spring Boot 3.3), high-concurrency systems (C++17 POSIX), and automated algorithmic trading systems with machine learning.

Would you like to dive into his **Flagship Spring Boot Microservice**, his **C++ Concurrency Pool**, or his **Quantitative Trading Systems**?`;
  }

  // 3. FLAGSHIP CASE STUDY 1: INVENTORY & ORDER PROCESSING ENGINE / SPRING BOOT
  if (/inventory|spring|spring boot|order processing|pessimistic|rabbitmq|resilience4j|bucket4j|testcontainers/i.test(query)) {
    const study = caseStudies.find(c => c.id === "inventory-order-engine");
    return `### 🚀 ${study.title} (Flagship Enterprise Backend)

**Tech Stack:** ${study.stack.join(", ")}
🔗 **Repository:** [View on GitHub](${study.githubUrl})

**Key Architectural Highlights:**
* **Pessimistic Database Locking:** Enforces row-level \`@Lock(LockModeType.PESSIMISTIC_WRITE)\` on stock entities to completely eliminate inventory overselling during high-concurrency checkout surges.
* **Distributed Caching & Messaging:** Uses **Redis** for sub-millisecond catalog reads and **RabbitMQ** for asynchronous order notifications.
* **Fault Tolerance & Security:** **Bucket4j** token-bucket rate limiting, **JWT RBAC**, and **Resilience4j** circuit breakers with automated fallbacks.
* **Testing Rigor:** Automated **Flyway** database migrations with **Testcontainers** verifying concurrent checkout safety against real Postgres and Redis instances.

**Performance Metric:** Verified sub-20ms p95 response time under high load.`;
  }

  // 4. CASE STUDY 2: C++ THREAD-SAFE CONNECTION POOL / CONCURRENCY / PTHREADS
  if (/c\+\+|connection pool|thread|concurrency|mutex|semaphore|pthreads|deadlock|race condition/i.test(query)) {
    const study = caseStudies.find(c => c.id === "threadsafe-connection-pool");
    return `### ⚡ ${study.title} (High-Performance Systems)

**Tech Stack:** ${study.stack.join(", ")}
🔗 **Repository:** [View on GitHub](${study.githubUrl})

**Concurrency Architecture:**
* **8 Concurrent Worker Threads:** Coordinates up to 8 simultaneous worker threads simulating high-frequency database workloads.
* **Synchronization Primitives:** Combines **POSIX semaphores** (tracking available capacity) and **mutexes** (protecting state queues) to eliminate deadlocks and race conditions.
* **Starvation Prevention:** Employs a fair FIFO acquisition policy so long-running transactions don't starve newly arriving threads.
* **Strict RAII:** Custom RAII guard wrappers ensure connections are deterministically recycled even if thread exceptions occur.
* **Verification:** **0 deadlocks** and **0 memory leaks** verified across 100,000 iterations using Valgrind Memcheck and Helgrind.`;
  }

  // 5. CASE STUDY 3: QUANTITATIVE SCALPING / XAUUSD / METATRADER 5 / TRADING
  if (/trading|scalp|quant|xauusd|gold|metatrader|mt5|forex|ema|algorithmic/i.test(query)) {
    const study = caseStudies.find(c => c.id === "algorithmic-trading-systems");
    return `### 📈 ${study.title}

**Tech Stack:** ${study.stack.join(", ")}

**Trading Systems Architecture:**
* **5/8 EMA Cross Scalping Engine:** Automated quantitative scalping on Gold (XAU/USD) with dynamic multi-tiered take-profit levels and trailing ATR stop-loss risk management.
* **Correlation-Based Hedge Engine:** Automatically monitors currency correlation matrices and opens negatively correlated paired positions to hedge downside risk.
* **Real-Time Data Streaming:** MetaTrader 5 Python IPC bridge consuming live tick streams into vectorized NumPy/Pandas computation buffers.
* **Execution Telemetry:** 340+ live paper-trade executions recorded with sub-85ms execution latency.`;
  }

  // 6. CASE STUDY 4: REAL ESTATE ML / XGBOOST / SCRAPING / FLASK
  if (/real estate|price prediction|machine learning|ml|scikit|xgboost|selenium|flask|islamabad/i.test(query)) {
    const study = caseStudies.find(c => c.id === "real-estate-prediction-pipeline");
    return `### 🏡 ${study.title}

**Tech Stack:** ${study.stack.join(", ")}
🔗 **Repository:** [View on GitHub](${study.githubUrl})

**Pipeline Architecture:**
* **Automated Web Scraping:** Selenium and BeautifulSoup pipeline harvesting real-time property listings across Islamabad.
* **Feature Engineering:** Rigorous data cleaning, unit standardization (Marlas to Sq. Ft.), outlier filtering, and one-hot encoding.
* **Model Benchmarking:** Evaluated 5 regression models (Linear Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost). Gradient Boosting achieved top performance (**R² ≈ 0.56**).
* **Serving:** Deployed via a responsive Flask web application for dynamic client-side valuation estimates.`;
  }

  // 7. CASE STUDY 5: FLYRANK TASK ENGINE / INTERNSHIP DELIVERABLE
  if (/flyrank|task management|crud|storage progression|evolution|internship/i.test(query)) {
    const study = caseStudies.find(c => c.id === "task-management-progression");
    return `### 🏗️ ${study.title} (FlyRank AI Deliverable)

**Tech Stack:** ${study.stack.join(", ")}

**Architectural Progression:**
* Progressively evolved a backend storage engine across 4 iterative stages:
  1. **A1:** In-Memory transient store
  2. **A2:** Embedded SQLite persistent database
  3. **A3:** Dockerized PostgreSQL 16 provisioned via Docker Compose
  4. **A4:** Supabase Cloud with Bearer JWT Auth filters
* **Strict Contract Parity:** Maintained a **100% identical public REST contract** and test suite across all 4 storage migrations using an interface-driven repository pattern.`;
  }

  // 8. TECHNICAL SKILLS / LANGUAGES / FRAMEWORKS / DATABASES
  if (/skills|languages|technologies|tech stack|tools|databases|frameworks|java|python/i.test(query)) {
    return `### 🛠️ Ahad's Technical Profile & Skills Matrix

* **Programming Languages:** Java (Core/Advanced Java 17/21), Python (NumPy/Pandas/FastAPI), C++ (C++11/17), SQL, JavaScript/TypeScript
* **Backend & Frameworks:** Spring Boot 3.x, Spring Data JPA / Hibernate, FastAPI, Flask, Node.js / Express
* **Databases & Caching:** PostgreSQL 16 (Flyway, EXPLAIN ANALYZE, Indexing), Redis, SQLite, MongoDB
* **Concurrency & Cloud:** POSIX Threads (\`pthreads\`), RabbitMQ, Docker & Docker Compose, Resilience4j, Bucket4j, Testcontainers, Maven
* **AI/ML & Automation:** Scikit-learn, XGBoost, MetaTrader 5 API, Selenium, BeautifulSoup

Would you like to see how he applies these tools in his enterprise projects?`;
  }

  // 9. EDUCATION & CERTIFICATIONS
  if (/education|degree|university|comsats|grade|cgpa|gpa|certificat|amigoscode/i.test(query)) {
    const certList = certifications.map(c => `* **${c.title}** (${c.issuer})`).join("\n");
    return `### 🎓 Education & Verified Certifications

**Higher Education:**
* **${education.degree}**
* **Institution:** ${education.institution}
* **Graduation Honors:** ${education.grade}
* **Focus Areas:** Distributed Systems, Operating Systems, Advanced Database Design, and Algorithms.

**Verified Amigoscode Engineering Specializations:**
${certList}

All certifications include hands-on labs in TDD, Spring Data JPA optimization, and microservice architectures.`;
  }

  // 10. CONTACT / HIRE / EMAIL / LINKEDIN / GITHUB
  if (/contact|email|hire|reach|linkedin|github|location|where|phone|message/i.test(query)) {
    return `### 📬 Connect with Ahad Iqbal

* 📧 **Direct Email:** [ahadparhar@gmail.com](mailto:${profile.email})
* 💼 **LinkedIn Profile:** [linkedin.com/in/ahad-iqbal-70a496292](${profile.linkedinUrl})
* 💻 **GitHub Repositories:** [github.com/AhadiCoDeR1v1](${profile.githubUrl})
* 📍 **Location:** ${profile.location} (Open to Global / Remote & On-Site Roles)

You can also send a live message directly through the **Contact Section** at the bottom of this website!`;
  }

  // 11. ROLES / JOB SEEKING / AVAILABILITY
  if (/role|job|available|hire|seeking|open to|opportunity|internship|full-time/i.test(query)) {
    return `### 🎯 Target Engineering Roles & Availability

Ahad is actively seeking:
* **Backend Engineer / Distributed Systems Developer**
* **Java / Spring Boot Microservices Engineer**
* **High-Performance Systems Engineer (C++ / Concurrency)**
* **Backend AI & Quantitative Software Engineer**

**Availability:** ${profile.status} (Immediate / Global Remote or Relocation).
Feel free to email him directly at [ahadparhar@gmail.com](mailto:${profile.email}) or connect on [LinkedIn](${profile.linkedinUrl})!`;
  }

  // 12. FALLBACK SMART CONVERSATIONAL RESPONSE
  return `Thank you for asking! 

Regarding your question about **"${userQuery}"**:

Ahad specializes in **high-throughput asynchronous microservices (Java/Spring Boot 3.3)**, **low-level systems concurrency (C++17 POSIX)**, and **automated algorithmic trading engines**.

Here are some specific areas I can explain in detail:
1. **Spring Boot Pessimistic Locking:** How he prevents stock overselling under concurrent checkout surges.
2. **C++ Connection Pool:** How he coordinates 8 worker threads with zero deadlocks and zero memory leaks.
3. **XAU/USD Scalping Engine:** How his 5/8 EMA quantitative strategy executes with sub-85ms latency.
4. **Skills & Certifications:** His BS Computer Science honors (COMSATS) and 6 Amigoscode certifications.
5. **Contact & Hiring:** Direct email ([ahadparhar@gmail.com](mailto:${profile.email})) and LinkedIn connection.

What would you like to know more about?`;
}
