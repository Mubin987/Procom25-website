import { border } from "@cloudinary/url-gen/qualifiers/background"
import Speaker from "./Speaker"
import { useEffect, useState } from "react"
import axios from "axios"

const OurSpeakers = () => {

    const [speakers, setSpeakers] = useState([])


    // useEffect(() => {
    //     axios.get("https://procom25-server.vercel.app/speakers")
    //         .then((s) => setSpeakers(s.data))
    // }, [])


    return (
        <section className='w-full flex flex-col items-center justify-center gap-2 my-12 p-4 '>
            <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>Why attend <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>PROCOM</span>?</h1>
            <div className="w-full flex flex-row flex-wrap justify-center gap-4 mt-8">
                {
                    speakers.map((s, index) => (
                        <Speaker key={index} name={s.Name} desc={s.desc} img={s.img} />
                    ))
                }
            </div>
        </section>
    )






}

export default OurSpeakers