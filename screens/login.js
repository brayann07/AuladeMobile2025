import {Text,View,StyleSheet} from 'react-native';
import { Button, TextInput } from 'react-native-web';
export default function Login(){
    return(
         <View style={styles.container}>
            <Text style={styles.textocima}>Nome</Text>

            <TextInput style={styles.entradadedados} placeholder='Nome'></TextInput>

            <TextInput style={{flex:1,textAlign:'center',alignSelf:'center',backgroundColor:'white',width:200,height:20,marginTop:20}} placeholder='Telefone'></TextInput>

            <Button style={styles.botao}>Aperte para logar!</Button>
         </View>
    )
}
const styles = StyleSheet.create({
    container:{ 
      backgroundColor:'purple',
      flex:1,
    },
    textocima:{
        flex:1,
        fontSize: 50,
        textAlign:'center',
        marginTop:70,
        fontFamily: 'Arial',
        color:'white',
    },
    botao:{
        backgroundColor:'yellow',
        flex:1,
        width:100,
        height:100,
    },
    entradadedados:{
        flex:1,
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'white',
        width:200,
        height:200,
    }
  })