import { Component } from "react";

class Welcome extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.props.name}</h1>
            </div>
        )
    }
}

export default Welcome