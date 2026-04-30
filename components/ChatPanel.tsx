"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "@/assets/svg";

/* Icons unchanged */
function FlollamaLogoIcon() {
  return (
    <div className="h-8 w-7 relative shrink-0 text-muted">
      <svg viewBox="0 0 30 32" className="absolute inset-0 size-full">
        <g clipPath="url(#clip_flollama_logo)">
          <path d={svgPaths.p3e749db2} fill="currentColor" />
          <path d={svgPaths.p37d4ae00} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function SendIcon() {
  return (
    <div className="relative w-5 h-5 shrink-0 text-muted">
      <div className="absolute inset-[6%]">
        <svg viewBox="0 0 15.6 17.5" className="absolute inset-0 size-full">
          <path d={svgPaths.p1bc7d400} fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

/* Types */
type Role = "user" | "assistant";

interface Message {
  id: number;
  role: Role;
  content: string;
}

/* Mock */
const INITIAL_MESSAGES: Message[] = [
  { id: 1, role: "user", content: "Make a Presentation about Humans" },
  {
    id: 2,
    role: "assistant",
    content: "I've created a 3-slide presentation about humans, covering who we are, what defines us, and how we can build a better future together.",
  },
  { id: 3, role: "user", content: "Change the Colors to Light Theme" },
  {
    id: 4,
    role: "assistant",
    content: "I've updated the presentation with a light theme using white tones and added relevant images to enhance the visuals.",
  },
];

const AI_REPLIES = [
  "Done! I've applied that change to your presentation.",
  "Sure! The slides have been updated as requested.",
  "I've made the adjustments. Let me know if you'd like anything else.",
  "The presentation has been updated. Would you like to tweak anything further?",
  "Great idea! I've incorporated that into the slides.",
];

let replyIndex = 0;
function getNextReply(): string {
  const reply = AI_REPLIES[replyIndex % AI_REPLIES.length];
  replyIndex++;
  return reply;
}

/* Component */
export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(INITIAL_MESSAGES.length + 1);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, role: "user", content: text },
    ]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: "assistant", content: getNextReply() },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="flex flex-col h-full bg-bg"
      style={{ width: "clamp(320px, 30%, 420px)" }}
    >
      {/* Top */}
      <div className="relative shrink-0">
        <div className="flex items-center px-5 py-2.5 gap-1.5">
          <FlollamaLogoIcon />
          <span className="text-3xl font-ubuntu text-muted">
            flollama AI
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-border" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 px-4 py-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "user" ? (
                  <div className="bg-elevated px-3 py-2 rounded-xl max-w-sm">
                    <p className="text-sm font-light text-text text-right">
                      {msg.content}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-text">{msg.content}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-1 py-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-muted"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="shrink-0 px-4 py-3 backdrop-blur">
        <div className="bg-elevated rounded-xl px-4 py-3 flex items-center gap-3 min-h-14 border border-border">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type message"
            rows={1}
            disabled={isTyping}
            className="flex-1 bg-transparent text-sm text-text outline-none resize-none"
          />

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={sendMessage}
            disabled={isTyping || !input.trim()}
            className="shrink-0 disabled:opacity-30"
          >
            <SendIcon />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
