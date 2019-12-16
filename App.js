import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { IndexScreen } from './src/screens/IndexScreen';
import { ShowScreen } from './src/screens/ShowScreen';

import { BlogProvider } from './src/contexts/BlogContext';
import { CreateScreen } from './src/screens/CreateScreen';
import { EditScreen } from './src/screens/EditScreen';

const navigation = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog'
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
