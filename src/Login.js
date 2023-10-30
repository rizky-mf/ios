import {Text,View}from 'react-native';
import Background from './Background';
import Field from './Field';
import Tombol from './Tombol';


export default function Login(props) {
    return (
        <Background>
            <View style={{alignItems:'center',width:410}}>
                <Text
                style={{
                    color:'white',
                    fontSize:60,
                    fontWeight: 'bold',
                    marginVertical: 20,
                }}
                >
                 Login
                </Text>
                <View
                style={{
                    backgroundColor: 'rgba(255, 255, 255,0.5)',
                    height: 450,
                    width: '89%',
                    borderRadius: 30,
                    paddingTop: 30,
                    alignItems: 'center',
                }}
                >
                 <Text
            style={{
              fontSize: 40,
              color: 'blue',
              fontWeight: 'bold',
            }}
            >
                Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field placeholder="Email" keyboardType={'email-address'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 16,
              marginBottom: 20,
            }}
          >
            Forgot Password
          </Text>
          <Tombol textColor="white" bgColor="blue" tbLabel="Login" wBtn={200}/>
          <Tombol textColor="white" bgColor="red" tbLabel="Back" press={() => props.navigation.navigate('Home2')} wBtn={200}/>
          </View>
                </View>

        </Background>
    );
}