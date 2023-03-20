import styles from './Form.css'

export default function Form() {
    return (
        <section id='form'>

            <div className='txt-entrada'>
                <h3>Contate-me aqui</h3>
            </div>

            <form action="https://formsubmit.co/seuemail@email.com" method="POST">
                <div className='alinhar-div'>

                    <input type="text" name="name" aria-label="First name" className=" form-control bg-light p-2 bg-opacity-10" required placeholder='Digite seu nome' />
                    <input type="email" name="email" aria-label="E-mail" className="bg-light p-2 bg-opacity-10 form-control" required placeholder='Digite seu e-mail' />
                    <input type="tel" name="tel" aria-label="tel" className=" form-control bg-light p-2 bg-opacity-10" required placeholder='Digite seu telefone com DDD' />
                    <input type="text" name="name" className=" form-control bg-light p-2 bg-opacity-10" required placeholder='Assunto (Motivo do contato)' />
                    <textarea className="form-control bg-light p-2 bg-opacity-10" name="menssage" id="exampleFormControlTextarea1" rows="3" required placeholder='Digite a mensagem desejada'></textarea>

                    <button type="button d-flex justify-content-center submit" className="btn btnn" target="blank">Enviar</button>

                    <input type="hidden" name="_subject" value="Novo Contato!" />
                    <input type="text" name="_honey" className='display-none' />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://envio-email-por-form.vercel.app/" target="blank" />
                </div>


            </form>

        </section>
    )
}