import DataTable from '../components/DataTable'
import Background from '../assets/images/nick-fewings-f2Bi-VBs71M-unsplash.jpg';

function Dashboard() {
  return (
   
    
    <div 
      style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-fixed bg-opacity-50 bg-cover"
      >
        <div className="flex place-items-center h-screen" >
          <h3 className="p-5 bg-slate-300 bg-opacity-70 text-black rounded">
            <DataTable/>
          </h3>
        </div>
      </div>
  )
}

export default Dashboard