# Developer Guide: How to Add the Next Engineering Case Study
## Ahad Iqbal — Systems & Backend AI Portfolio Maintenance Standard

---

## 1. The Single Source of Truth Architecture

Every case study in this portfolio is dynamically rendered by adding an entry to the `caseStudies` array in [`src/data/portfolioData.js`](file:///home/ahadiqbal/Career/FlyRank/Assingments/portfolio-interface/src/data/portfolioData.js). 

When a new case study object is added:
1. **Case Studies Grid (`CaseStudies.jsx`)**: Automatically generates the project card, tags, and metric preview pills.
2. **Interactive Modal (`CaseStudyModal.jsx`)**: Automatically wires the deep-dive architecture dialog, benchmark cards, syntax-highlighted code block, and 1-click clipboard copy.
3. **Personal AI Copilot (`PersonalAgent.jsx` & `agentKnowledgeBase.js`)**: Automatically inherits knowledge of the project to answer recruiter and hiring manager inquiries in real time.

---

## 2. The 3-Beat Case Study Narrative Structure (Week 2 Standard)

Every case study must follow the strict 3-beat systems engineering shape:

```
+──────────────────────────────────────────────────────────────────────────────────────────────────────────+
|                                    THE 3-BEAT SYSTEMS CASE STUDY SHAPE                                   |
+────────────────────────────────┬────────────────────────────────────────┬────────────────────────────────+
| BEAT 1: THE BOTTLENECK / RACE  | BEAT 2: THE ARCHITECTURAL SOLUTION     | BEAT 3: THE VERIFIABLE IMPACT  |
+────────────────────────────────┼────────────────────────────────────────┼────────────────────────────────+
| What was broken, slow, or      | What specific algorithm, concurrency   | What were the measured latency |
| vulnerable to race conditions? | primitive, locking mode, or queue was  | numbers, throughput gains, or  |
| (e.g. overselling stock under  | engineered to resolve it? (e.g. row-   | deadlock-free stress test      |
| high-concurrency checkouts)    | level pessimistic write locks + Redis) | iterations? (e.g. <20ms p95)   |
+────────────────────────────────┴────────────────────────────────────────┴────────────────────────────────+
```

---

## 3. Drop-in Schema Template for `portfolioData.js`

To add a new project, append this JSON object to `portfolioData.caseStudies`:

```javascript
{
  id: "unique-project-slug",
  category: "Enterprise Backend | Autonomous AI | Low-Level Systems | Quant",
  title: "Full Production Project Title",
  summary: "1-2 sentence executive overview highlighting the architecture and core technologies.",
  impact: "1-2 sentence measurable impact statement with concrete latency, throughput, or reliability numbers.",
  metrics: [
    { label: "Primary Latency / Benchmark", value: "<25ms p95" },
    { label: "Core Pattern", value: "Token Bucket" },
    { label: "Reliability Guarantee", value: "Zero Race Conditions" },
    { label: "Test Coverage", value: "Testcontainers" }
  ],
  architecture: "Comprehensive summary of the microservice architecture, caching strategy, and data flow.",
  stack: ["Java 21", "Spring Boot 3.3", "PostgreSQL", "Redis", "Docker", "RabbitMQ"],
  githubUrl: "https://github.com/AhadiCoDeR1v1/repository-name",
  highlights: [
    "Key architectural highlight 1 detailing concurrency primitives",
    "Key architectural highlight 2 detailing distributed caching or messaging",
    "Key architectural highlight 3 detailing defensive rate limiting or circuit breaking",
    "Key architectural highlight 4 detailing containerized TDD test suites"
  ],
  challenge: "Beat 1: The concurrency contention, race condition, or latency bottleneck faced.",
  solution: "Beat 2: The exact architectural solution, locking strategy, or data pipeline implemented.",
  codeSnippet: `// Beat 3: Critical implementation snippet demonstrating production-grade code
@Service
public class RateLimiterService { ... }`
}
```

---

## 4. One-Shot AI Context Preservation Prompt

When you complete a new project, feed this prompt to your AI coding assistant:

```text
Add a new case study to my portfolio at src/data/portfolioData.js:
- Project Name: [Insert Name]
- Category: [Insert Category]
- Tech Stack: [Insert Stack]
- GitHub URL: [Insert URL]
- Challenge (Beat 1): [Describe the concurrency/systems bottleneck]
- Solution (Beat 2): [Describe the architectural solution implemented]
- Impact (Beat 3): [List verified benchmark metrics and p95 latency]
- Code Snippet: [Paste 10-20 lines of critical production code]

Ensure metrics array and highlights are populated, and update agentKnowledgeBase.js so Ahad's AI Copilot can answer recruiter questions about this project.
```
