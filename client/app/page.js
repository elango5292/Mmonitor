
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { Pie, PieChart, CartesianGrid, XAxis, Bar, BarChart } from "recharts"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [activeComponent, setActiveComponent] = useState(1)
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#4A2CB0] via-[#863EDF] via-[#8329B2] via-[#8C0CA9] to-[#551087] text-white">
      
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="flex flex-row items-center justify-center gap-4 bg-gray-800 p-4 md:flex-col md:justify-start md:w-20 md:p-4 md:space-y-8">
        <header className="flex items-center h-16 px-4 border-b border-gray-800 md:h-20 md:px-6">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-white">dopl</div>
        </div>
      </header>
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setActiveComponent(1)}>
            <BarChartIcon className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setActiveComponent(2)}>
            <CupSodaIcon className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setActiveComponent(3)}>
          <HandPlatterIcon className="w-6 h-6" />
          </Button>

        </aside>
        <main className="flex-1 p-4 space-y-4 md:space-y-8">
          {activeComponent === 1 && (
            <>
              <h1 className="text-3xl font-bold text-white">Operational Analytics</h1>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-lg font-semibold text-white">Total Cycle Time</div>
                  <div className="text-2xl font-bold text-white">00h 00m 00s</div>
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
                  <div className="text-lg font-semibold text-white">Total Idle Time</div>
                  <div className="text-2xl font-bold text-white">00h 00m 00s</div>
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
                  <PiechartChart />
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4 h-96 overflow-auto">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-white">2.5" DIP 1</div>
                    <div className="text-2xl font-bold text-white">80</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-white">2.5" DIP 2</div>
                    <div className="text-2xl font-bold text-white">65</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-white">4" Round Bowl</div>
                    <div className="text-2xl font-bold text-white">57</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-white">4" Square Bowl</div>
                    <div className="text-2xl font-bold text-white">80</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-white">5" Round Bowl</div>
                    <div className="text-2xl font-bold text-white">65</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-white">5" Square Bowl</div>
                    <div className="text-2xl font-bold text-white">57</div>
                  </div>
                </Card>
              </div>
              <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4 overflow-x-auto whitespace-nowrap">
                <BarchartmultipleChart className="w-full aspect-[2/1]" />
              </Card>
            </>
          )}
          {activeComponent === 2 && (
            <div className="flex flex-col gap-y-4 my-auto">
              
              <div className="gap-2 flex flex-row flex-wrap items-center justify-around rounded-[30px] p-4 "style={{
    background: "linear-gradient(134.57deg, rgba(0,0,0,0.3) 0.37%, rgba(0,0,0,0.3) 99.63%)",
  }}>
                <h3>M1</h3>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                
               
          </div>
          <div className="gap-2 flex flex-row flex-wrap items-center justify-around rounded-[30px] p-4 "style={{
    background: "linear-gradient(134.57deg, rgba(0,0,0,0.3) 0.37%, rgba(0,0,0,0.3) 99.63%)",
  }}>
                <h3>M2</h3>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                
               
          </div>
          <div className="gap-2 flex flex-row flex-wrap items-center justify-around rounded-[30px] p-4 "style={{
    background: "linear-gradient(134.57deg, rgba(0,0,0,0.3) 0.37%, rgba(0,0,0,0.3) 99.63%)",
  }}>
                <h3>M3</h3>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                <CustomSelect/>
                
               
          </div>
    </div>
          )}
          {activeComponent === 3 && (
            <div className="flex flex-col justify-center">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="length">Length (inch)</Label>
              <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="length" placeholder="Enter length"  />
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Width (inch)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="width" placeholder="Enter width" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height (inch)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="height" placeholder="Enter height" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="topTemp">Top Temp (C)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="topTemp" placeholder="Enter top temperature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bottomTemp">Bottom Temp (C)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="bottomTemp" placeholder="Enter bottom temperature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ribCuring">Rib Curing (seconds)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="ribCuring" placeholder="Enter rib curing time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="botCuring">Bot Curing (seconds)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="botCuring" placeholder="Enter bot curing time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lupCuring">LUP Curing (seconds)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="lupCuring" placeholder="Enter LUP curing time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cut">Cut (seconds)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="cut" placeholder="Enter cut time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="up">UP</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="up" placeholder="Enter UP" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lup">LUP</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="lup" placeholder="Enter LUP" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="topTolerance">Top (± 0.1 A)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="topTolerance" placeholder="Enter top tolerance" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="botTolerance">Bot (± 0.1 A)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="botTolerance" placeholder="Enter bot tolerance" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tol">TOL</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="tol" placeholder="Enter TOL" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mid">Mid (seconds)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="mid" placeholder="Enter mid time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="runTime">Run Time (seconds)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="runTime" placeholder="Enter run time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="leafSoakTime">Leaf Soak Time (hours)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="leafSoakTime" placeholder="Enter leaf soak time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="leafDryTime">Leaf Dry Time (hours)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white' id="leafDryTime" placeholder="Enter leaf dry time" />
            </div>
          </div>
          <Button className="w-60 text-white rounded-md text-lg my-4" style={{
      background:
        "linear-gradient(136.87deg, rgba(200,200,200,0.7) 1.53%, rgba(121,55,152,0.7) 98.47%)",
      boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.25)",
    }}>calculate</Button>
          </div>
          )}
        </main>
      </div>
    </div>
  )
}

