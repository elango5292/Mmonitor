'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MonthlyStats = () => {
  const [selectedMonth, setSelectedMonth] = useState('5');
  const [selectedYear, setSelectedYear] = useState('2024');

  const dummyData = {
    '2024': {
      '5': {
        1: 75, 2: 80, 3: 65, 4: 90, 5: 85, 6: 70, 7: 60,
        8: 82, 9: 78, 10: 88, 11: 92, 12: 76, 13: 84, 14: 79,
        15: 91, 16: 87, 17: 83, 18: 89, 19: 72, 20: 81, 21: 86,
        22: 94, 23: 77, 24: 85, 25: 90, 26: 88, 27: 79, 28: 82,
        29: 87, 30: 93, 31: 89
      }
    }
  };

  const getProductionColor = (value) => {
    if (value === undefined) return 'bg-gray-300 text-gray-600';
    if (value >= 90) return 'bg-gray-900';
    if (value >= 70) return 'bg-gray-700';
    if (value >= 50) return 'bg-gray-500';
    return 'bg-gray-100 text-gray-800';
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const firstDayOfMonth = new Date(selectedYear, selectedMonth - 1, 1).getDay();
    
    let calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<div key={`empty-${j}`} className="aspect-square"></div>);
        } else if (day > daysInMonth) {
          break;
        } else {
          const productionValue = dummyData[selectedYear]?.[selectedMonth]?.[day];
          week.push(
            <div key={day} className={`aspect-square flex items-center justify-center rounded-lg ${getProductionColor(productionValue)} text-sm sm:text-base transition-all duration-300 hover:scale-105 cursor-pointer`}>
              {productionValue !== undefined ? <><div className='flex flex-col justify-center items-center'><div>{day}</div><div>[{productionValue} u]</div></div></> : <><div className='flex flex-col justify-center items-center'><div>{day}</div><div>NA</div></div></>}
            </div>
          );
          day++;
        }
      }
      calendar.push(<div key={i} className="grid grid-cols-7 gap-1 sm:gap-2">{week}</div>);
      if (day > daysInMonth) break;
    }

    return calendar;
  };

  return (
    <div className=" p-4 bg-black text-white min-h-screen min-w-screen flex items-center justify-center">
      <Card className="bg-gray-800 text-white w-full max-w-4xl shadow-2xl">
        <CardHeader className="border-b border-gray-700">
          <CardTitle className="text-2xl sm:text-3xl font-bold">Monthly Production Stats</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-full sm:w-[180px] bg-gray-700 text-white">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-white">
                {[...Array(12)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {new Date(0, i).toLocaleString('default', { month: 'long' })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full sm:w-[180px] bg-gray-700 text-white">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-white">
                {[2023, 2024, 2025].map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-gray-400 text-xs sm:text-sm font-medium">{day}</div>
              ))}
            </div>
            {renderCalendar()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyStats;