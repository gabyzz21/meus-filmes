import react from "react";

import {View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet} from 'react-native';
export default function Home(){
    return(
        <View>
            <Text>Meus Filmes</Text>
            <Text>Olá Maria, boa noite!</Text>

            <TouchableOpacity>
                <Text>Adicionanr</Text>
            </TouchableOpacity>

        </View>


    );
}

//Criando estilos 
const style = StyleSheet.create({

});