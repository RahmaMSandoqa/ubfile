import React from 'react';
class Search_bar extends  React.Component {
    constructor(props) {
        super(props);
        this.state = { trem: '' };
        this.onInputchang = this.onInputChange.bind(this);
    }
    onInputChange(event){
        this.setState({ term: event.target.value });
    }
    render() { 
        return ( 
            <div>
                <input
                value={this.state.term}
                onChange={this.onInputChange} />
            </div>
         );
    }
}
 
export default Search_bar;