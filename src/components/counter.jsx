import React, { Component } from "react";

class Counter extends Component {
    state = {
        count :0,
        tags :['tag1', 'tag2', 'tag3']
    };
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() { 
        return (
        <React.Fragment>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'zero' : count;
        
    }
}
 
export default Counter;