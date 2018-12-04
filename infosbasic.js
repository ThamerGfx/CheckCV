import React, {Component} from "react";

class BasicInf extends Component{
    render(props){
        return(
            <div className="infogen">
                <div>
                    <h6>{this.props.titreadrs}</h6>
                    <h6>{this.props.adrs}</h6>
                </div>
                <div>
                    <h6>{this.props.titrephone}</h6>
                    <h6>{this.props.phone}</h6>
                </div>
                <div>
                    <h6>{this.props.titreemail}</h6>
                    <h6>{this.props.email}</h6>
                </div>
                <div>
                    <h6>{this.props.titredate}</h6>
                    <h6>{this.props.date}</h6>
                </div>
                <div>
                    <h6>{this.props.titrelink}</h6>
                    <h6>{this.props.link}</h6>
                </div>
            </div>

        );

    }

}

export default BasicInf;