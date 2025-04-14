import { Component } from "react";

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.props.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Welcome