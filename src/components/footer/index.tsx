import logo from '../../../public/image/logo-sl-bateria.jpg'
import whatsapp from '../../../public/image/WhatsApp.svg.png'
import face from '../../../public/image/fece.png'
import insta from '../../../public/image/insta.png'
import Image from "next/image"
    

export function Footer(){
    return(
        <div className='w-full flex flex-col md:flex-row items-center md:justify-between py-10 px-12 bg-blue-800 gap-6 text-white'>
            <div className='flex flex-col items-center md/;items-star text-center md:text-left'>
                <Image src={logo} alt='logo-sl-bateria' className="w-[140px] h-[107px] mb-3 "/>
                <div className=''>
                    <p className='text-sm'>Copyright 2025 - SLbaterias S.A</p>
                    <p className='text-sm'>Todos os direitos reservados.</p>
                    <p className='text-sm'>Desenvolvido por - G2Tech</p>
                </div>
            </div>

            <div className="text-center md:text-right">
                <h1 className='text-lg font-semibold mb-2'>Nossa redes sociais</h1>
                <div className='flex justify-center md:justify-end gap-4 '>
                <Image  src={whatsapp} alt='logo-whatsapp' className='w-[50px] h-[50px] object-cover hover:scale-110 duration-300"' 
                
                /> 
                
                <Image src={face} alt='logo-facebook' className='w-[48px] h-[48px] object-cover hover:scale-110 duration-300"'/>

                <Image src={insta} alt='logo-instagram' className='w-[48px] h-[48px] object-cover hover:scale-110 duration-300" '/>
                </div>


            </div>
        </div>
    )
}