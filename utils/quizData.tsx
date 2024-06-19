// quizData.ts
export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export const quizQuestions: Question[] = [
    {
      question: 'What is a SIP?',
      options: ['Systematic Investment Plan', 'Single Investment Plan', 'Stock Investment Plan', 'Secure Investment Plan'],
      answer: 'Systematic Investment Plan'
    },
    {
      question: 'Are mutual funds safe?',
      options: ['Yes', 'No', 'Depends on the type of fund', 'Not sure'],
      answer: 'Depends on the type of fund'
    },
    // Add more questions as needed
  ];
  