import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Question } from '../utils/quizData';

interface QuizProps {
  questions: Question[];
  onClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreSection}>
          <Text style={styles.scoreText}>Your score: {score} / {questions.length}</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      ) : (
        <View style={styles.questionSection}>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <Button key={index} title={option} onPress={() => handleAnswer(option)} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionSection: {
    marginVertical: 20,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  scoreSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Quiz;
