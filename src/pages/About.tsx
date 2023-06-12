import Background from '../assets/videos/video.mp4'

function About() {
    return (
      <>
      <div 
      style={{ backgroundImage: `url(${Background})`}} 
      className="flex flex-row justify-items-center divide-y mx-auto bg-cover bg-fixed "
      >
        <div className="grid grid-cols-1  place-items-center h-screen">
          <h3 className="p-5 bg-slate-300 bg-opacity-50 text-black rounded">About Page</h3>
          <p className="p-5 bg-slate-300 bg-opacity-50 text-black rounded">This is the Book Search Site. You are able to search for books and add them to the site. Head over to the <a href="./dashboard">Dashboard</a> and get started creating your Books.</p>
        </div>
        
      </div>
      </>
    )
  }
  
  export default About