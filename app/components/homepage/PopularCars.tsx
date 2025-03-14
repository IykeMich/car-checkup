'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'




const vehicles: {id: number, name: string, vehicle_num: number}[] = [
    {id:1, name: "volkswagen", vehicle_num: 840},
    {id:2, name: "Ford", vehicle_num: 834},
    {id:3, name: "Vauxhall", vehicle_num: 737},
    {id:4, name: "BMW", vehicle_num: 506},
    {id:5, name: "mercedes-benz", vehicle_num: 704},
    {id:6, name: "Audi", vehicle_num: 312},
    {id:7, name: "Land Rover", vehicle_num: 259},
    {id:8, name: "mini", vehicle_num: 450},
    {id:9, name: "Pegeout", vehicle_num: 600},
]

export default function PopularCars() {
    const [showFullVehicle, setShowFullVehicle] = useState(false)
  return (
    <>
      <section>
        <main className="mx-3 md:mx-12 lg:mx-24 py-12">
            <div className="headerWords w-full flex flex-col text-center space-y-4">
                <h1 className='font-raleway font-semibold text-2xl md:text-3xl lg:text-4xl text-ccOrange'>Popular Car Makes</h1>
                <h1 className='font-raleway font-normal text-sm md:text-base lg:text-lg '>
                Explore the history of popular vehicle checks by make, model, and registration number in the list below.
                </h1>
            </div>

            <div className="vehicles mt-12 flex flex-col gap-4">
                {vehicles.slice(0, showFullVehicle ? vehicles.length: 3).map((vehicle) => (
                    <div key={vehicle.id} className="vehicle inline-flex text-center">
                        <div className="py-2 text-xs md:text-sm lg:text-base font-montserrat w-2/5 font-semibold bg-[#FFC439] text-white hover:bg-green-600 cursor-pointer">{vehicle.name}</div>
                        <div className="py-2 text-xs md:text-sm lg:text-base font-raleway w-3/5 font-light border !border-s-none ">{vehicle.vehicle_num} Vehicles have been Inspected</div>
                    </div>
                ))}

                <Button className="!bg-white !text-black !shadow-none !border-none !outline-none hover:underline flex justify-center"
                    onClick={() => setShowFullVehicle((prevState) => !prevState)} >
                        {showFullVehicle ? "Show Less" : "Show More"}
                </Button>
            </div>
        </main>
      </section>
    </>
  )
}
