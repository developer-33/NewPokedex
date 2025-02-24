import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PokemonModal = ({ isOpen, onClose, pokemon }) => {
  if (!isOpen) return null;

  const latestForms = [
    { name: "Charizard", img: "/images/charizard.png" },
    { name: "Blastoise", img: "/images/blastoise.png" },
    { name: "Venusaur", img: "/images/venusaur.png" },
  ]; // Replace with real Pokémon data

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{pokemon.name}</h2>
        
        <Slider {...settings}>
          {latestForms.map((poke, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={poke.img} alt={poke.name} className="w-48 h-48"/>
              <p className="mt-2">{poke.name}</p>
            </div>
          ))}
        </Slider>

        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default PokemonModal;