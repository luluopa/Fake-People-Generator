import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import API_Services from '../services/API_Service';
import FlatListpeople from '../components/FlatListpeople';

export default class ListPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            people: [],
            loading: true,
            loading_more: false,
            load_more_error: false,
            error: false,
            user_numbers: 12,
            error_message_fetch: "",
        }
    }

    componentDidMount(state, props){
        API_Services.List_user_random_by_number(this.state.user_numbers)
        .then(response => {
            const {results} = response.data;
            this.setState({loading: false, error: false, people: results});
        })
        .catch(error => {
            this.setState({loading: false, error: true, error_message_fetch: error})
        });  
    }

    fetchData = (numberFetch) => {
        API_Services.List_user_random_by_number(numberFetch)
        .then(response => {
            const {results} = response.data;
            let sumUpData = [...this.state.peoples, ...results];
            this.setState({load_more_error: false, loading_more: false, people: sumUpData});
        })
        .catch(error => {
            this.setState({load_more_error:true, loading_more: false});
        })
    }

    renderList = () => {
        if(this.state.loading){
            return(
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
                <FlatListpeople people={this.state.people} navigation={this.props.navigation} fetchData={this.fetchData}/>
            );
        }
    }

    render(){
        return (
            <View style={style.container}>
                {this.renderList()}
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