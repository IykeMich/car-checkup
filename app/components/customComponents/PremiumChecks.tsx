import { Button } from '@/components/ui/button'

const checks: string[] = [
    "Buy 5 Premium Checks £29.88",
    "Buy 3 Premium Checks £23.88",
    "Buy 1 Premium Checks £11.93",
  ]

export default function SampleReport() {
    return (
        <div className="3-buttons block md:flex justify-between space-y-4 md:space-y-0 md:gap-x-4 xl:gap-x-12 mb-12">
          {checks.map((checkValue, index) => (
            <Button key={index} 
            className='bg-ccOrange font-montserrat font-semibold md:text-sm lg:text-base text-center py-6 md:py-8 md:w-1/3 w-full'>
              {checkValue}
            </Button>
          ))}
        </div>
    )
}