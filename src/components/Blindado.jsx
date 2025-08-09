import Carroça from "./Carroça"
 
function Blindado (){
    const url = "https://static.wikia.nocookie.net/animeverso/images/c/c9/ReinerArmadura.png/revision/latest?cb=20240406002626&path-prefix=pt-br://www.pngplay.com/wp-content/uploads/12/Attack-Titan-Eren-PNG-Pic-Background.png"
 
    return (
    <>
        <div>
         <h1>Titã de Atake</h1>
         <img src={url}></img>
         <Carroça/>
        </div>
    </>
  )
}
 
export default Blindado