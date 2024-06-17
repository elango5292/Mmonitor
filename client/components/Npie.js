"use client"
import { ResponsivePie } from '@nivo/pie';
import { useState, useEffect } from "react"
const customColors = ['#AEAEB2', '#545456']; 



export default function PieChart(){
    const [dataa, setDataa] = useState([
      { id: 'plates', value: 30 },
      { id: 'cups', value: 70 },
    ])
    // useEffect(() => {
        
    // })
    

      
     function proc(rawdata){
      let count = {
        plates: 0,
        cups: 0
      }
      console.log("da1",rawdata)
      rawdata.forEach(item => {
        if (item.end!=null){
        count[item.prod] += item.quantity}
      })
      let res = [
        { id: 'plates', value: count.plates },
        { id: 'cups', value: count.cups },
      ]
      return res

     }
   
     useEffect(() => {
      const interval = setInterval(async () => {
           
       
        fetch('/api/cyc', {
          method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
         
          const result = proc(data, data)
          console.log("pieres",result)
          setDataa(result)
        })
        .catch(error => console.error(error));


       
    }, 2000);
    return () => clearInterval(interval);
    
     },[])
    
return(

    
    <ResponsivePie  
      data={dataa}
      colors={customColors}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      enableRadialLabels={false}
      enableSlicesLabels={false}
    />
  );}
  
