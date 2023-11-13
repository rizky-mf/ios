import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import Notif from './Screen/Notif';
import Pengurangan from './Screen/Pengurangan';
import Penjumlahan from './Screen/Penjumlahan';
import Perkalian from './Screen/Perkalian';
import Pembagian from './Screen/Pembagian';
const Drawer = createDrawerNavigator();
export default function App() {
return (
<NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={Home} />
<Drawer.Screen name="Notif" component={Notif} />
<Drawer.Screen name="Penjumlahan" component={Penjumlahan} />
<Drawer.Screen name="Pengurangan" component={Pengurangan} />
<Drawer.Screen name="Perkalian" component={Perkalian} />
<Drawer.Screen name="Pembagian" component={Pembagian} />
</Drawer.Navigator>
</NavigationContainer>
);
}