'use client'
import { useState } from "react"

export default function EnergyEfficiency() {
    const [co2Value, setCo2Value] = useState(110)
    const ranges: {label: string, min: number, max: number, color: string}[] = [
        {label: "A-B", min: 0, max: 100, color: "bg-green-700"},
        {label: "B-C", min: 101, max: 120, color: "bg-green-500"},
        {label: "D-E", min: 121, max: 140, color: "bg-lime-400"},
        {label: "F-G", min: 141, max: 165, color: "bg-yellow-400"},
        {label: "H-J", min: 166, max: 185, color: "bg-orange-400"},
        {label: "J-K", min: 186, max: 225, color: "bg-red-500"},
        {label: "L-M", min: 226, max: Infinity, color: "bg-red-700"},
    ]

    const getHighligtedRange = (value: number) => {
        return ranges.find((range) => value >= range.min && value <= range.max);
    };

    const highlightedRange = getHighligtedRange(co2Value);

    const basewidth = 30;


  return (
    <section>
        <main className="py-6">
            {/* Chart Section */}
            <div className="space-y-2">
                {ranges.map((range, index) => {
                    const width = basewidth + index * 8
                    return (
                        <div key={range.label} className={`relative flex items-center`}>
                            <div className={`h-10 ${range.color} 
                            text-white font-bold text-sm md:text-base font-montserrat xl:text-lg 
                            px-4 rounded-lg flex items-center pointed-right rounded-s-none`} style={{width: `${width}%`}}>

                                <span className="flex-1"> {range.min} {range.max === Infinity ? '+' : `- ${range.max}`} {' '} 
                                    {range.label}
                                </span>

                            </div>
                            {highlightedRange?.label === range.label && (
                                <div style={{ width: `calc(100% - ${width}%)`, left: `${width}`}}
                                className="absolute text-center right-0 h-10 pointed-left bg-black text-white">
                                    <p className="pt-2 font-montserrat font-medium text-lg md:text-xl tracking-wide">
                                        {co2Value} {range.min === 0 && range.max === 100 ? 'Excellent' : range.min === 141 && range.max === 165 ? "Moderate"
                                        : range.min >= 225 ? "Too high" : ""}</p>
                                </div>
                            )}
                        </div>
                 )})}
            </div>

            <div className="mt-8">
                <label className="block text-sm font-medium text-gray-700">
                    Enter CO2 Value (g/km):
                </label>
                <input type="number" value={co2Value} 
                onChange={(prev) => setCo2Value(Number(prev.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
        </main>
    </section>
  )
}