function CustomSelect(props) {
  return (
      <Select {...props} >
                  <SelectTrigger className=" h-40 w-32 rounded-[30px]" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }}>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 bg-opacity-40 text-white backdrop-blur-md	">
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                    <SelectItem value="option4">Option 4</SelectItem>
                    <SelectItem value="option5">Option 5</SelectItem>
                    <SelectItem value="option6">Option 6</SelectItem>
                  </SelectContent>
                </Select>
  )
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

const ffd =[
  {
    "month": "January",
    "2.5_DIP 1": 83,
    "2.5_DIP 2": 77,
    "4_Round Bowl": 29,
    "4_Square Bowl": 20,
    "5_Round Bowl": 66,
    "5_Square Bowl": 59,
    "5_Triangle Bowl": 35,
    "6_Oval": 96,
    "6_Round": 15,
    "6_Round Bowl": 49,
    "6_Square Bowl": 88,
    "6_Triangle Bowl": 2,
    "6_X 3\"": 45,
    "7_Oval": 62,
    "8_Square": 18,
    "8_Hexagon": 64,
    "10_Round": 5,
    "10_Square": 72
  },
  {
    "month": "February",
    "2.5_DIP 1": 12,
    "2.5_DIP 2": 45,
    "4_Round Bowl": 38,
    "4_Square Bowl": 91,
    "5_Round Bowl": 76,
    "5_Square Bowl": 34,
    "5_Triangle Bowl": 53,
    "6_Oval": 87,
    "6_Round": 26,
    "6_Round Bowl": 70,
    "6_Square Bowl": 9,
    "6_Triangle Bowl": 44,
    "6_X 3\"": 95,
    "7_Oval": 68,
    "8_Square": 73,
    "8_Hexagon": 85,
    "10_Round": 20,
    "10_Square": 33
  },
  {
    "month": "March",
    "2.5_DIP 1": 57,
    "2.5_DIP 2": 36,
    "4_Round Bowl": 89,
    "4_Square Bowl": 78,
    "5_Round Bowl": 10,
    "5_Square Bowl": 49,
    "5_Triangle Bowl": 94,
    "6_Oval": 3,
    "6_Round": 67,
    "6_Round Bowl": 31,
    "6_Square Bowl": 7,
    "6_Triangle Bowl": 65,
    "6_X 3\"": 22,
    "7_Oval": 11,
    "8_Square": 56,
    "8_Hexagon": 47,
    "10_Round": 98,
    "10_Square": 64
  },
  {
    "month": "April",
    "2.5_DIP 1": 25,
    "2.5_DIP 2": 82,
    "4_Round Bowl": 14,
    "4_Square Bowl": 63,
    "5_Round Bowl": 37,
    "5_Square Bowl": 48,
    "5_Triangle Bowl": 72,
    "6_Oval": 54,
    "6_Round": 92,
    "6_Round Bowl": 60,
    "6_Square Bowl": 84,
    "6_Triangle Bowl": 19,
    "6_X 3\"": 30,
    "7_Oval": 40,
    "8_Square": 99,
    "8_Hexagon": 58,
    "10_Round": 13,
    "10_Square": 79
  },
  {
    "month": "May",
    "2.5_DIP 1": 41,
    "2.5_DIP 2": 69,
    "4_Round Bowl": 50,
    "4_Square Bowl": 17,
    "5_Round Bowl": 23,
    "5_Square Bowl": 90,
    "5_Triangle Bowl": 74,
    "6_Oval": 81,
    "6_Round": 28,
    "6_Round Bowl": 43,
    "6_Square Bowl": 55,
    "6_Triangle Bowl": 8,
    "6_X 3\"": 96,
    "7_Oval": 24,
    "8_Square": 88,
    "8_Hexagon": 51,
    "10_Round": 46,
    "10_Square": 6
  },
  {
    "month": "June",
    "2.5_DIP 1": 80,
    "2.5_DIP 2": 4,
    "4_Round Bowl": 97,
    "4_Square Bowl": 52,
    "5_Round Bowl": 32,
    "5_Square Bowl": 61,
    "5_Triangle Bowl": 27,
    "6_Oval": 75,
    "6_Round": 39,
    "6_Round Bowl": 21,
    "6_Square Bowl": 83,
    "6_Triangle Bowl": 77,
    "6_X 3\"": 1,
    "7_Oval": 93,
    "8_Square": 42,
    "8_Hexagon": 86,
    "10_Round": 68,
    "10_Square": 14
  }
]

