import { itemsCard } from "./types/items-card"
import { itemHeader } from "./types/items-header"


const headerItem: itemHeader[] =[
  { text: "Home" },
  { text: "About" },
]

const cardItem: itemsCard[] = [
  { title: "Rápido" , text: "Estilize com classes e veja o resultado imediato.", imgUrl: "/src/assets/fast-develop.webp"},
  { title: "Responsivo" , text: "Classes responsivas tornam o design mais fácil.", imgUrl: "/src/assets/responsive.png"},
  { title: "Customizável" , text: "Adapte as classes às suas necessidades.", imgUrl: "/src/assets/custom.png"},
]


function App() {
  return (
    <main className="space-y-4">
      <h2 className="text-6xl text-blue-400 font-bold">Tailwind Workshop</h2>

    </main>
  )
}

export default App
