import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import API_Services from '../services/API_Service';
import FlatListpeople from '../components/FlatListpeople';
import axios from 'axios';

export default class ListPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            peoples: [],
            loading: false,
            loading_more: false,
            load_more_error: false,
            error: false,
            user_numbers: 12,
            error_message_fetch: "",
        }
    }

    componentDidMount(state, props){
        this.setState({loading: true});
        API_Services.List_user_random_by_number(this.state.user_numbers)
        .then(response => {
            const {results} = response.data;
            this.setState({loading: false, error: false, peoples: results});
        })
        .catch(error => {
            this.setState({loading: false, error: true, error_message_fetch: error})
        });    
    }

    Fetch_data = (number_to_fetch) => {
        this.setState({loading_more: true});
        API_Services.List_user_random_by_number(number_to_fetch)
        .then(response => {
            const {results} = response.data;
            let added_data = [...this.state.peoples, ...results]
            this.setState({load_more_error: false, loading_more: false, peoples: added_data});
        })
        .catch(error => {
            this.setState({load_more_error:true, loading_more: false});
        })
    }

    Render_list = () => {
        if(this.state.loading){
            return (
                <View style={style.container}>
                    <ActivityIndicator size="large" color="#E13b3f"/>
                </View> 
            );
        }
        else if(this.state.error){
            return(
                <View>
                    <Text>Error {this.error_message_fetch}</Text>
                </View>
            );
        }
        else{
            return(
                <FlatListpeople peoples={this.state.peoples} navigation={this.props.navigation} Fetch_data={this.Fetch_data}/>
            );
        }
    }

    render(){
        return (
            <View style={style.container}>
                {this.Render_list()}
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
	},
});