import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/home";
import { UserDetails } from "./components/user-details";
const Navigator = createNativeStackNavigator();

export const AppRouter = () => (
  <NavigationContainer>
    <Navigator.Navigator>
      <Navigator.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Navigator.Screen
        name="Profile"
        component={UserDetails}
      />
    </Navigator.Navigator>
  </NavigationContainer>
);
