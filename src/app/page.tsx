// import { CarouselDemo } from "@/components/carousel"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr'

import imagem1 from '../../public/image/imagem 1.png'
import imagem2 from '../../public/image/imagem2.png'
import imagem3 from '../../public/image/imagem3.png'

import Image from 'next/image'
import { Cardlog } from "@/components/cards"
import {Produtos} from "@/components/produtos"
import { Endereco } from "@/components/endereco"
import { Footer } from "@/components/footer"
import { AutoImageSlider } from "@/components/carousel"

// import { CarouselSize } from "@/components/carousel"




export default function Home(){

  const image  = [
    {
      src: "/image/sl-1.jpg",
      alt: "Slide 1",
    },
    {
      src: "/image/sl-2.jpg",
      alt: "Slide 2",
    },
    {
      src: "/image/sl-3.jpg",
      alt: "Slide 3",
    },
    {
      src: "/image/sl-4.jpg",
      alt: "Slide 4",
    },
    
  ]

  return(
    <main >

      <div className=" flex-items-center justify-center  bg-gray-100">
        <main className="container mx-auto py-4 px-2 sm:px-4 ">
          <div className="mx-auto w-full max-w-full sm:max-w-3xl ">
            <div className="w-full aspect-[16/9] sm:aspect-[16/6] ">
            <AutoImageSlider images={image} interval={5000}  className="w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden " />
            </div>
          </div>
        </main>
      </div>

      <div className="bg-blue-900 mt-2 w-full py-10 px-4">

        <h1 className="text-center font-bold text-white text-2xl sm:text-4xl mb-10">
          SL baterias tem a bateria que você precisa     
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 container mx-auto mr-14 ">
          <Card className="bg-white w-[374px] h-[203px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
              <CardHeader>
                <div className=" flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl text-black select-none">
                    <Image src={imagem1} alt="imagem1"/>
                  </CardTitle>
                </div>
                <CardDescription className="text-black flex flex-items-center justify-center">
                Selecioone o modelo de bateria para seu veiculo
                </CardDescription>
              </CardHeader>
          </Card>

          <Card className="bg-white w-[374px] h-[203px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl text-black select-none">
                  <Image src={imagem2} alt="imagem2"/>
                  </CardTitle>

                </div>
                <CardDescription className="text-black flex flex-items-center justify-center">
                Pagamento na entrega da sua bateria
                </CardDescription>
              </CardHeader>
          </Card>

          <Card className="bg-white w-[374px] h-[203px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl text-black select-none">
                  <Image src={imagem3} alt="imagem3"/>
                  </CardTitle>
                </div>
                <CardDescription className="text-black flex flex-items-center justify-center">
                A SL bateria entrga e a instalação é gratis 
                </CardDescription>
              </CardHeader>
          </Card>
      </div>

      <div className="flex items-center justify-center mt-10">
            <a target="_blank" href={`https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações`} className="bg-emerald-500 px-6 py-3 rounded-md font-semibold flex flex-items-center justify-center w-fit gap-2 text-white">
              <WhatsappLogo className="w-6 h-6"/>
              Ligue e peça agora !
            </a>
          </div>

      </div>

      <div className="bg-blue-950 px-4 py-10">
        <h1 className="text-center font-bold text-2xl sm:text-4xl text-white mb-12">
          Baterias originais de todas as marcas
        </h1>

        {/* <div className="flex flex-items-center justify-center">
          <CarouselSize/>
        </div> */}

        <div>
            <Cardlog/>
        </div>

        <div>
          <h1 className="text-center font-bold text-2xl sm:text-4xl text-white my-10">Conheça nossos produtos</h1>

          <div>
            <Produtos/>
          </div>
        </div>

        <div>
            <Endereco/>
        </div>
            <Footer/>
      </div>

    </main>
  )
}