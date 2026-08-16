export const portfolioData = {
  profile: {
    name: "Ahad Iqbal",
    monogram: "AI.",
    title: "Backend AI Engineer",
    status: "Available for High-Throughput Systems Roles",
    location: "Global / Remote",
    headline: "Ahad Iqbal — Backend AI Engineer",
    proofStatement:
      "I build high-throughput, low-latency asynchronous microservices and API infrastructure that solve real-time concurrency and race condition bottlenecks.",
    bioDetail:
      "Specialized in quantitative execution pipelines, thread-safe systems programming, and production-grade enterprise microservices. Passionate about eliminating I/O wait states, optimizing database indexing, and designing resilient distributed architectures.",
    githubUrl: "https://github.com/AhadiCoDeR1v1",
    email: "ahadparhar@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/ahad-iqbal",
    stats: [
      { label: "Execution Latency", value: "<85ms", detail: "Sub-second tick-to-order pipeline" },
      { label: "Live Trades Executed", value: "340+", detail: "Zero desync errors recorded" },
      { label: "Concurrency Contention", value: "0 Deadlocks", detail: "Stress tested with 1,000+ threads" },
      { label: "API p95 Response", value: "<20ms", detail: "Spring Boot 3 + PostgreSQL indexed" }
    ]
  },

  caseStudies: [
    {
      id: "xauusd-scalping-engine",
      title: "Automated Algorithmic Scalping Engine (XAUUSD)",
      category: "Quantitative Systems & Async Pipelines",
      stack: ["Python", "Pandas", "NumPy", "Async Telemetry", "WebSockets", "ZeroMQ"],
      summary:
        "5/8 EMA quantitative trading engine logging 340+ live trades with sub-second execution.",
      metrics: [
        { label: "Live Trades", value: "340+" },
        { label: "Pipeline Latency", value: "<85ms" },
        { label: "Strategy", value: "5/8 EMA Cross" },
        { label: "Execution Reliability", value: "99.98%" }
      ],
      highlights: [
        "Real-time WebSocket market data ingestion with sub-millisecond ring buffers",
        "Vectorized NumPy calculations for instantaneous Exponential Moving Average signals",
        "Asynchronous non-blocking order state manager preventing duplicate order races",
        "Live telemetry pipeline logging slippage, latency overhead, and fills to structured storage"
      ],
      architecture:
        "Engineered with an asynchronous event-driven loop in Python utilizing asyncio and uvloop. Incoming tick feeds are buffered into ring memory arrays where NumPy vectorization computes the 5-period and 8-period EMAs across 1-minute and 5-minute timeframes. A dedicated non-blocking order execution manager prevents concurrent race triggers during high-volatility spikes.",
      challenge:
        "High market volatility during London/NY market overlap caused burst order events, introducing race conditions where multiple sub-second price ticks triggered duplicate market orders before exchange acknowledgment.",
      solution:
        "Implemented an asynchronous mutex state-machine with lock-free sequence ID verification and an isolated telemetry worker that offloads logging to background threads without stalling the critical execution loop.",
      codeSnippet: `# Async order dispatch with state verification
async def execute_signal(self, signal: SignalEvent) -> OrderReceipt:
    async with self._order_lock:
        if not self._state.can_transact(signal.asset):
            return OrderReceipt(status="REJECTED_STATE_CONFLICT")
            
        receipt = await self._broker_client.send_market_order(
            symbol=signal.symbol,
            units=signal.position_size,
            side=signal.side,
            timestamp_ns=time.perf_counter_ns()
        )
        self._telemetry.log_execution(receipt)
        return receipt`
    },
    {
      id: "threadsafe-connection-pool",
      title: "Thread-Safe Connection Pool Manager",
      category: "Low-Level Systems & Concurrency",
      stack: ["C++11", "POSIX Threads", "Mutexes", "Semaphores", "Valgrind", "RAII"],
      summary:
        "High-concurrency resource pool eliminating thread starvation and deadlocks under heavy load.",
      metrics: [
        { label: "Concurrent Threads", value: "1,000+" },
        { label: "Deadlocks / Leaks", value: "0" },
        { label: "Throughput Multiplier", value: "4.2x" },
        { label: "Queue Policy", value: "FIFO Fair" }
      ],
      highlights: [
        "Strict RAII-compliant handle wrappers ensuring zero resource leaks on thread exceptions",
        "Custom counting semaphore and condition variable synchronization preventing busy-waiting",
        "Dynamic pool resizing with thread starvation mitigation under burst traffic",
        "Comprehensive stress-tested test harness verified with Valgrind Memcheck and Helgrind"
      ],
      architecture:
        "Designed in modern C++ utilizing POSIX threading primitives. The pool maintains an active and idle resource queue wrapped in RAII smart pointers. When worker threads request connections, synchronization is achieved via std::condition_variable and atomic counters rather than coarse-grained global locks, allowing lock-free status inspection.",
      challenge:
        "Under sustained multi-threaded bursts (>1000 simulated threads), naive mutex locking caused severe lock contention, thread starvation for long-running transactions, and sporadic priority inversions.",
      solution:
        "Engineered a fair FIFO waiting queue with condition variable signalling, granular read/write locks, and timed acquisition fallbacks. Achieved a 4.2x throughput increase and 100% thread safety verified via Helgrind.",
      codeSnippet: `// RAII Scoped Connection Acquisition
class ScopedConnection {
public:
    explicit ScopedConnection(ConnectionPool& pool, std::chrono::milliseconds timeout)
        : pool_(pool), conn_(pool.acquire(timeout)) {}
        
    ~ScopedConnection() {
        if (conn_) pool_.release(std::move(conn_));
    }
    
    Connection* operator->() { return conn_.get(); }
private:
    ConnectionPool& pool_;
    std::unique_ptr<Connection> conn_;
};`
    },
    {
      id: "enterprise-spring-boot-service",
      title: "Enterprise Spring Boot & PostgreSQL Service Architecture",
      category: "Enterprise Backend & Distributed Services",
      stack: ["Java", "Spring Boot 3", "Spring Data JPA", "Docker", "PostgreSQL", "Flyway", "JWT"],
      summary:
        "Production-grade RESTful API with automated database migrations, containerized deployment, and JWT security.",
      metrics: [
        { label: "p95 Latency", value: "<20ms" },
        { label: "Spring Boot", value: "Version 3.x" },
        { label: "Containerization", value: "Docker Compose" },
        { label: "Migrations", value: "Flyway CI/CD" }
      ],
      highlights: [
        "Layered Domain-Driven Design (DDD) with clean separation of Controllers, Services, and Repositories",
        "Stateless Spring Security 6 integration with dual JWT tokens (Access + Refresh Rotation)",
        "PostgreSQL query optimization with compound indexing, HikariCP connection tuning, and Flyway versioning",
        "Multi-stage Docker build pipeline reducing final runtime container footprint to <180MB"
      ],
      architecture:
        "Built on Java 17 / Spring Boot 3 framework utilizing Spring Data JPA for persistence and PostgreSQL for ACID-compliant storage. API endpoints enforce strict role-based access control (RBAC) via Spring Security filters. Schema evolutions are version-controlled via Flyway migration scripts embedded in the build lifecycle.",
      challenge:
        "N+1 query loading and unoptimized join operations caused request response times to degrade during complex multi-entity reporting queries under load.",
      solution:
        "Refactored data access layers using custom JPQL @EntityGraph fetch joins, added composite B-Tree indexes on high-frequency lookup columns, and tuned HikariCP pool parameters to sustain 1,200+ req/sec at <20ms p95 latency.",
      codeSnippet: `@RestController
@RequestMapping("/api/v1/workloads")
@Validated
public class WorkloadController {
    private final WorkloadService workloadService;

    public WorkloadController(WorkloadService workloadService) {
        this.workloadService = workloadService;
    }

    @GetMapping(value = "/{id}/metrics", produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ENGINEER')")
    public ResponseEntity<WorkloadMetricsDTO> getWorkloadMetrics(@PathVariable UUID id) {
        return ResponseEntity.ok(workloadService.getOptimizedMetrics(id));
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
        { name: "Python", level: "Advanced", detail: "AsyncIO, NumPy, Pandas, FastAPI, Vectorized math", tag: "Primary" },
        { name: "C++", level: "Proficient", detail: "C++11/14, POSIX Threads, RAII, Memory Optimization", tag: "Core" },
        { name: "SQL", level: "Advanced", detail: "Query Optimization, Indexing, Transactions, DDL/DML", tag: "Core" },
        { name: "JavaScript / TypeScript", level: "Proficient", detail: "Node.js, Express, Modern Async ES6+", tag: "Full-Stack" }
      ]
    },
    {
      category: "Backend & Frameworks",
      icon: "server",
      skills: [
        { name: "Spring Boot 3", level: "Advanced", detail: "Spring Data JPA, Spring Security, REST APIs", tag: "Enterprise" },
        { name: "FastAPI", level: "Advanced", detail: "Asynchronous endpoints, Pydantic validation", tag: "Microservices" },
        { name: "Node.js / Express", level: "Proficient", detail: "Event-driven runtime, non-blocking I/O", tag: "API Engine" },
        { name: "Docker & Compose", level: "Advanced", detail: "Multi-stage builds, container orchestration", tag: "DevOps" }
      ]
    },
    {
      category: "Databases & Caching",
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: "Advanced", detail: "ACID transactions, EXPLAIN ANALYZE, B-Tree index", tag: "Relational" },
        { name: "Redis", level: "Proficient", detail: "In-memory caching, Pub/Sub, rate limiting", tag: "In-Memory" },
        { name: "MongoDB", level: "Proficient", detail: "Document store, aggregation pipelines", tag: "NoSQL" },
        { name: "SQLite", level: "Advanced", detail: "Embedded storage, WAL mode, low-footprint DB", tag: "Embedded" }
      ]
    },
    {
      category: "Systems & Architecture",
      icon: "cpu",
      skills: [
        { name: "Concurrency & Multithreading", level: "Advanced", detail: "Mutexes, semaphores, race condition mitigation", tag: "Systems" },
        { name: "Asynchronous Telemetry & I/O", level: "Advanced", detail: "Event loops, non-blocking network streams", tag: "Telemetry" },
        { name: "RESTful & WebSocket APIs", level: "Advanced", detail: "Real-time bi-directional streaming & contracts", tag: "Networking" },
        { name: "Microservices & Distributed Design", level: "Proficient", detail: "Fault tolerance, decoupled service boundaries", tag: "Architecture" }
      ]
    }
  ],

  peerReview: {
    reviewerName: "Irtza Alyas",
    reviewerTitle: "Peer Systems & Backend Engineer",
    version: "v0.9 Early Release",
    status: "Verified Architectural & Concurrency Benchmarks",
    date: "August 2026",
    quote:
      "Reviewed by peer engineer (Irtza Alyas) — v0.9 Early Release",
    reviewNotes: [
      "Verified thread safety in C++ resource pool under synthetic 1,000-thread stress harness.",
      "Audited Python 5/8 EMA execution pipeline for asynchronous non-blocking order state consistency.",
      "Confirmed Spring Boot 3 enterprise service data modeling, Flyway migration scripts, and JWT token rotation."
    ]
  }
};
