import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
} from "lucide-react";

const historyData = [
  {
    id: "10293847",
    time: "2023-10-25 14:30:22",
    symbol: "EURUSD",
    type: "BUY",
    volume: 0.1,
    openPrice: 1.0925,
    closePrice: 1.0945,
    profit: 20.0,
    duration: "2h 15m",
  },
  {
    id: "10293845",
    time: "2023-10-25 10:15:00",
    symbol: "GBPUSD",
    type: "SELL",
    volume: 0.05,
    openPrice: 1.268,
    closePrice: 1.2695,
    profit: -7.5,
    duration: "45m",
  },
  {
    id: "10293842",
    time: "2023-10-24 16:45:10",
    symbol: "XAUUSD",
    type: "BUY",
    volume: 0.01,
    openPrice: 1985.5,
    closePrice: 1992.2,
    profit: 67.0,
    duration: "4h 20m",
  },
  {
    id: "10293838",
    time: "2023-10-24 09:20:00",
    symbol: "USDJPY",
    type: "BUY",
    volume: 0.2,
    openPrice: 149.5,
    closePrice: 149.85,
    profit: 46.8,
    duration: "1h 10m",
  },
  {
    id: "10293835",
    time: "2023-10-23 18:10:45",
    symbol: "EURUSD",
    type: "SELL",
    volume: 0.1,
    openPrice: 1.096,
    closePrice: 1.094,
    profit: 20.0,
    duration: "3h 45m",
  },
  {
    id: "10293830",
    time: "2023-10-23 11:05:20",
    symbol: "BTCUSD",
    type: "BUY",
    volume: 0.05,
    openPrice: 34200.0,
    closePrice: 33800.0,
    profit: -20.0,
    duration: "5h 30m",
  },
  {
    id: "10293825",
    time: "2023-10-20 15:30:00",
    symbol: "GBPUSD",
    type: "BUY",
    volume: 0.1,
    openPrice: 1.26,
    closePrice: 1.265,
    profit: 50.0,
    duration: "1d 2h",
  },
];

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Trading History</h1>
          <p className="text-slate-400 text-sm mt-1">
            Review your past trades and bot performance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-sm font-medium transition-colors border border-slate-800">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
            Total Trades
          </h3>
          <p className="text-2xl font-bold text-slate-100">1,248</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
            Win Rate
          </h3>
          <p className="text-2xl font-bold text-emerald-400">68.5%</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
            Total Profit
          </h3>
          <p className="text-2xl font-bold text-emerald-400">+$4,250.80</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
            Profit Factor
          </h3>
          <p className="text-2xl font-bold text-blue-400">1.85</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search symbol or ticket..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-lg bg-slate-950 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-colors">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950/50 text-xs uppercase text-slate-500 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-medium">Ticket / Time</th>
                <th className="px-6 py-4 font-medium">Symbol</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Volume</th>
                <th className="px-6 py-4 font-medium">Open Price</th>
                <th className="px-6 py-4 font-medium">Close Price</th>
                <th className="px-6 py-4 font-medium">Duration</th>
                <th className="px-6 py-4 font-medium text-right">Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {historyData.map((trade) => (
                <tr
                  key={trade.id}
                  className="hover:bg-slate-800/20 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-mono text-xs text-slate-500 mb-1">
                      #{trade.id}
                    </div>
                    <div className="text-slate-300">{trade.time}</div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-200">
                    {trade.symbol}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 font-medium px-2 py-1 rounded text-xs ${trade.type === "BUY" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}
                    >
                      {trade.type === "BUY" ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {trade.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">{trade.volume.toFixed(2)}</td>
                  <td className="px-6 py-4 font-mono">
                    {trade.openPrice.toFixed(5)}
                  </td>
                  <td className="px-6 py-4 font-mono">
                    {trade.closePrice.toFixed(5)}
                  </td>
                  <td className="px-6 py-4 text-slate-500">{trade.duration}</td>
                  <td
                    className={`px-6 py-4 font-mono font-bold text-right ${trade.profit >= 0 ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {trade.profit >= 0 ? "+" : ""}
                    {trade.profit.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between text-sm text-slate-400">
          <span>Showing 1 to 7 of 1,248 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-700 rounded hover:bg-slate-800 disabled:opacity-50">
              Prev
            </button>
            <button className="px-3 py-1 border border-slate-700 rounded bg-blue-600/20 text-blue-400 border-blue-500/30">
              1
            </button>
            <button className="px-3 py-1 border border-slate-700 rounded hover:bg-slate-800">
              2
            </button>
            <button className="px-3 py-1 border border-slate-700 rounded hover:bg-slate-800">
              3
            </button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-slate-700 rounded hover:bg-slate-800">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
