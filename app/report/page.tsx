import { Button } from '@/components/ui/button'
import React from 'react'

const checks: string[] = [
  "Buy 5 Premium Checks £29.88",
  "Buy 5 Premium Checks £23.88",
  "Buy 5 Premium Checks £11.93",
]

export default function SampleReport() {
  return (
    <section>
      <main className="py-12 px-4 md:px-12 lg:px-24">
        <div className="3-buttons block md:flex justify-between md:gap-x-12">
          {checks.map((checkValue, index) => (
            <Button key={index} 
            className='bg-ccOrange font-montserrat font-semibold text-base text-center py-6 md:py-8 w-full'>
              {checkValue}
            </Button>
          ))}
        </div>
      </main>
    </section>
  )
}
