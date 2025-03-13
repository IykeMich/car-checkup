import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const cards: {id:number,  imageUrl: string, title: string, subtitle: string}[] = [
    { id:1, imageUrl: "/images/homepage/card1.svg", title: "Our Car Checks", subtitle: "Our Car Checks 50+ checks are performed including stolen check(Police & insurance) Written off vehicle check outstanding finance check mot history records all plates changes"  },
    { id:2, imageUrl: "/images/homepage/card2.svg", title: "$30,000 Data Guarantee", subtitle: "Our Gold Check with a 30,000 data Guarantee. so you’re in safe hands. we’ve got you covered, every time you check a vehicle"  },
    { id:3, imageUrl: "/images/homepage/card3.svg", title: "Our Customers rate us Highly", subtitle: "Over 50,000+ratings across all platforms. a 4.9 overall satisfaction rating. 5 star excellence award winner"  }
]
const starredMessages: {id: number, text: string}[] = [
    {id:1, text: "In the last two years (2020 and 2021), there were 143,888 vehicles reported as stolen. It is important to remember that purchasing a stolen vehicle is illegal and if caught, the police may seize the vehicle from you."},
    {id:2, text: "1 in 7 vehicles checked on CarCheckUp have been written off by an insurance company"},
    {id:3, text: "1 in 6 vehicles checked on CarCheckUp have outstanding finance recorded against them? If you buy a car with outstanding finance, the finance company may repossess it from you."},
    {id:4, text: "1 in 16 vehicles checked on CarCheckUp in 2021 had a mileage anomaly, which is equivalent to around 6.6% of vehicles."},

]

export default function FirstCards() {
    return (
        <section className="w-full flex flex-col"> 
            <main className=" mt-16 items-center justify-center text-center">
                <div className="verify flex justify-center items-center space-x-8">
                   <Link href="/"> <Image src="/images/homepage/experian.svg" alt="experian" width={100} height={100} 
                    className="md:w-48 lg:w-80" /> </Link>
                   <Link href="/"> <Image src="/images/homepage/trustpilot.svg" alt="experian" width={100} height={100} 
                    className="md:w-48 lg:w-80" /> </Link>
                </div>
                <div className="mx-12 md:mx-24">
                    <div className="trusted mt-4 md:mt-8">
                        <h1 className="font-raleway font-medium text-base md:text-lg lg:text-4xl">
                        Trusted by Millions: Your Top Car History Check Destination
                        </h1>
                        <p className="font-montserrat font-medium text-sm md:text-base xl:text-lg text-ccOrange
                        leading-loose mt-4">
                            WHY PEOPLE TRUST US
                        </p>
                    </div>
                    <div className="cards pt-12 md:pt-6 grid grid-cols-1 md:grid-cols-3 justify-center pb-8 gap-4">
                        {cards.map((card) => (
                            <div key={card.id} className="card justify-center rounded-md border border-gray-400 hover:border-ccOrange cursor-pointer">
                                <div className="Image pt-4 w-full mb-4 md:mb-8 flex justify-center h-32 lg:h-48">
                                    <Image src={card.imageUrl} alt="card" width={200} height={300}
                                        className="w-36 md:w-64 h-auto"/>
                                </div>
                                <div className="p-6">
                                <h1 className="font-montserrat font-semibold text-sm md:text-lg mb-3 md:mb-6 leading-2 tracking-tight">{card.title}</h1>
                                <p className="font-montserrat font-medium text-xs lg:text-base">{card.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="trusted mt-4 md:mt-8">
                        <p className="font-montserrat font-medium text-sm md:text-base xl:text-lg text-ccOrange
                            leading-loose mt-4">
                            TESTED AND GUARANTEED
                        </p>
                        <h1 className="font-raleway font-medium text-base md:text-lg lg:text-4xl">
                            Why you should Check your Car with Us
                        </h1>
                    </div>
                </div>
                <div className="lists mx-4 md:mx-24 pt-6 md:pt-12 block space-y-6">
                    {starredMessages.map((message) => (
                    <div key={message.id} className="flex justify-start items-start gap-4">
                        <Image src="/images/star.svg" alt="star" width={20} height={20} />
                        <p className="font-montserrat font-normal leading-loose tracking-wider text-start text-xs md:text-sm lg:text-base">{message.text}</p>
                    </div>
                    ))}
                </div>
                <div className="redeem-button mx-2 md:mx-16 space-x-2 flex justify-around my-12">
                    <Button className="bg-ccOrange hover:bg-black text-xs md:text-base lg:text-2xl py-4 lg:py-8 px-2 md:px-4 text-white font-raleway font-medium">
                        <p className="">Redeem a Prepaid Check</p></Button>
                    <Button className="bg-ccOrange hover:bg-black text-xs md:text-base lg:text-2xl py-4 lg:py-8 px-2 md:px-4 text-white font-raleway font-medium">
                        <p className="">Update an Existing CarCheck</p></Button>
                </div>
            </main>
        </section>
    )
}


