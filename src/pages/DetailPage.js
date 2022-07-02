import React from 'react';
import { render } from 'react-dom';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Line from '../components/Line';

export default class DetailPage extends React.Component{
    constructor(props){
        super(props);

        const {route} = props;

        this.state = {
            people: route.params.people
        }
    }

    render(){
        let text = this.state.people.picture.large;
        return(
            <View style={style.container}>
                <Image
                    style={style.styleimg}
                    source={{ uri:text }}
                />

                <View style={style.container_labels}>
                    <Line label="Name" content={this.state.people.name.first + " " + this.state.people.name.last}/>
                    <Line label="Gender" content={this.state.people.gender}/>
                    <Line label="Email" content={this.state.people.email}/>
                    <Line label="Phone" content={this.state.people.cell}/>
                    <Line label="Country" content={this.state.people.location.country}/>
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