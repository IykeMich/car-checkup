import React from 'react'
import FAQ from '../components/customComponents/FAQ'

export default function page() {
  return (
    <section>
      <main className=" py-6 md:py-12">
        <div className='my-8 font-raleway font-semibold text-xl lg:text-4xl text-ccOrange text-center'>
            <h1>Frequently Asked Questions</h1>
        </div>
        <FAQ />
      </main>
    </section>
  )
}
