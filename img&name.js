import React, {Component} from "react";

class ImgName extends Component{
render(props){
    return(
        <div>
            <h1>{this.props.name}</h1>
            <h4>{this.props.desc}</h4>
            <img src={this.props.pic} alt=""/>
        </div>
    );
}
}
export default ImgName;