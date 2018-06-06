import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';


class Greetings extends Component{

    render(){
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

export default class LotsOfGreetings extends Component{
    render(){
        return(
            <View style = {{ alignItems: 'center'}}>
                <Greetings name = 'Arjun'/>
                <Greetings name = 'Komal'/>
                <Greetings name = 'ABCB'/>
            </View>
        );
    }
}


AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
