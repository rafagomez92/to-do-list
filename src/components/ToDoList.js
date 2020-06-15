import React, { Component } from 'react';

class ToDoList extends Component {
    constructor() {
        super();
        this.state={
            item: "",
            list:[]
        } 
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    añadirItem() {
        const nuevoItem = {
            id: 1 + Math.random(),
            value: this.state.Item.slice()
        };

        const list = [...this.state.list];

        list.push(nuevoItem);

        this.setState({
            list,
            item:""
        })
    }

    deleteItem(id) {
        const list =[...this.state.list];

        const actualizarLista = list.filter(item=> item.id != id);

        this.setState({
            list: actualizarLista
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-6 input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.item}
                            onChange={e => this.updateInput("item", e.target.value)}
                            placeholder="Nueva tarea" />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-danger" 
                                type="button" 
                                onClick={() => this.añadirItem()}                        
                            >
                                +
                            </button>
                        </div>
                        <ul>
                            {this.state.list.map(item => {
                                return(
                                    <li key={item.id}>
                                        {item.value}
                                        <button
                                            onClick={() => this.deleteItem(item.id)}
                                            >
                                                x
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                 </div>
                </div>
            </div>
        )
    }
}
export default ToDoList;