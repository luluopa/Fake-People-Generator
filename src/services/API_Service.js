import axios from 'axios';
import React from 'react';

import { LINK_PAGES, LINK } from '../utils/ApiUrl';

export default class API_Services extends React.Component{

    static List_user_random_by_number = (number) => {
        if(number > 0){
            const LINK_NUMBERS = LINK_PAGES + number;
            return axios.get(LINK_NUMBERS);
        }   
    }

    static Get_one_user_random = () => {
        return axios.get(LINK);
    }
}