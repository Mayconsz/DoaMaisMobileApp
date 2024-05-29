import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../Pages/Home'
import { Listagem } from '../Pages/Listagem'
import { Contato } from '../Pages/Contato'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="Home"
             component={Home}
             options={{ headerShown: false}}
            />

            <Stack.Screen
             name="Listagem"
             component={Listagem}
             options={{ headerShown: false}}
            />

            <Stack.Screen
             name="Contato"
             component={Contato}
            />

        </Stack.Navigator>
    )
}