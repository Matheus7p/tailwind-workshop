import { itemsCard } from "./types/items-card"
import { itemHeader } from "./types/items-header"


const headerItem: itemHeader[] =[
  { text: "Home" },
  { text: "About" },
]

const cardItem: itemsCard[] = [
  { title: "Rápido" , text: "Estilize com classes e veja o resultado imediato." },
  { title: "Responsivo" , text: "Classes responsivas tornam o design mais fácil." },
  { title: "Customizável" , text: "Adapte as classes às suas necessidades." },
]

function App() {
  return (
    <main className="flex justify-center">
      <h2 className='text-6xl text-blue-400 font-bold'>Tailwind Workshop</h2>

    </main>
  )
}

export default App
