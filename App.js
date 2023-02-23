// import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import {MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar}  from 'expo-status-bar';
import IconButton from './components/IconButton';
export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
    <>
     <StatusBar style="light"/>
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
         //headerStyle:{backgroundColor:'#3c0a6b'},
         headerBackground: () => (
          <LinearGradient colors={['#d13abd','#eebd89']}
          style={styles.container} />
        ),
         headerTintColor:'white',
         tabBarActiveTintColor:'yellow',
         tabBarStyle: { position: 'absolute' },
         tabBarBackground: () => (
          <LinearGradient colors={['#eebd89','#d13abd']}
          style={styles.container} />
        ),
      }}>
      
        <BottomTab.Screen name="RecentExpenses" component={RecentExpensesScreen} options={{
          tabBarLabel:"Recent",
          
          title:"Recent Expenses",
          tabBarIcon:({color,size})=><MaterialCommunityIcons name='timer-sand' size={size} color={color}/>,
          
        }}/>
        <BottomTab.Screen name="AllExpenses" component={AllExpensesScreen} options={{
          topBarLabel:"All Expenses",
          title:"All Expenses",
          tabBarIcon:({color,size})=><MaterialCommunityIcons name='calendar-month-outline' size={size} color={color}/>
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
