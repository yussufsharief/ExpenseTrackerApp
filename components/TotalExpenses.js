import { StyleSheet, View,Text } from "react-native";

function TotalExpenses({lable,totalAmount}){
return(
    <View style={styles.container}>
        <View>
        <Text>{lable}</Text>
        </View>
        <View>
        <Text>{totalAmount}</Text>
        </View>
    </View>
)
}
export default TotalExpenses;

const styles= StyleSheet.create({
    container:{
        borderRadius:8,
        backgroundColor:'white',
        margin:10,
        justifyContent:'space-between',
        flexDirection:'row',
        padding:16,
        height: 50
    }
})