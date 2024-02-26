'use client'
import Link from "next/link"
import { useState, useEffect } from "react";
import { getPages } from "@/sanity/sanity-utils"


export default function Navbar() {

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const pagesData = await getPages();
        setPages(pagesData);
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    };

    fetchPages();
  }, []);
  // console.log(pages)
  return (
    <nav className="flex bg-primary-black text-white justify-center py-6">
      <div className="w-full max-w-7xl flex">
        <Link className='w-full text-2xl' href="/">
          Josh Dale
        </Link>
        <ul className="flex justify-between w-full">
          {pages.map((page, key) => (
            <li key={key}>
              <Link
                href={page.slug}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
