import React, { Component } from "react";
import { View } from 'react-native';
import { Container, Header, Title,Text, Button, Icon, Left, Right,Content, Body,Card,CardItem } from "native-base";
export default class Akun extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#49b3e8"}}>
          <Body>
            <Title>Akun saya</Title>
          </Body>
          <Right>
          <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
      <View style={{paddingBottom:22,paddingTop:10,borderColor: 'grey',borderWidth: 0.4,borderTopColor:'#49b3e8',backgroundColor:"#49b3e8"}}>
        <Text style={{alignSelf:"center",fontSize:14,color:"white",paddingTop:12,paddingBottom:12}}>Jadilah member dan nikamati keuntungannya!</Text>
      <View style={{flexDirection: 'row',paddingTop:10,justifyContent:"center"}}>
        <Button light style={{width:135,height:35,marginRight:20,justifyContent:"center"}}>
          <Text style={{alignSelf:"center",color:"blue"}}>Masuk</Text>
        </Button>
        <Button style={{width:135,height:35,justifyContent:"center"}}>
          <Text style={{alignSelf:"center"}}>Daftar</Text>
        </Button>
      </View>
      </View>

    <Content style={{backgroundColor:"#e8e8e8"}}>
      <Card style={{left:5,width:305,height:50}}>
        <CardItem style={{justifyContent:"space-between"}}>
          <Icon type="Feather" name='disc'/>
          <Text>Poin Saya</Text>
          <Right>
            <Icon type="Entypo" name="chevron-small-right" />
          </Right>
         </CardItem>
         </Card>

      <Card style={{left:5,width:305}}>
        <CardItem bordered style={{justifyContent:"space-between",height:25}}>
         <Text>travelokaPay</Text>
         <Right>
           <Icon type="Entypo" name="chevron-small-right" />
         </Right>
        </CardItem>

        <CardItem style={{justifyContent:"space-between"}}>
         <Icon type="FontAwesome" name='credit-card' />
          <Text>Kartu Saya</Text>
          <Right/>
        </CardItem>

        <CardItem style={{justifyContent:"space-between"}}>
          <Icon type="EvilIcons" name='archive' />
            <Text>Debit Instan</Text>
            <Right/>
        </CardItem>

    </Card>

    <Card style={{left:5,width:305}}>
      <CardItem bordered style={{justifyContent:"space-between"}}>
        <Icon type="FontAwesome" name='money' />
           <Text>Refund Saya</Text>
           <Right>
             <Icon type="Entypo" name="chevron-small-right" />
           </Right>
      </CardItem>

      <CardItem bordered style={{justifyContent:"space-between"}}>
        <Icon type="Foundation" name='torsos-all' />
            <Text>Passenger Quick Pick</Text>
            <Right>
              <Icon type="Entypo" name="chevron-small-right" />
            </Right>
      </CardItem>

      <CardItem bordered style={{justifyContent:"space-between"}}>
        <Icon type="Feather" name='file-text' />
             <Text>Tagihan Saya</Text>
             <Right>
               <Icon type="Entypo" name="chevron-small-right" />
             </Right>
       </CardItem>

       <CardItem bordered style={{justifyContent:"space-between"}}>
         <Icon type="MaterialCommunityIcons" name='bell-outline' />
              <Text>Notifikasi Harga</Text>
              <Right>
                <Icon type="Entypo" name="chevron-small-right" />
              </Right>
       </CardItem>
    </Card>

    <Card style={{left:5,width:305}}>
      <CardItem bordered style={{justifyContent:"space-between"}}>
            <Icon type="MaterialIcons" name='help-outline' />
            <Text>Pusat Bantuan</Text>
            <Right>
              <Icon type="Entypo" name="chevron-small-right" />
            </Right>
      </CardItem>

      <CardItem bordered style={{justifyContent:"space-between"}}>
          <Icon type="EvilIcons" name='gear' />
             <Text>Pengaturan</Text>
             <Right>
               <Icon type="Entypo" name="chevron-small-right" />
             </Right>
      </CardItem>
    </Card>
    
        <View style={{margin:30}}/>
        </Content>
      </Container>
    );
  }
}
