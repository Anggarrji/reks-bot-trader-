import { useState } from "react";
import {
  Settings,
  Cpu,
  TrendingUp,
  Activity,
  Target,
  Shield,
} from "lucide-react";

export default function BotSettings() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Bot Settings</h1>
        <p className="text-slate-400 text-sm mt-1">
          Configure trading strategies, indicators, and AI analysis
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="flex overflow-x-auto border-b border-slate-800">
          <button
            onClick={() => setActiveTab("technical")}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === "technical"
                ? "text-blue-400 border-b-2 border-blue-500 bg-blue-500/5"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Technical Analysis
          </button>
          <button
            onClick={() => setActiveTab("priceaction")}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === "priceaction"
                ? "text-blue-400 border-b-2 border-blue-500 bg-blue-500/5"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`}
          >
            <Activity className="w-4 h-4" />
            Price Action
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === "ai"
                ? "text-yellow-400 border-b-2 border-yellow-500 bg-yellow-500/5"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`}
          >
            <Cpu className="w-4 h-4" />
            AI Analysis
          </button>
          <button
            onClick={() => setActiveTab("auto")}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === "auto"
                ? "text-blue-400 border-b-2 border-blue-500 bg-blue-500/5"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`}
          >
            <Target className="w-4 h-4" />
            Auto Trading
          </button>
        </div>

        <div className="p-6">
          {activeTab === "technical" && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-slate-100 mb-4">
                Indicators Configuration
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Moving Average */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="font-medium text-slate-200">
                        Moving Average
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Fast MA Period</span>
                      <input
                        type="number"
                        defaultValue={14}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Slow MA Period</span>
                      <input
                        type="number"
                        defaultValue={50}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* RSI */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="font-medium text-slate-200">RSI</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Period</span>
                      <input
                        type="number"
                        defaultValue={14}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Overbought Level</span>
                      <input
                        type="number"
                        defaultValue={70}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Oversold Level</span>
                      <input
                        type="number"
                        defaultValue={30}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* MACD */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="font-medium text-slate-200">MACD</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                  <div className="space-y-3 opacity-50 pointer-events-none">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Fast EMA</span>
                      <input
                        type="number"
                        defaultValue={12}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Slow EMA</span>
                      <input
                        type="number"
                        defaultValue={26}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Signal SMA</span>
                      <input
                        type="number"
                        defaultValue={9}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Bollinger Bands */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="font-medium text-slate-200">
                        Bollinger Bands
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                  <div className="space-y-3 opacity-50 pointer-events-none">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Period</span>
                      <input
                        type="number"
                        defaultValue={20}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Deviation</span>
                      <input
                        type="number"
                        defaultValue={2}
                        className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-right text-slate-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ai" && (
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <Cpu className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-yellow-500 font-medium">
                    Advanced AI Market Analysis
                  </h3>
                  <p className="text-yellow-500/80 text-sm mt-1">
                    Enable AI to detect market direction, trend strength, and
                    volatility before opening positions. This overrides basic
                    technical indicators when conflicting signals occur.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-200">
                      Enable AI Engine
                    </h4>
                    <p className="text-sm text-slate-400">
                      Use machine learning models for market prediction
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-200">
                      Volatility Filter
                    </h4>
                    <p className="text-sm text-slate-400">
                      Avoid trading during unpredictable high-impact news
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-200">
                      AI Confidence Threshold
                    </h4>
                    <p className="text-sm text-slate-400">
                      Minimum AI confidence required to open a trade
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="50"
                      max="95"
                      defaultValue="75"
                      className="w-32 accent-yellow-500"
                    />
                    <span className="text-slate-200 font-medium w-12 text-right">
                      75%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "auto" && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-slate-100 mb-4">
                Automation Rules
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Auto Buy",
                    desc: "Open long positions automatically",
                    active: true,
                  },
                  {
                    title: "Auto Sell",
                    desc: "Open short positions automatically",
                    active: true,
                  },
                  {
                    title: "Auto Close Position",
                    desc: "Close when conditions reverse",
                    active: true,
                  },
                  {
                    title: "Auto Take Profit",
                    desc: "Set TP based on ATR/Risk ratio",
                    active: true,
                  },
                  {
                    title: "Auto Stop Loss",
                    desc: "Set SL based on support/resistance",
                    active: true,
                  },
                  {
                    title: "Trailing Stop",
                    desc: "Lock in profits as trend continues",
                    active: false,
                  },
                ].map((rule, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium text-slate-200">
                        {rule.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {rule.desc}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={rule.active}
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "priceaction" && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-slate-100 mb-4">
                Price Action Patterns
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Select which candlestick and chart patterns the bot should
                trade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Pin Bar / Hammer",
                  "Engulfing Pattern",
                  "Inside Bar Breakout",
                  "Double Top/Bottom",
                  "Head & Shoulders",
                  "Support/Resistance Bounce",
                ].map((pattern, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-slate-950 border border-slate-800 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={i < 3}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-950"
                    />
                    <span className="text-sm font-medium text-slate-200">
                      {pattern}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
