import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firstlastname from "../Screens/firstlastname";
import TermAndPolicy from "../Screens/TermAndPolicy";
import NumberVerify from "../Screens/NumberVerify";
import LoginScreen from '../Screens/LoginScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
   return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="NumberVerify"
          component={NumberVerify}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="firstlastname"
          component={firstlastname}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="TermAndPolicy"
          component={TermAndPolicy}
          options={{headerShown: false}}
        /> 
       

       
       
       
      </Stack.Navigator>
    );
  };
  export default Navigation;