
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
          <HandPlatterIcon className="w-6 h-6 hover:text-black" />
          </Button>

        </aside>
        <main className="flex-1 p-4 space-y-4 md:space-y-8">
          {activeComponent === 1 && (
            <>
              <h1 className="text-3xl font-bold text-white">Operational Analytics</h1>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4 border-none">
                  <div className="text-lg font-semibold text-white">Total Cycle Time</div>
                  <div className="text-2xl font-bold text-white">00h 00m 00s</div>
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4  border-none">
                  <div className="text-lg font-semibold text-white">Total Idle Time</div>
                  <div className="text-2xl font-bold text-white">00h 00m 00s</div>
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4  border-none">
                  <PiechartChart />
                </Card>
                <Card className="bg-gray-800 bg-opacity-50 rounded-lg p-4 h-96 overflow-auto  border-none">
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
            <div className="flex flex-row justify-around">
           <div className="flex flex-col w-[500px] pl-[75px] pr-[54px] gap-y-2 pt-[92px]" style={{
    width: 499,
    height: 775,
    borderRadius: 30,
    background: "linear-gradient(134.57deg, rgba(0,0,0,0.3) 0.37%, rgba(0,0,0,0.3) 99.63%)",
  }}>
           <div className="space-y-2 flex flex-row items-center justify-between " >
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="length">Shape</Label>
              <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white w-[130px] border-none rounded-xl' id="length" placeholder="Select Shape"  />
            </div>

            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="length">Type</Label>
              <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="length" placeholder="Select Type"  />
            </div>


            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="length">Length (inch)</Label>
              <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="length" placeholder="Enter length"  />
            </div>



            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="width">Width (inch)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="width" placeholder="Enter width" />
            </div>

            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="length">Diameter (CM)</Label>
              <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="length" placeholder="Select Type"  />
            </div>

            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="length">Triangle Side (CM)</Label>
              <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="length" placeholder="Select Type"  />
            </div>
            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="height">Height (inch)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="height" placeholder="Enter height" />
            </div>

            <Button className="w-60 mt-12 text-white rounded-md text-lg" style={{
      background:
        "linear-gradient(136.87deg, rgba(200,200,200,0.7) 1.53%, rgba(121,55,152,0.7) 98.47%)",
      boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.25)",
    }}>Enter</Button>
</div>













<div className="flex flex-col justify-center pl-[69px] pr-[60px]" style={{
    width: 648,
    height: 775,
    borderRadius: 30,
    background: "linear-gradient(134.57deg, rgba(0,0,0,0.3) 0.37%, rgba(0,0,0,0.3) 99.63%)",
  }}>
            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="topTemp">Top Temperature (C)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="topTemp" placeholder="Enter top temperature" />
            </div>
            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="bottomTemp">Bottom Temperature (C)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="bottomTemp" placeholder="Enter bottom temperature" />
            </div>
            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="ribCuring">Preheat/Rib Curing (sec)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="ribCuring" placeholder="Enter rib curing time" />
            </div>
            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="cut">Cut time (sec)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="cut" placeholder="Enter cut time" />
            </div>


            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="lupCuring">LUP Curing (seconds)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="lupCuring" placeholder="Enter LUP curing time" />
            </div>

            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="botCuring">Bot Curing (sec)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="botCuring" placeholder="Enter bot curing time" />
            </div>
            
            
            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="up">LUP (sec)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="up" placeholder="Enter UP" />
            </div>
            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="lup">LUP (CM)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="lup" placeholder="Enter LUP" />
            </div>


            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="lup">Cycle Time (sec)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="lup" placeholder="Enter LUP" />
            </div>
            

            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="lup">Load/Unload Time (sec)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="lup" placeholder="Enter LUP" />
            </div>

            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="lup">Runtime (sec)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="lup" placeholder="Enter LUP" />
            </div>

            <div className="space-y-2 flex flex-row items-center justify-between">
              <Label style={{
    
    height: 33,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "left",
    color: "#fff",
  }} htmlFor="lup">Soak Time (hr)</Label>
                <Input type="text" style={{
    background:
      "linear-gradient(134.57deg, rgba(164,164,164,0.5) 0.37%, rgba(164,164,164,0.3) 99.63%)",
  }} className='!placeholder-white border-none rounded-xl w-[130px]' id="lup" placeholder="Enter LUP" />
            </div>
          </div>
          </div>
          )}
        </main>
      </div>
    </div>
  )
}

