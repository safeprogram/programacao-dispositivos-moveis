import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./routes/StackNavigator";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import DrawerNavigator from "./routes/DrawerNavigator";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TopTabNavigator>
        </TopTabNavigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;