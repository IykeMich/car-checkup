'use client'

import { useParams } from "next/navigation"
import { useState } from "react";
import carData from "../../../../lib/data/carData.json"
import Link from "next/link";
import PremiumChecks from "../../../components/customComponents/PremiumChecks"
import Image from "next/image";

export default function BrandModels() {
    const { brand_name, model_name } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const decodedBrandName = decodeURIComponent(brand_name as string);
    const brand = carData.popular_checks.find(b => b.name === decodedBrandName);
    if (!brand) return <div>Brand not found</div>;
    
    const decodedModelName = decodeURIComponent(model_name as string);
    const model = brand.models.find(m => m.model_name === decodedModelName);
    if (!model) return <div>Model not found</div>;
  
    const totalPages = Math.ceil(model.vehicles.length / itemsPerPage);

    const paginatedModelList = model.vehicles.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    
    return (
    <>
      <section className="pt-12 md:pt-16">
        <main className={`mx-3 md:mx-12 lg:mx-24 py-12`}>

            <PremiumChecks />
            <div className="flex items-start lg:items-center mr-4 md:mr-8 lg:mr-12 space-x-2 md:space-x-0">
                <div className={` headerWords w-full flex flex-col text-start space-y-1 md:space-y-4 `}>
                <h1 className='font-raleway font-semibold text-2xl md:text-3xl lg:text-4xl text-ccOrange'>All <Link href={`/popular_checks/${brand.name}`}>{brand.name.toUpperCase()}</Link> {model.model_name} Inspection </h1>
                <h1 className='font-raleway font-normal text-sm md:text-base lg:text-lg '>
                  Click on the registration to view vehicle history.
                  </h1>
                </div>
                <div className="logo_src">
                  <Image src={brand.logo_src} alt={brand.name} width={100} height={150} className="w-12 md:w-24 lg:w-36 h-auto" />
                </div>
            </div>
          

            <div className="vehicles mt-12 flex flex-col gap-4">
                {/* {paginatedData.slice(0, showFullVehicle ? vehicles.length: 5).map((vehicle) => ( */}
                {paginatedModelList.map((list, index) => (
                    <Link href={`/report`} key={index}  className="vehicle inline-flex text-center group cursor-pointer">
                        <div className="py-2 text-sm lg:text-base font-montserrat w-1/5 md:w-2/5 font-medium bg-[#FFC439] text-white group-hover:bg-green-600 group-hover:text-white">{list.year}</div>
                        <div className="py-2 text-sm lg:text-base font-raleway w-4/5 md:w-3/5 font-light border !border-s-none group-hover:bg-green-600 group-hover:text-white">{list.reg_number}</div>
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