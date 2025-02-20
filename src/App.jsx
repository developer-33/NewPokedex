
import Mainsection from './Mainsection'
import Navbar from './components/Navbar'
const App = () => {

  const handleSearch = (query) => {
    console.log("Search Query:", query);
  }

  return (
   <div className='bg-gray-950 min-h-screen text-white'>

<Navbar onSearch={handleSearch} />
   <Mainsection />
  
    </div>
  )
}

export default App