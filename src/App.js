import React, { useState } from "react";
import data from './data'
import SingleQuestion from "./SingleQuestion";


function App() {
   // eslint-disable-next-line
  const [questions,setQuestions] = useState(data)
  return (
    <main >
      <section className=" flex items-center justify-center flex-col mt-20  shadow-lg shadow-gray-300 w-96 h-auto mx-auto p-12 overflow-hidden ">
        <h1>Our Questions</h1>
        <div>
          {questions.map((question)=>{
             return <SingleQuestion key={question.id} {...question}/>
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
