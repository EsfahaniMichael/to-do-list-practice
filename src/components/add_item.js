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
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={(e) => {this.setState({title: e.target}) }}
                            />
                            <label>Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <input
                                type="text"
                                value={this.state.details}
                            />
                            <label>Details</label>
                        </div>
                    </div>

                </form>

        );
    }
}

export default AddItem;