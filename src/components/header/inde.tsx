
import logo from '../../../public/image/logo-sl-bateria.jpg'
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Header(){
    return(
        <header className="flex w-full h-auto bg-blue-900 text-white px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto max-w-7xl gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="logo"
              className="w-[120px] h-auto md:w-[140px]"
            />
          </div>
      
          {/* Botão do WhatsApp */}
          <a
            target="_blank"
            href="https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações"
            className="bg-emerald-500 px-4 py-2 rounded-md font-semibold flex items-center justify-center gap-2 text-white shadow-2xl text-sm md:text-base"
          >
            <WhatsappLogo className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-center">Entre em Contato Agora!</span>
          </a>
        </div>
      </header>
      
    )
}