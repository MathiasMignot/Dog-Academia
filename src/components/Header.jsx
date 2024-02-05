import logo from "../../public/logo-dog-academia .png"
import Link from "next/link"
import Image from "next/image"

export default function Header(){

    return (
        <div className="header-container">
   <Link href='/' > <Image  className="logo-header" src={logo} alt="Logo de Dog academia" /></Link>
   <div className="title-container">
    <h1 className="title-header">Dog Academia Cevennes</h1>
        <h2 className="subtitle-header"> Educateur Comportementaliste canin</h2>
    
    </div>

    </div>
    )
}