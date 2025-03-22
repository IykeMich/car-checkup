import React from 'react'
import {FooterValues1, FooterValues2} from '@/lib/data/footerLinks'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <section className='bg-[#fbf8ff]'>
        <main className='px-4 lg:px-12 py-6 md:py-12'>
            <div className="sectors flex flex-col gap-12 md:flex-row md:gap-0 md:space-x-4 justify-between">
                <div className="premiumChecks">
                    <h1 className='font-montserrat font-semibold text-black' >Premium Checks</h1>
                    <div className="flex flex-col gap-2 mt-6">
                        {FooterValues1.map((value) => (
                            <Link key={value.id} href={value.url}> 
                                <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>{value.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="FreeChecks">
                    <h1 className='font-montserrat font-semibold text-black' >Free Checks</h1>
                    <div className="flex flex-col gap-2 mt-6">
                        {FooterValues2.map((value) => (
                            <Link key={value.id} href={value.url}> 
                                <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>{value.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="KnowAboutUs">
                    <div className='block mb-12'>
                        <h1 className='font-montserrat font-semibold text-black' >Know About Us</h1>
                        <div className="flex flex-col gap-2 mt-6">
                                <Link href='/'> <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>Product & Prices</p> </Link>
                                <Link href='/'> <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>Frequently Asked Questions</p> </Link>
                                <Link href='/'> <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>Contact Us</p> </Link>
                        </div>
                    </div>
                    <div className='block mb-12'>
                        <h1 className='font-montserrat font-semibold text-black' >Legal Information</h1>
                        <div className="flex flex-col gap-2">
                                <Link href='/'> <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>Terms & Conditions</p> </Link>
                        </div>
                    </div>
                    <div className='block mb-12'>
                        <h1 className='font-montserrat font-semibold text-black' >Useful Link</h1>
                        <div className="flex flex-col gap-2">
                                <Link href='/'> <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>See Sample Vehicle History Report</p> </Link>
                                <Link href='/'> <p className='font-montserrat font-normal text-[9.6px] md:text-sm xl:text-base'>Redeem Prepaid Checks</p> </Link>
                        </div>
                    </div>
                    <div className='block'>
                        <h1 className='font-montserrat font-semibold text-black' >Connect with Us</h1>
                        <div className="flex gap-2">
                                <Link href='/'> <Image className='w-6 h-6' src="/images/socials/facebook.svg" alt="Facebook" width={50} height={50} /> </Link>
                                <Link href='/'> <Image className='w-6 h-6' src="/images/socials/instagram.svg" alt="Facebook" width={50} height={50} /> </Link>
                                <Link href='/'> <Image className='w-6 h-6' src="/images/socials/twitter.svg" alt="Facebook" width={50} height={50} /> </Link>
                                <Link href='/'> <Image className='w-6 h-6' src="/images/socials/youtube.svg" alt="Facebook" width={50} height={50} /> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stores text-center mx-auto">
                <h1 className='pt-8 font-montserrat font-semibold text-ccOrange text-base md:text-lg lg:text-2xl'>Download Our Mobile App</h1>
                <div className="images flex items-center space-x-6 justify-center">
                   <Link href='/'> <Image className='w-36 h-24 md:w-56 md:h-36 lg:w-80' src='images/homepage/googlePlay.svg' alt="google" width={200} height={200} /> </Link>
                   <Link href='/'> <Image className='w-36 h-24 md:w-56 md:h-36 lg:w-80' src='images/homepage/appleStore.svg' alt="apple" width={200} height={200} /> </Link>
                </div>
            </div>
        </main>
      </section>
      <section>
        <main className='px-2 md:px-20 lg:px-28 py-6 md:py-12'>
            <div className="images flex items-center justify-between">
                <div className="pwo">
                    <h1 className='text-center font-montserrat font-semibold'>Powered by</h1>
                    <Image className='w-24 h-6 md:w-52 md:h-28 lg:w-96 lg:h-9/12' src='/images/homepage/experian.svg' alt="experian" width={300} height={100} />
                </div>
                <div className="pwo">
                    <h1 className='text-center font-montserrat font-semibold'> We accept</h1>
                    <Image className='w-24 h-6 md:w-52 md:h-28 lg:w-96 lg:h-9/12' src='/images/homepage/mastercard.svg' alt="mastercard" width={400} height={300} />
                </div>
                <div className="pwo">
                    <h1 className='text-center font-montserrat font-semibold'>Secured with</h1>
                    <Image className='w-24 h-6 md:w-52 md:h-28 lg:w-96 lg:h-9/12' src='/images/homepage/azure.svg' alt="azure" width={300} height={100} />
                </div>
            </div>

            <div className="py-12">
            <h4 className='px-2 md:px-8 text-center font-montserrat font-normal leading-relaxed lg:leading-snug text-xs md:text-sm xl:text-base'>
                Milena Software Ltd, a company registered in England and Wales 
            with company number 12117374, is a VAT registered company, 
            and its VAT Registration Number is GB358417280. 
            Milena Software Ltd owns the rights to carcheckup.co.uk, 
            a product offered on this website. Please note that we use 
            cookies on this site. By continuing to browse and use this website, 
            you are consenting to our use of cookies. All product names, logos, 
            and brands featured on this website belong to their respective 
            owners and are protected by copyright laws. All rights reserved.</h4>
            </div>

            <div className="flex justify-center gap-6">
                    <Link href='/'> <Image className='w-6 h-6 md:w-12 md:h-12' src="/images/socials/facebook.svg" alt="Facebook" width={50} height={50} /> </Link>
                    <Link href='/'> <Image className='w-6 h-6 md:w-12 md:h-12' src="/images/socials/instagram.svg" alt="Facebook" width={50} height={50} /> </Link>
                    <Link href='/'> <Image className='w-6 h-6 md:w-12 md:h-12' src="/images/socials/twitter.svg" alt="Facebook" width={50} height={50} /> </Link>
                    <Link href='/'> <Image className='w-6 h-6 md:w-12 md:h-12' src="/images/socials/youtube.svg" alt="Facebook" width={50} height={50} /> </Link>
            </div>

        </main>
      </section>
    </>
  )
}
