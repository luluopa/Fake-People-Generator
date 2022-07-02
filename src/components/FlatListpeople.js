import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ItemPerson from './ItemPerson';

const FlatListpeople = (props) => {
    const {people} = props;
    const {navigation} = props;

    const NUMBER_TO_FETCH = 5;

    const addMorePeople = () => {
        props.fetchData(NUMBER_TO_FETCH);
    }

    const returnPerson = ({item}) => {
        return <ItemPerson person={item} navigation={navigation}/>
    }

    return(
        <FlatList
            data={people}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                addMorePeople();
            }}
            renderItem={returnPerson}
            keyExtractor={(item, index) => item.login.uuid.toString()}
        />
    );
}

export default FlatListpeople;