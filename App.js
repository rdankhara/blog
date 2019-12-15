import {createAppContainer} from 'react-navigation';
import { IndexScreen } from './src/screens/indexScreen';
import { createStackNavigator } from 'react-navigation-stack';

const navigation = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

export default createAppContainer(navigation);