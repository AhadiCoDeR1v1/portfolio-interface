export const portfolioData = {
  profile: {
    name: "Ahad Iqbal",
    monogram: "AI.",
    title: "Backend AI Engineer & Full-Stack Systems Developer",
    education: "BS Computer Science — COMSATS University Islamabad (Grade: A-)",
    location: "Sargodha / Islamabad, Pakistan",
    status: "Available for High-Throughput Systems & Backend Roles",
    headline: "Ahad Iqbal — Backend AI Engineer & Full-Stack Systems Developer",
    proofStatement:
      "I architect high-throughput Spring Boot microservices, high-performance concurrent systems in C++, and automated algorithmic trading engines with machine learning.",
    bioDetail:
      "Specialized in low-latency backend architectures, distributed transaction safety, and machine learning pipelines. Experienced in eliminating concurrency bottlenecks, pessimistic database locking under checkout surges, and building fault-tolerant microservices.",
    githubUrl: "https://github.com/AhadiCoDeR1v1",
    linkedinUrl: "https://linkedin.com/in/ahad-iqbal-70a496292",
    email: "ahadparhar@gmail.com",
    stats: [
      { label: "Execution Latency", value: "<85ms", detail: "Sub-second tick-to-order pipeline" },
      { label: "Live Trades Logged", value: "340+", detail: "Algorithmic scalping & hedge engines" },
      { label: "Concurrency Contention", value: "0 Deadlocks", detail: "Stress-tested POSIX thread pools" },
      { label: "API p95 Response", value: "<20ms", detail: "Spring Boot 3.3 + PostgreSQL indexed" }
    ]
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad",
    grade: "Grade: A-",
    duration: "Graduated with Honors",
    highlights: [
      "Specialized coursework in Distributed Systems, Operating Systems, Advanced Database Design, and Algorithms.",
      "Designed and benchmarked concurrent synchronization primitives and quantitative market telemetry engines."
    ]
  },

  certifications: [
    {
      issuer: "Amigoscode",
      title: "Advanced Spring Boot & Enterprise Architecture",
      skills: ["Spring Boot 3", "Microservices", "Security", "Actuator", "Prometheus"],
      credentialUrl: "https://amigoscode.com"
    },
    {
      issuer: "Amigoscode",
      title: "Spring Data JPA & Hibernate Performance",
      skills: ["Entity Graphs", "Flyway", "Transaction Management", "HikariCP"],
      credentialUrl: "https://amigoscode.com"
    },
    {
      issuer: "Amigoscode",
      title: "Building Scalable REST APIs with Spring Boot",
      skills: ["RESTful Contracts", "DTO Mapping", "Validation", "Exception Handling"],
      credentialUrl: "https://amigoscode.com"
    },
    {
      issuer: "Amigoscode",
      title: "Java Unit Testing (TDD & Mockito)",
      skills: ["Test-Driven Development", "Mockito", "JUnit 5", "Testcontainers"],
      credentialUrl: "https://amigoscode.com"
    },
    {
      issuer: "Amigoscode",
      title: "Java Streams & Functional Programming",
      skills: ["Modern Java 17/21", "Parallel Streams", "Lambdas", "Immutability"],
      credentialUrl: "https://amigoscode.com"
    },
    {
      issuer: "Amigoscode",
      title: "Up and Running with SQL & Relational Databases",
      skills: ["PostgreSQL", "Query Tuning", "ACID Transactions", "Indexing"],
      credentialUrl: "https://amigoscode.com"
    }
  ],

  caseStudies: [
    {
      id: "inventory-order-engine",
      title: "Inventory & Order Processing Backend Engine",
      category: "Flagship Enterprise Backend & Microservices",
      featured: true,
      githubUrl: "https://github.com/AhadiCoDeR1v1/InventoryManager",
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
      summary:
        "High-throughput event-driven microservice with pessimistic locking, distributed caching, rate limiting, and fault-tolerant asynchronous order queues.",
      metrics: [
        { label: "p95 Latency", value: "<20ms" },
        { label: "Concurrency Safety", value: "Pessimistic Lock" },
        { label: "Fault Tolerance", value: "Circuit Breakers" },
        { label: "Integration Tests", value: "Testcontainers" }
      ],
      highlights: [
        "Pessimistic database locking preventing inventory overselling race conditions under intense concurrent checkouts",
        "Bucket4j token-bucket rate limiting and stateless JWT Role-Based Access Control (RBAC)",
        "Redis distributed caching layer eliminating read contention on high-frequency catalog items",
        "RabbitMQ asynchronous messaging for decoupled order notifications and email dispatch",
        "Resilience4j circuit breakers and automated retries guaranteeing payment gateway resilience",
        "Flyway automated database migrations and Testcontainers for integration testing against real Postgres/Redis instances"
      ],
      architecture:
        "Architected as a production-grade, event-driven Spring Boot 3.3 service on Java 21. Employs Spring Data JPA with explicit pessimistic write locking (`@Lock(LockModeType.PESSIMISTIC_WRITE)`) on stock entities to eliminate inventory race conditions during flash sales. Asynchronous order processing routes through RabbitMQ exchange workers, while Resilience4j wraps third-party dependencies with circuit breakers and fallback handlers.",
      challenge:
        "High-concurrency checkout bursts caused race conditions where multiple checkout threads read identical inventory counts before committing, leading to negative stock balances and duplicate reservations.",
      solution:
        "Implemented pessimistic database write locks at the repository tier combined with Redis cached stock counters for fast validation. Integrated Bucket4j rate limiting to throttle abusive request bursts and Testcontainers to verify concurrent checkout safety under synthetic test loads.",
      codeSnippet: `// Pessimistic Locking & Resilient Order Processing
@Service
@Transactional
public class OrderProcessingService {

    private final ProductRepository productRepo;
    private final RabbitTemplate rabbitTemplate;

    @CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
    public OrderReceipt processCheckout(UUID productId, int quantity, UserPrincipal user) {
        // Acquire row-level pessimistic lock on product stock
        Product product = productRepo.findByIdWithPessimisticLock(productId)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        if (product.getStockQuantity() < quantity) {
            throw new InsufficientStockException("Requested quantity exceeds available stock");
        }

        product.decrementStock(quantity);
        productRepo.save(product);

        OrderReceipt receipt = createOrderRecord(product, quantity, user);
        rabbitTemplate.convertAndSend("order.exchange", "order.created", receipt);
        return receipt;
    }
}`
    },
    {
      id: "threadsafe-connection-pool",
      title: "Thread-Safe Connection Pool Manager",
      category: "High-Performance Systems & Concurrency",
      featured: true,
      githubUrl: "https://github.com/AhadiCoDeR1v1/Thread-safe-connection-pool",
      stack: ["C++17", "POSIX Threads", "Mutexes", "Semaphores", "Valgrind", "RAII"],
      summary:
        "High-concurrency resource pool coordinating worker threads, eliminating deadlocks, starvation, and race conditions under heavy load.",
      metrics: [
        { label: "Worker Threads", value: "8 Concurrent" },
        { label: "Deadlocks / Leaks", value: "0 Recorded" },
        { label: "Throughput Multiplier", value: "4.2x" },
        { label: "Safety Standard", value: "Strict RAII" }
      ],
      highlights: [
        "Concurrent database connection pool simulation coordinating up to 8 simultaneous worker threads",
        "Synchronized resource acquisition via POSIX semaphores and mutexes to eradicate race conditions and deadlocks",
        "Fair FIFO thread allocation preventing connection starvation during prolonged transaction holds",
        "Strict RAII-compliant handle wrappers guaranteeing zero resource leaks even during thread exceptions"
      ],
      architecture:
        "Engineered in modern C++17 utilizing native POSIX threading (`pthreads`) primitives. Implements a thread-safe connection repository governed by counting semaphores representing available pool capacity and mutexes shielding queue state transitions. Worker threads acquire pooled connections through scoped RAII guard objects that ensure deterministic release back to the pool upon destruction.",
      challenge:
        "Simulating high-frequency concurrent queries across 8 worker threads exposed race conditions in connection state tracking, leading to double-allocation bugs and sporadic thread starvation.",
      solution:
        "Re-engineered pool synchronization using binary mutexes around queue operations coupled with POSIX counting semaphores. Verified memory safety and zero leaks under 100,000 simulated iterations using Valgrind Memcheck and Helgrind.",
      codeSnippet: `// RAII Scoped Resource Acquisition in C++17
class ScopedConnectionGuard {
public:
    explicit ScopedConnectionGuard(ConnectionPool& pool)
        : pool_(pool), connection_(pool.acquire()) {}

    ~ScopedConnectionGuard() {
        if (connection_) {
            pool_.release(connection_);
        }
    }

    Connection* get() const { return connection_; }
    Connection* operator->() const { return connection_; }

private:
    ConnectionPool& pool_;
    Connection* connection_;
};`
    },
    {
      id: "algorithmic-trading-systems",
      title: "Algorithmic Forex & Gold (XAU/USD) Trading Systems",
      category: "Quantitative Finance & Automation",
      featured: true,
      stack: ["Python", "MetaTrader 5 API", "Pandas", "NumPy", "Async Telemetry", "Machine Learning"],
      summary:
        "Automated 5/8 EMA crossover scalping engine and correlation-based hedge system logging 340+ live paper trades with sub-second execution.",
      metrics: [
        { label: "Live Trades Logged", value: "340+" },
        { label: "Pipeline Latency", value: "<85ms" },
        { label: "Strategy 1", value: "5/8 EMA Cross" },
        { label: "Strategy 2", value: "Correlation Hedge" }
      ],
      highlights: [
        "Automated 5/8 EMA moving-average crossover scalping engine on Gold (XAU/USD) with tiered take-profit and trailing stop-loss",
        "Correlation-based hedge trading system scraping forex currency correlations and opening negatively-correlated paired positions",
        "MetaTrader 5 Python IPC bridge streaming real-time tick arrays into vectorized NumPy computational buffers",
        "Live paper-trading telemetry logging slippage, execution timestamps, and risk-reward ratios across 340+ live market events"
      ],
      architecture:
        "Constructed in Python utilizing the MetaTrader 5 API bridge and high-speed Pandas/NumPy vectorization. The engine maintains rolling tick buffers computed via Exponential Moving Averages across 1-minute and 5-minute charts. An asynchronous risk management layer validates equity thresholds, dynamic lot sizing, and multi-tier take-profit triggers before dispatching market orders.",
      challenge:
        "Volatile price action on Gold (XAU/USD) during news releases caused rapid indicator flipping, triggering duplicate order dispatches and execution slippage.",
      solution:
        "Integrated an order state-machine with lock-out cooldown timers and trailing ATR volatility buffers, ensuring orders only execute on confirmed candle closes with verified broker confirmations.",
      codeSnippet: `# 5/8 EMA Quantitative Signal Generation & Execution
def evaluate_ema_cross(df: pd.DataFrame) -> SignalType:
    df['ema5'] = df['close'].ewm(span=5, adjust=False).mean()
    df['ema8'] = df['close'].ewm(span=8, adjust=False).mean()

    # Detect crossover on current and previous candle
    bullish_cross = (df['ema5'].iloc[-2] <= df['ema8'].iloc[-2]) and (df['ema5'].iloc[-1] > df['ema8'].iloc[-1])
    bearish_cross = (df['ema5'].iloc[-2] >= df['ema8'].iloc[-2]) and (df['ema5'].iloc[-1] < df['ema8'].iloc[-1])

    if bullish_cross:
        return SignalType.BUY
    elif bearish_cross:
        return SignalType.SELL
    return SignalType.HOLD`
    },
    {
      id: "real-estate-prediction-pipeline",
      title: "Islamabad Real Estate Price Prediction Pipeline",
      category: "Machine Learning & Web Scraping",
      featured: false,
      githubUrl: "https://github.com/AhadiCoDeR1v1/HousePricePredictionSystem",
      stack: ["Python", "Scikit-learn", "XGBoost", "Selenium", "BeautifulSoup", "Flask", "Pandas"],
      summary:
        "End-to-end property scraping pipeline and machine learning regression model (Gradient Boosting, R² ≈ 0.56) deployed via Flask.",
      metrics: [
        { label: "Top Model", value: "Gradient Boosting" },
        { label: "Validation R²", value: "~0.56" },
        { label: "Models Benchmarked", value: "5 Algorithms" },
        { label: "Deployment", value: "Flask App" }
      ],
      highlights: [
        "Automated scraping pipeline extracting comprehensive property listings from Islamabad real estate portals using Selenium & BeautifulSoup",
        "Feature engineering pipeline handling categorical encoding, missing value imputation, and outlier removal",
        "Trained and evaluated 5 regression algorithms: Linear Regression, Decision Tree, Random Forest, Gradient Boosting, and XGBoost",
        "Interactive Flask web interface allowing users to input location, area, and bedrooms for dynamic market price estimates"
      ],
      architecture:
        "Comprises a dual-stage architecture: an asynchronous data scraping & cleaning module using Selenium/BeautifulSoup that builds an enriched tabular dataset, and a Scikit-learn/XGBoost machine learning training pipeline. Hyperparameter tuning identified Gradient Boosting as the most robust predictor ($R^2 \\approx 0.56$), which is serialized and served through a Flask REST backend.",
      challenge:
        "Raw real estate data suffered from severe skewness, inconsistent area units (Marla vs. Kanal vs. Sq. Ft.), and noisy missing values.",
      solution:
        "Engineered a rigorous data transformation pipeline standardizing all area metrics to square feet, applying log-transforms to normalize price distributions, and encoding high-cardinality location coordinates.",
      codeSnippet: `# Scikit-Learn Model Training & Benchmarking Pipeline
pipeline = Pipeline(steps=[
    ('preprocessor', ColumnTransformer(transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ])),
    ('regressor', GradientBoostingRegressor(n_estimators=200, learning_rate=0.08, max_depth=5, random_state=42))
])

pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)
r2_score = metrics.r2_score(y_test, y_pred) # Evaluated at ~0.56`
    },
    {
      id: "task-management-progression",
      title: "Task Management CRUD Storage Engine Progression",
      category: "Internship Core Deliverable — FlyRank AI",
      featured: false,
      stack: ["Node.js", "Express", "SQLite", "PostgreSQL 16", "Docker Compose", "Supabase Auth"],
      summary:
        "Progressive architectural evolution of an API storage engine across 4 iterative stages while preserving an identical REST contract.",
      metrics: [
        { label: "Progression Stages", value: "4 Iterations" },
        { label: "Contract Parity", value: "100% Identical" },
        { label: "Database", value: "PostgreSQL 16" },
        { label: "Security", value: "Supabase JWT" }
      ],
      highlights: [
        "Evolved storage backend across 4 iterations: In-Memory (A1) -> SQLite Embedded (A2) -> Dockerized PostgreSQL (A3) -> Supabase Bearer Auth (A4)",
        "Maintained 100% identical public RESTful API contract and test harness across all database migrations",
        "Containerized multi-service deployment utilizing Docker Compose for localized PostgreSQL database provisioning",
        "Integrated Supabase Bearer JWT authentication filters for secure user-scoped CRUD operations"
      ],
      architecture:
        "Demonstrates evolutionary software design at FlyRank AI. The backend was structured with a strict interface-driven repository pattern, decoupling business controller logic from underlying persistence engines. Swapping from volatile in-memory storage to SQLite, Dockerized PostgreSQL 16, and eventually Supabase Cloud required zero changes to the consumer-facing REST endpoints.",
      challenge:
        "Refactoring the database tier across 4 distinct storage paradigms without breaking existing integration tests or introducing endpoint discrepancies.",
      solution:
        "Adopted the Repository Pattern and Data Transfer Object (DTO) validation layer, ensuring each storage adapter conformed to a strict TypeScript/JavaScript interface contract.",
      codeSnippet: `// Interface-Driven Repository Abstraction Pattern
class TaskService {
    constructor(private readonly taskRepository: ITaskRepository) {}

    async getTasksForUser(userId: string): Promise<TaskDTO[]> {
        const entities = await this.taskRepository.findByUserId(userId);
        return entities.map(TaskMapper.toDTO);
    }

    async createTask(dto: CreateTaskDTO, userId: string): Promise<TaskDTO> {
        const task = await this.taskRepository.create({ ...dto, userId });
        return TaskMapper.toDTO(task);
    }
}`
    }
  ],

  skillsMatrix: [
    {
      category: "Programming Languages",
      icon: "code",
      skills: [
        { name: "Java", level: "Advanced", detail: "Java 17/21, Spring Boot 3, Concurrency, JVM Tuning", tag: "Primary" },
        { name: "Python", level: "Advanced", detail: "AsyncIO, NumPy, Pandas, Scikit-learn, MetaTrader 5 API", tag: "Primary" },
        { name: "C++", level: "Proficient", detail: "C++11/17, POSIX Threads, Semaphores, RAII, Memory Safety", tag: "Core" },
        { name: "SQL", level: "Advanced", detail: "Query Optimization, Indexing, Transactions, DDL/DML", tag: "Core" },
        { name: "JavaScript / TypeScript", level: "Proficient", detail: "Node.js, Express, Modern Async ES6+, Supabase", tag: "Full-Stack" }
      ]
    },
    {
      category: "Backend & Enterprise Frameworks",
      icon: "server",
      skills: [
        { name: "Spring Boot 3.x", level: "Advanced", detail: "Spring Data JPA, Spring Security, Actuator, REST APIs", tag: "Enterprise" },
        { name: "Spring Data JPA / Hibernate", level: "Advanced", detail: "Entity graphs, pessimistic locking, connection pooling", tag: "Enterprise" },
        { name: "FastAPI & Flask", level: "Advanced", detail: "Asynchronous endpoints, ML model serving, Pydantic", tag: "Microservices" },
        { name: "Node.js / Express", level: "Proficient", detail: "Event-driven runtime, non-blocking REST APIs", tag: "API Engine" }
      ]
    },
    {
      category: "Databases & Storage",
      icon: "database",
      skills: [
        { name: "PostgreSQL 16", level: "Advanced", detail: "ACID transactions, EXPLAIN ANALYZE, B-Tree index, Flyway", tag: "Relational" },
        { name: "Redis", level: "Proficient", detail: "In-memory distributed caching, Pub/Sub, rate limiting", tag: "In-Memory" },
        { name: "MongoDB", level: "Proficient", detail: "Document store, aggregation pipelines, NoSQL", tag: "NoSQL" },
        { name: "SQLite", level: "Advanced", detail: "Embedded storage, WAL mode, low-footprint DB", tag: "Embedded" }
      ]
    },
    {
      category: "Concurrency, Messaging & Cloud",
      icon: "cpu",
      skills: [
        { name: "POSIX Threads (pthreads)", level: "Advanced", detail: "Mutexes, semaphores, deadlock elimination", tag: "Systems" },
        { name: "RabbitMQ", level: "Proficient", detail: "Asynchronous messaging, decoupled order events", tag: "Messaging" },
        { name: "Docker & Docker Compose", level: "Advanced", detail: "Multi-stage builds, containerized service orchestration", tag: "DevOps" },
        { name: "Resilience4j & Bucket4j", level: "Advanced", detail: "Circuit breakers, rate limiting, retry patterns", tag: "Resilience" },
        { name: "Flyway & Testcontainers", level: "Advanced", detail: "Versioned DB migrations, isolated integration testing", tag: "Testing" }
      ]
    },
    {
      category: "AI, Machine Learning & Analytics",
      icon: "brain",
      skills: [
        { name: "Scikit-learn & XGBoost", level: "Proficient", detail: "Regression modeling, Gradient Boosting, feature pipelines", tag: "ML" },
        { name: "Pandas & NumPy", level: "Advanced", detail: "Vectorized time-series analysis, mathematical computations", tag: "Analytics" },
        { name: "Selenium & BeautifulSoup", level: "Advanced", detail: "Automated web data scraping, DOM extraction pipelines", tag: "Scraping" },
        { name: "MetaTrader 5 API", level: "Advanced", detail: "Quantitative market streaming, automated order execution", tag: "FinTech" }
      ]
    }
  ],

  peerReview: {
    reviewerName: "Irtza Alyas",
    reviewerTitle: "Peer Systems & Backend Engineer",
    version: "v0.9 Early Architecture Release",
    status: "Verified Systems & Concurrency Benchmarks",
    date: "August 2026",
    quote: "Early Architecture Release — Reviewed by peer systems engineer (Irtza Alyas)",
    reviewNotes: [
      "Audited Spring Boot 3.3 Inventory Engine: verified pessimistic locking preventing stock overselling under concurrent checkout spikes.",
      "Inspected C++17 connection pool: validated zero deadlocks and zero memory leaks under multi-threaded stress tests.",
      "Verified Python quantitative trading architecture: confirmed non-blocking 5/8 EMA signal generation and MT5 sub-second order dispatch."
    ]
  }
};
