'use client'
import React, { useEffect, useState } from 'react'
import { NavLink, NavLinksData } from '@/lib/types'
import Link from 'next/link';


const NavLinksComponent = () => {
    const [navLinks, setNavLinks] = useState<NavLink[]>([]);
    useEffect(() => {

        const fetchNavLinks = async () => {
            const res = await fetch('/navlinks.json');
            const data: NavLinksData = await res.json();
            setNavLinks(data.navLinks)
        };

        fetchNavLinks();
    }, [])
  return (
    <nav>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.url}>{link.name}</Link>
      ))}
    </nav>
  )
}

export default NavLinksComponent

