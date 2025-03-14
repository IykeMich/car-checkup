import Image from 'next/image'
import React from 'react'
import CheckCarousel from '../customComponents/ChecksCarousel'

const benefits: {id:number, title:string, subtitle:string}[] = [
    {id:1, title:"The Most Affordable Car Check - Find Out Instantly", subtitle:"With our rate of just £9.95, not only are we the most affordable car check service in the UK, we provide the most reliable, cheapest car check services in the UK."},
    {id:2, title:"Access our Extensive Range of Services", subtitle:"Besides our free, industry leading car check service, Car Analytics guides you towards applying for vehicle insurance, helps you book your MOT check online, sell or buy a car, and buy your vehicle parts online."},
    {id:3, title:"Backed by Trusted Partners", subtitle:"From the DVLA, Insurance Companies, Finance Houses to the Police National Computer, MIAFTR, and other providers, we use every available, dependable source to provide you with the most comprehensive data about your vehicle."},
    {id:4, title:"Get our $30,000 Guarantee", subtitle:"For your peace of mind, we offer up to £30,000 data guarantee on each car check report we generate, under specific terms and conditions."},
    {id:5, title:"Exclusive offers for the Auto Traders", subtitle:"Enjoy the trade deal packages starting from 20 up to 100 checks where you have to pay less than £3 per vehicle check report. Receive the buyer's dashboard to acknowledge the car buyer's insights and access it at any time!"},
    {id:6, title:"Get Customer Perks", subtitle:"From free car checks to 24/7 availability, instant reports, 7-days a week support, discounts, and data guarantee, we protect our customers from all ends."},

]

export default function Benefits() {
  return (
    <section className='w-full'>
        <main className='py-12 w-full'>
            <div className="md:mx-12 lg:mx-24 trusted mt-4 flex flex-col text-center">
                <p className="font-montserrat font-medium text-sm md:text-base xl:text-lg text-ccOrange
                    leading-loose mt-4">
                    OUR PACKAGES CONTENTS
                </p>
                <h1 className="font-raleway font-medium text-lg md:text-xl lg:text-4xl">
                Whats in our car check report?
                </h1>
            </div>

            <div className="bg-[#FFE0D733]">
                <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 py-12">
                {benefits.map((benefit) => (
                    <div key={benefit.id} className="inline-flex space-x-2 items-start">
                        <div>
                            <Image src="/images/star.svg" alt="star" width={50} height={50}/>
                        </div>
                        <div className="flex flex-col space-y-2 md:space-y-3">
                            <h1 className='font-montserrat font-medium text-sm lg:text-lg'>{benefit.title}</h1>
                            <p className='font-montserrat font-light text-xs lg:text-base'>{benefit.subtitle}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="md:mx-12 lg:mx-24 trusted pt-8 md:pt-16 flex flex-col text-center">
                <h1 className="font-raleway font-medium text-lg md:text-xl lg:text-4xl">
                Buy a Car History Check for Later
                </h1>
                <p className='font-montserrat font-light leading-normal text-sm xl:text-base tracking-wide pt-8'>
                If you are considering purchasing a vehicle, it&apos;s highly recommended that you check its full history beforehand. 
                Failure to do so could result in unexpected issues such as outstanding finance, insurance write-offs, 
                condition record, police stolen, colour change, plate change which may significantly impact the vehicle&apos;s value.
                </p>
                <div className="mt-12">
                    <CheckCarousel />
                </div>
            </div>


        </main>
    </section>
  )
}
 