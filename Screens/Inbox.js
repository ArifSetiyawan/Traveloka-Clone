import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Container,Body, Header, Content, Tab, Tabs,Title,Right,Button,Icon,Card,CardItem } from 'native-base';
import Notifikasi from './Notifikasi';
import Pesan from './Pesan';

class Inbox extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#49b3e8"}}>
        	<Body>
            <Title>Inbox</Title>
          </Body>
        <Right>
        <Button transparent>
          <Icon name='more' />
          </Button>
        </Right>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: "#49b3e8"}}>
        <Tab tabStyle={{backgroundColor: "white"}} activeTextStyle={{color: "#49b3e8"}} activeTabStyle={{backgroundColor: "white"}} heading="Notifikasi">
            <Notifikasi />
          </Tab>
          <Tab activeTabStyle={{backgroundColor: "white"}} activeTextStyle={{color: "#49b3e8"}} tabStyle={{backgroundColor: "white"}} heading="Pesan">
            <Pesan />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:null,
    height:null
  }
});


export default Inbox;
