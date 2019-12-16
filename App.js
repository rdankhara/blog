import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { IndexScreen } from './src/screens/indexScreen';
import { Provider as BlogProvider } from './src/contexts/BlogContext';

const navigation = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Welcome'
  }
})

const App = createAppContainer(navigation);

export default () => { 
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}
