import Topdata from "../components/Topdata";
import fetchCsv from "../components/FetchCsv";
import BarChart from "../components/BarChart";
import Link from "next/link";




async function getData () {
  

  
  const data = await fetchCsv();
  return data;

}

export default async function a() {



  // ans for one,two,three,four,five
  let currentQuestionChoice = "/a/q3"
  let questionsChoice = [
    "Q3 How concerned are you about the risk of wildfires to your household? Scale of 1 to 5",
    "Q12 How concerned are you about getting or keeping wildfire insurance? Scale of 1 to 5",
    "Q13 Do you have a concern not previously listed about wildfire risk to your household?",
  ]
  let questions = ["one","two","three","four","five"]
  let answers = [0,0,0,0,0]
  const data = await getData();

  const q3 = data.map((q)=> q.Q3)
  q3.map(q=>{
    if (Number(q) === 1) answers[0]++;
    if (Number(q) === 2) answers[1]++;
    if (Number(q) === 3) answers[2]++;
    if (Number(q) === 4) answers[3]++;
    if (Number(q) === 5) answers[4]++;
  })

  

  const chartData = {
    label: questionsChoice[0],
    labels: questions,
    values: answers,
    type:"bar",
    backgroundColor: ['rgba(99,148,255,0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)']
  };

  const currentQuestionChoiceUpdater = (q) =>{
    currentQuestionChoice = `/a/${q}`;
    console.log(q)

  }

  const currentDate = new Date().toLocaleDateString();
  const dataLanguage = {
    label: "Laguages",
    labels: ["English", "Spanish"],
    values: [152.5,348.5],
    type:"polarArea",
    backgroundColor: ['rgba(99,148,255,0.5)', 'rgba(54, 162, 235, 0.5)']
  }




  return (
    <main className="main main main-test">
      
     
     <div className="main__left">

<div className="main__left__question-top"><img src="/material-symbols_list.svg" alt="icon" />Question List</div>
<div className="question-list-container mt-5">
{questionsChoice.map( (q,index)=> <Link key={index} className={index === 0 ? "btn-question-item btn btn--active" : "btn btn-question-item"} onClick={currentQuestionChoiceUpdater(index)} href={currentQuestionChoice} >{q}</Link> ) }
</div>



    </div>

      <div className="main__right">
      <div class="data-overview"><h2>Data Overview</h2> <p>{currentDate}</p></div>
     
      <Topdata/>


      <div className="main__right_charts">
          <div className="main__right_charts__item main__right_charts__item--primary">
            <BarChart data={chartData} className="w-96 " />
          </div>

          <div className="main__right_charts__item main__right_charts__item--language">
          <BarChart data={dataLanguage} />
          </div>
      </div>



      </div>
    </main>
  );
}
