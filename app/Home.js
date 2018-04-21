
import React , { Component } from 'react';
import { Text , View  , StyleSheet } from 'react-native';
import Button from './common/Button';
export default class Home extends Component {

   constructor (){
   	super();
   	this.state = {
   		title: 'Hello from state'
   	};
   }

_onLoginPressed (){
  this.props.navigation.navigate('Login')
}


  render() {
       return (
       		<View>
       		<Button onPress={this._onLoginPressed.bind(this)}>
                  Login
          </Button>
       		</View>
       	);
  }
}
 const styles = StyleSheet.create({
  header :
         {
         backgroundColor :'#D9F489' ,
         height:80 ,
         alignItems:'center' ,
         justifyContent:'center'

          },
    text:
        {
         fontSize:16,
         fontWeight: 'bold'
        }



 });
