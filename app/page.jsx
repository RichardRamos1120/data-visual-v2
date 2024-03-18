import Link from "next/link";
import Topdata from "./components/Topdata";
import BarChart from "./components/BarChart";



const chartData = {
  label: "Q3 How concerned are you about the risk of wildfires to your household?",
  labels: ['One', 'Two', 'Three', 'Four', 'Five'],
  values: [65, 59, 80, 81,100],
  type:"bar",
  backgroundColor: ['rgba(99,148,255,0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)']
};
const dataLanguage = {
  label: "Laguages",
  labels: ["English", "Spanish"],
  values: [152.5,348.5],
  type:"polarArea",
  backgroundColor: ['rgba(99,148,255,0.5)', 'rgba(54, 162, 235, 0.5)']
  
};
const dataRace = {
  label: "Race",
  labels: ['Latino', 'Asian', 'Black', 'White', 'Prefer not to answer'],
  values: [381.261, 10.02, 27.054, 58.116, 10.02],
  type:"line",
  backgroundColor: ['rgba(99,148,255,0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)']
};





export default function Home({data}) {

  
  return (
    <main className="main">
      <div className="main__left">
    
        <p className="mb-5 font-semibold tracking-wide">Data overview: wildfire, outreach, detection, vegetation, grants, partnerships, home hardening.</p>
        
        <Topdata/>


        <div className="barchartDefault mt-5"><BarChart data={chartData} className="w-96" /></div>



     </div>

      <div className="main__right">

      <h3 className="font-semibold tracking-wide">Languages, Race</h3>


      <div className="barchartDefault mt-5">
        <BarChart data={dataRace} />
      </div>
      <div className="barchartDefault mt-5">
        <BarChart data={dataLanguage} />
      </div>

      </div>
    </main>
  );
}
