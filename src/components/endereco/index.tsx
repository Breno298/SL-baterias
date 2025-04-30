import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";



export function Endereco(){
    return(
        <div className="px-4 py-10">
            <div className="text-black flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="w-full md:w-[600px] h-[300px] md:h-[450px] m-8 ">
                    <h1 className="text-center font-semibold text-white text-3xl md:text-4xl mb-4">
                        Nossa localização
                    </h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9921954676634!2d-38.49988688983768!3d-3.8117656961460424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f91ba8ef7d7%3A0xd393ed985991e93a!2sAv.%20Ministro%20Jos%C3%A9%20Am%C3%A9rico%2C%20271%20-%20Cambeba%2C%20Fortaleza%20-%20CE%2C%2060824-245!5e0!3m2!1spt-BR!2sbr!4v1743188810228!5m2!1spt-BR!2sbr"  loading="lazy" className="w-full h-full rounded-md"></iframe>
                </div>
                <div className="w-full md:w-[450px] text-white text-center md:text-left mr-20">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-18 ml-18">
                        Nosso endereço
                    </h1>
                    <div className="text-white ml-25">
                        <p className="font-semibold text-lg">Av. Ministro José Américo, 271 <br />
                        Loja 01, Parque Iracema, <br />
                        Fortaleza-CE, Cep: 60 824-245
                        </p> <br />
                        <h2 className="font-semibold text-xl ">Horário de funcionamento</h2> <br />
                        <p className="font-semibold text-lg">Seg a Sex: 06:00 ás 22:00</p>
                        <p className="font-semibold text-lg">Sábado: 06:00 ás 12:00 </p>

                        <h2 className="font-semibold text-xl">Contato</h2>

                        <p className="font-semibold text-lg">(85) 9 9212-4104</p>


                        <a target="_blank" href={`https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações`}  className="bg-green-500 flex justify-center items-center rounded-2xl  h-[40px] mt-6 text-white font-semibold text-2xl shadow-md" > 
                        <WhatsappLogo className="w-6 h-6 mt-1 mr-1"/>
                        Whatsapp</a>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}