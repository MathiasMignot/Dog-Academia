
export default function Mail(){


return(
    <div>
        H
        <form className="mail-form"  action="post">
            <label htmlFor="object">Objet du mail</label>
            <input type="text" id="object" placeholder="Object du mail"/>
            <label htmlFor="mailContent">Votre message</label>
            <textarea name="mailContent" id="mailContent" cols="30" rows="10"></textarea>

        </form>
    </div>
)

}