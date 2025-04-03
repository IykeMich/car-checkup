'use client'
import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {X, Menu} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}
                className="text-ccBlue p-2 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} /> }
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{x: "100%"}} animate={{x: 0}} exit={{x: "100%"}} transition={{duration: 0.4, ease: "easeInOut"}}
                    className="fixed top-0 right-0 h-screen w-3/4 jjustify-center bg-gray-200 text-black hover:text-ccBlue p-6 shadow-lg z-50">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-ccBlue">
                            <X size={28} /> 
                        </button>

                        <nav className="flex flex-col items-center space-y-6 mt-16 text-lg">
                            {navLinks.map((item) => (
                                <Link key={item.url} href={item.url.toLowerCase()} onClick={() => setIsOpen(false)}> {item.name} </Link>
                            ))}
                        </nav>

                        <div className="button flex justify-center w-full mt-6">
                            <Button className='shadow-sm bg-ccBlue text-white
                            hover:bg-ccOrange hover:shadow-ccOrange !px-2 !my-0'>
                                <p className='font-montserrat font-medium text-base !p-0 lg:!p-4'>SIGN UP</p>
                            </Button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const navLinks: {name: string, url: string}[] = [
    {name: "Blog", url: "/blogs"},
    {name: "Prices", url: "/prices"},
    {name: "Report", url: "/report"},
    {name: "Popular Checks", url: "/popular_checks"},
    {name: "Contact us", url: "/contact_us"},
]