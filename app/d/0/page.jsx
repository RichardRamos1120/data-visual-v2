import Topdata from "@/app/components/Topdata";
import fetchCsv from "@/app/components/fetchCsv";
import BarChart from "@/app/components/BarChart";
import Link from "next/link";



async function getData () {

  const data = await fetchCsv();
  return data;

}

  // get the current answers and count
const getAnswersList = (arr) => {
    let counts = {}

    arr.forEach(item => {
      
      counts[item] = (counts[item] || 0 ) + 1;
      
    });
    
    return Object.values(counts)
 
  }



export default async function a() {
  // ans for one,two,three,four,five
  let currentQuestionChoice = "/d/"
  let questionsChoice = [
    "Q7 Do you believe the vegetation in the public open space near you is a fire risk?○ Yes, no or I dont know",
    "Q36 Have there been any projects to remove or manage vegetation to reduce fire risk in the open spaces near your home?",
    "Q38 How would you rate the performance of the entities responsible for removing vegetation to reduce fire risks?",
  ]
  // default questions
  let questions = ["one","two","three","four","five"]

  // default answers
  let answers = [0,0,0,0,0]
  const data = await getData();

  // get the current questions
  const q3 = data.map((q)=> q.Q7 )

  questions = [...new Set(q3)]

  // get answersList
  answers = getAnswersList(q3)
  console.log(answers)
 




  const chartData = {
    label: questionsChoice[0],
    labels: questions,
    values: answers,
    type:"bar",
    backgroundColor: ['rgba(99, 148, 255, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(148, 60, 180, 0.5)', 'rgba(141, 11, 250, 0.5)', 'rgba(30, 36, 191, 0.5)', 'rgba(5, 73, 66, 0.5)', 'rgba(200, 191, 149, 0.5)', 'rgba(184, 219, 167, 0.5)', 'rgba(127, 101, 198, 0.5)', 'rgba(36, 51, 28, 0.5)', 'rgba(38, 161, 167, 0.5)', 'rgba(122, 163, 127, 0.5)', 'rgba(112, 101, 129, 0.5)', 'rgba(186, 125, 231, 0.5)', 'rgba(168, 103, 21, 0.5)', 'rgba(138, 247, 84, 0.5)', 'rgba(173, 49, 164, 0.5)', 'rgba(74, 1, 238, 0.5)', 'rgba(246, 0, 215, 0.5)', 'rgba(252, 37, 90, 0.5)', 'rgba(232, 253, 27, 0.5)', 'rgba(142, 66, 159, 0.5)', 'rgba(217, 220, 47, 0.5)', 'rgba(14, 140, 32, 0.5)', 'rgba(112, 16, 94, 0.5)', 'rgba(248, 222, 199, 0.5)', 'rgba(132, 17, 241, 0.5)', 'rgba(106, 254, 216, 0.5)', 'rgba(251, 126, 255, 0.5)', 'rgba(16, 84, 229, 0.5)', 'rgba(169, 51, 83, 0.5)', 'rgba(25, 81, 171, 0.5)', 'rgba(186, 121, 233, 0.5)', 'rgba(33, 80, 145, 0.5)', 'rgba(208, 174, 89, 0.5)', 'rgba(224, 41, 75, 0.5)', 'rgba(157, 185, 7, 0.5)', 'rgba(79, 98, 72, 0.5)', 'rgba(178, 223, 135, 0.5)', 'rgba(207, 146, 224, 0.5)', 'rgba(61, 70, 17, 0.5)', 'rgba(5, 238, 249, 0.5)', 'rgba(72, 108, 46, 0.5)', 'rgba(90, 25, 186, 0.5)', 'rgba(240, 189, 131, 0.5)', 'rgba(189, 88, 193, 0.5)', 'rgba(190, 253, 158, 0.5)', 'rgba(196, 47, 235, 0.5)', 'rgba(221, 204, 38, 0.5)', 'rgba(97, 6, 59, 0.5)', 'rgba(52, 41, 217, 0.5)', 'rgba(52, 245, 88, 0.5)', 'rgba(245, 122, 6, 0.5)', 'rgba(174, 109, 231, 0.5)', 'rgba(95, 66, 143, 0.5)', 'rgba(64, 141, 249, 0.5)', 'rgba(190, 170, 31, 0.5)', 'rgba(127, 255, 86, 0.5)', 'rgba(192, 84, 41, 0.5)', 'rgba(180, 73, 89, 0.5)', 'rgba(219, 153, 120, 0.5)', 'rgba(243, 19, 97, 0.5)', 'rgba(198, 232, 156, 0.5)', 'rgba(255, 81, 186, 0.5)', 'rgba(31, 56, 208, 0.5)', 'rgba(93, 65, 178, 0.5)', 'rgba(118, 61, 178, 0.5)', 'rgba(96, 159, 198, 0.5)', 'rgba(160, 17, 77, 0.5)', 'rgba(250, 234, 184, 0.5)', 'rgba(232, 217, 250, 0.5)', 'rgba(39, 17, 61, 0.5)', 'rgba(32, 234, 84, 0.5)', 'rgba(43, 9, 226, 0.5)', 'rgba(180, 202, 56, 0.5)', 'rgba(222, 166, 203, 0.5)', 'rgba(237, 178, 123, 0.5)', 'rgba(99, 94, 66, 0.5)', 'rgba(192, 141, 139, 0.5)', 'rgba(89, 34, 14, 0.5)', 'rgba(24, 88, 157, 0.5)', 'rgba(11, 20, 220, 0.5)', 'rgba(189, 108, 155, 0.5)', 'rgba(38, 108, 40, 0.5)', 'rgba(148, 84, 139, 0.5)', 'rgba(168, 182, 184, 0.5)', 'rgba(220, 255, 191, 0.5)', 'rgba(97, 89, 250, 0.5)', 'rgba(156, 119, 60, 0.5)', 'rgba(38, 11, 217, 0.5)', 'rgba(67, 217, 80, 0.5)', 'rgba(120, 122, 12, 0']

  };

  const currentQuestionChoiceUpdater = (q) =>{
    currentQuestionChoice = `/d/${q}`;
  }
  





  return (
    <main className="main">
      <div className="main__left">
      <p className="mb-5 font-semibold tracking-wide">Data overview: wildfire, outreach, detection, vegetation, grants, partnerships, home hardening.</p>
      <Topdata/>

      <div className="barchart mt-5 ">
        <BarChart data={chartData} className="w-96 " />
      </div>

      </div>
      <div className="main__right">

      <h3 className="font-semibold tracking-wide">Questions List</h3>
      <div className="question-list-container mt-5">
      {questionsChoice.map( (q,index)=> <Link className={index === 0 ? "btn btn--active" : "btn"} onClick={currentQuestionChoiceUpdater(index)} href={currentQuestionChoice} >{q}</Link> ) }
      </div>

      </div>
    </main>
  );
}
