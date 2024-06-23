import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable, Dimensions, FlatList } from 'react-native';
import { Question } from '../utils/quizData';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

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

  const getEmojiAndMessage = () => {
    const percentage = (score / questions.length) * 100;

    if (percentage <= 20) {
      return { emoji: '😢', message: 'Must study' };
    } else if (percentage <= 60) {
      return { emoji: '😐', message: 'A bit more effort' };
    } else if (percentage <= 80) {
      return { emoji: '👍', message: 'Nice' };
    } else if (percentage < 100) {
      return { emoji: '😃', message: 'Great Work' };
    } else {
      return { emoji: '🏆', message: 'Congratulations' };
    }
  };

  const renderOption = ({ item }: { item: string }) => (
    <Pressable style={styles.answerBtn} onPress={() => handleAnswer(item)}>
      <Text style={styles.answerText}>{item}</Text>
    </Pressable>
  );

  const { emoji, message } = getEmojiAndMessage();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Time</Text>
      <MaterialIcons name="timer" color="black" size={80} style={styles.icon} />

      <View style={styles.main}>
        {showScore ? (
          <View style={styles.scoreSection}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.scoreMessage}>{message}</Text>
            <Text style={styles.scoreText}>Your score: {score} / {questions.length}</Text>
            <Pressable onPress={onClose} style={styles.closeBtn}><Text>Close</Text></Pressable>
          </View>
        ) : (
          <View style={[styles.questionSection, { backgroundColor: questions[currentQuestion].color }]}>
            <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
            <View style={styles.divider}></View>
            <FlatList
              data={questions[currentQuestion].options}
              renderItem={renderOption}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              contentContainerStyle={styles.grid}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        position: 'absolute',
        top: 40,
        fontSize: 50,
        fontFamily: 'Ticketing',
        marginBottom: 20,
    },
    icon: {
        position: 'absolute',
        top: 100,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionSection: {
        marginVertical: 20,
        borderColor: 'black',
        borderWidth: 5,
        padding: 20,
        borderRadius: 20,
        width: width * 0.8,
    },
    questionText: {
        fontSize: 35,
        marginBottom: 20,
        fontFamily: 'Ticketing',
        padding: 10,
        borderRadius: 10,
    },
    divider: {
        backgroundColor: 'black',
        height: 2,
        maxWidth: '100%',
        marginBottom: 10,
    },
    scoreSection: {
        justifyContent: 'center',
        alignItems: 'center',
        width:width*0.8,
        padding: 20,
        borderRadius: 20,
        fontFamily: 'Ticketing',
    },
    emoji: {
        fontSize: 130,
        marginBottom: 10,
    },
    scoreMessage: {
        fontSize: 30,
        marginBottom: 10,
        fontFamily: 'Ticketing',
    },
    scoreText: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'Ticketing',
        color: 'navy',
    },
    grid: {
        justifyContent: 'center',
    },
    answerBtn: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        flexWrap:'wrap',
    },
    answerText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Ticketing',
        
    },
    closeBtn:{
        fontSize:20,
        fontFamily:'Ticketing',
        borderColor:'gray',
        borderWidth:3,
        width:80,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#FFC700',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:10,
    },
});

export default Quiz;
