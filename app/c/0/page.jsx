import Topdata from "../../components/Topdata";
import fetchCsv from "../../components/FetchCsv";
import BarChart from "../../components/BarChart";
import Link from "next/link";




async function getData () {

  const data = await fetchCsv();
  return data;

}

export default async function a() {
  // ans for one,two,three,four,five
  let currentQuestionChoice = "/c"
  let questionsChoice = [
    "Q4 How concerned are you about traffic preventing you from leaving your neighborhood during an evacuation? ○ Scale of 1 to 5",
    "Q5 How concerned are you about getting out of your home quickly enough during an evacuation? ○ Scale of 1 to 5",
    "Q9 How concerned are you about finding out about a wildfire in time to evacuate safely? ○ Scale of 1 to 5",
    "Q10 How concerned are you about finding out about a wildfire in time to evacuate safely? ○ Scale of 1 to 5",
    "Q11 Do you know where to find trustworthy information when there is a nearby wildfire? ○ Yes or no",
    "Q16 Which of the following methods would you prefer to get information about an active wildfire emergency? ○ Choose multiple answers from a list",
    "Q17 Which of the following sources do you trust the most for information about an active wildfire emergency that might affect your neighborhood? ○ Choose multiple answers from a list",
    "Q18 Are you signed up for any emergency alerting system?○ Yes, no or I don’t know",
    "Q19 Which emergency alerting system are you signed up for?",
    "Q20 Have you received emergency alerts before?",
    "Q21 Were you able to understand the alerts you received?",
    "Q22 Why were you not able to understand the alerts?",
    
    "Q23 What is your preferred language for receiving emergency alerts?",
    "Q24 What is the most difficult part of receiving and understanding emergency communications?",
    "Q32 How have you prepared for a potential evacuation?",
    "Q33 Where would be the closest safe place to go during an evacuation?",
    "Q34 Which of the following would prevent you from following an evacuation order?",
    "Q35 What are suggested practices during red flag warnings?",
  ]
  let questions = ["one","two","three","four","five"]
  let answers = [0,0,0,0,0]
  const data = await getData();

  const q3 = data.map((q)=> q.Q4)
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
    currentQuestionChoice = `/c/${q}`;
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
      {questionsChoice.map( (q,index)=> <Link key={index}  className={index === 0 ? "btn btn--active" : "btn"} onClick={currentQuestionChoiceUpdater(index)} href={currentQuestionChoice} >{q}</Link> ) }
      </div>
      {/* <BarChart data={dataRace} />
      <BarChart data={dataLanguage} /> */}
      </div>
    </main>
  );
}
