import React, { useEffect }  from "react";
import { Text, View} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';



export default () => {
    
    const navigation = useNavigation();

    useEffect(() => {
        // const checkToken = async () => {
        //     // Verificar ASYNC STORAGE
        //     // const token = await AsyncStorage.getItem('token');
        //     if (token !== null) {
        //         // validar o token

        //     } else {
        //         navigation.navigate('Login');
        //     }
        // }
        // checkToken();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text>
                Preload
            </Text>
        </View>
    );
    }