const ffconfig = {
  "2.5_DIP 1": {
    label: "2.5 DIP 1",
    color: "#F7F4F9",
  },
  "2.5_DIP 2": {
    label: "2.5 DIP 2",
    color: "#E7298A",
  },
  "4_Round Bowl": {
    label: "4 Round Bowl",
    color: "#C994C7",
  },
  "4_Square Bowl": {
    label: "4 Square Bowl",
    color: "#A6BDD7",
  },
  "5_Round Bowl": {
    label: "5 Round Bowl",
    color: "#67A9CF",
  },
  "5_Square Bowl": {
    label: "5 Square Bowl",
    color: "#3690C0",
  },
  "5_Triangle Bowl": {
    label: "5 Triangle Bowl",
    color: "#02818A",
  },
  "6_Oval": {
    label: "6 Oval",
    color: "#016450",
  },
  "6_Round": {
    label: "6 Round",
    color: "#014636",
  },
  "6_Round Bowl": {
    label: "6 Round Bowl",
    color: "#D0D1E6",
  },
  "6_Square Bowl": {
    label: "6 Square Bowl",
    color: "#A6BDDB",
  },
  "6_Triangle Bowl": {
    label: "6 Triangle Bowl",
    color: "#74A9CF",
  },
  "6_X 3\"": {
    label: "6 X 3\"",
    color: "#3690C0",
  },
  "7_Oval": {
    label: "7 Oval",
    color: "#0570B0",
  },
  "8_Square": {
    label: "8 Square",
    color: "#045A8D",
  },
  "8_Hexagon": {
    label: "8 Hexagon",
    color: "#023858",
  },
  "10_Round": {
    label: "10 Round",
    color: "#012B47",
  },
  "10_Square": {
    label: "10 Square",
    color: "#011A32",
  }
}
function BarchartmultipleChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={ffconfig}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={ffd}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
        
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
          {Object.keys(ffd[0]).filter(key => key !== "month").map((key) => (
            <Bar key={key} dataKey={key} fill={ffconfig[key].color}  radius={4} />
          ))}
          
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function CupSodaIcon(props) {
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
      <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
      <path d="M5 8h14" />
      <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
      <path d="m12 8 1-6h2" />
    </svg>
  )
}


function HandPlatterIcon(props) {
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
      <path d="M12 3V2" />
      <path d="M5 10a7.1 7.1 0 0 1 14 0" />
      <path d="M4 10h16" />
      <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
      <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
      <path d="M5 14v7H2" />
    </svg>
  )
}


function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function PiechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          plates: {
            label: "Plates",
            color: "#F7F4F9",
          },
          bowl: {
            label: "bowl",
            color: "#E7298A",
          },
          dip: {
            label: "dip",
            color: "#C994C7",
          },
        }}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { type: "dip", count: 275, fill: "var(--color-dip)" },
              { type: "bowl", count: 275, fill: "var(--color-bowl)" },
              { type: "plate", count: 275, fill: "var(--color-plates)" },
            
            ]}
            dataKey="count"
            nameKey="type"
            innerRadius={60}
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}