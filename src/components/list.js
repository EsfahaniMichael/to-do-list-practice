import React, { Component } from 'react';


class List extends Component {



    render(){

        const listElements = this.props.data.map((item, index) => {
            return (
                <li className="collection-item" key={item._id}>
                    {item.title}
                    <button onClick={this.props.delete(index)} className="btn red darken-2">Delete</button>
                    </li>
            )
        });
        return (
            <ul className="collection">
                {listElements}
            </ul>
        )
    }
}

export default List;