import { Card, CardHeader, CardTitle } from "../ui/card";
import logo1 from '../../../public/image/logo-fiat.png'
import logo2 from '../../../public/image/logo-chevro.png'
import logo3 from '../../../public/image/logo-ford.png'
import logo4 from '../../../public/image/logo-jeep.png'
import logo5 from '../../../public/image/logo-nissan.png'
import logo6 from '../../../public/image/logo-toyota.png'
import Image from "next/image";

export function Cardlog(){
    return(

      <div className="container mx-auto px-10 mr-8  ">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-12  ">
          <Card className="bg-white w-[130px] h-[110px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                  <div className=" flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black select-none ">
                      <Image src={logo1} alt="logo-fiat" quality={100} style={{width:"auto",height:"auto",}}/>
                    </CardTitle>
                  </div>
                </CardHeader>
          </Card>

          <Card className="bg-white w-[130px] h-[110px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                  <div className=" flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black select-none">
                      <Image src={logo2} alt="logo-chevrolet" quality={100} style={{width:"auto",height:"auto",}}/>
                    </CardTitle>
                  </div>
                </CardHeader>
          </Card>

          <Card className="bg-white w-[130px] h-[110px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                  <div className=" flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black select-none">
                      <Image src={logo3} alt="logo-ford" quality={100} style={{width:"auto",height:"auto",}}/>
                    </CardTitle>
                  </div>
                </CardHeader>
          </Card>

          <Card className="bg-white w-[130px] h-[110px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                  <div className=" flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black select-none">
                      <Image src={logo4} alt="logo4" quality={100} style={{width:"auto",height:"auto",}}/>
                    </CardTitle>
                  </div>
                </CardHeader>
          </Card>

          <Card className="bg-white w-[130px] h-[110px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                  <div className=" flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black select-none">
                      <Image src={logo5} alt="logo5" quality={100} style={{width:"auto",height:"auto",}}/>
                    </CardTitle>
                  </div>
                </CardHeader>
          </Card>

          <Card className="bg-white w-[130px] h-[110px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] object-cover hover:scale-110 duration-300">
                <CardHeader>
                  <div className=" flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-black select-none">
                      <Image src={logo6} alt="logo6" quality={100} style={{width:"auto",height:"auto",}}/>
                    </CardTitle>
                  </div>
                </CardHeader>
          </Card>
          </div>
      </div>
      
    )
}