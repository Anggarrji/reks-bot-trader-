import {
  DollarSign,
  TrendingUp,
  Activity,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  Square,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", profit: 1200 },
  { time: "04:00", profit: 1350 },
  { time: "08:00", profit: 1250 },
  { time: "12:00", profit: 1580 },
  { time: "16:00", profit: 1890 },
  { time: "20:00", profit: 2100 },
  { time: "24:00", profit: 2450 },
];

const activePairs = [
  { pair: "EURUSD", type: "BUY", lot: 0.1, profit: 45.2, status: "Active" },
  { pair: "GBPUSD", type: "SELL", lot: 0.05, profit: -12.5, status: "Active" },
  { pair: "XAUUSD", type: "BUY", lot: 0.01, profit: 120.8, status: "Active" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">
            Real-time overview of your trading account
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            MT5 Connected
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            <Play className="w-4 h-4" fill="currentColor" />
            Start Bot
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors border border-slate-700">
            <Square className="w-4 h-4" fill="currentColor" />
            Stop All
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-emerald-400 flex items-center text-sm font-medium">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +2.4%
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium">Balance</h3>
          <p className="text-2xl font-bold text-slate-100 mt-1">$10,450.00</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-emerald-400 flex items-center text-sm font-medium">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +$153.50
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium">Equity</h3>
          <p className="text-2xl font-bold text-slate-100 mt-1">$10,603.50</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <PieChart className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium">
              Level: 450%
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium">Free Margin</h3>
          <p className="text-2xl font-bold text-slate-100 mt-1">$9,850.00</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium">3 Active</span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium">Daily Profit</h3>
          <p className="text-2xl font-bold text-emerald-400 mt-1">+$245.80</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-100">
              Profit Performance
            </h2>
            <select className="bg-slate-950 border border-slate-800 text-slate-300 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1E293B"
                  vertical={false}
                />
                <XAxis
                  dataKey="time"
                  stroke="#64748B"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#64748B"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F172A",
                    borderColor: "#1E293B",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#F8FAFC" }}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorProfit)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Pairs */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-100">
              Active Positions
            </h2>
            <button className="text-blue-400 text-sm hover:text-blue-300">
              View All
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-3">
            {activePairs.map((pos, i) => (
              <div
                key={i}
                className="bg-slate-950 border border-slate-800 rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-100">{pos.pair}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${pos.type === "BUY" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}
                    >
                      {pos.type}
                    </span>
                  </div>
                  <div className="text-slate-400 text-xs mt-1">
                    Lot: {pos.lot}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`font-bold ${pos.profit >= 0 ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {pos.profit >= 0 ? "+" : ""}
                    {pos.profit.toFixed(2)}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">USD</div>
                </div>
              </div>
            ))}
            {activePairs.length === 0 && (
              <div className="text-center text-slate-500 py-8">
                No active positions
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
