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

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
      </ul>
    </nav>
  );
}
