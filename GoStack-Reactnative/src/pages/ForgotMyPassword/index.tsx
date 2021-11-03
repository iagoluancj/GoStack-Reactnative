import React, { useRef} from 'react';
import { Image, View, ScrollView,KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { 

    Container, 
    Title,
    BackToSignIn,
    BackToSignInText, 
    Description,

} from './styles';

import Input from '../../components/input';
import Button from '../../components/button';


import logoImg from '../../assets/logo.png';

const ForgotMyPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    return (
        <>    
        <KeyboardAvoidingView
            style={{ flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
            <Container>
                <Image source={logoImg}/>
                
                <View>
                    <Title>Recupere sua senha</Title>
                </View>

                <Form ref={formRef} onSubmit={(data) => {console.log(data); }} style={{width:'100%'}}>
                    <View>
                        <Description>Insira o E-mail cadastrado para receber o codigo de recuperação.</Description>
                    </View>
                    <Input 
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType="email-address"
                        name="email" 
                        icon="mail" 
                        placeholder="E-mail" 
                        returnKeyType="send"
                        onSubmitEditing={() => { formRef.current?.submitForm();}}
                    />

                    <Button onPress={() => formRef.current?.submitForm()}>
                        Enviar Código
                    </Button>
                </Form>
            </Container>
           </ScrollView>
        </KeyboardAvoidingView>

        <BackToSignIn onPress={() => navigation.goBack('SignIn')}>
            <Icon name="arrow-left" size={20} color="#fff" />
            <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
         </>
    );   
};

export default ForgotMyPassword;