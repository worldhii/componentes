import Carroça from "./Carroça"
 
function Blindado (){
   const url = "https://res.cloudinary.com/dolv3ryun/image/upload/v1732124651/dejjioy-cc9f318a-4ed3-4a53-9b00-a1f9859480ab_fv6vcx.webp"
    return (
   
        <div>
          <h1>Titã Blindado</h1>
         <img src={url}></img>
         <Carroça/>
        </div>
    
  )
}
 
export default Blindado