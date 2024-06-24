import { useState } from "react";
import "./App.css";

export default function App() {
  // return <RenderingCards />;
  return <Flashcard />;
}

function Flashcard() {
  const flashQues = [
    {
      id: 1,
      question: "What Language is React based on?",
      answer: "Javascript",
    },
    {
      id: 2,
      question: "What are the building blocks of React app?",
      answer: "React components",
    },
    {
      id: 3,
      question:
        "What's the name of the syntac we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 4,
      question:
        "How do we pass data from parent component to child Components?",
      answer: "Props",
    },
    {
      id: 5,
      question: "How to give component memory?",
      answer: "State",
    },
    {
      id: 6,
      question:
        "What do we call an input elements that is completely synchronised with state?",
      answer: "Controlled component/Controlled input",
    },
    ,
  ];

  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="cards">
      {flashQues.map((que) => (
        <div
          key={que.id}
          onClick={() => handleClick(que.id)}
          className={que.id === selectedId ? "selected" : ""}
        >
          {que.id === selectedId ? (
            <h3>{que.answer}</h3>
          ) : (
            <h3>{que.question}</h3>
          )}
        </div>
      ))}
    </div>
  );
}

// ______________________Alternate logic____________________________________________________
// function RenderingCards() {
//   const flashQues = [
//     {
//       id: 1,
//       question: "What Language is React based on?",
//       answer: "Javascript",
//     },
//     {
//       id: 2,
//       question: "What are the building blocks of React app?",
//       answer: "React components",
//     },
//     {
//       id: 3,
//       question:
//         "What's the name of the syntac we use to describe a UI in React?",
//       answer: "JSX",
//     },
//     {
//       id: 4,
//       question:
//         "How do we pass data from parent component to child Components?",
//       answer: "Props",
//     },
//     {
//       id: 5,
//       question: "How to give component memory?",
//       answer: "State",
//     },
//     {
//       id: 6,
//       question:
//         "What do we call an input elements that is completely synchronised with state?",
//       answer: "Controlled component/Controlled input",
//     },
//     ,
//   ];
//   return (
//     <div className="cards">
//       {flashQues.map((ques) => (
//         <Card question={ques.question} answer={ques.answer} key={ques.id} />
//       ))}
//     </div>
//   );
// }

// function Card({ question, answer }) {
//   const [cardContent, setCardContent] = useState(question);
//   return (
//     <div
//       className="card-item"
//       onClick={() =>
//         cardContent === question
//           ? setCardContent(answer)
//           : setCardContent(question)
//       }
//       style={
//         cardContent === answer
//           ? { backgroundColor: "red" }
//           : { backgroundColor: "#ccc" }
//       }
//     >
//       <h3>{cardContent}</h3>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------
