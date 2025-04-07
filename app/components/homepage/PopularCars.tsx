'use client'
// import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { usePathname } from "next/navigation"
import carData from "../../../lib/data/carData.json"
import Link from 'next/link';




// const vehicles: {id: number, name: string, vehicle_num: number}[] = [
//     {id:1, name: "volkswagen", vehicle_num: 840},
//     {id:2, name: "Ford", vehicle_num: 834},
//     {id:3, name: "Vauxhall", vehicle_num: 737},
//     {id:4, name: "BMW", vehicle_num: 506},
//     {id:5, name: "mercedes-benz", vehicle_num: 704},
//     {id:6, name: "Audi", vehicle_num: 312},
//     {id:7, name: "Land Rover", vehicle_num: 259},
//     {id:8, name: "mini", vehicle_num: 450},
//     {id:9, name: "Pegeout", vehicle_num: 600},
// ]

export default function PopularCars() {
    // const [showFullVehicle, setShowFullVehicle] = useState(false)
    const pathname = usePathname()
    const isPopChecks = pathname === "/popular_checks"



  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const popularChecks = carData.popular_checks;
  const totalPages = Math.ceil(popularChecks.length / itemsPerPage);
  
  const paginatedData = popularChecks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <section>
        <main className={`mx-3 md:mx-12 ${isPopChecks ? "lg:mx-12" : "lg:mx-24"} py-12`}>
            <div className={` headerWords w-full flex flex-col ${isPopChecks ? "text-start" : "text-center"} space-y-4 `}>
                <h1 className='font-raleway font-semibold text-2xl md:text-3xl lg:text-4xl text-ccOrange'>Popular Car Makes</h1>
                <h1 className='font-raleway font-normal text-sm md:text-base lg:text-lg '>
                Explore the history of popular vehicle checks by make, model, and registration number in the list below.
                </h1>
            </div>

            <div className="vehicles mt-12 flex flex-col gap-4">
                {/* {paginatedData.slice(0, showFullVehicle ? vehicles.length: 5).map((vehicle) => ( */}
                {paginatedData.map((vehicle) => (
                    <Link href={`/popular_checks/${vehicle.name}`} key={vehicle.brand_id}  className="vehicle inline-flex text-center group cursor-pointer">
                        <div className="py-2 text-sm lg:text-base font-montserrat w-1/5 md:w-2/5 font-medium bg-[#FFC439] text-white group-hover:bg-green-600 group-hover:text-white">{vehicle.name}</div>
                        <div className="py-2 text-sm lg:text-base font-raleway w-4/5 md:w-3/5 font-light border !border-s-none group-hover:bg-green-600 group-hover:text-white">{vehicle.vehicle_num} Vehicles have been Inspected</div>
                    </Link>
                ))}

                {/* Pagination Page */}
                <div className='flex justify-center items-center gap-4 mt-6'>
                  <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-300"
                  > 
                    Previous 
                  </button>
                    <span>Page {currentPage} of {totalPages}</span>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-300"
                  >
                    Next
                  </button>          
                </div>

                {/* <Button className="!bg-white !text-black !shadow-none !border-none !outline-none hover:underline flex justify-center"
                    onClick={() => setShowFullVehicle((prevState) => !prevState)} >
                        {showFullVehicle ? "Show Less" : "Show More"}
                </Button> */}
            </div>
        </main>
      </section>
    </>
  )
}
