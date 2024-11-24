import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import { useFonts, Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';


export default function App() {
const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  
  return (
    <ThemeProvider theme={theme} >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  );
}





//OBSERVAÇÕES

//const [fontsLoaded] - isso é um vetor com apropriedade "fontsLoaded" que verifica se as fonts foram carregadas
// " ThemeProvider " ele que grencia o uso do theme na aplicação 
