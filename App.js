import React, {Component} from 'react';
import { createBottomTabNavigator,createAppContainer } from "react-navigation";
import { Button, Text, Footer, FooterTab,Icon,Container,Header,Content } from "native-base";
import Home from './Screens/Home';
import Akun from './Screens/Akun';
import Inbox from './Screens/Inbox';
import Pesanan from './Screens/Pesanan';

const TabNavigator = createAppContainer (createBottomTabNavigator({
  Home:     {
  screen: Home,
  navigationOptions: {
  tabBarIcon: ({ tintColor }) => (
  <Icon style={{color: tintColor }} type="Octicons" name="home" />
    )
    }
  },
  Pesanan:  {
  screen: Pesanan,
  navigationOptions: {
  tabBarIcon: ({ tintColor }) => (
  <Icon style={{color: tintColor }} type="MaterialCommunityIcons" name="notebook" />
      )
    }
  },
  Inbox:    {
  screen: Inbox,
  navigationOptions: {
  tabBarIcon: ({ tintColor }) => (
  <Icon style={{color: tintColor }} type="Octicons" name="mail-read" />
      )
    }
  },
  Akun:     {
  screen: Akun,
  navigationOptions: {
  tabBarIcon: ({ tintColor }) => (
  <Icon style={{color: tintColor }} type="FontAwesome" name="user-o" />
      )
    }
  }
},{
  tabBarOptions: {
  initialRouteName: 'Home',
  activeTintColor: '#0965c6',
  inactiveTintColor: 'grey',
}
}
))
export default class App extends Component{
  render(){
    return(
      <TabNavigator/>
      );
  }
}
