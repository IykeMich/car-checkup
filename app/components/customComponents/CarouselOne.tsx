'use client'; // 👈 Important for Next.js 14 App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function CarouselOne() {
    return (
        <main className="w-full pt-12 md:pt-24">
            <div className='md:mx-8 lg:mx-16 pb-6 md:pb-12'>
                <Swiper
                    spaceBetween={5}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        320: { slidesPerView: 1 }, // 1 slide on small screens
                        640: { slidesPerView: 2 }, // 2 slides on tablets
                        1024: { slidesPerView: 3 }, // 3 slides on larger screens
                    }}
                >
                    {[...Array(9)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <section className="w-full mb-12">
                            <div className="flex flex-col mx-6 justify-center items-center rounded-md border border-ccOrange">
                                <div className="py-4 pl-8 pr-4">
                                    <div className='flex justify-between pb-6'>
                                        <div className='inline-flex items-center -ml-6 space-x-1'>
                                            <div className="rounded-full w-12"><Image src="/images/homepage/customer1.svg" alt="customer" width={100} height={200} /></div>
                                            <p className="text-sm md:text-base lg:text-lg
                                            font-raleway font-medium">Alina Starkov</p>
                                        </div>
                                        <div className="inline-flex items-center gap-1">
                                            <Image className='w-4' src="/images/homepage/starFilled.svg" alt="stars" width={20} height={20} />
                                            <p className='font-poppins font-medium text-black text-sm'>4.5</p>
                                        </div>
                                    </div>
                                    <h4 className='font-raleway font-medium text-sm md:text-base lg:text-lg pb-4'>
                                    Lorem ipsum dolor sit amet consectetur. 
                                    Enim ornare auctor sit ultricies 
                                    vestibulum imperdiet. Morbi enim tortor 
                                    varius.
                                    </h4>
                                    <div className="flex items-center justify-end">
                                        <p className="font-raleway text-xs md:text-sm">August, 2022</p>
                                    </div>
                                </div>
                            </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div className="why font-raleway font-medium text-center pt-8 text-base md:text-xl lg:text-4xl z-20 relative">
                Rated Excellent on Trustpilot reviews
            </div>
            <div className='flex w-full justify-center lg:-mb-12'>
                <Image src="/images/homepage/excellent.svg" alt="trustpilot" width={200} height={50} className='w-[100vw] relative md:-top-12 lg:-top-16' />
            </div>
        </main>
    );
}
  