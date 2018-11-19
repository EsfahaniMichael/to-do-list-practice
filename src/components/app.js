import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, { Component } from 'react';
import List from './list';
import axios from 'axios';
import AddItem from './add_item'

import { randomString } from '../helpers'

const BASE_URL = "http://api.reactprototypes.com/todos";
const API_KEY = '?key=c918_michael';

console.log('random string: ', randomString(20));
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: [],
            error: ''
        }

    }

    deleteItem = async (id) => {
        console.log('Delete item with ID', id);
        const resp = await axios.delete(`${BASE_URL}/${id + API_KEY}`)

        this.getListData();
    }

    addItem = async (item) => {
        const resp = await axios.post(BASE_URL + API_KEY, item);

        this.getListData();
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        axios.get(BASE_URL + API_KEY).then((resp) => {
            console.log(resp);

            this.setState({
                list: resp.data.todos
            });
        }).catch((err) => {
           console.log('request error:', err.message);
           this.setState({
               error: 'Error getting todos'
           });
        });

    }

    render() {
        const {error } = this.state;

        console.log('HERE IT IS', this.state.list)
        return(
            <div className="container">
                <h1 className="center">To Do List</h1>

                <AddItem add={this.addItem}/>
                {
                    error
                        ?
                        <h1 className="center red-text">{error}</h1>
                        :
                        <List delete = {this.deleteItem} data ={this.state.list}/>
                }


            </div>
         );
    }
}

export default App;
