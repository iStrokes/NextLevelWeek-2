import React from 'react'
import wppIMG from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/13594618?s=460&u=afbd54a9945bc5d061edbe307d0c993de3c9813e&v=4" alt="felipinho"/>
                <div>
                    <strong>Felipinho</strong>
                    <span>Como ser bonito</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /> <br />
                Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={wppIMG} alt="Entrar em contato pelo Whatsapp"/>
                </button>
                
            </footer>
        </article>
    )
}

export default TeacherItem;