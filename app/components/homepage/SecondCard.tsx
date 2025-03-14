import Image from 'next/image';
import React from 'react';

const secondCardsDetails: {id: number, imageUrl: string, title: string, subtitle: string}[] = [
    {id:1, imageUrl: "/images/homepage/card21.svg", title: "Police Stolen Check", subtitle:"To avoid falling prey to vehicle fraud, make sure to check if the vehicle that you're considering has been reported as stolen in the Police National Computer."},
    {id:2, imageUrl: "/images/homepage/card22.svg", title: "Outstanding Finance", subtitle:"Did you know that 1 in 6 vehicles checked on CarCheckUp have outstanding finance recorded against them? In case you purchase a vehicle that still has an outstanding loan or hire purchase agreement, it's important to note that the finance company will maintain a legal interest in the vehicle until the loan is fully repaid."},
    {id:3, imageUrl: "/images/homepage/card23.svg", title: "High Risk", subtitle:"It means that a third party has an interest in the vehicle and is monitoring its movement within the market to prevent it from being sold without proper title."},
    {id:4, imageUrl: "/images/homepage/card24.svg", title: "Milage Anomaly", subtitle:"The mileage record is compiled from a variety of sources and presented in chronological order, including the mileage reading, date, and the source of the information. It's important to verify the mileage readings and dates by cross-checking them with the MOT certificates and service records"},
    {id:5, imageUrl: "/images/homepage/card25.svg", title: "MOT History", subtitle:"This service allows you to access a vehicle's complete MOT history by simply entering its registration number. The MOT history data provides important information about a vehicle's past MOT tests, including the test date, the test result, and any advisory or failure notices."},
    {id:6, imageUrl: "/images/homepage/card26.svg", title: "Condition/Write Off", subtitle:"We check whether a vehicle has been declared a total loss or written-off by an insurance company due to a damage or theft-related insurance claim. In the case of a damage-related insurance claim, the insurer has determined that the cost of repairing the vehicle is uneconomical."},
]

export default function SecondCard() {
  return (
    <section className='w-full'>
        <main className="mx-4 flex flex-col justify-center text-center">
            <div className="md:mx-12 lg:mx-24 trusted mt-4 flex flex-col text-center">
                <p className="font-montserrat font-medium text-sm md:text-base xl:text-lg text-ccOrange
                    leading-loose mt-4">
                    OUR PACKAGES CONTENTS
                </p>
                <h1 className="font-raleway font-medium text-lg md:text-xl lg:text-4xl">
                Whats in our car check report?
                </h1>
            </div>
            <div>
                <p className='md:mx-6 lg:mx-12 font-montserrat font-normal leading-normal text-xs md:text-base xl:text-lg tracking-wide pt-8'>
                Our full vehicle history report is the most comprehensive 
                and affordable car check service in the UK. It will help you 
                to make the right decision before buying your next used car. 
                Our full vehicle check provides everything from basic checks, 
                important checks and critical checks, which include:
                </p>
            </div>
            <div className="cards mx-4 md:mx-12 lg:mx-24 pt-12 md:pt-6 grid grid-cols-1 md:grid-cols-3 pb-8 gap-4 lg:gap-12">
                {secondCardsDetails.map((card, digit = 1) => (
                    <div 
                    key={card.id} 
                    className="card relative group justify-center rounded-md border border-gray-300 bg-white 
                                cursor-pointer transition-all duration-300 transform hover:-translate-y-2 
                                shadow-md hover:shadow-2xl"
                    >
                    {/* Soft White & Gray Glow on Hover */}
                    {/* <div className="absolute -inset-1 bg-gradient-to-b from-gray-100 via-white to-gray-200 
                                    opacity-0 group-hover:opacity-50 rounded-lg blur-lg transition-all duration-300"></div> */}

                    {/* <div className="relative z-10 bg-white rounded-md shadow-md group-hover:shadow-[0px_10px_30px_rgba(200,200,200,0.5)]"> */}
                        {/* Image Section */}
                        <div className="Image pt-4 w-full mb-4 md:mb-8 flex justify-center h-32 lg:h-48">
                        <Image 
                            src={card.imageUrl} 
                            alt="card" 
                            width={200} 
                            height={300}
                            className="w-36 md:w-48 h-auto"
                        />
                        </div>

                        {/* Text Content */}
                        <div className="p-6">
                        <h1 className="font-montserrat font-semibold text-sm md:text-base mb-3 md:mb-6 leading-2 tracking-tight">
                            {card.title}
                        </h1>
                        <p className="font-montserrat font-medium text-xs lg:text-sm">{card.subtitle}</p>
                        <div className="relative flex justify-end w-full font-raleway font-bold text-ccOrange pt-4">0{digit + 1}</div>
                        </div>
                    {/* </div> */}
                    </div>


                ))}
            </div>

            <div className="w-full text-center">
                <p className="font-raleway font-medium hover:underline text-ccOrange animate-pulse cursor-pointer">View All Car Checks</p>
            </div>
        </main>
    </section>
  )
}
