import * as d3 from "d3";


export default async function fetchCsv() {
  // fetch csv data
  const data = await d3.csv('http://data-visualization123.netlify.app/data.csv')
    
  return data
}
