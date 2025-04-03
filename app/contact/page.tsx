import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
// import {useForm} from "react-hook-form"
// import {toast} from "react-toastify"
export default function ContactPage() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-36">
      <main className='px-4 md:px-12 lg:px-24'>
        <div className="words text-center lg:px-8">
          <h1 className="font-raleway font-semibold text-2xl lg:text-4xl text-ccOrange pb-6"> Contact Us </h1>
          <p className="font-montserrat font-normal text-base text-black pb-6"> 
            If you have any questions or require a VAT invoice, fill out the form below and one of our support agents will get back to you quickly. We&apos;re available to help you Monday through Friday between 9am and 5pm, and aim to respond to all enquiries within 24 hours.
          </p>
          <p className="font-montserrat font-medium pb-6">
            You can also contact us by sending an email to <Link href="mailto:contact@carcheckup.co.uk" className='text-[#491ED0]'>contact@carcheckup.co.uk</Link> or by calling <Link href="tel:+44 (0) 7796 431696" className='text-[#491ED0]' >+44 (0) 7796 431696</Link> during our business hours. We&apos;re here to help, so don&apos;t hesitate to get in touch!
          </p>
        </div>

        <form>
          <div className="form-sector bg-white rounded-lg shadow-lg mb-8">
            <div className="mx-8 lg:mx-36 py-12">
              <p className="font-montserrat font-normal text-2xl">Contact Form</p>
              <div className="mt-12 form-contents w-full space-y-6 md:space-y-12">
                <div className="relative bg-inherit w-full">
                  <input type="text" name="your_name" id="your_name" className={`inputCustomStyle peer`} />
                  <label htmlFor="your_name" className="labelCustomStyle" > Full Name </label>
                </div>
                <div className="relative bg-inherit w-full">
                  <input type="email" name="your_email" id="your_email" className={`inputCustomStyle peer`} />
                  <label htmlFor="your_email" className="labelCustomStyle" > Email Address </label>
                </div>
                <div className="relative bg-inherit w-full">
                  <input type="email" name="your_phone_number" id="your_phone_number" className={`inputCustomStyle peer`} />
                  <label htmlFor="your_phone_number" className="labelCustomStyle" > Phone Number </label>
                </div>
                <div className="relative bg-inherit w-full">
                  <input type="textarea" name="your_message" id="your_message" className={`inputCustomStyle peer h-36`} />
                  <label htmlFor="your_message" className="labelCustomStyle" > Message </label>
                </div>
                <div className="button-sector w-[70%]">
                  <Button className='bg-ccOrange text-white p-6 font-raleway font-normal text-xl'>
                    Contact Us
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </form>
      </main>
    </section>
  )
}
