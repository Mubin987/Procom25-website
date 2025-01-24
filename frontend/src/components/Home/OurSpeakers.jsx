import Speaker from "./Speaker"

const OurSpeakers = ()=> {

const speakers = [
    {Name: "Syed Zeeshan Ahmed", desc:"Co-Founder / CEO", img:"https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737311673/Zeeshan_Ahmed.jpg" },
    {Name: "Muhammad Hunain", desc: "Co-Founder / CTO", img:"https://res.cloudinary.com/drrz1wz3s/image/upload/v1737378874/3_o4jqsa.png"},
    {Name: "Syed Zeeshan Ahmed", desc:"Co-Founder / CEO", img:"https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737311673/Zeeshan_Ahmed.jpg" }
]


return(
        <section className='w-full flex flex-col items-center justify-center gap-2 my-12 p-4 '>
            <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>Discover the <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>PROCOM 25 </span> Guest Speakers</h1>
            <div className="flex flex-row" >
            {    
            speakers.map((s, index)=> (
             <Speaker key={index} name={s.Name} desc={s.desc} img={s.img} />
            ))
             }
            </div>
        </section>
)






}

export default OurSpeakers