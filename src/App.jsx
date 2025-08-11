import './App.css'
import Atake from './components/Atake' 
function App() {
 
  const url = "https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png"
  return (
        <div>
         <img src={url}></img>
         <Atake/>
        </div>
  )
}
 
export default App
 