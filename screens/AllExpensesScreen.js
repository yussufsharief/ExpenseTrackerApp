import { LinearGradient } from "expo-linear-gradient";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "../components/ExpensesList";
import IconButton from "../components/IconButton";
import TotalExpenses from "../components/TotalExpenses";
import ModalScreen from "./ModalScreen";

function AllExpensesScreen({route,navigation}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=><IconButton onPress={openAddExpenseModal}/>
    })
  },[]);
  function openAddExpenseModal(){
    setIsModalVisible(true);
  }
  function closeExpenseModal(){
    setIsModalVisible(!isModalVisible);
  }
  return (
    <>
    <LinearGradient colors={['#f6ea41','#f048c6']}
          style={styles.rootContainer}>
    <View style={styles.rootContainer}>
      <TotalExpenses lable={'Total'} totalAmount={'$333'}/>
      <ExpensesList lable={'A book'} date={'2022-2-19'} amount={'$666'}/>
      <ModalScreen isVisible={isModalVisible} closeExpenseModal={closeExpenseModal} lable={'Add Expense'}/>
    </View>
    </LinearGradient>
    </>
  );
}

export default AllExpensesScreen;
const styles= StyleSheet.create({
    rootContainer :{
        flex:1
    }
})
