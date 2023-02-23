import { Button, Pressable, StyleSheet, Text, View } from "react-native";

function ButtonPressable({title,onPress}){
    return(
        <View style={styles.button}>
        <Pressable style={({pressed})=>pressed ? [styles.container,{opacity:0.25}] : styles.container} android_ripple={{color:'#f2ecb6'}} onPress={onPress}>
          <Text style={{color:'white'}}>{title}</Text>
        </Pressable>
        </View>
    )
}

export default ButtonPressable;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#067d68',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    button:{
        backgroundColor:'#067d68',
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
})


