import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header,Text, Card, CardItem, Left, Body, Right, Button, Icon,Content, Title,Thumbnail } from 'native-base';

export default class Pesanan extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#49b3e8"}}>
          <Body>
          <Title>Pesanan</Title>
          </Body>
          <Right>
          <Button transparent>
            <Icon type="Ionicons"name='md-paper' />
          </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
        <Text style={{fontSize:18,fontWeight: '100',color:"black",paddingTop:8,left:10,paddingBottom:8}}>E-Tiket & Voucher Aktif</Text>

        <Card style={{left:5,width:305}}>
            <CardItem>
            <Left>
               <Thumbnail large source={require('./Image/zzz.jpg')} style={{height:90,width:80}} />
               <Body>
                 <Text>Belum Ada Pesanan Aktif</Text>
                 <Text>Seluruh pesanan Anda akan muncul disini.Makin fleksibel mengaturnya dengan masuk ke akun Traveloka Anda.</Text>
                  <View style={{flexDirection: 'row',paddingTop:5}}>
                  <Button light style={{alignSelf:"center",width:80,height:32,marginRight:7}}>
         	         <Text>Masuk</Text>
         	          </Button>
                    <Button style={{alignSelf:"center",width:80,height:32}}>
           	         <Text>Daftar</Text>
           	          </Button>
                  </View>
               </Body>
               </Left>
             </CardItem>
         </Card>

         <Text style={{fontSize:18,fontWeight: '100',color:"black",paddingTop:8,left:10,paddingBottom:8}}>Daftar Pembelian</Text>
         <Card style={{left:5,width:305,height:50}}>
            <CardItem style={{justifyContent:"space-between"}}>
              <Icon active type="Ionicons" name='md-paper' />
                <Text>Lihat riwayat pembelian</Text>
                  <Right>
                  <Icon type="Entypo" name="chevron-thin-right" />
                  </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
