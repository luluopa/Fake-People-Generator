import React from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PeopleListitem from './PeopleListitem';

const FlatListpeople = (props) => {
    const {peoples} = props;
    const {navigation} = props;

    const number_to_fetch = 10;

    const Item_people = (item) => {
        return (
            <PeopleListitem people={item} navigation={navigation}/>
        );
    }

    const Add_more_data = () => {
        props.Fetch_data(number_to_fetch);
    }

    return(
        <FlatList
            data={peoples}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                Add_more_data();
            }}
            renderItem={({item}) => Item_people(item)}
            keyExtractor={(item, i) => i}
        />
    );
}

export default FlatListpeople;