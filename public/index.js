var React = require('react');
var ReactDOM = require("react-dom");

class Layout extends React.Component{
	render(){
		return (
			<h1>It works!</h1>
			);
	}
}

var app = document.getElementById("app");

// ReactDOM.render(
// 	<div>
// 		<h1>This is a test of react</h1>
// 	</div>,
// 	document.getElementById("app"));

ReactDOM.render(<Layout/>, app);