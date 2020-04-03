import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import Colors from '../constants/colors'
import Card from '../components/Card'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style = {styles.container}>
                <Text style={styles.display}>The Game is Over!</Text>
                <Text style={styles.display}>Number of rounds: {props.roundsNumber}</Text>
                <Text style={styles.display}>Number was: {props.userNumber}</Text>
                <View style={styles.button}>
                    <Button title="NEW GAME" onPress={props.onRestart} color={Colors.accent} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    container: {
        marginVertical: 50,
        width: 300,
        height: 170,
        maxWidth: '80%',
        alignItems: 'center'
    },
    button: {
        padding: 20,
        width: '70%'
    },
    display: {
        fontSize: 18
    }
});

export default GameOverScreen;