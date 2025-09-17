import { Component } from "react";

export default class CounterClass extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <h1>Counter</h1>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.increment}>Increment</button>
            <button onClick={this.props.decrement}>Decrement</button>
            </>
        )
    }
}