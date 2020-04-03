import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Alert,
  Keyboard //not a component but an api
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Input',
        'Number has to be between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return;
    }
    setConfirmed(true);
    setSelectedValue(chosenNumber)
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedValue}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedValue)}/>
      </Card>
    )
  }

  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss;
    //   }}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start' //this is default as main axis is vertical -from top to bottom
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    height: 170,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20
  },
  button: {
    width: '40%'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 10,
    height: 170,
    alignItems: 'center', 
  }
});

export default StartGameScreen;