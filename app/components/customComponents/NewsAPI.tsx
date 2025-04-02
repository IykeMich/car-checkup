'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import slugify from 'slugify';

interface NewsArticle {
    id: string;
    title: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
    author?: string;
}

const newsApiKey = process.env.NEXT_PUBLIC_NEWS_API;

export default function NewsAPI() {
    const [news, setNews] = useState<NewsArticle[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=car&apiKey=${newsApiKey}`)
                if (!response.ok) throw new Error('Failed to fetch news');
                const data = await response.json();
                console.log("News API Key:", process.env.NEXT_PUBLIC_NEWS_API);


                const SortedNews: NewsArticle[] = (data.articles || [])
                .filter((article: NewsArticle) => article.publishedAt)
                .sort((a: { publishedAt: string | number | Date; }, b: { publishedAt: string | number | Date; }) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

                setNews(SortedNews);
                // setNews(data.articles || [])
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
                setError(errorMessage);
            } finally {
                setIsLoading(false)
            }
        };
        fetchNews();
    }, [])

    if (isLoading) {
        return (
            <section className='flex justify-center items-center min-h-screen'>
                <p className="animate pulse duration-500 text-3xl text-orange-500 font-raleway">Loading News...</p>
            </section>
        );
    }

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
        <section>
        <div>
        {news.slice(0, 5).map((article, index) => (
                        
                        <div key={index}  className="an_article flex flex-col md:flex-row mb-12">
                            <div className="image_section flex w-full h-[100%] md:w-[100%] rounded-sm overflow-hidden">
                                {/* <Link href={`/blog/${encodeURIComponent(article.url)}`} passHref> */}
                                <Link href={`/blog/${slugify(article.title, { lower: true, strict: true })}`} passHref>
                                <Image className='object-cover w-[100%] h-[100%] overflow-hidden' src={article.urlToImage || '/images/blog/article1.svg'} alt="article image" width={400} height={400} />
                                </Link>
                            </div>
                            <div className="text_section text-start block md:ml-4 mt-4 md:mt-0">
                                <h1 className="text-ccOrange font-medium font-raleway line-spacing-[2%] text-base md:text-lg lg:text-2xl pb-2 md:pb-4">{article.title}</h1>
                                <p className='font-montserrat font-light text-[9.2px] md:text-xs lg:text-sm italic'>{new Date(article.publishedAt).toLocaleDateString()} ___ {article.author}</p>
                                <h4 className="content font-montserrat font-light tracking-wide text-xs md:text-sm py-2 md:py-4">
                                    {article.content || 'No content available.'}
                                </h4>
                                {/* <Link href={`/blog/${encodeURIComponent(article.url)}`} passHref> */}
                                <Link href={`/blog/${slugify(article.title, { lower: true, strict: true })}`} passHref>
                                    <Button className='text-center rounded-full border border-ccOrange bg-white text-black hover:text-ccOrange hover:bg-white
                                        text-xs md:text-sm lg:text-base'> Read More </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
        </div>
        </section>
    )
    }
