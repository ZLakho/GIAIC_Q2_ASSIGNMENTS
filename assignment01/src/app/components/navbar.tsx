import Link from "next/link"

const Nav = () => {
    return(
        
            <div className="w-full h-20 bg-red-700 text-4xl text-bold font-bold text-center space-x-24 p-3.5 ">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/projects">Projects</Link>
            </div>
        
    )
}
export default Nav