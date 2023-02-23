import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import ButtonPressable from "../components/ButtonPressable";

function ModalScreen({ isVisible,closeExpenseModal, lable }) {

    function addExpenseHandler(){
        console.log('Adding....');
    }

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      presentationStyle={"pageSheet"}
    >
      <View style={styles.container}>
        <View style={styles.innerModal}>
          <Text>{lable}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonPressable title={"Close"} onPress={()=>closeExpenseModal()}/>
          <ButtonPressable title={"Add"} onPress={addExpenseHandler}/>
        </View>
      </View>
    </Modal>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#58126a'
  },
  innerModal: {
    backgroundColor: "#f9957f",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
    width:'90%'
  },
});
