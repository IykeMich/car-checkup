import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
// import { NavLink } from '@/lib/types'

export default function Navbar() {

    const navLinks: { name: string; url: string }[] = [
        { name: "Blog", url: "/Blog" },
        { name: "Prices", url: "/Prices" },
        { name: "Report Samples", url: "/Sample" },
        { name: "Popular Checks", url: "/popular_checks" },
        { name: "FAQ", url: "/FAQ" },
        { name: "Contact Us", url: "/Contact" }
    ];
    

    return (
        <>
        <main className="w-full">
            <div className="md:flex items-center justify-between md:p-8 xl:px-12">
                {/* Logo */}
                <div className="Logo">
                   <Link href="/"> <Image className='w-24 md:w-32 lg:w-40' 
                   src={Logo} alt="Logo" width={200} height={200} /></Link>
                </div>
                {/* NavLinks */}
                <div className="navLinks flex gap-3 lg:gap-6 xl:gap-12">
                    {navLinks.map((nav, index) => (
                        <Link key={index} href={nav.url}
                        className='font-montserrat font-normal text-sm lg:text-lg
                        hover:text-ccOrange hover:underline ease-in animate duration-100'>{nav.name}</Link>
                    ))}
                </div>
                {/* Login Button */}
                <div className="button">
                    <Button className='shadow-sm bg-ccBlue text-white
                    hover:bg-ccOrange hover:shadow-ccOrange'>
                        <p className='font-montserrat font-medium !text-sm  lg:text-2xl !p-0 lg:!p-4'>SIGN UP</p>
                    </Button>
                </div>
            </div>
        </main>
        </>
    )
}