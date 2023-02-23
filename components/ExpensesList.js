import { StyleSheet, Text, View } from "react-native";

function ExpensesList({ lable, date, amount }) {
  return (
    <View style={styles.container}>
      <View style={styles.lable}>
        <Text>{lable}</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.amount}>
        <Text>{amount}</Text>
      </View>
    </View>
  );
}

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ff9999",
    height: 80,
  },
  amount: {
    backgroundColor: "white",
    height: 50,
    width: 70,
    padding: 15,
    borderRadius: 8,
  },
  lable: {
    padding: 2,
    justifyContent: "space-between",
  },
});
