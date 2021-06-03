import React from 'react'
import  './contattaci.css'


function Contattaci () {
    return (
        <div className='mar'>
        <div className="boxform">
            <h1 className='textform'>Compila il modulo per contattarci</h1>
            <form action="https://formsubmit.co/simonegigantini@hotmail.it" method="POST">
            <input type="text" name="name" placeholder="Nome Completo / Full Name" className="form1"></input>
            <div><input type="email" name="email"  placeholder="Email" className="form2"></input></div>
            <div><input type="text" name="numero"  placeholder="Telefono / Phone" className="form2"></input></div>
            <div><textarea placeholder="Scrivi qui il tuo messaggio relativo ad un eventuale prenotazione o informazione e ti risponderemo al più presto" className="form3" name="message" rows="10" required></textarea></div>
            <button className='butto1' type="submit">Invia</button>
            <div><h5 className='textform1'>In alternativa puoi contattarci telefonicamente o tramite whatsapp al numero: +393450315948 o tramite email all'indirizzo simonegigantini@hotmail.it</h5></div>
            </form>            
        </div>
        </div>
    )
}

export default Contattaci