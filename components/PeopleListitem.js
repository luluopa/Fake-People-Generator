import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PeopleListitem = (props) => {
    const {people} = props;
    const {navigation} = props;

    console.log(navigation);

    return(
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
            people:people
        })}>
            <View style={style.container}>
                <Image
                    style={style.styleimg}
                    source={{ uri:people.picture.medium }}
                />
                <View style={style.text_container}>
                    <Text style={{marginLeft: 10}}>{people.name.first} {people.name.last}</Text>
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

export default PeopleListitem;