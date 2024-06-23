export interface Question {
    question: string;
    options: string[];
    answer: string;
    color: string;
}

export const quizQuestions: Question[] = [
    {
        question: 'What is a SIP?',
        options: ['Systematic Investment Plan', 'Single Investment Plan', 'Stock Investment Plan', 'Secure Investment Plan'],
        answer: 'Systematic Investment Plan',
        color: '#FFC700',
    },
    {
        question: 'Are mutual funds safe?',
        options: ['Yes', 'No', 'Depends on the type of fund', 'Not sure'],
        answer: 'Depends on the type of fund',
        color: '#d5d6aa',
    },
    {
        question: 'What does NAV stand for?',
        options: ['Net Asset Value', 'New Asset Value', 'Net Annual Value', 'None of the above'],
        answer: 'Net Asset Value',
        color: '#ff8a5c',
    },
    {
        question: 'What is the primary objective of investing?',
        options: ['Safety', 'Growth', 'Liquidity', 'All of the above'],
        answer: 'All of the above',
        color: '#a2d5f2',
    },
    {
        question: 'Which of the following is a type of mutual fund?',
        options: ['Equity Funds', 'Debt Funds', 'Hybrid Funds', 'All of the above'],
        answer: 'All of the above',
        color: '#ff7eb9',
    },
    {
        question: 'What is the benefit of diversification in investment?',
        options: ['Risk reduction', 'Higher returns', 'Both A and B', 'None of the above'],
        answer: 'Both A and B',
        color: '#ffcccb',
    },
    {
        question: 'Which of the following is a stock market index?',
        options: ['S&P 500', 'Dow Jones', 'NASDAQ', 'All of the above'],
        answer: 'All of the above',
        color: '#d1c4e9',
    },
    {
        question: 'What is an ETF?',
        options: ['Exchange Traded Fund', 'Equity Traded Fund', 'Extra Trade Fund', 'None of the above'],
        answer: 'Exchange Traded Fund',
        color: '#b2ebf2',
    },
];
