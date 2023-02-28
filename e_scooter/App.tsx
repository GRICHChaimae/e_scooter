import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapScreen from './Screens/MapScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import AllUsers from './Screens/AllUsers';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Map':
              iconName = 'map';
              break;
            case 'Login':
              iconName = 'sign-in';
              break;
            case 'Register':
              iconName = 'user-plus';
              break;
            default:
              iconName = 'question';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen options={{headerShown: false}} name="Map" component={MapScreen} />
      <Tab.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Tab.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Tab.Screen options={{headerShown: false}} name="AllUsers" component={AllUsers} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
