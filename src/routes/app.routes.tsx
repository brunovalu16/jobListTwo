import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}} initialRouteName='Groups'>
            <Screen name="Groups" component={Groups} />
            <Screen name="NewGroup" component={NewGroup} />
            <Screen name="Players" component={Players} />
        </Navigator>
    );
}


// COMENTÁRIOS

// screenOptions={{headerShown: false}}  serve para esconder a barra no header que o navigator cria
// initialRouteName='Groups' define qual screen vai ser carregado primeiro