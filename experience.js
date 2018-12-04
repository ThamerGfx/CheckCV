import React, {Component} from "react";

class Exp extends Component{
    render(props){
        return(
            <div className="exp">
                <div className="date">
                <h4>{this.props.an_de}</h4>
                <h4>{this.props.an_à}</h4>
                </div>
                <div className="roleetplace">
                <h4>{this.props.role}</h4>
                <h5>{this.props.place}</h5>
                <h5>{this.props.event}</h5>
                </div>
            </div>

        );

    }

}

export default Exp;