import React,{useState} from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [choice,setChoice]=useState("three");
  const [text,setText]=useState("");
  const [result,setResult]=useState([]);
  
  function handleSubmit(e)
  {

    console.log("hi");
    fetch('https://3to38bdew0.execute-api.us-east-1.amazonaws.com/app',{method: "POST",
    body: JSON.stringify({
        "searchString": text,
        "k": choice,
        "path": "/postText"
    })})
    .then((res)=>res.json())
    .then((data)=>setResult(data.title))
    setText("")
    }
  function handleDrop(e)
  {
    setChoice(e.target.value);
  }
  function handleInput(e)
  {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <h2 className="shadow-lg p-3 mb-5 bg-body rounded h4 pb-2 mb-4 text-danger border-bottom border-danger"> AWS Natural Language Search</h2>
      
      <h3 className="shadow-lg p-3 mb-5 bg-body rounded h4 pb-2 mb-4 movie"> Movie Recommendation System</h3>
      
      <h5 className="bg-success p-2 text-dark bg-opacity-10">Step 1: Select the number of Recommendations(Movies)</h5>
      <select className=" rounded-pill button dropmenu"value={choice} onChange={handleDrop}>

         <option value="one">One</option>

         <option value="two">Two</option>

         <option value="three">Three</option>

       </select>
      <h5 className="bg-success p-2 text-dark bg-opacity-10">Step 2: Enter a Description about a movie</h5>
      <h5> Try Entering " Beautiful Woman is involved in a crime"</h5>
      <input className="input" type="text" value={text} onChange={handleInput} placeholder="Search.."></input>
      <button className="rounded-pill button" onClick={handleSubmit}>Search</button>
      <h5 className="bg-success p-2 text-dark bg-opacity-10">Step 3: Results!</h5>
        <h5 className="text-primary">BERT TRANSFORMER</h5>
        <ul>
          {result.map((movie)=><div><h3 style={{color:'blue'}}>{movie.title}</h3><p>{movie.description}</p></div>)}
        </ul>
     </div>
  );
}

export default App;
