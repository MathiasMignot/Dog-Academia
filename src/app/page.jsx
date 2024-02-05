import Contact from "../components/Contact"
import videoBg from '../../public/Video.mp4'
import dogOrder from '../../public/dog-order.png'
import dogAgility from '../../public/dog-agility.png'
import agressiveDog from '../../public/agressive-dog.png'
import Link from "next/link"


export default function () {

    return (
        <div className="page-container">
            <video src={videoBg} autoPlay loop muted />




            <ul className="list-container">
                <Link className="link-items"  href="">
                    <li className="li-items">
                        <img className="li-image" src={dogOrder.src} alt="" />
                        <p className="li-text">Education canine</p>
                    </li>
                </Link>
                <Link className="link-items" href="">
                    <li className="li-items">
                        <img className="li-image" src={dogAgility.src} alt="" />
                        <p className="li-text">Activite et sport canin</p>
                    </li>
                </Link>
                <Link className="link-items" href="">
                    <li className="li-items">
                        <img className="li-image" src={agressiveDog.src} alt="" />
                        <p className="li-text">Troubles du comportement</p>
                    </li>
                </Link>
            </ul>
            <Contact />


        </div>


    )
}