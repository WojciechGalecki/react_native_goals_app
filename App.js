import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(newGoal) {
    setGoals(prevGoals => [
      ...prevGoals,
      {
        id: Math.random().toString(),
        text: newGoal,
      }
    ]
    );
  }

  function deletGoalHandler(id) {
    setGoals((prevGoals => prevGoals.filter(goal => goal.id !== id)));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              goal={itemData.item}
              onDeleteItem={deletGoalHandler}
            />
          )}
          keyExtractor={(item, _index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
