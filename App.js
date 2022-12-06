import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ImageScreen from './src/screens/ImageScreen';
import Quiz from './src/screens/QuizScreen';
import FieldScreen from './src/screens/FieldScreen';
import QuizScreen from './src/screens/QuizScreen';
import InterestScreen from './src/screens/InterestScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
   
    Image: ImageScreen,
    Quiz: QuizScreen,
    Field:  FieldScreen,
    Interest: InterestScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
      headerShown: false
    },
  }
);

export default createAppContainer(navigator);
