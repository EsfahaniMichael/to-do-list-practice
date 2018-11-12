import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    render(){
        return (

                <form>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <input type="text"/>
                            <label>Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <input type="text"/>
                            <label>Details</label>
                        </div>
                    </div>

                </form>

        );
    }
}

export default AddItem;