import Image from 'next/image'
import React from 'react'

// interface checkedServicesInterface {
//     checks: string[]
// }

// const checkedServices: checkedServicesInterface[] = [
const checkedServices: string[] = 
        ["Outstanding Finance", "If Used before Registration", 
            "Insurance WriteOff", "Economic and Environment Details",
            "Police Stolen Records", "Performance Data",
            "Condition Data", "Certificate of Destruction",
            "High Risk", "VIC Inspection",
            "Scrapped", "Tax and Registration Information",
            "Plates Change History", "MOT History",
            "Previous Keepers", "Number Plate Check",
            "Color Change History", "Engine Number",
            "Imported Flag", "VIN Confirmation",
            "Weight and Dimensional Details", "Engine and Technical Information",
            "Exported Flag", "VSC"
        ]


export default function Services() {
  return (
    <section className='w-full'>
        <main className='py-12 w-full bg-[#FFE0D733]'>
                <div className="md:mx-12 lg:mx-24 trusted mt-4 flex flex-col text-center">
                    <p className="font-montserrat font-semibold text-xl xl:text-3xl 
                        leading-loose mt-4">
                        We Provide the Checks Below
                    </p>
                    <h1 className="font-raleway font-medium text-xs md:text-base text-ccOrange">
                    ALL SERVICES YOU GET WHEN YOU BUY A CHECK 
                    </h1>
                </div>

                <div className="">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-x-48 lg:gap-x-56 px-4 md:px-8 lg:px-16 py-12 mx-auto">
                    {checkedServices.map((service, index) => (
                        <div key={index} className="inline-flex space-x-2 items-start">
                                <div>
                                    <Image src="/images/star.svg" alt="star" width={20} height={20}/>
                                </div>
                                <div className="flex flex-col space-y-2 md:space-y-3">
                                    <p className='font-montserrat font-light text-xs lg:text-base'>{service}</p>
                                </div>
                        </div>
                    ))}
                    </div>
                </div>

           


        </main>
    </section>
  )
}
 