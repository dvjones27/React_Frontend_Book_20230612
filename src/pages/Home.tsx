import Background from '../assets/images/gulfer-ergin-LUGuCtvlk1Q-unsplash.jpg';
import '../assets/static/styles.css';


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
      >
        <div className="flex place-items-center h-screen">
          <h3 className="animate-text p-5 bg-white bg-opacity-95 text-black rounded">Books for All</h3>
        </div>
      </div>
  )
}

export default Home

