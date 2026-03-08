import { useState } from "react";
import {
  Server,
  Key,
  Download,
  CheckCircle2,
  AlertCircle,
  Link as LinkIcon,
} from "lucide-react";

export default function AccountConnection() {
  const [activeMethod, setActiveMethod] = useState("login");

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">
          Account Connection
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Connect your MetaTrader 5 account to the bot platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={() => setActiveMethod("login")}
          className={`p-5 rounded-xl border text-left transition-all ${
            activeMethod === "login"
              ? "bg-blue-600/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              : "bg-slate-900 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeMethod === "login" ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-400"}`}
            >
              <Key className="w-5 h-5" />
            </div>
            {activeMethod === "login" && (
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
            )}
          </div>
          <h3
            className={`font-semibold ${activeMethod === "login" ? "text-blue-400" : "text-slate-200"}`}
          >
            MT5 Login Connector
          </h3>
          <p className="text-slate-500 text-xs mt-2 leading-relaxed">
            Connect directly using your MT5 login credentials and broker server
            name. Simplest method.
          </p>
        </button>

        <button
          onClick={() => setActiveMethod("ea")}
          className={`p-5 rounded-xl border text-left transition-all ${
            activeMethod === "ea"
              ? "bg-emerald-600/10 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              : "bg-slate-900 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeMethod === "ea" ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-400"}`}
            >
              <Server className="w-5 h-5" />
            </div>
            {activeMethod === "ea" && (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            )}
          </div>
          <h3
            className={`font-semibold ${activeMethod === "ea" ? "text-emerald-400" : "text-slate-200"}`}
          >
            MT5 Bridge EA
          </h3>
          <p className="text-slate-500 text-xs mt-2 leading-relaxed">
            Install our Expert Advisor on your MT5 terminal to act as a bridge.
            Best for low latency.
          </p>
        </button>

        <button
          onClick={() => setActiveMethod("local")}
          className={`p-5 rounded-xl border text-left transition-all ${
            activeMethod === "local"
              ? "bg-purple-600/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              : "bg-slate-900 border-slate-800 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeMethod === "local" ? "bg-purple-500 text-white" : "bg-slate-800 text-slate-400"}`}
            >
              <Download className="w-5 h-5" />
            </div>
            {activeMethod === "local" && (
              <CheckCircle2 className="w-5 h-5 text-purple-500" />
            )}
          </div>
          <h3
            className={`font-semibold ${activeMethod === "local" ? "text-purple-400" : "text-slate-200"}`}
          >
            Local App Connector
          </h3>
          <p className="text-slate-500 text-xs mt-2 leading-relaxed">
            Run our lightweight desktop app alongside your MT5 for maximum
            stability and security.
          </p>
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 lg:p-8">
        {activeMethod === "login" && (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-slate-100">
                Direct MT5 Login
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Enter your trading account details to connect instantly.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Broker Server
                </label>
                <input
                  type="text"
                  placeholder="e.g., MetaQuotes-Demo"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Login (Account Number)
                </label>
                <input
                  type="text"
                  placeholder="12345678"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg mt-6">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-300/80 leading-relaxed">
                  Your credentials are encrypted and stored securely. We only
                  use them to establish a connection with your broker's server
                  for trading automation.
                </p>
              </div>

              <button
                type="button"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg shadow-blue-900/20 transition-colors flex items-center justify-center gap-2 mt-6"
              >
                <LinkIcon className="w-4 h-4" />
                Connect Account
              </button>
            </form>
          </div>
        )}

        {activeMethod === "ea" && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-slate-100">
                MT5 Bridge EA Setup
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Follow these steps to connect using the Expert Advisor.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 text-lg">
                    Download the EA
                  </h4>
                  <p className="text-slate-400 text-sm mt-1 mb-3">
                    Download the REKS_Bridge_EA.ex5 file to your computer.
                  </p>
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 border border-slate-700">
                    <Download className="w-4 h-4" /> Download EA (.ex5)
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 text-lg">
                    Install in MT5
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Open MT5, go to File &gt; Open Data Folder &gt; MQL5 &gt;
                    Experts. Paste the downloaded file here. Refresh the
                    Navigator panel in MT5.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 text-lg">
                    Allow WebRequest
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    In MT5, go to Tools &gt; Options &gt; Expert Advisors. Check
                    "Allow WebRequest for listed URL" and add:{" "}
                    <code className="bg-slate-950 px-2 py-1 rounded text-emerald-400 border border-slate-800">
                      https://api.reksbot.ai
                    </code>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="w-full">
                  <h4 className="font-medium text-slate-200 text-lg">
                    Attach EA and Enter Token
                  </h4>
                  <p className="text-slate-400 text-sm mt-1 mb-3">
                    Drag the EA to any chart. In the Inputs tab, paste your
                    unique connection token:
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value="REKS-8F92-K3M9-P4L1-X7V2"
                      className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-300 font-mono text-sm focus:outline-none"
                    />
                    <button className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse"></div>
                Waiting for EA connection...
              </div>
            </div>
          </div>
        )}

        {activeMethod === "local" && (
          <div className="max-w-2xl mx-auto text-center py-8">
            <Download className="w-16 h-16 text-purple-500 mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              Local App Connector
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Download our lightweight desktop application. It runs silently in
              the background, securely connecting your local MT5 terminal to our
              web dashboard without exposing your credentials to the cloud.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium shadow-lg shadow-purple-900/20 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download for Windows
              </button>
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium border border-slate-700 transition-colors flex items-center gap-2">
                View Setup Guide
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
