import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {LaptopsList} from './screens/LaptopsList'
import {LaptopsForm} from './screens/LaptopsForm'

export default function App() {
  const StackLaptops = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName="LaptosListNav">
        <StackLaptops.Screen name="LaptosListNav" component={LaptopsList} />
        <StackLaptops.Screen name='LaptopsFormNav' component={LaptopsForm}/>
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}


