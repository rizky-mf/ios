import { useColorScheme } from 'nativewind';
import { SafeAreaView,StyleSheet, Text, View, Switch} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ProductList from './components/ProductsList';

export default function App() {
  const {colorScheme,toggleColorScheme}=useColorScheme();
  
  return (
  <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
    <View className={'flex-row w-full gap-5'}>
      <Switch value={colorScheme==='dark'}onChange={toggleColorScheme}/>
      <Text className="dark:text-white text-2xl font-bold">New collection</Text>
         </View>
   
    <ProductList/>
    <StatusBar style={colorScheme==='dark'?'light':'dark'}/>
    </SafeAreaView>
  );
}