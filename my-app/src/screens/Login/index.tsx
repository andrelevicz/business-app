import React, { useState }  from "react";
import {Text, TextInput, TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import {useForm, Controller} from 'react-hook-form';



export default function Login ()  {

  const navigation = useNavigation()

  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      user: '',
      password: ''
    }
  });
  const onSubmit = (data : any) => {
    console.log(data);
  };

  const onChange = (arg : any) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);


    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Bem vindo ao makeMoney</Text>
          <Controller 
            control={control}
            name="user"
            render={({field: { onChange, onBlur, value}}) => (
              <View style={[styles.inputArea, {
                borderWidth: errors.user && 1.5,
                borderColor: errors.user && "#ff375b"
              }]}>
                <TextInput
                  style={{flex: 1}}
                  onChangeText={value => onChange(value)}
                  onBlur={onBlur} // Quando o textInput eh focado
                  value={value}
                  placeholder="Seu nome de usuario"
                /> 
              </View>
            )}
            rules={{ required : {value: true, message: "Digite seu usuario"} }}
          />
          {errors.user && <Text style={styles.labelError}>{errors.user?.message}</Text>}

          <Controller 
            control={control}
            name="password"
            render={({field: { onChange, onBlur, value}}) => (
              <View style={[styles.inputArea, {
                borderWidth: errors.user && 1.5,
                borderColor: errors.user && "#ff375b"
              }]}>
                <TextInput
                  style={{flex: 1}}
                  onChangeText={value => onChange(value)}
                  onBlur={onBlur} // Quando o textInput eh focado
                  value={value}
                  placeholder="Senha"
                /> 
              </View>
            )}
            rules={{ required : {value: true, message: "Digite sua senha"} }}
          />
          {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
  
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.customButtonText}>Acessar</Text>
          </TouchableOpacity>

       
          <TouchableOpacity 
              onPress={() => alert('Go to Cadastro')
              //  navigation.navigate('Cadastro')
              }>
            <Text style={styles.customRegisterButton}>Nao possui cadastro? Clique para se cadastrar.</Text>
          </TouchableOpacity>
       
        </SafeAreaView>
    </KeyboardAvoidingView>
    );
}