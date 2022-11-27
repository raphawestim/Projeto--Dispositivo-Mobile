
//import { View } from 'react-native';
import {Routes} from './src/routes';
import { StatusBar } from 'react-native';
import {Background} from './src/components/Background';
import {Loading} from './src/components/Loading';


import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoad] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      {fontsLoad ? <Routes/> : <Loading />}
    </Background>
  );
}

