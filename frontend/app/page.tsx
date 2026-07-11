"use client";

import { useState } from "react";

export default function Home() {
  
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [result, setResult] = useState<any>(null);

  const analyzeIdea = async () => {
    if (!idea.trim()) return;

    setLoading(true);

    try {
  const response = await fetch(
  "https://founderos-backend-2qa0.onrender.com/analyze",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idea,
    }),
  }
);

const data = await response.json();

setResult(data);
}
catch (error) {
  console.error(error);
}

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HERO */}

        <div className="mb-10">

          <div className="flex flex-wrap gap-3 mb-6">

            <div className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">
              AMD Developer Hackathon 2026
            </div>

            <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
              6 AI Agents Online
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm">
  Live Venture Intelligence
</div>

          </div>

          <h1 className="text-7xl font-black mb-4">
            FounderOS
          </h1>

          <p className="text-zinc-400 text-xl max-w-4xl">
  Validate startup ideas with 6 specialized AI agents before writing a single line of code.
</p>

        </div>

        {/* AGENTS */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-8">

          <div className="flex flex-wrap gap-3">

            {[
              "Market",
              "Competitor",
              "Customer",
              "Investor",
              "Strategy",
              "Synthesis",
            ].map((agent) => (
              <div
                key={agent}
                className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700"
              >
                {agent}
              </div>
            ))}

          </div>

        </div>

        {/* INPUT */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Describe Your Startup
          </h2>

          <div className="flex gap-4">

            <input
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Example: AI caregiver assistant for dementia patients"
              className="flex-1 bg-black border border-zinc-700 rounded-xl p-4"
            />

            <button
              onClick={analyzeIdea}
              disabled={loading}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
            >
              {loading ? "Running AI Agents..." : "Analyze"}
            </button>

          </div>

        </div>
{/*
Example Startup Chips
*/}
<div className="flex flex-wrap gap-2 mt-4 mb-8">
  {[
    "AI CFO for startups",
    "MedRAG+ caregiver copilot",
    "AI dermatologist",
    "Startup advisor",
  ].map((example) => (
    <button
      key={example}
      onClick={() => setIdea(example)}
      className="px-3 py-2 text-sm rounded-lg bg-zinc-800 hover:bg-zinc-700"
    >
      {example}
    </button>
  ))}
</div>
{loading && (
  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
     Market Agent Working...
    <br />
     Competitor Agent Working...
    <br />
     Customer Agent Working...
    <br />
     Investor Agent Working...
    <br />
     Strategy Agent Working...
  </div>
)}
        {result && (
          <>

            {/* SCORES */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-400 mb-2">
                  Venture Score
                </p>

                <h3 className="text-5xl font-bold">
                  {result.venture_score}
                </h3>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-400 mb-2">
                  Market Score
                </p>

                <h3 className="text-5xl font-bold">
                  {result.market_score}
                </h3>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-400 mb-2">
                  Fundability
                </p>

                <h3 className="text-5xl font-bold">
                  {result.fundability_score}
                </h3>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-400 mb-2">
                  Verdict
                </p>

                <h3 className="text-3xl font-bold text-green-400">
                  {result.verdict}
                </h3>
              </div>

            </div>

            {/* SUMMARY */}

            <div className="bg-gradient-to-r from-blue-950 to-purple-950 border border-zinc-800 rounded-2xl p-8 mb-8">

              <h2 className="text-3xl font-bold mb-4">
                Executive Summary
              </h2>

              <pre className="whitespace-pre-wrap text-zinc-200">
                {result.synthesis}
              </pre>

            </div>

            {/* TABS */}

            <div className="flex flex-wrap gap-3 mb-8">

              {[
                "overview",
                "market",
                "competitor",
                "customer",
                "investor",
                "strategy",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl border transition ${
                    activeTab === tab
                      ? "bg-blue-600 border-blue-500"
                      : "bg-zinc-900 border-zinc-800"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}

            </div>

            {/* OVERVIEW */}

            {activeTab === "overview" && (
  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <h2 className="text-3xl font-bold mb-4">
      Executive Summary
    </h2>

    <pre className="whitespace-pre-wrap text-zinc-300">
      {result.synthesis}
    </pre>
  </div>
)}

            {/* MARKET */}

            {activeTab === "market" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Market Analysis
                </h2>

                <pre className="whitespace-pre-wrap text-zinc-300">
                  {result.market}
                </pre>
              </div>
            )}

            {/* COMPETITOR */}

            {activeTab === "competitor" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Competitor Analysis
                </h2>

                <pre className="whitespace-pre-wrap text-zinc-300">
                  {result.competitor}
                </pre>
              </div>
            )}

            {/* CUSTOMER */}

            {activeTab === "customer" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Customer Analysis
                </h2>

                <pre className="whitespace-pre-wrap text-zinc-300">
                  {result.customer}
                </pre>
              </div>
            )}

            {/* INVESTOR */}

            {activeTab === "investor" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Investor Analysis
                </h2>

                <pre className="whitespace-pre-wrap text-zinc-300">
                  {result.investor}
                </pre>
              </div>
            )}

            {/* STRATEGY */}

            {activeTab === "strategy" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-3xl font-bold mb-4">
                  Strategy Roadmap
                </h2>

                <pre className="whitespace-pre-wrap text-zinc-300">
                  {result.strategy}
                </pre>
              </div>
            )}

          </>
        )}

      </div>

    </main>
  );
}