export const portfolioData = {
  profile: {
    name: "Ahad Iqbal",
    monogram: "AI.",
    title: "Backend AI Engineer & Full-Stack Systems Developer",
    education: "BS Computer Science — COMSATS University Islamabad (Grade: A-)",
    location: "Sargodha, Punjab, Pakistan",
    phone: "+92 329 6068899",
    status: "Available for High-Throughput Systems, Backend & AI Engineering Roles",
    headline: "Ahad Iqbal — Backend AI Engineer & Full-Stack Systems Developer",
    proofStatement:
      "I architect high-throughput Spring Boot microservices, autonomous AI desktop agents with local/cloud LLM routing, high-performance concurrent systems in C++, and automated algorithmic trading engines.",
    bioDetail:
      "Computer Science student at COMSATS University Islamabad specializing in backend engineering (Java, Spring Boot, PostgreSQL) and applied AI systems (Python). Currently interning as a Backend AI Engineer at FlyRank AI. Shipped a production-grade event-driven inventory backend, an autonomous AI desktop agent, and two algorithmic Forex/Gold trading systems. Thrives at the intersection of backend architecture, systems programming, and applied AI.",
    githubUrl: "https://github.com/AhadiCoDeR1v1",
    linkedinUrl: "https://www.linkedin.com/in/ahad-iqbal-70a496292",
    email: "ahadparhar@gmail.com",
    stats: [
      { label: "Execution Latency", value: "<85ms", detail: "Sub-second tick-to-order pipeline" },
      { label: "Security Intercept", value: "<0.01s", detail: "Deterministic regex AI safety gate" },
      { label: "Concurrency Contention", value: "0 Deadlocks", detail: "Stress-tested POSIX thread pools" },
      { label: "API p95 Response", value: "<20ms", detail: "Spring Boot 3.3 + PostgreSQL indexed" }
    ]
  },

  experience: [
    {
      id: "flyrank-ai-internship",
      role: "Backend AI Engineer — Intern",
      company: "FlyRank AI",
      location: "Remote / Islamabad, Pakistan",
      period: "Jul 2026 – Present",
      type: "Internship",
      highlights: [
        "Built a Task Management REST API in Node.js and Express, migrating its storage layer through three backends — in-memory, SQLite, and containerized PostgreSQL — without changing the public API contract.",
        "Shipped the service in a Docker container using Docker Compose as part of a graded internship assignment track.",
        "Engineered strict API contract verification tests ensuring 100% backward compatibility across architectural migrations."
      ],
      stack: ["Node.js", "Express", "PostgreSQL 16", "SQLite", "Docker Compose", "REST API", "Supabase Auth"]
    }
  ],

  education: {
    degrees: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "COMSATS University Islamabad (CUI), Main Campus",
        location: "Islamabad, Pakistan",
        grade: "Grade: A-",
        period: "Feb 2024 – Jun 2028 (Expected)",
        highlights: [
          "Specialized coursework: Design & Analysis of Algorithms, Operating Systems, Machine Learning, Computer Organization & Assembly Language, Web Engineering.",
          "Focused on distributed backend architecture, concurrency synchronization primitives, and applied AI systems."
        ]
      },
      {
        degree: "Intermediate in Pre-Engineering / Computer Science",
        institution: "Punjab Group of Colleges",
        location: "Pakistan",
        grade: "Completed",
        period: "2021 – 2023",
        highlights: [
          "Strong foundational training in Mathematics, Physics, and Computer Science fundamentals."
        ]
      }
    ]
  },

  certifications: [
    {
      issuer: "Amigoscode",
      title: "Advanced Spring Boot & Enterprise Architecture",
      period: "2025–2026",
      skills: ["Spring Boot 3", "Microservices", "Security", "Actuator", "Prometheus"],
      credentialUrl: "https://github.com/AhadiCoDeR1v1",
      description: "Enterprise microservice design, distributed transaction handling, and cloud architecture."
    },
    {
      issuer: "Amigoscode",
      title: "Spring Data JPA & Hibernate Performance",
      period: "2025–2026",
      skills: ["JPA", "Hibernate", "Pessimistic Locking", "N+1 Optimization", "Indexing"],
      credentialUrl: "https://github.com/AhadiCoDeR1v1",
      description: "Advanced ORM tuning, row-level locking strategies, query optimization, and connection pooling."
    },
    {
      issuer: "Amigoscode",
      title: "Java Unit Testing (TDD & Mockito)",
      period: "2025–2026",
      skills: ["JUnit 5", "Mockito", "TDD", "AssertJ", "Testcontainers"],
      credentialUrl: "https://github.com/AhadiCoDeR1v1",
      description: "Test-driven development, mocking isolation, and containerized database integration tests."
    },
    {
      issuer: "Amigoscode",
      title: "Building Scalable REST APIs with Spring Boot",
      period: "2025–2026",
      skills: ["REST Contract", "Validation", "Exception Handling", "JWT Auth", "Swagger"],
      credentialUrl: "https://github.com/AhadiCoDeR1v1",
      description: "Production REST architecture, security filters, payload validation, and idempotency."
    },
    {
      issuer: "Amigoscode",
      title: "Java Streams & Functional Programming",
      period: "2025–2026",
      skills: ["Java 21 Streams", "Lambdas", "Option Optional Pattern", "Parallel Streams"],
      credentialUrl: "https://github.com/AhadiCoDeR1v1",
      description: "Declarative data transformations, immutable concurrency pipelines, and memory optimization."
    },
    {
      issuer: "Amigoscode",
      title: "Up and Running with SQL & Relational Databases",
      period: "2025–2026",
      skills: ["PostgreSQL", "Complex Joins", "Window Functions", "ACID", "EXPLAIN ANALYZE"],
      credentialUrl: "https://github.com/AhadiCoDeR1v1",
      description: "Schema design, relational indexing, query execution planning, and ACID transaction guarantees."
    }
  ],

  caseStudies: [
    {
      id: "inventory-order-engine",
      category: "Flagship Enterprise Backend",
      title: "Inventory & Order Processing Backend Engine",
      summary:
        "High-throughput, event-driven Spring Boot 3.3 microservice orchestrating concurrent checkout operations with zero overselling, Redis caching, and RabbitMQ async processing.",
      impact:
        "Eliminated inventory race conditions under simulated high-concurrency checkouts using pessimistic row-level locking. Achieved <20ms p95 latency on product catalog queries.",
      metrics: [
        { label: "p95 Latency", value: "<20ms" },
        { label: "Locking Strategy", value: "Pessimistic Write" },
        { label: "Fault Tolerance", value: "Resilience4j" },
        { label: "Integration Tests", value: "Testcontainers" }
      ],
      architecture:
        "Event-driven microservice using Spring Boot 3.3, Redis cache-aside reads, row-level pessimistic locking on PostgreSQL, and RabbitMQ async order decoupled queues.",
      stack: [
        "Java 21",
        "Spring Boot 3.3",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "Docker",
        "Testcontainers",
        "Resilience4j",
        "Bucket4j",
        "Flyway"
      ],
      githubUrl: "https://github.com/AhadiCoDeR1v1/InventoryManager",
      highlights: [
        "Pessimistic database locking preventing overselling during high-concurrency checkout spikes",
        "Redis distributed caching layer cutting redundant database reads for high-traffic SKU queries",
        "RabbitMQ asynchronous order routing decoupling checkout acknowledgment from notification workers",
        "Resilience4j circuit breakers and Bucket4j token-bucket rate limiting for defensive API reliability",
        "Testcontainers-backed integration test suite spinning up real PostgreSQL and Redis containers in CI"
      ],
      challenge:
        "Preventing inventory overselling and database lock contention when hundreds of concurrent customers checkout the last remaining units of stock simultaneously.",
      solution:
        "Implemented pessimistic write locking (@Lock(LockModeType.PESSIMISTIC_WRITE)) on the stock entity inside an atomic database transaction, combined with Redis cache-aside reads and RabbitMQ asynchronous order dispatch.",
      codeSnippet: `@Service
@Transactional
public class OrderService {
    private final ProductRepository productRepo;
    private final RabbitTemplate rabbitTemplate;

    public OrderResponse processOrder(OrderRequest req) {
        // Row-level exclusive lock prevents race conditions
        Product product = productRepo.findByIdWithPessimisticLock(req.getProductId())
            .orElseThrow(() -> new EntityNotFoundException("SKU not found"));

        if (product.getStock() < req.getQuantity()) {
            throw new InsufficientStockException("Inventory depleted for SKU: " + req.getProductId());
        }

        product.setStock(product.getStock() - req.getQuantity());
        productRepo.save(product);

        rabbitTemplate.convertAndSend("order.exchange", "order.created", new OrderEvent(req));
        return new OrderResponse(OrderStatus.CONFIRMED);
    }
}`
    },
    {
      id: "project-gigi-agent",
      category: "Autonomous Applied AI",
      title: "Project GIGI — Autonomous AI Desktop Agent",
      summary:
        "Autonomous ReAct tool-calling agent operating a Linux workstation via natural language, featuring dynamic cloud/local LLM routing and a sub-0.01s deterministic security gate.",
      impact:
        "Intercepts destructive shell commands (sudo, rm -rf, fork bombs) in under 0.01s before any LLM call. Unified routing between cloud Gemini and local Ollama.",
      metrics: [
        { label: "Security Intercept", value: "<0.01s" },
        { label: "LLM Routing", value: "Gemini & Ollama" },
        { label: "Framework", value: "ReAct Loop" },
        { label: "System Telemetry", value: "psutil Live" }
      ],
      architecture:
        "Autonomous ReAct agent loop translating natural language into native Linux tools, routed via LiteLLM to local Ollama or cloud Gemini with a sub-0.01s deterministic regex safety barrier.",
      stack: [
        "Python",
        "LiteLLM",
        "Google Gemini",
        "Ollama",
        "psutil",
        "ReAct Framework",
        "Subprocess",
        "Regex Security Gate"
      ],
      githubUrl: "https://github.com/AhadiCoDeR1v1",
      highlights: [
        "Autonomous ReAct loop parsing natural language intent into structured native OS tool invocations",
        "Unified LiteLLM gateway routing between cloud models (Gemini) and local edge inference (Ollama)",
        "Deterministic regex security gate intercepting destructive commands (sudo, rm -rf, fork bombs) in <0.01s",
        "Real-time system telemetry tool streaming CPU, memory, and disk usage via psutil",
        "Subprocess-based native GUI application launcher and Linux command execution bridge"
      ],
      challenge:
        "Allowing an autonomous AI agent to execute real Linux shell commands without risking catastrophic system damage, unauthorized root escalations, or high cloud API costs.",
      solution:
        "Engineered a deterministic pre-execution regex safety gate that validates every command in <0.01s before LLM execution, paired with a LiteLLM router that defaults to local Ollama models for routine operations and cascades to Gemini for complex reasoning.",
      codeSnippet: `class SecurityGate:
    BLOCKED_PATTERNS = [
        r"\\bsudo\\b", r"\\brm\\s+-[rf]{1,2}\\b", r":\\(\\)\\{.*\\};:", r"\\bmkfs\\b", r">\\s*/dev/sd[a-z]"
    ]
    
    @classmethod
    def validate_command(cls, cmd: str) -> bool:
        """Deterministic regex gate executing in <0.01s before LLM dispatch."""
        for pattern in cls.BLOCKED_PATTERNS:
            if re.search(pattern, cmd, re.IGNORECASE):
                raise SecurityViolation(f"Blocked destructive command: {cmd}")
        return True`
    },
    {
      id: "threadsafe-connection-pool",
      category: "High-Performance Systems",
      title: "Thread-Safe Connection Pool Manager",
      summary:
        "High-performance C++17 connection pool synchronizing concurrent resource acquisition across multi-threaded workloads with zero memory leaks and starvation avoidance.",
      impact:
        "Coordinated 8 concurrent worker threads under high-frequency workloads with 0 deadlocks and 0 memory leaks across 100k test iterations (verified with Valgrind & Helgrind).",
      metrics: [
        { label: "Worker Threads", value: "8 Threads" },
        { label: "Deadlocks", value: "0 Deadlocks" },
        { label: "Memory Leaks", value: "0 Leaks" },
        { label: "Acquisition", value: "FIFO Policy" }
      ],
      architecture:
        "C++17 multi-threaded connection manager using POSIX semaphores for capacity counting, std::mutex for queue protection, and RAII ConnectionGuard wrappers.",
      stack: [
        "C++17",
        "POSIX Threads (pthreads)",
        "Semaphores",
        "Mutexes",
        "RAII",
        "Valgrind",
        "Helgrind",
        "Make"
      ],
      githubUrl: "https://github.com/AhadiCoDeR1v1/Thread-safe-connection-pool",
      highlights: [
        "8 concurrent worker threads simulating high-frequency database workloads with zero race conditions",
        "POSIX semaphores tracking available capacity combined with std::mutex protecting internal queue state",
        "Strict RAII guard wrapper returning connections to the pool automatically on scope exit",
        "Fair FIFO acquisition policy preventing long-running transaction starvation",
        "Clean Valgrind memcheck and Helgrind thread race verification across 100,000 continuous iterations"
      ],
      challenge:
        "Eliminating thread deadlocks, race conditions, and connection leaks when multi-threaded applications acquire and release a constrained pool of database connections.",
      solution:
        "Engineered a thread-safe manager using POSIX semaphores for capacity counting, std::unique_lock with condition variables for blocking waits, and an RAII ConnectionGuard to guarantee deterministic resource reclamation.",
      codeSnippet: `class ConnectionGuard {
private:
    ConnectionPool& pool_;
    std::shared_ptr<Connection> conn_;
public:
    ConnectionGuard(ConnectionPool& pool) : pool_(pool), conn_(pool.acquire()) {}
    ~ConnectionGuard() { if (conn_) pool_.release(conn_); }
    std::shared_ptr<Connection> get() const { return conn_; }
};`
    },
    {
      id: "algorithmic-trading-systems",
      category: "Quantitative Finance & Systems",
      title: "Algorithmic Forex & Gold (XAU/USD) Trading Systems",
      summary:
        "Automated quantitative trading engine executing live tick analysis, 5/8 EMA momentum scalping on Gold, and currency correlation hedging via MetaTrader 5 API.",
      impact:
        "Logged 340+ live paper trades with sub-85ms tick-to-order execution latency and dynamic trailing stop-loss risk management.",
      metrics: [
        { label: "Execution Latency", value: "<85ms" },
        { label: "Trades Logged", value: "340+ Live" },
        { label: "Strategy Rule", value: "5/8 EMA Cross" },
        { label: "Risk Control", value: "Trailing ATR" }
      ],
      architecture:
        "Vectorized Python trading bot connected to MetaTrader 5 API streaming real-time market ticks, executing 5/8 EMA momentum scalping and correlation hedging.",
      stack: [
        "Python",
        "MetaTrader 5 API",
        "Pandas",
        "NumPy",
        "Web Scraping",
        "Technical Analysis",
        "Async Telemetry"
      ],
      githubUrl: "https://github.com/AhadiCoDeR1v1",
      highlights: [
        "5/8 EMA moving average crossover scalping engine optimized for Gold (XAU/USD) volatility",
        "Automated correlation scraping bot calculating real-time currency matrix to hedge open exposure",
        "Low-latency MetaTrader 5 Python IPC bridge processing live market ticks with sub-85ms execution",
        "Dynamic multi-tiered take-profit levels with ATR-based trailing stop loss preserving capital",
        "Automated trade journaling logging slippage, entry/exit ticks, and equity drawdown metrics"
      ],
      challenge:
        "Maintaining deterministic execution and risk hedging on high-volatility commodity markets (XAU/USD) where broker slippage and rapid trend reversals can breach risk limits.",
      solution:
        "Built a vector-accelerated Python trading bot that pairs fast EMA momentum triggers with real-time correlation scraping, auto-hedging opposing currency pairs and managing risk via automated trailing stops.",
      codeSnippet: `def check_signal(df: pd.DataFrame) -> Signal:
    fast_ema = df['close'].ewm(span=5, adjust=False).mean()
    slow_ema = df['close'].ewm(span=8, adjust=False).mean()
    
    # Golden cross momentum confirmation
    if fast_ema.iloc[-2] <= slow_ema.iloc[-2] and fast_ema.iloc[-1] > slow_ema.iloc[-1]:
        atr = calculate_atr(df, period=14)
        return Signal(type=OrderType.BUY, sl=df['close'].iloc[-1] - (1.5 * atr))
    return Signal(type=OrderType.HOLD)`
    },
    {
      id: "real-estate-prediction-pipeline",
      category: "Machine Learning & Scraping",
      title: "Islamabad House Price Prediction Pipeline",
      summary:
        "End-to-end machine learning system scraping real estate data across Islamabad, engineering features, and serving valuations via a Flask web application.",
      impact:
        "Benchmarked 5 regression algorithms across thousands of scraped listings; Gradient Boosting achieved top accuracy (R² ≈ 0.56) on real-world property valuation.",
      metrics: [
        { label: "Top Accuracy", value: "R² ≈ 0.56" },
        { label: "Model Type", value: "Gradient Boosting" },
        { label: "Scraper", value: "Selenium & BS4" },
        { label: "Serving Engine", value: "Flask REST" }
      ],
      architecture:
        "End-to-end ML pipeline with Selenium property scraping, feature normalization, one-hot location encoding, Gradient Boosting regression, and Flask REST deployment.",
      stack: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "Selenium",
        "BeautifulSoup",
        "Flask",
        "Pandas",
        "NumPy"
      ],
      githubUrl: "https://github.com/AhadiCoDeR1v1/HousePricePredictionSystem",
      highlights: [
        "Automated Selenium & BeautifulSoup scraping pipeline extracting real-time Islamabad real estate listings",
        "Robust feature cleaning handling missing amenities, area conversions (Marlas to Sq. Ft.), and location encoding",
        "Comparative model benchmarking evaluating Linear Regression, Decision Tree, Random Forest, Gradient Boosting, and XGBoost",
        "Interactive Flask web interface enabling users to input property specifications and receive instant valuations",
        "Model serialization with automated pipeline inference preserving preprocessing transformations"
      ],
      challenge:
        "Real estate pricing in Islamabad is notoriously unstructured, with non-standardized area units (Marlas vs Kanal) and non-linear valuation jumps across housing sectors (F-6 vs G-11).",
      solution:
        "Constructed an automated data extraction and cleaning pipeline with categorical location one-hot encoding, trained an ensemble Gradient Boosting Regressor, and served predictions via a lightweight Flask REST API.",
      codeSnippet: `def predict_price(location, area_sqft, bedrooms, baths):
    x_input = np.zeros(len(model_columns))
    x_input[0] = area_sqft
    x_input[1] = bedrooms
    x_input[2] = baths
    if location in model_columns:
        loc_index = model_columns.index(location)
        x_input[loc_index] = 1
    return round(float(model.predict([x_input])[0]), 2)`
    }
  ],

  skillsMatrix: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java (17 / 21)", level: "Advanced", desc: "Core Java, Concurrency, Virtual Threads, Streams, Memory Model" },
        { name: "Python", level: "Advanced", desc: "FastAPI, Pandas, NumPy, AsyncIO, LiteLLM, Machine Learning" },
        { name: "C++ (11 / 17)", level: "Proficient", desc: "POSIX Threads, RAII, Semaphores, Mutexes, Memory Optimization" },
        { name: "SQL", level: "Advanced", desc: "PostgreSQL, Indexing Strategies, Window Functions, EXPLAIN ANALYZE" },
        { name: "JavaScript / TypeScript", level: "Proficient", desc: "React.js, Node.js, Express, Modern ES6+ Architecture" },
        { name: "HTML5 / CSS3", level: "Proficient", desc: "Semantic HTML, Responsive Glassmorphism, CSS Custom Properties" }
      ]
    },
    {
      category: "Backend & Frameworks",
      skills: [
        { name: "Spring Boot 3.x", level: "Advanced", desc: "REST APIs, Security, Actuator, Flyway, Microservice Architecture" },
        { name: "Spring Data JPA / Hibernate", level: "Advanced", desc: "Pessimistic/Optimistic Locking, N+1 Optimization, Entity Graph" },
        { name: "Node.js & Express", level: "Proficient", desc: "REST Services, Storage Layer Migrations, Middleware Architecture" },
        { name: "FastAPI & Flask", level: "Proficient", desc: "Lightweight ML model serving, async endpoints, Pydantic validation" }
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "PostgreSQL 16", level: "Advanced", desc: "Row-level locking, Query Optimization, Connection Pooling, Migrations" },
        { name: "Redis", level: "Proficient", desc: "Cache-Aside, Distributed Sessions, Sub-millisecond Key-Value Store" },
        { name: "MongoDB", level: "Proficient", desc: "Document storage, aggregation pipelines, flexible schema designs" },
        { name: "SQLite", level: "Proficient", desc: "Embedded relational storage for desktop and local database workloads" }
      ]
    },
    {
      category: "Concurrency, AI & Cloud",
      skills: [
        { name: "LLM & Agent Tooling", level: "Advanced", desc: "LiteLLM, Google Gemini, Ollama, ReAct Agent Loops, Regex Security Gates" },
        { name: "RabbitMQ", level: "Proficient", desc: "Asynchronous messaging, exchange routing, event-driven decoupling" },
        { name: "Docker & Docker Compose", level: "Proficient", desc: "Multi-container orchestration, microservice provisioning, CI setup" },
        { name: "Resilience4j & Bucket4j", level: "Proficient", desc: "Circuit breakers, token-bucket rate limiting, retry policies" },
        { name: "Testcontainers & Mockito", level: "Advanced", desc: "TDD, unit testing, containerized Postgres/Redis integration tests" }
      ]
    }
  ],

  peerReview: {
    reviewerName: "Irtza Alyas",
    reviewerRole: "Peer Systems & Backend Engineer",
    date: "August 2026",
    quote:
      "Ahad demonstrates exceptional low-latency backend systems architecture, pessimistic concurrency safety, and autonomous AI engineering.",
    statusBadge: "Reviewed by peer systems engineer (Irtza Alyas)",
    reviewNotes: [
      "Verified pessimistic row-level locking architecture eliminating overselling in Spring Boot microservices.",
      "Audited C++17 POSIX connection pool with zero deadlocks and zero memory leaks under 100k Valgrind iterations.",
      "Validated Project GIGI autonomous ReAct tool loop and sub-0.01s regex security gate.",
      "Tested sub-85ms MetaTrader 5 execution and currency correlation hedging logic."
    ],
    highlights: [
      "Verified pessimistic row-level locking architecture eliminating overselling in Spring Boot microservices.",
      "Audited C++17 POSIX connection pool with zero deadlocks and zero memory leaks under 100k Valgrind iterations.",
      "Validated Project GIGI autonomous ReAct tool loop and sub-0.01s regex security gate.",
      "Tested sub-85ms MetaTrader 5 execution and currency correlation hedging logic."
    ]
  }
};
