var Counter = React.createClass({
	getDefaultProps: function() {
		return {
			default: 0
		}
	},
	getInitialState: function() {
		return {
			counter: this.props.default,
		};
	},

	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},

	componentsWillMount(){
		console.log("loading");
	},

	componentDidMount(){
		console.log(".....");
	},

	render: function() {
		console.log('rendering....');
		return React.createElement('div', {className: 'count'},
			React.createElement('span', {}, 'Score: ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, '+1'),
			React.createElement('button', {onClick: this.decrement}, '-1')
			);
	}
});

var counter = React.createElement('div', {},
	React.createElement(Counter, {default: 6}),
	React.createElement(Counter, {default: -44}),
	React.createElement(Counter, {default: 10232}),
	React.createElement(Counter)
);


ReactDOM.render(counter, document.getElementById('app'));
