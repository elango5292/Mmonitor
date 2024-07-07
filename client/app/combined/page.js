


'use client'
import { Card } from "@/components/ui/card"
import { CartesianGrid, XAxis, Area, AreaChart, Line, LineChart, ResponsiveContainer } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Component() {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-purple-300 to-blue-300">
      <div className="flex flex-col sm:flex-row justify-between p-4 border-b">
        <span className="text-xl font-bold">09:40am</span>
        <span className="text-xl font-bold">25.06.2024, Wednesday</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-6 h-6" />
              <span className="font-bold">Total Uptime</span>
            </div>
            <p className="text-sm text-muted-foreground">5h 37m</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-6 h-6" />
              <span className="font-bold">Total Idle Time</span>
            </div>
            <p className="text-sm text-muted-foreground">2h 19m</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-2">
              <PackageIcon className="w-6 h-6" />
              <span className="font-bold">Quantity Produced</span>
            </div>
            <p className="text-sm text-muted-foreground">2650 u</p>
          </Card>
        </div>
        <div className="sm:col-span-2">
          <Card className="h-full p-4">
            <AreachartstackedChart className="w-full h-[300px]" />
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="p-4">
            <span className="font-bold">Current Status of Machine (Running or Idle)</span>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div key={idx} className={`w-8 h-8 hover:opacity-75 hover:border-[1px] hover:border-slate-500 ${idx % 2 === 0 ? "bg-green-400" : "bg-red-400"}`} />
              ))}
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {['Availability', 'Performance', 'Quality', 'OEE'].map((metric, index) => (
          <Card key={metric} className="flex flex-col items-center justify-center p-4">
            <span className="font-bold">{metric}</span>
            <LinechartChart className="w-full h-24" />
            <span className="text-2xl font-bold">{index === 3 ? '66.35%' : `${80 + index * 5}%`}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}

function AreachartstackedChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          Ideal: {
            label: "Ideal",
            color: "hsl(var(--chart-1))",
          },
          working: {
            label: "working",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={[
              { month: "January", Ideal: 186, working: 80 },
              { month: "February", Ideal: 305, working: 200 },
              { month: "March", Ideal: 237, working: 120 },
              { month: "April", Ideal: 73, working: 190 },
              { month: "May", Ideal: 209, working: 130 },
              { month: "June", Ideal: 214, working: 140 },
            ]}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="working" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="Ideal" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          Ideal: {
            label: "Ideal",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={[
              { month: "January", Ideal: 186 },
              { month: "February", Ideal: 305 },
              { month: "March", Ideal: 237 },
              { month: "April", Ideal: 73 },
              { month: "May", Ideal: 209 },
              { month: "June", Ideal: 214 },
            ]}
          >
            <Line type="monotone" dataKey="Ideal" stroke="#8884d8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

// ClockIcon and PackageIcon components remain unchanged



function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}




function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}