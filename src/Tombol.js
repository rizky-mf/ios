import { Text, TouchableOpacity } from "react-native";
export default function Tombol ({bgColor, tbLabel, textColor, press, wBtn}){
    return(
        <TouchableOpacity
            onPress={press}
            style={{
                backgroundColor:bgColor,
                borderRadius:70,
                alignItems: 'center',
                width:wBtn,
                paddingVertical : 5,
                marginBottom :10,     
                
            }}
            >
                <Text
                style={{
                    color:textColor,
                    fontSize:22,
                    fontWeight:'bold',
                }}
                
                >
                   {tbLabel} 
                </Text>
                

        </TouchableOpacity>
    );
}