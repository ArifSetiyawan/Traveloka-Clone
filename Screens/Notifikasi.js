import React, { Component } from 'react';
import {View,Image} from 'react-native';
import { Container, Header,Text, Card, CardItem, Left, Body, Right, Button, Icon,Content, Title,Thumbnail } from 'native-base';

class Notifikasi extends Component {
  render() {
    return (
      <Container>
      <Content style={{backgroundColor:"#e8e8e8"}}>
            <Image source={require('./Image/post.png')} style={{width:320}}/>
            <Text style={{alignSelf:"center",fontSize:17,paddingBottom:7}}>Belum Ada Notifikasi</Text>
            <Text style={{alignSelf:"center",fontSize:13,color:"grey"}}>Semua notifikasi yang kami kirim akan muncul disini supaya</Text>
            <Text style={{alignSelf:"center",fontSize:13,color:"grey"}}>Anda bisa mengeceknya dengan mudah kapan pun.</Text>
      </Content>
      </Container>
    );
  }
}


export default Notifikasi;
