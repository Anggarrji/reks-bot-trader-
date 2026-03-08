import { useState } from "react";
import {
  LineChart,
  ArrowUpCircle,
  ArrowDownCircle,
  XCircle,
  Settings2,
} from "lucide-react";

export default function TradingPanel() {
  const [symbol, setSymbol] = useState("EURUSD");
  const [lotSize, setLotSize] = useState("0.10");
  const [sl, setSl] = useState("");
  const [tp, setTp] = useState("");

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Trading Panel</h1>
        <p className="text-slate-400 text-sm mt-1">
          Manual trading execution and live market chart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col min-h-[500px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <select
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-slate-100 text-lg font-bold rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="EURUSD">EURUSD</option>
                <option value="GBPUSD">GBPUSD</option>
                <option value="USDJPY">USDJPY</option>
                <option value="XAUUSD">XAUUSD</option>
                <option value="BTCUSD">BTCUSD</option>
              </select>
              <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                {["M1", "M5", "M15", "H1", "H4", "D1"].map((tf) => (
                  <button
                    key={tf}
                    className={`px-3 py-1 text-sm font-medium rounded ${tf === "H1" ? "bg-slate-800 text-slate-100" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-xl font-bold">
                1.09452
              </span>
              <span className="text-slate-500">/</span>
              <span className="text-red-400 font-mono text-xl font-bold">
                1.09460
              </span>
            </div>
          </div>

          <div className="flex-1 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Mock Chart Area */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            <div className="text-center z-10">
              <LineChart className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">
                TradingView Chart Integration
              </p>
              <p className="text-slate-600 text-sm mt-1">
                Live market data visualization
              </p>
            </div>
          </div>
        </div>

        {/* Order Execution */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
          <h2 className="text-lg font-semibold text-slate-100 mb-6 flex items-center gap-2">
            <Settings2 className="w-5 h-5 text-blue-400" />
            Order Execution
          </h2>

          <div className="space-y-5 flex-1">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1.5">
                Volume (Lot)
              </label>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold">
                  -
                </button>
                <input
                  type="number"
                  step="0.01"
                  value={lotSize}
                  onChange={(e) => setLotSize(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-center text-lg font-bold text-slate-100 focus:outline-none focus:border-blue-500"
                />
                <button className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center font-bold">
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">
                  Stop Loss
                </label>
                <input
                  type="number"
                  placeholder="0.00000"
                  value={sl}
                  onChange={(e) => setSl(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">
                  Take Profit
                </label>
                <input
                  type="number"
                  placeholder="0.00000"
                  value={tp}
                  onChange={(e) => setTp(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center py-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl transition-colors group">
                <span className="text-red-400 font-bold text-lg mb-1 group-hover:scale-110 transition-transform">
                  SELL
                </span>
                <span className="text-red-500/70 text-xs font-mono">
                  1.09452
                </span>
              </button>
              <button className="flex flex-col items-center justify-center py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-colors group">
                <span className="text-emerald-400 font-bold text-lg mb-1 group-hover:scale-110 transition-transform">
                  BUY
                </span>
                <span className="text-emerald-500/70 text-xs font-mono">
                  1.09460
                </span>
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <h3 className="text-sm font-medium text-slate-400 mb-3">
              Quick Actions
            </h3>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors">
              <XCircle className="w-4 h-4 text-red-400" />
              Close All Positions
            </button>
          </div>
        </div>
      </div>

      {/* Active Positions Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-100">
            Open Positions
          </h2>
          <span className="bg-slate-800 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">
            3 Active
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950/50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">Symbol</th>
                <th className="px-6 py-3 font-medium">Ticket</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Volume</th>
                <th className="px-6 py-3 font-medium">Open Price</th>
                <th className="px-6 py-3 font-medium">S/L</th>
                <th className="px-6 py-3 font-medium">T/P</th>
                <th className="px-6 py-3 font-medium">Current Price</th>
                <th className="px-6 py-3 font-medium text-right">Profit</th>
                <th className="px-6 py-3 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              <tr className="hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-200">EURUSD</td>
                <td className="px-6 py-4 font-mono text-xs">#10293847</td>
                <td className="px-6 py-4">
                  <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded">
                    BUY
                  </span>
                </td>
                <td className="px-6 py-4">0.10</td>
                <td className="px-6 py-4 font-mono">1.09250</td>
                <td className="px-6 py-4 font-mono text-slate-500">1.09000</td>
                <td className="px-6 py-4 font-mono text-slate-500">1.09800</td>
                <td className="px-6 py-4 font-mono">1.09452</td>
                <td className="px-6 py-4 font-mono font-bold text-emerald-400 text-right">
                  +$20.20
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="text-slate-400 hover:text-red-400 transition-colors"
                    title="Close Position"
                  >
                    <XCircle className="w-5 h-5 mx-auto" />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 font-bold text-slate-200">GBPUSD</td>
                <td className="px-6 py-4 font-mono text-xs">#10293850</td>
                <td className="px-6 py-4">
                  <span className="text-red-400 font-medium bg-red-500/10 px-2 py-1 rounded">
                    SELL
                  </span>
                </td>
                <td className="px-6 py-4">0.05</td>
                <td className="px-6 py-4 font-mono">1.26500</td>
                <td className="px-6 py-4 font-mono text-slate-500">1.27000</td>
                <td className="px-6 py-4 font-mono text-slate-500">1.25500</td>
                <td className="px-6 py-4 font-mono">1.26650</td>
                <td className="px-6 py-4 font-mono font-bold text-red-400 text-right">
                  -$7.50
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="text-slate-400 hover:text-red-400 transition-colors"
                    title="Close Position"
                  >
                    <XCircle className="w-5 h-5 mx-auto" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
