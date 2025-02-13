import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
  const [newGoal, setNewGoal] = useState('');

  function goalInputHandler(goal) {
    setNewGoal(goal);
  }

  function addGoalHandler() {
    props.onAddGoal(newGoal);
    setNewGoal('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your goal'
        onChangeText={goalInputHandler}
        value={newGoal}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
