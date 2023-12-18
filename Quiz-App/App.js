const questions = [
    {
      question: "Which programming language is known for building dynamic and interactive web pages?",
      options: ["Java", "Python", "JavaScript", "HTML"],
      correct: "JavaScript",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correct: "Blue Whale",
    },
    {
      question: "In which year did Christopher Columbus reach the Americas?",
      options: ["1492", "1501", "1605", "1776"],
      correct: "1492",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correct: "Leonardo da Vinci",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correct: "Tokyo",
    },
    {
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      options: ["Mercury", "Venus", "Mars", "Saturn"],
      correct: "Venus",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["J.K. Rowling", "Harper Lee", "George Orwell", "Ernest Hemingway"],
      correct: "Harper Lee",
    },
    {
      question: "What is the currency of Brazil?",
      options: ["Peso", "Real", "Dollar", "Euro"],
      correct: "Real",
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: "Pacific Ocean",
    },
    {
      question: "In which year did the  first moon landing occur?",
      options: ["1969", "1975", "1982", "1990"],
      correct: "1969",
    },
  ];

  let index=0;
  const quesBox=document.getElementById("questionBox")
  const optionBox=document.querySelector(".options");

  const loadQuestion=()=>{
    const data=questions[index]
    console.log(data)
    quesBox.innerText=`${index+1} ) ${data.question}`

  }

  loadQuestion();