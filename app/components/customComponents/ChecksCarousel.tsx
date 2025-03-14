'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { title } from "process";
import { Button } from "@/components/ui/button";

const checklist: string[] = ["Critical Checks", "Outstanding Checks", "Condition/WriteOff", "Police Stolen", "High Risk", "Mileage Anomaly", "MOT History", "+Important Checks"];

const checks: {id:number, title: string, amount: number, lists: string[], price: number, discount: number }[] = [
    {id:1, title: " ", amount: 5, lists: checklist, price: 30, discount: 4.98},
    {id:2, title: "Most Popular", amount: 5, lists: checklist, price: 30, discount: 6.65},
    {id:3, title: " ", amount: 5, lists: checklist, price: 30, discount: 9.94}

]



export default function CheckCarousel() {
  return (
    <Swiper
      spaceBetween={20} // Space between slides
      centeredSlides={true} // Centers the active slide
      slidesPerView={1.2} // Default for mobile (1 full + 20% of prev & next)
      breakpoints={{
        768: {
          slidesPerView: 3, // Show 3 slides on larger screens
          spaceBetween: 30, // Adjust spacing
        },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
        <section className="w-full mb-12 bg-ccLightAsh">
            <main className="">
            {checks.map((check) => (
                <SwiperSlide key={check.id} className="mb-12">
                        <div className="check card rounded-2xl border border-gray-400 shadow-gray-400 hover:border-ccOrange hover:shadow-md hover:shadow-ccOrange">
                            <div className="flex flex-col w-full py-4 text-center">
                                <h1 className={`font-montserrat font-medium text-sm md:text-base lg:text-lg text-ccBlue my-4`}>{check.title}</h1>
                                <h3 className={`font-montserrat font-medium text-sm md:text-base lg:text-lg ${check.id === 1 || check.id === 3 ? "py-8" : "py-4"} `}>Buy {check.amount} Premium Checks</h3>
                                <div className="lists gap-2">
                                    {/* <h1 className="font-montserrat font-light ">{check.lists[0]}</h1> */}
                                    {check.lists.slice(0, -1).map((item, index) => (
                                        <h1 key={index} className="font-montserrat font-light text-black hover:text-ccOrange cursor-pointer">{item}</h1>          
                                    ))} 
                                </div>
                                <h3 className="font-montserrat font-medium text-sm md:text-base lg:text-lg py-4"> {check.lists[check.lists.length - 1]} </h3>
                                <Button className="bg-ccOrange mx-auto rounded-lg hover:bg-black text-white">${check.price}<span className="">$({check.discount} each)</span></Button>
                            </div>
                        </div>
                </SwiperSlide>
            ))}
            </main>
        </section>
    </Swiper>
  );
}

{/* <SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide>
<SwiperSlide>Slide 5</SwiperSlide>
<SwiperSlide>Slide 6</SwiperSlide> */}