import styles from './Form.css'

export default function Form() {
    return (
        <section id='form'>

            <div className='txt-entrada'>
                <h3 className='txt-form text-center'>Entre em contato com a minha equipe por aqui</h3>
            </div>

            <form action="https://formsubmit.co/assessoriapriscilacruz@gmail.com" method="POST">
                <div className='alinhar-div'>

                    <input type="text" name="name" aria-label="First name" className=" form-control txt-font-input" required placeholder='Digite seu nome' />
                    <input type="email" name="email" aria-label="E-mail" className="txt-font-input form-control" required placeholder='Digite seu e-mail' />
                    <input type="tel" name="tel" aria-label="tel" className=" form-control txt-font-input" required placeholder='Digite seu telefone com DDD' />
                    <input type="igreja-organizacao" name="text" aria-label="text" className=" form-control txt-font-input" required placeholder='Nome da Igreja ou organização' />
                    <input type="nome-do-evento" name="text" aria-label="text" className=" form-control txt-font-input" required placeholder='Nome do evento' />
                    <input type="local-evento" name="text" aria-label="text" className=" form-control txt-font-input" required placeholder='Local do evento' />
                    <textarea className="form-control txt-font-input" name="menssage" id="exampleFormControlTextarea1" rows="3" required placeholder='Digite a mensagem desejada'></textarea>

                    <button type="button d-flex justify-content-center submit" className="btn btnn" target="blank">Enviar</button>

                    <input type="hidden" name="_subject" value="Novo Contato!" />
                    <input type="text" name="_honey" className='display-none' />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://priscila-cruz.vercel.app/" target="blank" />
                </div>


            </form>

        </section>
    )
}