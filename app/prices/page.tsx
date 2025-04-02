import { Button } from "@/components/ui/button";
import Services from "../components/blog/Services";

export default function Prices() {
    return (
        <section>
            {/* <div className="h-0.5 bg-ccAsh w-full"></div> */}
                <main className="mb-16">
                    <div className="px-4 md:px-10 lg:px-24 bg-[#e2e2e22a]">
                        <div className="py-12 md:py-16">
                        <h1 className="text-ccOrange text-2xl md:text-3xl font-bold"> Simple, transparent pricing </h1>
                            <p className="text-gray-500 text-sm md:text-base italic mt-2"> No Contracts, no surprise fees </p>
                        </div>

                        <div className="pricing-sector">
                            <div className="flex mb-24 lg:mb-16 gap-3 lg:gap-6 w-full items-center justify-between flex-col md:flex-row">
                                {prices.map((item) => (
                                <div key={item.id} className="card bg-white hover:bg-ccBlue cursor-pointer 
                                    text-black hover:text-white transition duration-100 ease-in
                                    border py-8 px-12 md:px-8 lg:px-12 border-white  shadow-xl shadow-gray-200 rounded-lg">
                                    <div className="contents">
                                        <h1 className="font-montserrat font-normal text-2xl">{item.category}</h1>
                                        <h5 className="font-montserrat font-medium">{item.check} check</h5>
                                        <h2 className="font-montserrat font-semibold">£{item.price}</h2>
                                        <h2 className="font-montserrat font-normal py-3">
                                        {item.desc}
                                        </h2>

                                        <ul>
                                            {item.checks?.map((checked, index) => (
                                                <li key={index} className="flex items-center mb-2">
                                                    <span className="w-2 h-2 bg-gray-200 rounded-full mr-2"></span>
                                                    <p className="font-montserrat font-normal">{checked}</p>
                                                </li>
                                            ))}                        
                                        </ul>

                                        <p className="my-4 font-montserrat font-medium">+ Provided Checks</p>

                                        <Button className="w-full px-6 py-3 font-montserrat font-medium bg-ccOrange hover:bg-black
                                        text-base md:text-lg xl:text-xl" >Choose Plan</Button>
                                    </div>
                                </div>
                                ))}
                                
                            </div>
                        </div>

                        {/* OFFER SECTOR */}
                        <div className="offer-sector">
                            <div className="my-6">
                                <h1 className="font-raleway font-semibold text-2xl text-start">Offers and Discounts</h1>
                            </div>
                            <div className="flex gap-12  w-full items-center flex-col md:flex-row">
                                {offers.map((item, index) => (
                                <div key={index} className="relative card group bg-white hover:bg-ccBlue cursor-pointer 
                                    text-black hover:text-white transition duration-100 ease-in
                                    border py-8 px-12 md:px-8 lg:px-12 border-white  shadow-xl shadow-gray-200 rounded-lg
                                    leading-relaxed tracking-widest w-full md:w-1/3">
                                    <div className="contents">
                                        <h1 className="font-montserrat font-normal text-sm absolute
                                            right-3 top-8 text-ccBlue group-hover:text-white">+{item.discount}%</h1>
                                        <h1 className="font-montserrat font-normal text-3xl mb-1.5">£{item.price}</h1>
                                        <h5 className="font-montserrat font-medium text-xl mb-1.5">{item.check} check</h5>
                                        <h2 className="font-montserrat font-semibold mb-6 text-lg">£{item.indPrice} each</h2>

                                        <Button className="w-full px-6 py-3 font-montserrat font-medium bg-ccOrange hover:bg-black
                                        text-base md:text-lg xl:text-xl" > Buy Now </Button>
                                    </div>
                                </div>
                                ))}
                                    
                            </div>                        
                        </div>

                        <div className="mt-16 lg:mt-24 pb-4 lg:pb-8 text-center  w-full font-montserrat font-normal leading-relaxed tracking-wide">
                            <p>
                            We offer unlimited car history checks tailored for dealers and other business users who require customized solutions. Contact us to learn more.
                            </p>
                            <p className="text-ccOrange py-4">VAT is not included in the above prices.</p>

                            <Button className="mt-6 bg-ccOrange text-center py-8 w-full
                            text-base md:text-lg lg:text-4xl leading-relaxed">Redeem Prepaid Check</Button>
                        </div>
                    </div>
                    <div className="mt-24">
                        <Services />
                    </div>

                </main>
        </section>
    )
}

interface PriceContent {
    id: number;
    category: string;
    check: number
    price: number;
    desc: string;
    checks?: string[];
}

interface Offer {
    price: number;
    discount: number;
    check: number;
    indPrice: number;

}

const prices: PriceContent[] = [
    {
        id: 1, 
        category: "Intro", 
        check: 1, 
        price: 9.98, 
        desc: "New to Carcheck? get one premuim check to check your car.", 
        checks: [
            "Outstanding Finance",
            "Condition/WriteOff",
            "Police Stolen",
            "High Risk",
            "Mileage Anomaly",
            "MOT History"
        ]
    },
    {
        id: 2, 
        category: "Base", 
        check: 3, 
        price: 19.95, 
        desc: "Get Three Premium Check To Check Your Car", 
        checks: [
            "Outstanding Finance",
            "Condition/WriteOff",
            "Police Stolen",
            "High Risk",
            "Mileage Anomaly",
            "MOT History"
        ]
    },
    {
        id: 3, 
        category: "Popular", 
        check: 5, 
        price: 24.90, 
        desc: "get Five premuim check with the Family Plan to check your car.", 
        checks: [
            "Outstanding Finance",
            "Condition/WriteOff",
            "Police Stolen",
            "High Risk",
            "Mileage Anomaly",
            "MOT History"
        ]
    },
]

const offers: Offer[] = [
    {price: 65.80, discount: 91, check:20, indPrice:3.29},
    {price: 114.00, discount: 91, check:50, indPrice:2.27},
    {price: 227, discount: 91, check:100, indPrice:2.27}
]