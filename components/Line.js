import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = (props) => {
    const {label="", content=""} = props;

    return(
        <View style={style.container}>
            <Text style={style.font_style}>{label}: </Text>
            <Text>{content}</Text>
        </View>
    );
}

const style = StyleSheet.create({   
    container:{
        flexDirection: 'row',
    },
    font_style:{
        fontWeight: 'bold'
    }
});

export default Line;