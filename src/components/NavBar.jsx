import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

export const NavBar = () => {
  return (
    <header className="flex justify-between px-[155px] mb-2 items-center font-semibold text-sm max-h-16 fixed z-[99999] bg-white w-full">
        <picture className="flex-grow basis-0">
            <Link href="/">
                <img className="max-w-36 rounded-sm" src="/images/logo.jpg" alt="MobileHub" /> 
            </Link>
        </picture> 
        <nav>
            <ul className="flex">
                <li className="px-4 py-2 hover:bg-neutral-950 hover:text-white rounded-lg transition-colors">
                    <Link href="/">Inicio</Link>
                </li>
                <li className="px-4 py-2 hover:bg-neutral-950 hover:text-white rounded-lg transition-colors">
                    <Link href="/">Tienda Online</Link>
                </li>
                <li className="px-4 py-2 hover:bg-neutral-950 hover:text-white rounded-lg transition-colors">
                    <Link href="/">Ofertas</Link>
                </li>
                <li className="px-4 py-2 hover:bg-neutral-950 hover:text-white rounded-lg transition-colors">
                    <Link href="/">Nosotros</Link>
                </li>
                <li className="px-4 py-2 hover:bg-neutral-950 hover:text-white rounded-lg transition-colors">
                    <Link href="/">Contacto</Link>
                </li>
            </ul>
        </nav>
        <nav className="flex flex-grow basis-0 justify-end">
            <ul className="flex">
                <li className="px-4 py-2">
                    <IoSearchOutline className="text-2xl"/>
                </li>
                <li className="px-4 py-2">
                    <BsCart2 className="text-2xl"/>
                </li>
                <li className="px-4 py-2 hover:bg-violet-500 hover:text-white rounded-lg transition-colors"> 
                    <Link href="/">Iniciar Sesión</Link>
                </li>
                <li className="px-4 py-2 hover:bg-violet-500 hover:text-white rounded-lg transition-colors">
                    <Link href="/">Registrarse</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
