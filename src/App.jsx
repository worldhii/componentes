import './App.css'
import './components/Atake'
function App() {
 
 
  const url = "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png"
  return (
    <>
        <div>
         <h1>Meu primeiro Componente </h1>
         <img src={url}></img>
         <Atake/>
        </div>
    </>
  )
}
 
export default App
 