import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './screens/Principal';
import Login from './screens/Login';
import Configuracao from './screens/Configuracao';
import Resumo from './screens/Resumo';
import Finalizar from './screens/Finalizar';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
                <Tab.Screen name="Configurações" component={Configuracao} options={{ headerTitleAlign: 'center' }} />
                <Tab.Screen name="Resumo" component={Resumo} options={{ headerTitleAlign: 'center' }} />
                <Tab.Screen name="Finalizar" component={Finalizar} options={{ headerTitleAlign: 'center' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}