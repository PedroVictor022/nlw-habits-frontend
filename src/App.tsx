import "./style/global.css"
import { Habit } from './components/Habit'

function App() {
  return (
    <div className="bg-slate-600">
      <Habit completed={3}/> 
      <Habit completed={10}/>
    </div>
  )
}

export default App
