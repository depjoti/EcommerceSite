// import React from "react";

// class SearchBar extends React.Component {
//   /*onInputChange(event) {
//     console.log(event.target.value);
//   }
//   onInputClick() {
//     console.log("Input was clicked");
//   }*/

//   state = { term: "" };

//   onFormSubmit = (event) => {
//     event.preventDefault(); //to prevent the aumatically refresh the page when type the enter the text and type enter button
//     this.props.onSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div>
//             <label>Image Search</label>
//             <input
//               type="text"
//               //onClick={this.onInputClick}
//               value={this.state.term}
//               onChange={(e) => this.setState({ term: e.target.value })}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;

import React, {Component} from 'react';
import {ProductConsumer} from '../contextApi';
import { InputGroup,Form,Button } from 'react-bootstrap';
//import './searchformstyle.css';

class SearchProduct extends Component {
	state = {search: " "};

	searchFormSubmitHandler = (event) => {
		event.preventDefault();
		let searchKeyword = this.state.search.trim();
		this.props.productSearchHandler(searchKeyword);
		this.setState({search: ''});
	}

	searchChangeHandler = (event) => {
		this.setState({search: event.target.value});
	}

	render() {
		return (
            <ProductConsumer>
                <form onSubmit={this.searchFormSubmitHandler} className="form-container">
                    <input
                        className="input-text"
                        type='text'
                        placeholder='Search...'
                        onChange={this.searchChangeHandler}
                        value={this.state.search}
                    />
                    <button type='submit' id='searchButton'>
                        search
                    </button>
                </form>
                </ProductConsumer>
		);
	}
}
export default SearchProduct;