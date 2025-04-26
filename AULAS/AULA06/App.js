import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPilha from './routes/NavegacaoPilha';
import NavegacaoAbaInferior from './routes/NavegacaoAbaInferior';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavegacaoAbaInferior/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;