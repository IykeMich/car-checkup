'use client'
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PostData from '@/lib/data/postData.json';

export default function BlogPost({ params }: { params: { id: string } }) {
  const article = PostData.find((post) => post.id.toString() === params.id);
  // const article = PostData.find((post) => post.id === params.id);

  if (!article) {
    return notFound(); // Show 404 page if the blog post is not found
  }

  return (
    <section className=''>
      <div className="h-1.5 bg-ccAsh w-full"></div>
      <main className="mb-16 px-4 md:px-12 lg:px-24">
        <div className="py-12 md:py-16">
          <h1 className="text-ccOrange text-2xl md:text-3xl font-bold">{article.title}</h1>
          <p className="text-gray-500 text-sm md:text-base italic mt-2">{article.date}</p>
          <div className="w-full mt-6 rounded-none overflow-hidden">
            <Image
              className="object-cover w-full h-auto md:w-[80%] md:h-[40vh] lg:h-[70vh] rounded-none"
              src={article.image1}
              alt={article.title}
              width={50}
              height={40}
            />
          </div>
          <p className="text-gray-700 text-base md:text-lg mt-6">{article.content}</p>
        </div>

        <div className="second_writeup text-start mb-6 md:mb-12">
          <h2 className="font-raleway font-medium text-xl lg:text-2xl py-2 md:pb-4">
            {article.title2}
          </h2>
          <p className="font-poppins text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
            {article.subtitle2}
          </p>
        </div>

        <div className="third_writeup text-start mb-6 md:mb-12">
          <h2 className="font-raleway font-medium text-xl lg:text-2xl py-2 md:pb-4">
            {article.title3}
          </h2>
          <p className="font-poppins text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
            {article.subtitle3}
          </p>
        </div>

        <div className="second_image mb-6 md:mb-12 w-full">
        <Image className="w-full" src={article.image2} alt={article.title[12]} width={100} height={100}/>
        </div>

        <div className="fourth_writeup text-start mb-6 md:mb-12">
          <h2 className="font-raleway font-medium text-xl lg:text-2xl py-2 md:pb-4">
            {article.title4}
          </h2>
          <p className="font-poppins text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
            {article.subtitle4}
          </p>
        </div>
        <div className="fifth_writeup text-start mb-6 md:mb-12">
          <h2 className="font-poppins font-medium text-xl lg:text-2xl py-2 md:pb-4">
            {article.title5}
          </h2>
          <p className="font-raleway text-gray-700 font-light text-sm lg:text-base md:pr-4 lg:pr-16 tracking-wide lg:tracking-normal leading-relaxed md:leading-normal">
            {article.subtitle5}
          </p>
        </div>
      </main>
    </section>
  );
}
