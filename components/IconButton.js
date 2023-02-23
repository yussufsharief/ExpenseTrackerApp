import { Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons';
function IconButton({onPress}){
    return(
<Pressable onPress={onPress}>
<Ionicons name='add' color={'yellow'} size={42}/>
</Pressable>
    );
}

export default IconButton;