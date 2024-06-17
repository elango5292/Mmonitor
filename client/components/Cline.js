import React, { useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';

const IdleWorkingChart = () => {

    const [data,setData]=React.useState([
        { x: '05:30', y: 0 }, // Example: idle state
        { x: '14:45', y: 1 }, // Example: working state
        { x: '15:00', y: 0 },
        { x: '15:15', y: 1 },
        { x: '15:30', y: 0 },
        { x: '15:45', y: 1 },
        { x: '16:00', y: 0 },
        { x: '16:15', y: 1 },
        { x: '16:30', y: 0 },
        { x: '16:45', y: 1 },
       ])

    useEffect(() => {
        const interval = setInterval(async () => {
           
            try {
                fetch('/api/cycle', {
                    method: 'GET'
                  })
                  .then(response => response.json())
                  .then(data => {
                    console.log("da",data)
                    const result = [];
                    let idle = true;
                    let lastUp = null;
                    data.forEach((item) => {
                        const createdAt = new Date(item.createdAt);
                        const hours = createdAt.getHours();
                        const minutes = createdAt.getMinutes();
                        const time = `${hours}:${minutes}`;
                        if (item.type === 'down') {
                            idle = true;
                            lastUp = time;
                        } else {
                            idle = false;
                        }
                        result.push({ x: time, y: idle ? 0 : 1 });
                    });
                    setData(result);
                    console.log("res",result)
                  })
                  .catch(error => {
                    console.error('Error sending POST request:', error);
                  });
            } catch (error) {
                console.log(error);
            }


           
        }, 20000);
        return () => clearInterval(interval);
    }, []);
  

  
   
    

  return (
    <div style={{ height: '100%', width: '100%' }} className='text-[#AEAEB2]'>
      <ResponsiveLine
        data={[
          {
            id: 'idle-working',
            data,
          },
        ]}
        margin={{ top: 20, right: 30, bottom: 50, left: 50 }}
        xScale={{ type: 'time', format: '%H:%M', precision: 'minute',  }}
        xFormat="time:%H:%M"
        yScale={{ type: 'linear', min: 0, max: 1 }}
        colors={['#AEAEB2']} // Change the color here (e.g., '#FF5733')
        enablePoints={false}
        enableGridX={false} // Enable the X-axis grid
        enableGridY={false} // Disable the Y-axis grid
        axisBottom={{
            min: '00:00', max: '20:00',
          format: '%H:%M',
        }}
        isInteractive = {true}
        useMesh= {true}
        axisLeft={{
          tickValues: [0, 1],
          format: (value) => (value === 0 ? 'Idle' : 'Working'),
        }}
        curve="step"
      />
    </div>
  );
};

export default IdleWorkingChart;
