import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ContactScreen from "./screens/ContacyScreen";

function App(){
  return <SafeAreaProvider>
    <LoginScreen />

  </SafeAreaProvider>
}

export default App;