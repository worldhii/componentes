import Colossal from "./Colossal"
 
function carroça (){
    const url = "https://static.wikia.nocookie.net/animeverso/images/6/63/CartTitanRender.png/revision/latest/scale-to-width-down/500?cb=20240405234335&path-prefix=pt-br://www.pngplay.com/wp-content/uploads/12/Attack-Titan-Eren-PNG-Pic-Background.png"
 
    return (
    <>
        <div>
         <h1>Titã Carroça</h1>
         <img src={url}></img>
         <Colossal/>
        </div>
    </>
  )
}
 
export default carroça