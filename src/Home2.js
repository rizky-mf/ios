import { Text,View,StyleSheet } from "react-native";
import Background from './Background';
import Tombol from "./Tombol";
import Login from "./Login";
import SignUp from './SignUp';


export default function Home2(props){
return(
<Background>
    <View 
    style={{
        marginHorizontal:50,
        marginVertical:200,
        alignItems:'center',
    }}
    >
        <Text style={{color:'white', fontSize:45}}>Let's Start </Text>
            
            <Text style={{
                color:'white',
                fontSize: 45,
                marginBottom: 50}}>
                    Use Application
                </Text>
                <Tombol bgColor="rgba(75, 107, 208, 0.4)" textColor="white" tbLabel="Login" press={() => props.navigation.navigate('Login')} wBtn={150} />
                <Tombol bgColor="rgba(255,255,0,0.8)" textColor="maroon" tbLabel="Sign Up" press={() => props.navigation.navigate('SignUp')} wBtn={150} />

    </View>

</Background>
);

}