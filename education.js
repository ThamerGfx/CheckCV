import React, {Component} from "react";

class Educt extends Component{
    render(props){
        return(
            <div className="exp">
                <div>
                    <h4>{this.props.an_de}</h4>
                    <h4>{this.props.an_à}</h4>
                </div>
                <div className="roleetplace">
                    <h5>{this.props.place}</h5>
                    <h5>{this.props.event}</h5>
                </div>
        </div>


        );

    }

}

export default Educt;