import Link from "next/link";
export default function Header() {

    return (<>
        <nav className="flex justify-between p-6 bg-[#F6FAFB] font-semibold">
            <div className="dropdown block md:hidden">
                <label tabIndex={0} className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Products</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
            </div>
            <h1 className="text-lg md:text-2xl lg:text-3xl mt-3 md:mt-0">PolygraniteSheets</h1>
            <div className="hidden md:block">
                <ul className="flex gap-4 list-none text-xl">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Products</Link></li>
                    <li><Link href="#">Contact Us</Link></li>
                </ul>
            </div>

        </nav>
    </>)
}