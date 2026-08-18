import { useState, useEffect, useRef } from "react";
import { agentQuickPrompts, generateAgentResponse } from "../data/agentKnowledgeBase";

export default function PersonalAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "agent",
      text: `Hello! 👋 I am **Ahad's AI Systems Copilot**.\n\nI am grounded in Ahad's verified engineering architecture, case studies, C++ concurrency benchmarks, Spring Boot microservices, education, and credentials.\n\nHow can I help you today? You can type any question or select one of the suggested prompts below.`
    }
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  // Handle ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isTyping) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    setInputQuery("");
    setIsTyping(true);

    // Simulate AI thinking and stream response
    setTimeout(() => {
      const agentReply = generateAgentResponse(query);
      setMessages([...newMessages, { sender: "agent", text: agentReply }]);
      setIsTyping(false);
    }, 450);
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: "agent",
        text: `Chat reset. I am ready to answer any questions about Ahad Iqbal's backend systems, C++ concurrency, trading engines, or hiring availability!`
      }
    ]);
  };

  // Helper function to format basic markdown (bold, links, code, bullet points, headers)
  const renderFormattedText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Header 3
      if (line.startsWith("### ")) {
        return (
          <h4 key={idx} style={{ color: "var(--text-main)", fontSize: "1rem", fontWeight: 700, margin: "10px 0 6px" }}>
            {line.replace("### ", "")}
          </h4>
        );
      }
      // Bullet point
      if (line.startsWith("* ") || line.startsWith("- ")) {
        const content = line.substring(2);
        return (
          <div key={idx} style={{ display: "flex", gap: "8px", margin: "4px 0", paddingLeft: "4px" }}>
            <span style={{ color: "var(--accent-hover)", fontWeight: "bold" }}>▸</span>
            <span>{parseInlineMarkdown(content)}</span>
          </div>
        );
      }
      // Numbered list
      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={idx} style={{ margin: "4px 0", paddingLeft: "6px" }}>
            {parseInlineMarkdown(line)}
          </div>
        );
      }
      // Empty line spacing
      if (!line.trim()) {
        return <div key={idx} style={{ height: "6px" }} />;
      }
      // Standard paragraph
      return (
        <p key={idx} style={{ margin: "4px 0", lineHeight: 1.55 }}>
          {parseInlineMarkdown(line)}
        </p>
      );
    });
  };

  // Parse bold **text**, inline `code`, and markdown [links](url)
  const parseInlineMarkdown = (str) => {
    const parts = [];
    let remaining = str;
    let key = 0;

    while (remaining.length > 0) {
      // Markdown link [text](url)
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
      // Bold **text**
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
      // Code `code`
      const codeMatch = remaining.match(/`([^`]+)`/);

      // Find first occurrence
      let firstMatch = null;
      let matchType = null;
      let minIndex = remaining.length;

      if (linkMatch && linkMatch.index < minIndex) {
        firstMatch = linkMatch;
        matchType = "link";
        minIndex = linkMatch.index;
      }
      if (boldMatch && boldMatch.index < minIndex) {
        firstMatch = boldMatch;
        matchType = "bold";
        minIndex = boldMatch.index;
      }
      if (codeMatch && codeMatch.index < minIndex) {
        firstMatch = codeMatch;
        matchType = "code";
        minIndex = codeMatch.index;
      }

      if (!firstMatch) {
        parts.push(remaining);
        break;
      }

      if (minIndex > 0) {
        parts.push(remaining.substring(0, minIndex));
      }

      if (matchType === "link") {
        parts.push(
          <a
            key={key++}
            href={firstMatch[2]}
            target={firstMatch[2].startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            style={{ color: "var(--accent-hover)", textDecoration: "underline", fontWeight: 600 }}
          >
            {firstMatch[1]}
          </a>
        );
      } else if (matchType === "bold") {
        parts.push(
          <strong key={key++} style={{ color: "var(--text-main)", fontWeight: 700 }}>
            {firstMatch[1]}
          </strong>
        );
      } else if (matchType === "code") {
        parts.push(
          <code key={key++} className="badge-stack" style={{ fontSize: "0.8em", padding: "1px 6px", color: "#38bdf8", backgroundColor: "var(--bg-surface-subtle)" }}>
            {firstMatch[1]}
          </code>
        );
      }

      remaining = remaining.substring(minIndex + firstMatch[0].length);
    }

    return parts;
  };

  return (
    <>
      {/* Floating Launcher Button (Bottom-Right) */}
      {!isOpen && (
        <button
          className="agent-launcher-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open Ahad's AI Copilot"
        >
          <div className="agent-launcher-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
              <rect x="3" y="8" width="18" height="12" rx="4"></rect>
              <circle cx="8" cy="13" r="1.5" fill="currentColor"></circle>
              <circle cx="16" cy="13" r="1.5" fill="currentColor"></circle>
              <path d="M9 17h6"></path>
            </svg>
          </div>
          <div className="agent-launcher-text">
            <span className="agent-title-text">Ahad's AI Agent</span>
            <span className="agent-status-text">
              <span className="status-dot"></span>
              <span>Ask Me Anything</span>
            </span>
          </div>
        </button>
      )}

      {/* Expandable Chat Drawer Dialog */}
      {isOpen && (
        <div className="agent-chat-window" role="dialog" aria-modal="true" aria-labelledby="agent-chat-title">
          {/* Header */}
          <div className="agent-chat-header">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="agent-avatar-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="12" rx="4"></rect>
                  <circle cx="8" cy="13" r="1.5" fill="currentColor"></circle>
                  <circle cx="16" cy="13" r="1.5" fill="currentColor"></circle>
                  <path d="M9 17h6"></path>
                  <path d="M12 2v6"></path>
                </svg>
              </div>
              <div>
                <h3 id="agent-chat-title" style={{ fontSize: "0.9375rem", fontWeight: 700, margin: 0, color: "var(--text-main)" }}>
                  Ahad's AI Systems Copilot
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.6875rem", color: "var(--status-emerald)", fontFamily: "var(--font-mono)" }}>
                  <span className="status-dot"></span>
                  <span>Grounded on CV & Architecture</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                onClick={handleClearChat}
                className="agent-control-btn"
                title="Clear Chat"
                aria-label="Clear chat history"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="agent-control-btn"
                title="Close Agent"
                aria-label="Close AI Agent"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="agent-messages-container">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`agent-message-bubble ${msg.sender === "user" ? "user-bubble" : "agent-bubble"}`}
              >
                {msg.sender === "agent" && (
                  <div className="agent-msg-tag">
                    <span>AI Copilot</span>
                  </div>
                )}
                <div className="agent-msg-content">
                  {renderFormattedText(msg.text)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="agent-message-bubble agent-bubble" style={{ padding: "12px 16px" }}>
                <div className="typing-indicator-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="agent-quick-prompts-bar">
            <div className="quick-prompts-scroll">
              {agentQuickPrompts.map((promptText, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSendMessage(promptText)}
                  className="quick-prompt-chip"
                >
                  {promptText}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <form
            className="agent-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              className="agent-chat-input"
              placeholder="Ask about Ahad's Spring Boot, C++, trading systems, or background..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              disabled={isTyping}
            />
            <button
              type="submit"
              className="agent-send-btn"
              disabled={!inputQuery.trim() || isTyping}
              aria-label="Send query"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
