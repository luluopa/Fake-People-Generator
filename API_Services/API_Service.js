import axios from 'axios';
import React from 'react';

const  link_numbers = 'https://randomuser.me/api/?results=';
const link_one = 'https://randomuser.me/api/';

export default class API_Services extends React.Component{

    static List_user_random_by_number = (number) => {
        if(number > 0){
            var link_with_numbers = link_numbers + number;
            return axios.get(link_with_numbers);
        }   
    }

    static Get_one_user_random = () => {
        return axios.get(link_one);
    }
}