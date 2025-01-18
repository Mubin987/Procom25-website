import { ExcomFrame } from "./ExcomFrame"


export const FlexibleGrid = ({frameInARow, list}) => {

return(
    <div style={{display: "grid",gridTemplateColumns: `repeat(${frameInARow}, 1fr)`,gap: "20px",justifyContent: "center",marginTop: "30px", border: "3px solid black"}}>
    {list.map((item, index) => (
      <ExcomFrame id={index} name={item.name} role={item.title} img={item.imgSrc} />
    ))}
    </div>

)

}