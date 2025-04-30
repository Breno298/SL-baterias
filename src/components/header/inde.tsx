
import logo from '../../../public/image/logo-sl-bateria.jpg'
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Header(){
    return(
        <header className="flex w-full h-[155px] bg-blue-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>
                     <Image src={logo} alt="logo" className="w-[140px] h-[107px]"/>
                </div>

                <a target="_blank" href={`https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações`} className="bg-emerald-500 px-6 py-3 rounded-md font-semibold flex flex-items-center justify-center w-fit gap-2 text-white shadow-2xl">
                <WhatsappLogo className="w-6 h-6"/>
                    Entre em Contato Agora !
                </a>
              
            </div>
        </header>
    )
}