import { useState } from "react";
import {
  ShieldAlert,
  AlertTriangle,
  Lock,
  Activity,
  DollarSign,
} from "lucide-react";

export default function RiskManager() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Risk Manager</h1>
        <p className="text-slate-400 text-sm mt-1">
          Protect your capital with automated risk controls
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Trading Limits */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-red-400" />
              </div>
              <h2 className="text-lg font-semibold text-slate-100">
                Trading Limits
              </h2>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Max Trades Per Day
                  </label>
                  <input
                    type="number"
                    defaultValue={10}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Bot stops opening new trades after this limit.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Max Open Positions
                  </label>
                  <input
                    type="number"
                    defaultValue={3}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Maximum concurrent active trades.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Max Lot Size (Per Trade)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={0.1}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    Max Total Lot Size
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={0.5}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Drawdown Protection */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
              </div>
              <h2 className="text-lg font-semibold text-slate-100">
                Drawdown Protection
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">
                    Daily Max Drawdown (%)
                  </label>
                  <span className="text-sm font-bold text-orange-400">
                    5.0%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  defaultValue="5"
                  className="w-full accent-orange-500"
                />
                <p className="text-xs text-slate-500 mt-2">
                  If daily loss exceeds this percentage of balance, bot stops
                  trading for the day.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">
                    Total Account Drawdown (%)
                  </label>
                  <span className="text-sm font-bold text-red-400">15.0%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  defaultValue="15"
                  className="w-full accent-red-500"
                />
                <p className="text-xs text-slate-500 mt-2">
                  If total equity drops below this percentage from peak, ALL
                  positions are closed and bot is disabled.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Auto Protection Actions */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-slate-100">
                Auto Protection
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Close All on Low Margin",
                  desc: "Close positions if Free Margin < 100%",
                  active: true,
                },
                {
                  title: "Stop on High Volatility",
                  desc: "Pause bot during extreme market moves",
                  active: true,
                },
                {
                  title: "Friday Close Out",
                  desc: "Close all trades before weekend",
                  active: false,
                },
                {
                  title: "News Filter",
                  desc: "Pause trading 30m before/after high impact news",
                  active: true,
                },
              ].map((rule, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between p-3 bg-slate-950 border border-slate-800 rounded-lg"
                >
                  <div className="pr-4">
                    <h4 className="text-sm font-medium text-slate-200">
                      {rule.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-tight">
                      {rule.desc}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={rule.active}
                    />
                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">
              Current Risk Status
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Daily Drawdown</span>
                  <span className="text-emerald-400">0.5% / 5.0%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Margin Level</span>
                  <span className="text-emerald-400">450%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium shadow-lg shadow-red-900/20 transition-colors flex items-center justify-center gap-2">
            <ShieldAlert className="w-5 h-5" />
            EMERGENCY CLOSE ALL
          </button>
        </div>
      </div>
    </div>
  );
}
