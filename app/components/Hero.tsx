import Image from 'next/image';
import React from 'react'
import Star from '../../public/images/star.svg'
import Link from 'next/link';
// import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa6';

const bgStyle = {
    backgroundImage: `url('/images/Hero.svg')`,
    backgroundPosititon: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const benefits = [
    {name: "Free Initial Report"},
    {name: "30k Data Guarantee"},
    {name: "24/7 Customer Care"}
  ]
export default function Hero() {
  return (
    <main className='w-full h-screen md:h-auto relative' style={bgStyle}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#45526999]/70"></div>

        {/* Contents */}
      <div className='relative pt-24 md:pt-32 pb-4 px-6 md:px-16 lg:px-36 flex flex-col items-center justify-center text-center'>
        <div className="benefits flex gap-2 md:gap-6 lg:gap-12">
            {benefits.map((benefit, index) => (
            <h4 key={index} className='inline-flex md:space-x-2 text-[9.6px] md:text-base lg:text-lg'>
                 <Image src={Star} alt='star width={50} height={50}' className='w-4'/> 
            <span className='font-montserrat font-medium text-white'> {benefit.name}</span></h4>
            ) )}
        </div>
        <h1 className='font-raleway font-semibold text-3xl md:text-4xl lg:text-5xl text-white my-12 tracking-wider'>Best Car History Check</h1>
        <h4 className='font-montserrat font-normal text-sm md:text-lg lg:text-xl text-white leading-4 tracking-wider'>
        Discover if the vehicle has been stolen, written-off, has outstanding finance, and more.
        </h4>
        {/* Enter Reg No Button */}
        <div className=" mt-8 items-center bg-[#FACD11] pr-6 rounded-full inline-flex justify-center">

          <Button className='left-0 top-0 bottom-0 h-full bg-ccBlue rounded-s-full rounded-e-none'>
            <Image src="/images/homepage/starGB.svg" alt="star" width={40} height={45} className="" />
          </Button>  
          <input type="email" placeholder="ENTER YOUR REG NO"
          className='bg-[#FACD11] !outline-none focus:!border-none !border-none h-full text-black font-semibold w-full px-4 py-3 rounded-s-lg rounded-e-none 
            placeholder:text-black placeholder:italic placeholder:text-center'
           /> 
           <Button className='bg-ccOrange rounded-full text-white'>
           <FaArrowRight className='items-center justify-center flex text-center w-2' /> 
           </Button> 
        </div>
        <div className="secondLinks flex flex-col gap-2 md:gap-4 my-12">
        <Link href='/' ><h4 className='font-montserrat font-medium text-white hover:shadow-sm hover:underline text-sm md:text-base lg:text-xl'> Redeem Voucher Code </h4> </Link>
        <Link href='/' ><h4 className='font-montserrat font-medium text-white hover:shadow-sm hover:underline text-sm md:text-base lg:text-xl'> Popular Vehicle Inspections </h4> </Link>
        <Link href='/' ><h4 className='font-montserrat font-medium text-white hover:shadow-sm hover:underline text-sm md:text-base lg:text-xl'> Sample Vehicle Inspection Report </h4> </Link>
        </div>
      </div>
    </main>
  )
}
