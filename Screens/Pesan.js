import React, { Component } from 'react';
import {View,Image} from 'react-native';
import { Container, Header,Text, Button, Icon,Content } from 'native-base';

class Pesan extends Component {
  render() {
    return (
      <Container>
      <Content style={{backgroundColor:"#e8e8e8"}}>
            <Image source={require('./Image/post.png')} style={{width:320}}/>
              <Text style={{alignSelf:"center",fontSize:14,color:"grey"}}>Perlu bantuan terkait pesanan Anda?</Text>
            <View style={{flexDirection: 'row',paddingTop:10,justifyContent:"center"}}>
                <Button light style={{width:100,height:40,marginRight:7}}>
                  <Text style={{fontSize:13,color:"blue"}}>Kirim Pesan</Text>
                </Button>
                <Button style={{width:100,height:40}}>
                  <Text style={{fontSize:12}}>Pelajari FAQ</Text>
                </Button>
            </View>
      </Content>
      </Container>
    );
  }
}

export default Pesan;