function CustomSelect(props) {
  return (
      <Select {...props} className='border-none' >
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
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="hover:fill-black p-2" fill-rule="evenodd" clip-rule="evenodd" d="M2.22917 1.875C0.99804 1.875 0 2.84534 0 4.04223C0 4.44129 0.332685 4.76476 0.743063 4.76476H24.5208C24.9312 4.76476 25.2639 4.44129 25.2639 4.04223C25.2639 2.84534 24.2658 1.875 23.0347 1.875H2.22917ZM24.1806 10.2755C22.6839 9.5016 21.0145 9.09766 19.3194 9.09945C14.3846 9.10189 10.1316 12.4774 9.14106 17.1776C9.0777 17.5172 8.77526 17.7653 8.42032 17.7687H2.22917C0.99804 17.7687 0 16.7983 0 15.6014V8.37692C0 7.97803 0.332685 7.65455 0.743063 7.65455H24.5208C24.9312 7.65455 25.2639 7.97803 25.2639 8.37692V9.64415C25.2643 9.89578 25.1285 10.1292 24.9065 10.2587C24.6843 10.3881 24.4086 10.3945 24.1806 10.2755ZM23.1194 22.1149L23.054 22.1871C22.5863 22.7006 22.0064 23.1058 21.3569 23.3734C20.7034 23.6404 19.9959 23.7589 19.2882 23.7201C18.0916 23.6627 16.9681 23.143 16.1674 22.2766L16.7961 21.6669C17.1565 21.3225 17.2859 20.8096 17.1304 20.342C16.9823 19.8971 16.5891 19.5713 16.1139 19.4997L12.0866 18.8436C11.6572 18.7774 11.2212 18.915 10.9137 19.2137C10.6063 19.5123 10.4643 19.9361 10.5321 20.3535L11.2053 24.2605C11.2774 24.7261 11.6139 25.1121 12.0747 25.2575C12.2064 25.3 12.3444 25.322 12.4833 25.3225C12.8416 25.3212 13.1846 25.1807 13.4359 24.9324L14.0838 24.3038C15.4795 25.5861 17.3371 26.2846 19.2571 26.2487C20.3459 26.2326 21.4168 25.9758 22.3881 25.4974C23.3652 25.0183 24.2115 24.3212 24.8582 23.4629C25.2078 22.9946 25.1166 22.3418 24.6512 21.9811C24.1859 21.6204 23.5111 21.6793 23.1194 22.1149ZM26.5641 13.1697C27.0249 13.315 27.3615 13.7009 27.4335 14.1666L28.1083 18.0736C28.1703 18.4546 28.058 18.843 27.801 19.1368C27.5439 19.4306 27.1675 19.6006 26.7708 19.6022C26.6976 19.6019 26.6245 19.5957 26.5523 19.5834L22.5249 18.9275C22.0498 18.8558 21.6565 18.5299 21.5084 18.0852C21.3529 17.6175 21.4823 17.1047 21.8428 16.7602L22.4714 16.1503C21.6707 15.2839 20.5472 14.7643 19.3507 14.7069C18.643 14.668 17.9354 14.7867 17.2819 15.0538C16.6324 15.3213 16.0526 15.7266 15.5848 16.2401L15.5194 16.3122C15.1277 16.7477 14.4528 16.8067 13.9875 16.446C13.5222 16.0852 13.4311 15.4324 13.7807 14.9642C14.4272 14.106 15.2737 13.4088 16.2505 12.9298C17.2221 12.4514 18.2929 12.1944 19.3818 12.1785C21.3018 12.1424 23.1594 12.8408 24.5551 14.1232L25.2029 13.4948C25.5558 13.1429 26.0838 13.0167 26.5641 13.1697Z" fill="white"/>
    </svg>
  )
}


function HandPlatterIcon(props) {
  return (
    <svg className="hover:text-black !fill-green-500" width="30" height="26" viewBox="0 0 30 26"  xmlns="http://www.w3.org/2000/svg">
<path className="hover:fill-black p-2" fill-rule="evenodd" clip-rule="evenodd" d="M22.5 0.875C18.3579 0.875 15 4.14886 15 8.18756C15.0045 12.2242 18.3598 15.4955 22.5 15.5001C26.6421 15.5001 30 12.2261 30 8.18756C30 4.14886 26.6421 0.875 22.5 0.875ZM2.49999 7.37495C1.11928 7.37495 0 8.46634 0 9.81258C0 10.2612 0.373087 10.625 0.833325 10.625H10.9667C11.208 10.6257 11.4379 10.5244 11.5967 10.3471C11.7557 10.1685 11.8268 9.93122 11.7917 9.69722C11.712 9.1976 11.6702 8.69303 11.6666 8.18756C11.6666 7.73875 11.2935 7.37495 10.8334 7.37495H2.49999ZM18.3334 8.18756C18.3334 8.63618 18.7065 8.99997 19.1666 8.99997H21.6667V11.4376C21.6667 11.8862 22.0397 12.25 22.5 12.25C22.9603 12.25 23.3334 11.8862 23.3334 11.4376V8.99997H25.8334C26.2935 8.99997 26.6666 8.63618 26.6666 8.18756C26.6666 7.73875 26.2935 7.37495 25.8334 7.37495H23.3334V4.93752C23.3334 4.48871 22.9603 4.1251 22.5 4.1251C22.0397 4.1251 21.6667 4.48871 21.6667 4.93752V7.37495H19.1666C18.7065 7.37495 18.3334 7.73875 18.3334 8.18756ZM13.6149 14.2227C16.6327 18.4671 22.3635 19.9488 27.1417 17.7198C27.3997 17.6 27.7027 17.6174 27.9446 17.7662C28.1863 17.9148 28.3331 18.1741 28.3333 18.4527V22.8126C28.3333 24.1588 27.2141 25.25 25.8334 25.25H2.49999C1.11928 25.25 0 24.1588 0 22.8126V14.6876C0 14.2388 0.373087 13.875 0.833325 13.875H12.9334C13.2051 13.8756 13.4595 14.0054 13.6149 14.2227Z" fill="white"/>
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

const CustomInput = ({ label, id, placeholder, style }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        style={style}
        className="!placeholder-white"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
