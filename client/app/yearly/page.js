"use client"
import { ResponsiveCalendar } from '@nivo/calendar'
import { dummy } from './dummy'

export const dynamic = 'force-dynamic'
export default function Page() {

    return (
        <div className="flex flex-col h-auto w-auto">
            <div className="flex flex-col items-center justify-center py-4 h-screen text-black w-screen  !bg-black">
                <h1 className="text-center text-white text-4xl font-bold mx-auto"> Yearly Summary</h1>
            <MyResponsiveCalendar  data={dummy} /></div>
        </div>
    )
}
const MyResponsiveCalendar = ({ data }) => (
    <ResponsiveCalendar
    
        data={data}
        from="2023-01-01"
        to="2024-12-30"
        emptyColor="#252729 "
        colors={[ '#ff6363', '#fccf06', '#63cc08', '#2e9700' ]}
        
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#5a5a5a"
        dayBorderWidth={1}
        dayBorderColor="#afafaf"
        
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)