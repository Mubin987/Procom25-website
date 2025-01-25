import { border } from "@cloudinary/url-gen/qualifiers/background"
import Speaker from "./Speaker"
import { useEffect, useState } from "react"
import axios from "axios"
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
const OurSpeakers = () => {

    const [speakers, setSpeakers] = useState([])


    useEffect(() => {
        axios.get("https://procom25-server.vercel.app/speakers")
            .then((s) => setSpeakers(s.data))
    }, [])


    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 my-12 p-4 '>
            <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>Why attend <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>PROCOM</span>?</h1>
            <p className="text-lg w-3/5 text-center">
                PROCOM features thrilling <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)]">competitions</span>, engaging <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)]">job fairs</span>, inspiring <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)]">startup showcases</span>, and insightful <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)]">panel discussions</span>.
            </p>
            <div className="w-full mx-auto justify-center items-center flex flex-col sm:flex-row gap-4">
                <div className="w-4/5 sm:w-2/5 flex flex-col gap-2">
                    <div className="flex gap-2 w-1/2 flex-1">
                        <img src="/jobfair2.jpg" alt="" className=""/>
                        <img src="/startup-showcase.jpg" alt="" className=""/>
                    </div>
                    <div className="flex gap-2 w-1/2 flex-1">
                        <img src="/competitions_.jpg" alt="" className=""/>
                        <img src="/startup2.jpg" alt="" className=""/>
                    </div>
                </div>
                <div className="w-4/5 sm:w-2/5 ">
                    <img src="/jobfair.jpg" alt="" className=""/>
                </div>
            </div>

            {/* <div className="w-full flex flex-row flex-wrap justify-center gap-4 mt-8">
                {
                    speakers.map((s, index) => (
                        <Speaker key={index} name={s.Name} desc={s.desc} img={s.img} />
                    ))
                }
            </div> */}
        </section>
    )






}

export default OurSpeakers