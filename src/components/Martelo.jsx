import Original from "./Original"
 
function Martelo (){
    const url = "https://preview.redd.it/i-feel-as-if-moontoon-lost-a-big-opportunity-with-the-aot-v0-fudlk8axrxec1.png?width=640&crop=smart&auto=webp&s=044f6880e8185727b6dc19b269b33b9094e80783"
 
    return (

        <div>
         <h1>Titã Martelo</h1>
         <img src={url}></img>
         <Original/>
        </div>
 
  )
}
 
export default Martelo