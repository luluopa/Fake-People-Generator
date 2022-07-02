import React from 'react';
import { View, Image, StyleSheet, Dimensions, ShadowPropTypesIOS } from 'react-native';
import Line from '../components/Line';

export default class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            person: props.route.params.person,
            uriLarge: props.route.params.person.picture.large
        }
    }

    render(){
        return(
            <View style={style.container}>
                <Image
                    style={style.styleimg}
                    source={{ uri:this.state.uriLarge }}
                />

                <View style={style.container_labels}>
                    <Line label="Name" content={this.state.person.name.first + " " + this.state.person.name.last}/>
                    <Line label="Gender" content={this.state.person.gender}/>
                    <Line label="Email" content={this.state.person.email}/>
                    <Line label="Phone" content={this.state.person.cell}/>
                    <Line label="Country" content={this.state.person.location.country}/>
                </View> 
            </View>
        );
    }
}

const style = StyleSheet.create({
    styleimg:{
        height: Dimensions.get('window').width/2,
        width:  Dimensions.get('window').width/2,
        resizeMode: 'contain',
        flex: 1,
        borderRadius: 5
    },
    container: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
	},
    container_labels:{
        flex: 1
    }
});