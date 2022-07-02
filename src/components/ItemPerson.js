import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemPerson= (props) => {
    const {person} = props;
    const {navigation} = props;

    return(
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
            person:person
        })}>
            <View style={style.container}>
                <Image
                    style={style.styleimg}
                    source={{ uri:person.picture.medium }}
                />
                <View style={style.text_container}>
                    <Text style={{marginLeft: 10}}>{person.name.first} {person.name.last}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 5,

        marginBottom: 5,
        backgroundColor: '#E2E2E2',
    },
    text_container:{
        flexDirection: 'row',
        flex: 6,

        alignItems: 'center',
    },

    styleimg:{
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',

        borderRadius: 50
    }
});

export default ItemPerson;