import React, { Component } from 'react';
import { View,ScrollView,Image } from 'react-native';
import { Container,Content,Card,CardItem, Header,Text, Left, Body, Right, Button, Icon, Title,Thumbnail } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#49b3e8"}}>
          <Body>
          <Thumbnail square small source={{uri:'http://press.traveloka.com/wp-content/uploads/2015/08/Traveloka_Secondary_Logo-300x132.png'}}
          style={{height:50,width:105}}/>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>

        <Content>
        <View style={{paddingBottom:18,paddingTop:10,borderColor: 'grey',borderWidth: 0.4,borderTopColor:'#49b3e8'}}>
           <View style={{flexDirection: 'row',left:5}}>
        	       <Button style={{alignSelf:"center"}} transparent rounded>
        	        <Icon style={{color:"grey",fontSize:18}}type="FontAwesome" name="user-o" />
        	         </Button>
          <View style={{alignSelf:"center"}}>
              <Text style={{fontSize:16,fontWeight: '200',color:"grey",paddingBottom:3}}>Masuk atau Daftar</Text>
          	   <Text style={{fontSize: 10,color:"grey"}}>Nikmati Keuntungan member Traveloka!</Text>
              </View>
          </View>
      </View>

<View style={{flexDirection: 'row',left:-1,margin:6,justifyContent: 'space-between',paddingTop:11}}>
    <View>
      <Button style={{alignSelf:"center",backgroundColor: "#49b3e8"}} rounded>
        <Icon style={{color:"white",fontSize:18}}type="FontAwesome" name="plane" />
          </Button>
           <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Tiket</Text>
           <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Pesawat</Text>
    </View>

     <View>
       <Button style={{alignSelf:"center",backgroundColor:"#00be5a"}} rounded>
         <Icon style={{color:"white",fontSize:17}}type="FontAwesome" name="hospital-o" />
          </Button>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Hotel</Text>
     </View>

     <View>
       <Button style={{alignSelf:"center",backgroundColor:"#931682"}} rounded>
          <Icon style={{color:"white",fontSize:18}}type="FontAwesome" name="plane" />
          </Button>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Pesawat +</Text>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Hotel</Text>
     </View>

     <View>
       <Button style={{alignSelf:"center",backgroundColor:"#1ED491"}} rounded>
          <Icon style={{color:"white",fontSize:14}}type="FontAwesome" name="ticket" />
          </Button>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Aktivitas &</Text>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Rekreasi</Text>
     </View>

     <View>
       <Button style={{alignSelf:"center",backgroundColor:"#FF6001"}} rounded>
         <Icon style={{color:"white",fontSize:14}}type="FontAwesome" name="cutlery" />
         </Button>
         <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Kuliner</Text>
     </View>
</View>

<View style={{flexDirection: 'row',left:-1,margin:6,justifyContent: 'space-between'}}>
    <View>
      <Button style={{alignSelf:"center",backgroundColor: "#FCA000"}} rounded>
        <Icon style={{color:"white",fontSize:14}}type="MaterialIcons" name="train" />
         </Button>
         <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Tiket Kereta</Text>
         <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Api</Text>
     </View>

     <View>
       <Button style={{alignSelf:"center",backgroundColor:"#00be5a"}} rounded>
         <Icon style={{color:"white",fontSize:14}}type="MaterialIcons" name="directions-bus" />
          </Button>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Tiket Bus &</Text>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Travel</Text>
     </View>

      <View>
        <Button style={{alignSelf:"center",backgroundColor:"#6DD3CE"}} rounded>
          <Icon style={{color:"white",fontSize:14}}type="MaterialIcons" name="directions-car" />
          </Button>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Transportasi</Text>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Bandara</Text>
     </View>

      <View>
        <Button style={{alignSelf:"center",backgroundColor:"#235D9F"}} rounded>
          <Icon style={{color:"white",fontSize:14}}type="MaterialIcons" name="directions-car" />
          </Button>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Rental Mobil</Text>
     </View>

      <View>
        <Button style={{alignSelf:"center",backgroundColor:"#e8e8e8"}} rounded>
          <Icon style={{color:"black",fontSize:14}}type="MaterialIcons" name="apps" />
          </Button>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:5}}>Semua</Text>
          <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Produk</Text>
      </View>
