'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Star from '../../../public/images/star.svg'
import slugify from 'slugify'


interface NewsArticle {
    title: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
    author?: string;
}

const newsApiKey = process.env.NEXT_PUBLIC_NEWS_API;

const benefits = [
    {name: "Free Initial Report"},
    {name: "30k Data Guarantee"},
    {name: "24/7 Customer Care"}
  ]

export default function BlogDetails() {
    const { slug } = useParams(); // Get the dynamic slug from the URL
    const [article, setArticle] = useState<NewsArticle | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=vehicles&apiKey=${newsApiKey}`);
                if (!response.ok) throw new Error('Failed to fetch news');

                const data = await response.json();

                console.log("API Response Articles:", data.articles); // Log the articles

                // Match article by URL (slug is the URL)
                // const foundArticle = data.articles.find((article: NewsArticle) =>
                //     encodeURIComponent(article.url) === slug // Match by encoded URL
                // );

                // Find the article that matches the slug
                const foundArticle = data.articles.find((article: NewsArticle) =>
                    slugify(article.title, { lower: true, strict: true }) === slug
                );

                if (!foundArticle) throw new Error("Article not found");

                setArticle(foundArticle);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unexpected error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, [slug]);

    if (isLoading) 
        return (
            <section className='flex justify-center items-center min-h-screen'>
                <p className="animate pulse duration-500 text-3xl text-orange-500 font-raleway">Loading News...</p>
            </section>
        );

    if (error) {
        return (
            <section className="flex flex-col justify-center items-center min-h-screen text-center">
                <h1 className="text-red-500 text-2xl font-bold">Oops! Something went wrong.</h1>
                <p className="text-gray-600">{error}</p>
                <Button onClick={() => window.location.reload()} className="mt-4 bg-red-500 text-white">
                    Try Again
                </Button>
            </section>
        );
    }

    return (
            <section className='pt-12 md:pt-16'>
              {/* <div className="h-0.5 bg-ccAsh w-full"></div> */}
              <main className="mb-16 px-4 md:px-12 lg:px-24">
                <div className="py-12 md:py-16">
                  <h1 className="text-ccOrange text-2xl md:text-3xl font-bold">{article?.title}</h1>
                  <p className="text-gray-500 text-sm md:text-base italic mt-2">{new Date(article?.publishedAt || "").toLocaleDateString()} {article?.author}</p>
                  <div className="flex w-full gap-6">
                    
                      <div className="section1 md:w-[60vw] lg:w-[65vw]">
                        {article?.urlToImage && ( 
                        <div className="w-full mt-6 rounded-none overflow-hidden">
                        <Image
                            className="object-cover w-full h-auto md:w-[100%] md:h-[40vh] lg:h-[70vh] rounded-none"
                            src={article?.urlToImage}
                            alt={article?.title}
                            width={600}
                            height={400}
                            priority
                            />
                        </div>
                        )}
                      <p className="text-gray-700 text-base md:text-lg mt-6">{article?.content || "Full article is not available."}</p>
                      <Link href={`${article?.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                         Read full article on source website 
                      </Link>
                    </div>
        
                    {/* OPTIONAL SECTOR */}
                    <div className="section2 hidden md:flex md:flex-col md:w-[35vw] lg:w-[20vw] mt-6">
                      <div className="bg-ccBlue">
                        <div className="pt-4 pb-6 px-3 lg:px-6">
                          <div className="block gap-2">
                          {benefits.map((benefit, index) => (
                            <h4 key={index} className='font-montserrat font-medium
                            inline-flex md:space-x-2 text-[9.6px] md:text-base'>
                                <Image src={Star} alt='star width={50} height={50}' className='w-4'/> 
                            <span className='font-montserrat font-medium text-white'> {benefit.name}</span></h4>
                          ))}
                          </div>
                          <div className="header block text-white">
                            <h1 className='text-start font-raleway font-bold md:text-lg lg:text-2xl leading-relaxed tracking-wider py-4'>Best Car History Check</h1>
                            <p className='font-normal font-montserrat text-sm xl:text-base pb-4'>
                            Discover if the vehicle has been stolen, written-off, has outstanding finance, and more.
                            </p>
                          </div>
        
                          <div className="buttons_sector block">
                            <Input className="mb-2 bg-[#FACD11] placeholder:font-medium outline-none border-none placeholder:text-black roundd-lg py-4 placeholder:text-center"  placeholder="ENTER REG NO" />
                            <Button className='w-full'>ENTER</Button>
                          </div>
                          <div className="review">
                            <Link href="#">
                            <div className="flex w-full border border-white justify-center p-4 text-sm items-center text-white mt-4 hover:bg-ccOrange hover:border-none transition duration-100 ease-in">
                              <span>Review us on</span>
                              <span className="px-2"> <Image src="/images/blog/Vector.svg" alt="star" width={15} height={10} /> </span>
                              <span> TrustPilot</span>
                            </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
              {/* 
              <div className="second_writeup text-start mb-6 md:mb-12">
    //               <h2 className="font-raleway font-medium text-2xl lg:text-2xl py-2 md:pb-4">
    //                 {article.title2}
    //               </h2>
    //               <p className="font-poppins text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
    //                 {article.subtitle2}
    //               </p>
              </div>
              <div className="third_writeup text-start mb-6 md:mb-12">
    //               <h2 className="font-raleway font-medium text-xl lg:text-2xl py-2 md:pb-4">
    //                 {article.title3}
    //               </h2>
    //               <p className="font-poppins text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
    //                 {article.subtitle3}
    //               </p>
              </div>
              <div className="second_image mb-6 md:mb-12 w-full">
    //             <Image className="w-full" src={article.image2} alt={article.title[12]} width={100} height={100}/>
              </div>
              <div className="fourth_writeup text-start mb-6 md:mb-12">
    //               <h2 className="font-raleway font-medium text-xl lg:text-2xl py-2 md:pb-4">
    //                 {article.title4}
    //               </h2>
    //               <p className="font-poppins text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
    //                 {article.subtitle4}
    //               </p>
              </div>
              <div className="fifth_writeup text-start mb-6 md:mb-12">
    //               <h2 className="font-poppins font-medium text-xl lg:text-2xl py-2 md:pb-4">
    //                 {article.title5}
    //               </h2>
    //               <p className="font-raleway text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
    //                 {article.subtitle5}
    //               </p>
              </div> 
              */}

              </main>
            </section>
    
    );
}
