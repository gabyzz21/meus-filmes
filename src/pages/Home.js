import react from "react";

import {View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet} from 'react-native';
export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus Filmes</Text>
             <Text style={styles.Subtitulo}>Olá Maria</Text>

             <TextInput
             style={styles.campo}
             placeholder="Nome do filme"/>

   
            <TouchableOpacity style= {styles.button}>
                <Text style={styles.buttonText}>Adicionanr</Text>
            </TouchableOpacity>

        </View>


    );
}

//Criando estilos 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#30478C',
        paddingVertical: 70,
        paddingHorizontal: 20,
    },
    titulo:{
        fontSize:20,
        fontweight: 'bold',
        marginBottom: 10,
        color: 'FDD700'
    
    },
    Subtitulo:{
        color: '#FFF',
        fontsize: 15
    },

    campo:{
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontsize: 18,
        marginTop: 30,
        boderRadius: 7,
        padding: 15
    },

    buttonText: {
        color: '#FFF',
        fontsize: 17,
        fontweight: 'bold',
    },
    greetings:{
     color: '#FFF'

    },



    button:{
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20

    },

    buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'

    },

});  