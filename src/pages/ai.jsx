import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AIChatAssistant() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I am your AI health assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/aiAssistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "Sorry, I couldn't understand that.",
        },
      ]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: " Error connecting to AI server." },
      ]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm p-4 flex justify-between items-center border-b border-gray-200 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-3">
          <span className="text-3xl">🩺</span>
          <span>AI Health Assistant</span>
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 transition-all duration-200"
        >
          Back to Home
        </button>
      </header>

      {/* Chat Window */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-green-200">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-end gap-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {/* AI Avatar */}
            {msg.sender !== "user" && (
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-lg shadow-md flex-shrink-0">
                🩺
              </div>
            )}

            <div
              className={`px-4 py-3 rounded-2xl shadow-lg max-w-md text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-green-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
              }`}
            >
              {msg.text}
            </div>

            {/* User Avatar */}
            {msg.sender === "user" && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 shadow-md flex-shrink-0">
                👤
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </main>

      {/* Footer Input */}
      <footer className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 flex items-center gap-3">
        <input
          type="text"
          placeholder="Describe your symptoms..."
          className="flex-1 px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim()}
          className="p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-110 active:scale-100 transition-all duration-200 disabled:bg-gray-400 disabled:scale-100"
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </footer>
    </div>
  );
}