</View>

<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
  <View style={{flexDirection: 'row',margin:6}}>
    <View style={{paddingRight:5}}>
      <Button style={{alignSelf:"center"}} transparent rounded>
       <Icon style={{color:"black",fontSize:18}}type="Entypo" name="news" />
      </Button>
        <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Tagihan & Isi</Text>
        <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Ulang</Text>
     </View>

     <View style={{paddingHorizontal:9}}>
       <Button style={{alignSelf:"center"}} transparent rounded>
          <Icon style={{color:"black",fontSize:18}}type="Entypo" name="bar-graph" />
       </Button>
        <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Pulsa & Paket</Text>
        <Text style={{fontSize:10,color:'grey',alignSelf:"center",paddingTop:1}}>Internet</Text>
     </View>

     <View style={{paddingHorizontal:20}}>
        <Button style={{alignSelf:"center"}} transparent rounded>
          <Icon style={{color:"black",fontSize:18}}type="FontAwesome" name="youtube-play" />
        </Button>
        <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Bioskop</Text>
     </View>

     <View style={{paddingHorizontal:14}}>
       <Button style={{alignSelf:"center"}} transparent rounded>
         <Icon style={{color:"black",fontSize:18}}type="Entypo" name="credit-card" />
       </Button>
       <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>PayLater</Text>
     </View>

     <View style={{paddingHorizontal:12}}>
       <Button style={{alignSelf:"center"}} transparent rounded>
         <Icon style={{color:"black",fontSize:18}}type="Entypo" name="globe" />
       </Button>
       <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Internet Luar</Text>
       <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Negeri</Text>
     </View>

     <View style={{paddingHorizontal:12}}>
       <Button style={{alignSelf:"center"}} transparent rounded>
         <Icon style={{color:"black",fontSize:20}}type="MaterialIcons" name="flight" />
       </Button>
       <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Online Check-In</Text>
     </View>

     <View style={{paddingHorizontal:12}}>
       <Button style={{alignSelf:"center"}} transparent rounded>
         <Icon style={{color:"black",fontSize:18}}type="Entypo" name="bell" />
       </Button>
       <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Notifikasi</Text>
       <Text style={{fontSize:10,color:'grey',alignSelf:"center"}}>Harga</Text>
     </View>

  </View>
</ScrollView>

<Card transparent style={{width:335,marginTop:30}}>
  <CardItem style={{justifyContent:"space-between"}}>
    <Text style={{fontSize:20}}>Promo Saat Ini</Text>
      <Right>
        <Icon style={{color:"blue"}} type="Entypo" name="chevron-small-right" />
      </Right>
  </CardItem>
 </Card>

<ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
  <View style={{paddingHorizontal:5,paddingLeft:20}}>
    <Image source={require('./Image/promo.jpeg')} style={{width: 125, height: 130}}/>
  </View>

  <View style={{paddingHorizontal:5}}>
    <Image source={
      {uri: "https://tvlk.imgix.net/imageResource/2018/11/16/1542328501187-4283c8d0919883f0a86fda04a137ae21.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75&w=310",
       width: 235, height: 130 }}/>
  </View>

  <View style={{paddingHorizontal:5}}>
    <Image source={
      {uri: "https://tvlk.imgix.net/imageResource/2018/10/10/1539170043610-cb6cf018a51da9dd0882888b8e595b21.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75&w=310",
       width: 235, height: 130 }}/>
  </View>

  <View style={{paddingHorizontal:5}}>
    <Image source={
      {uri: "https://tvlk.imgix.net/imageResource/2018/10/10/1539189379439-122a18085a600382c8e2400eafd29319.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75&w=310",
       width: 235, height: 130 }}/>
  </View>

  <View style={{paddingHorizontal:5}}>
    <Image source={
      {uri: "https://tvlk.imgix.net/imageResource/2018/10/11/1539245811625-ac9f66dd59a4dbaeb3653bbb96a389e7.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75&w=310",
       width: 235, height: 130 }}/>
  </View>
</ScrollView>
  <View style={{margin:30}}/>
          </Content>
      </Container>
  );
}
}
