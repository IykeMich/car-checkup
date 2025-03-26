import Image from 'next/image'
import React from 'react'
import PostData from "../../lib/data/postData.json"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Blog() {
  return (
    <section className='mb-16'>
      <div className='h-1.5 bg-ccAsh w-full' ></div>
      <main className='px-4 md:px-12 lg:px-24'>
        <div className="recent-posts pt-8 md:pt-16 pb-6 md:pb-12 lg:pb-24">
            <h1 className='pb-12 text-center text-ccOrange font-normal text-base lg:text-xl'>Recent Posts</h1>
            <div className="the-posts flex flex-col md:flex-row gap-6 md:gap-0 md:space-x-6">
                <div className="cursor-pointer rounded-2xl md:rounded-3xl inline-flex flex-col border">
                    <div className="image w-full">
                        <Image className='w-full h-full' src="images/blog/blog1.svg" alt="article" width={300} height={100} />
                    </div>
                    <div className="description p-4 text-start">
                        <p className='text-ccOrange font-montserrat font-medium text-sm lg:text-base pb-1'>Covid 19 import on values</p>
                        <p className='text-gray-400 font-montserrat font-ligjt text-xs lg:text-sm'>August 10, 2023</p>
                    </div>
                </div>
                <div className="cursor-pointer rounded-2xl md:rounded-3xl inline-flex flex-col border">
                    <div className="image w-full">
                        <Image className='w-full h-full' src="images/blog/blog2.svg" alt="article" width={300} height={100} />
                    </div>
                    <div className="description p-4 text-start">
                        <p className='text-ccOrange font-montserrat font-medium text-sm lg:text-base pb-1'>Covid 19 import on values</p>
                        <p className='text-gray-400 font-montserrat font-ligjt text-xs lg:text-sm'>August 10, 2023</p>
                    </div>
                </div>
                <div className="cursor-pointer rounded-2xl md:rounded-3xl inline-flex flex-col border">
                    <div className="image w-full">
                        <Image className='w-full h-full' src="images/blog/blog3.svg" alt="article" width={300} height={100} />
                    </div>
                    <div className="description p-4 text-start">
                        <p className='text-ccOrange font-montserrat font-medium text-sm lg:text-base pb-1'>Covid 19 import on values</p>
                        <p className='text-gray-400 font-montserrat font-ligjt text-xs lg:text-sm'>August 10, 2023</p>
                    </div>
                </div>                
            </div>
        </div>
        <div className='article'>
            <h1 className="text-center text-ccBlue text-montserrat font-medium py-12 text-2xl md:text-3xl"> Article </h1>
            <div className="articles flex flex-col gap-12 md:gap-0">
                {PostData.map((article) => (
                    
                    <div key={article.id}  className="an_article flex flex-col md:flex-row mb-12">
                        <div className="image_section flex w-full h-[100%] md:w-[100%] rounded-sm overflow-hidden">
                            <Link href={`/blog/${article.id}`}>
                            <Image className='object-cover w-[100%] h-[100%] overflow-hidden' src={article.image} alt="article image" width={400} height={400} />
                            </Link>
                        </div>
                        <div className="text_section text-start block md:ml-4 mt-4 md:mt-0">
                            <h1 className="text-ccOrange font-medium font-raleway line-spacing-[2%] text-base md:text-lg lg:text-2xl pb-2 md:pb-4">{article.title}</h1>
                            <p className='font-montserrat font-light text-[9.2px] md:text-xs lg:text-sm italic'>{article.date}</p>
                            <h4 className="content font-montserrat font-light tracking-wide text-xs md:text-sm py-2 md:py-4">
                                {article.content}
                            </h4>
                            <Button className='text-center rounded-full border border-ccOrange bg-white text-black hover:text-ccOrange hover:bg-white
                            text-xs md:text-sm lg:text-base'> Read More </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </section>
  )
}
