import {   Routes, Route } from "react-router-dom"
import Pokedex from "./page/Pokdex"
import Profile from "./profile/Profile"
import TrainerHubHome from "./page/TrainerHubHome"
const Mainsection = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<TrainerHubHome />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/profile" element={<Profile />} />

        </Routes>
    </div>
  )
}

export default Mainsection