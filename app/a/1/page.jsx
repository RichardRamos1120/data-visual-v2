import Topdata from "@/app/components/Topdata";
import fetchCsv from "@/app/components/FetchCsv";
import BarChart from "@/app/components/BarChart";
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

  const q3 = data.map((q)=> q.Q12)
  q3.map(q=>{
    if (Number(q) === 1) answers[0]++;
    if (Number(q) === 2) answers[1]++;
    if (Number(q) === 3) answers[2]++;
    if (Number(q) === 4) answers[3]++;
    if (Number(q) === 5) answers[4]++;
  })
  

  const chartData = {
    label: questionsChoice[1],
    labels: questions,
    values: answers,
    type:"bar",
    backgroundColor: ['rgba(99,148,255,0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)']
  };

  const currentQuestionChoiceUpdater = (q) =>{
    currentQuestionChoice = `/a/${q}`;
    console.log(q)

  }




  return (
    <main className="main">
      <div className="main__left">
      <p className="mb-5 font-semibold tracking-wide">Data overview: wildfire, outreach, detection, vegetation, grants, partnerships, home hardening.</p>
      <Topdata/>

      <div className="barchart mt-5">
        <BarChart data={chartData} className="w-96 " />
      </div>

      </div>
      <div className="main__right">


      <h3 className="font-semibold tracking-wide">Questions List</h3>
      <div className="question-list-container mt-5">
      {questionsChoice.map( (q,index)=> <Link key={index}  className={index === 1 ? "btn btn--active" : "btn"} onClick={currentQuestionChoiceUpdater(index)} href={currentQuestionChoice} >{q}</Link> ) }
      </div>
      {/* <BarChart data={dataRace} />
      <BarChart data={dataLanguage} /> */}
      </div>
    </main>
  );
}
