import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Login from './Login';
import qldssvien from './qldssvien';
import qlsvien from './qlsvien';
import qllop from './qllop';


const RootStack = createStackNavigator(
  {
    Login: Login,
    qldssvien: qldssvien,
    qlsvien: qlsvien,
    qllop: qllop
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
