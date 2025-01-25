import TextwithImge from "../Commons/TextwithImage"
import Heading3 from "../Commons/Heading3"

const PanelDiscussion = ({black1, blue, black2, text, image})=> {

return(
    <section className='w-full flex flex-col items-center justify-center gap-2 my-7 p-4'>
        <Heading3 black1={black1} blue={blue} black2={black2} />
        <div className="w-3/4 mt-12 flex justify-center items-center gap-8 flex-col md:flex-row">
            <TextwithImge text={text} image={image} />
        </div> 
    </section>

)
}

export default PanelDiscussion