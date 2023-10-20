import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './HomeScreen';
import Cowboy from './CowboyScreen';
import Haikyuu from './HaikyuuScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
   
    <Tab.Screen name="CowboyBebop" component={Cowboy}  options={{
      tabBarIcon: ({color, size }) => (
        <MaterialCommunityIcons name="space-station" color={color} size={size} />
      )
    }}
     />
      <Tab.Screen name="Home" component={HomeScreen}  options={{
      tabBarIcon: ({color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      )
    }} />
    <Tab.Screen name="Haikyuu" component={Haikyuu}  options={{
      tabBarIcon: ({color, size }) => (
        <MaterialCommunityIcons name="volleyball" color={color} size={size} />
      )
    }} />
    </Tab.Navigator>
  );
}
