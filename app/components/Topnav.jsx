"use client"
import { usePathname } from "next/navigation";
import Link from "next/link"

export default function Topnav() {
  const pathname = usePathname();
  return (
    <>
      <nav className="topnav">
        <Link href="/" className="topnav__heading">Data Visualization</Link>
        <div className="topnav__container">
  
 
        <Link href={"/a"} 
        className={pathname.startsWith('/a') ? "topnav__container__item topnav__container__item--active" : "topnav__container__item"}>
          Wildfire Concerns</Link>
        <Link href={"/b"} 
        className={pathname.startsWith('/b') ? "topnav__container__item topnav__container__item--active" : "topnav__container__item"}>Outreach & Education</Link>
        <Link href={"/c"} 
        className={pathname.startsWith('/c') ? "topnav__container__item topnav__container__item--active" : "topnav__container__item"}>Detection & Evacuation</Link>
        <Link href={"/d"} 
        className={pathname.startsWith('/d') ? "topnav__container__item topnav__container__item--active" : "topnav__container__item"}>Veg Management</Link>
        <Link href={"/e"} 
        className={pathname.startsWith('/e') ? "topnav__container__item topnav__container__item--active" : "topnav__container__item"}>Grants & Partnerships</Link>
        <Link href={"/f"} 
        className={pathname.startsWith('/f') ? "topnav__container__item topnav__container__item--active" : "topnav__container__item"}>Home Hardening & DSpace</Link>
        </div>
      </nav>
    </>
  )
}