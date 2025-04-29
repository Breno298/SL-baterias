import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import bat1 from '../../../public/image/bat-heliar.webp'
import bat2 from '../../../public/image/bat-america.webp'
import bat3 from '../../../public/image/bat-moura.jpg'
import bat4 from '../../../public/image/bat-zetta.webp'
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";


export function Produtos(){
    return(
        <div className="grid grid-cols-1 md:ml-12 sm:grid-cols-2 lg:grid-cols-4  gap-8 px-12">
            <Card className="bg-white w-[287px] h-[369px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                    <div className=" flex items-center justify-center">
                        <CardTitle className="text-lg sm:text-xl text-black select-none">
                        <Image src={bat1} alt="bat-heliar"/>
                        </CardTitle>
                    </div>
                <CardDescription className="text-black font-bold text-[30px] flex flex-items-center justify-center">
                    Heliar
                </CardDescription>
                <h2 className="flex flex-items justify-center font-semibold text-xl mt-2 underline shadow-shadow-[0px_10px_40px_rgba(0,0,0,0.2)">Entre em contato</h2>    
                <a target="_blank" href={`https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações`}  className="bg-green-500 flex justify-center rounded-2xl h-[40px] mt-8 text-white font-semibold text-2xl shadow-md" > 
                <WhatsappLogo className="w-7 h-7 mt-1 mr-1"/>
                Whatsapp</a>
                </CardHeader>
            </Card>

            <Card className="bg-white w-[287px] h-[369px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                    <div className=" flex items-center justify-center">
                        <CardTitle className="text-lg sm:text-xl text-black select-none">
                        <Image src={bat2} alt="bat-america" className="w-[150px] h-[150px]"/>
                        </CardTitle>
                    </div>
                <CardDescription className="text-black font-bold text-[30px] flex flex-items-center justify-center">
                    America
                </CardDescription>
                <h2 className="flex flex-items justify-center font-semibold text-xl mt-2 underline shadow-shadow-[0px_10px_40px_rgba(0,0,0,0.2)">Entre em contato</h2>    
                <a target="_blank" href={`https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações`}  className="bg-green-500 flex justify-center rounded-2xl h-[40px] mt-8 text-white font-semibold text-2xl shadow-md">
                <WhatsappLogo className="w-7 h-7 mt-1 mr-1"/>
                Whatsapp</a>
                </CardHeader>
            </Card>

            <Card className="bg-white w-[287px] h-[369px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                    <div className=" flex items-center justify-center">
                        <CardTitle className="text-lg sm:text-xl text-black select-none">
                        <Image src={bat3} alt="bat-moura" className="w-[150px] h-[150px]"/>
                        </CardTitle>
                    </div>
                <CardDescription className="text-black font-bold text-[30px] flex flex-items-center justify-center">
                    Moura
                </CardDescription>
                <h2 className="flex flex-items justify-center font-semibold text-xl mt-2 underline shadow-shadow-[0px_10px_40px_rgba(0,0,0,0.2)">Entre em contato</h2>    
                <a target="_blank" href={`https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações`}  className="bg-green-500 flex justify-center rounded-2xl h-[40px] mt-8 text-white font-semibold text-2xl shadow-md">
                <WhatsappLogo className="w-7 h-7 mt-1 mr-1"/>
                Whatsapp</a>
                </CardHeader>
            </Card>

            <Card className="bg-white w-[287px] h-[369px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                    <div className=" flex items-center justify-center">
                        <CardTitle className="text-lg sm:text-xl text-black select-none">
                        <Image src={bat4} alt="bat-zetta" className="w-[150px] h-[150px]"/>
                        </CardTitle>
                    </div>
                <CardDescription className="text-black font-bold text-[30px] flex flex-items-center justify-center">
                    Zetta
                </CardDescription>
                <h2 className="flex flex-items justify-center font-semibold text-xl mt-2 underline shadow-shadow-[0px_10px_40px_rgba(0,0,0,0.2)">Entre em contato</h2>    
                <a target="_blank" href={`https://wa.me/5585984080659?text=Olá vim pelo site e gostaria de mais informações`}  className="bg-green-500 flex justify-center rounded-2xl h-[40px] mt-8 text-white font-semibold text-2xl shadow-md">
                <WhatsappLogo className="w-7 h-7 mt-1 mr-1"/>
                Whatsapp</a>
                </CardHeader>
            </Card>

          
        </div>

    )
}