"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// where the name the hour name and cups are the number of cups and plates are the number of plates. so, one cycle down and then up means the quantity of product defined before that time is produced.

function calculateProduction(items, events) {
    const production = {}; // Object to store production data by hour
  
    let currentProduction = { cups: 0, plates: 0 }; // Current production within a cycle
    let hasDownEvent = false; // Flag to track if a down event occurred
  
    events.forEach(event => {
      if (event.type === 'down') {
        hasDownEvent = true;
        // Add current production only if there was a down event before
        if (hasDownEvent) {
          const hour = new Date(event.createdAt).getHours();
          production[hour] = production[hour] || { name: `${hour}:00`, cups: 0, plates: 0 };
          production[hour].cups += currentProduction.cups;
          production[hour].plates += currentProduction.plates;
          currentProduction = { cups: 0, plates: 0 }; // Reset current production
        }
      }
    });
  
    // Add the production for the first cycle (if no down event)
    if (!hasDownEvent) {
      const firstItemHour = new Date(items[0].createdAt).getHours();
      production[firstItemHour] = production[firstItemHour] || { name: `${firstItemHour}:00`, cups: 0, plates: 0 };
      production[firstItemHour].cups += currentProduction.cups;
      production[firstItemHour].plates += currentProduction.plates;
    }
  
    // Loop through items and update production based on type and quantity
    items.forEach(item => {
      if (item.type === 'cups') {
        currentProduction.cups += item.quantity;
      } else {
        currentProduction.plates += item.quantity;
      }
    });
  
    // Add the final production to the last hour (if no down event after)
    if (!hasDownEvent) {
      const lastItemHour = new Date(items[items.length - 1].createdAt).getHours();
      production[lastItemHour].cups += currentProduction.cups;
      production[lastItemHour].plates += currentProduction.plates;
    }
  
    // Convert production object to desired format
    return Object.values(production);
  }
  
  
const eve = [{
    id: '666fa0f7d5ab7d0db445af97',
    type: 'down',
    createdAt: '"2024-06-16T21:23:07.208Z"'
  },
  {
    id: '666fa0f7d5ab7d0db445af98',
    type: 'up',
    createdAt: '"2024-06-16T21:24:21.208Z"'
  },
  {
    id: '666fa0f7d5ab7d0db445af99',
    type: 'down',
    createdAt: '"2024-06-16T21:26:08.208Z"'
  },
  {
    id: '666fa0f8d5ab7d0db445af9a',
    type: 'up',
    createdAt: '"2024-06-16T21:27:22.208Z"'
  },
  {
    id: '666fa0f8d5ab7d0db445af9b',
    type: 'down',
    createdAt: '"2024-06-16T21:28:56.208Z"'
  },
  {
    id: '666fa0f8d5ab7d0db445af9c',
    type: 'up',
    createdAt: '"2024-06-16T21:30:40.208Z"'
  },
  {
    id: '666fa0f8d5ab7d0db445af9d',
    type: 'down',
    createdAt: '"2024-06-16T21:32:24.208Z"'
  },
  {
    id: '666fa0f9d5ab7d0db445af9e',
    type: 'up',
    createdAt: '"2024-06-16T21:33:39.208Z"'
  },
  {
    id: '666fa0f9d5ab7d0db445af9f',
    type: 'down',
    createdAt: '"2024-06-16T21:34:57.208Z"'
  }]
  
const prod = [
    {
      id: '666fa199d5ab7d0db445b0c5',
      type: 'plates',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T21:13:49.326Z"'
    },
    {
      id: '666fa19fd5ab7d0db445b0d8',
      type: 'plates',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T21:39:05.326Z"'
    },
    {
      id: '666fa1a3d5ab7d0db445b0e5',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T21:57:16.326Z"'
    },
    {
      id: '666fa1a5d5ab7d0db445b0ec',
      type: 'plates',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T22:06:43.326Z"'
    },
    {
      id: '666fa1a9d5ab7d0db445b0fb',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T22:28:55.326Z"'
    },
    {
      id: '666fa1afd5ab7d0db445b10e',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T22:55:38.326Z"'
    },
    {
      id: '666fa1b1d5ab7d0db445b117',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:07:19.326Z"'
    },
    {
      id: '666fa1b2d5ab7d0db445b11a',
      type: 'plates',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:10:11.326Z"'
    },
    {
      id: '666fa1b4d5ab7d0db445b11f',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:16:26.326Z"'
    },
    {
      id: '666fa1b6d5ab7d0db445b128',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:28:15.326Z"'
    },
    {
      id: '666fa1b7d5ab7d0db445b12b',
      type: 'plates',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:30:43.326Z"'
    },
    {
      id: '666fa1b8d5ab7d0db445b12e',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:33:05.326Z"'
    },
    {
      id: '666fa1bad5ab7d0db445b133',
      type: 'plates',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:39:28.326Z"'
    },
    {
      id: '666fa1bdd5ab7d0db445b13e',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-16T23:54:07.326Z"'
    },
    {
      id: '666fa1c1d5ab7d0db445b14d',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-17T00:16:31.326Z"'
    },
    {
      id: '666fa1c4d5ab7d0db445b158',
      type: 'cups',
      prodDuration: 3,
      quantity: 2,
      createdAt: '"2024-06-17T00:31:59.326Z"'
    },
]
export default function Sbar(){
    // console.log("procs",calculateProduction(prod,eve))
    const data = [
        {
          name: '5:00',
          idle: 20,
          working: 10,
        },
        {
          name: '6:00',
          idle: 15,
          working: 15,
        },
        {
          name: '7:00',
          idle: 10,
          working: 20,
        },
        {
          name: '8:00',
          idle: 12,
          working: 18,
        },
        {
          name: '9:00',
          idle: 8,
          working: 22,
        },
        {
          name: '10:00',
          idle: 10,
          working: 20,
        },
        {
          name: '11:00',
          idle: 12,
          working: 18,
        },
        {
          name: '12:00',
          idle: 20,
          working: 10,
        },
      ];
      

    return(
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid className='stroke-[#8d8d8d] ' strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="working" stackId="a" fill="#AEAEB2" className='!bg-gradient-b !from-white !to-black' />
          <Bar dataKey="idle" stackId="a" fill="#5F5F5F" />
        </BarChart>
      </ResponsiveContainer>
    )
}
