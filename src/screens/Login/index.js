import React, { useState }  from "react";
import {Text, TextInput, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import {useForm, Controller} from 'react-hook-form';
import { yupResolver }  from '@hookform/resolvers/yup';
import * as yup from 'yup';



const schema = yup.object({
  username: yup.string().required("Informe seu nome de usuario"),
  password: yup.string().min(7,"Sua senha deve conter pelo menos 7 digitos").required("Informe sua senha"),
  email: yup.string().min(5,"E-mail deve conter pelo menos 5 caracteres").email("E-mail invalido").required("Informe seu e-mail")
});

export default Login = () => {

  const navigation = useNavigation()

  const {control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  function handleSignIn(data) {
    console.log(data)

  }

    return (
        <SafeAreaView style={styles.container}>

          <Text style={styles.title}>Bem vindo ao makeMoney</Text>

          <Controller 
            control={control}
            name="username"
            render={({field: { onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputArea, {
                  borderWidth: errors.username && 1.5,
                  borderColor: errors.username && "#ff375b"
                }]}
                onChangeText={onChange}
                onBlur={onBlur} // Quando o textInput eh focado
                value={value}
                placeholder="Seu nome de usuario"
              /> 
            )}
          />
          {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

          <Controller 
            control={control}
            name="password"
            render={({field: { onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputArea, {
                borderWidth: errors.password && 1.5,
                borderColor: errors.password && "#ff375b"
                }]}
                onChangeText={onChange}
                onBlur={onBlur} // Quando o textInput eh focado
                value={value}
                placeholder="Seu nome de usuario"
              /> 
            )}
          />
          {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
          
     


            
       <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
         <Text style={styles.customButtonText}>Acessar</Text>
       </TouchableOpacity>

       
       <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
         <Text style={styles.customRegisterButton}>Nao possui cadastro? Clique para se cadastrar.</Text>
       </TouchableOpacity>




        </SafeAreaView>
    );
}