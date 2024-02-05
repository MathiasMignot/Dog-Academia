import Link from "next/link"

export default function Contact() {


    return (
        <div>
            <aside className="contact-card">
                <div  className="div-contact-card">
                    <label htmlFor="mobile">Contactez-nous au :</label>
                    <b>
                        <button  className="btn-contact"><a id="mobile" className="font-sans" href="tel:+33769194559">+33 7 69 19 45 59  </a></button>
                    </b>
                </div>
                <div className="div-contact-card">
                    <p>ou par Mail en cliquant ici</p>
                    <b>
                        <a href="mailto: matiasmignot@gmail.com"><button className="btn-contact">Tonmail@mail.com</button></a></b>
                </div>
            </aside>
        </div>
    )

}