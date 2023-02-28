import React, { useState }  from "react";
import {Text, TextInput, TouchableOpacity, View, SafeAreaView} from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import {useForm, Controller} from 'react-hook-form';
import { yupResolver }  from '@hookform/resolvers/yup';
import * as yup from 'yup';



const schema = yup.object({
  username: yup.string().required("Informe seu nome de usuario"),
  nomeCompleto : yup.string().required("Informe seu nome completo"),
  cpf: yup.number("Deve ser um numero").min(11,"CPF deve conter 11 digitos").required("Informe seu cpf"),
  password: yup.string().min(7,"Sua senha deve conter pelo menos 7 digitos").required("Informe sua senha"),
  passwordConfirma: yup.string().min(7,"Sua senha deve conter pelo menos 7 digitos").required("Informe sua senha"),
  telefone: yup.number("Deve ser um numero").min(9,"Telefone deve conter no minimo 9 digitos").required("Informe algum telefone para contato"),
  email: yup.string().email("E-mail invalido").required("informe seu E-mail")
})

export default Cadastro = () => {

  const navigation = useNavigation()

  const {control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  function handleSignIn(data) {
    console.log(data)

  }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.labelArea}>
          <Text>Nome completo</Text>
            <Controller 
              control={control}
              name="nomeCompleto"
              render={({field: { onChange, onBlur, value}}) => (      
                <TextInput
                  style={[styles.inputArea, {
                    borderWidth: errors.username && 1.5,
                    borderColor: errors.username && "#ff375b"
                  }]}
                  onChangeText={onChange}
                  onBlur={onBlur} // Quando o textInput eh focado
                  value={value}
                  placeholder="Nome completo"
                /> 
              )}
            />
            {errors.nomeCompleto && <Text style={styles.labelError}>{errors.nomeCompleto?.message}</Text>}
        </View>

        <View style={styles.labelArea}>
          <Text>Nome de usuario</Text>
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
                placeholder="Nome de usuario"
              /> 
            )}
          />
          {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}
        </View>

        <View style={styles.labelArea}>
          <Text>CPF</Text>
          <Controller 
            control={control}
            name="cpf"
            render={({field: { onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputArea, {
                  borderWidth: errors.username && 1.5,
                  borderColor: errors.username && "#ff375b"
                }]}
                onChangeText={onChange}
                onBlur={onBlur} // Quando o textInput eh focado
                value={value}
                placeholder="CPF"
              /> 
            )}
          />
          {errors.cpf && <Text style={styles.labelError}>{errors.cpf?.message}</Text>}
        </View>

        <View style={styles.labelArea}>
          <Text>E-mail</Text>
          <Controller 
            control={control}
            name="email"
            render={({field: { onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputArea, {
                  borderWidth: errors.username && 1.5,
                  borderColor: errors.username && "#ff375b"
                }]}
                onChangeText={onChange}
                onBlur={onBlur} // Quando o textInput eh focado
                value={value}
                placeholder="E-mail"
              /> 
            )}
          />
          {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
          </View>
          
          <View style={styles.labelArea}>
          <Text>Telefone (Celular)</Text>
          <Controller 
            control={control}
            name="telefone"
            render={({field: { onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputArea, {
                  borderWidth: errors.username && 1.5,
                  borderColor: errors.username && "#ff375b"
                }]}
                onChangeText={onChange}
                onBlur={onBlur} // Quando o textInput eh focado
                value={value}
                placeholder="Telefone"
              /> 
            )}
          />
          {errors.telefone && <Text style={styles.labelError}>{errors.telefone?.message}</Text>}
          </View>

          <View style={styles.labelArea}>
          <Text>Senha</Text>
          <Controller 
            control={control}
            name="password"
            render={({field: { onChange, onBlur, value}}) => (
              <TextInput
                style={[styles.inputArea, {
                  borderWidth: errors.username && 1.5,
                  borderColor: errors.username && "#ff375b"
                }]}
                onChangeText={onChange}
                onBlur={onBlur} // Quando o textInput eh focado
                value={value}
                placeholder="Senha"
              /> 
            )}
          />
          {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
          </View>

          <View style={styles.labelArea}>
            <Text>Confirmar Senha</Text>
              <Controller 
                control={control}
                name="passwordConfirma"
                render={({field: { onChange, onBlur, value}}) => (
                  <TextInput
                    style={[styles.inputArea, {
                      borderWidth: errors.username && 1.5,
                      borderColor: errors.username && "#ff375b"
                    }]}
                    onChangeText={onChange}
                    onBlur={onBlur} // Quando o textInput eh focado
                    value={value}
                    placeholder="Confirmar Senha"
                  /> 
                )}
              />
              {errors.passwordConfirma && <Text style={styles.labelError}>{errors.passwordConfirma?.message}</Text>}
          </View>
      
       <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
         <Text style={styles.customButtonText}>Cadastrar</Text>
       </TouchableOpacity>

        </SafeAreaView>
    );
}