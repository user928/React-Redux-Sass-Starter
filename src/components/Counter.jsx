import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../containers/Controls';
import SVGIcon from './SVGIcon/SVGIcon';

class Counter extends Component {
	render() {
		const { count } = this.props;

		return (
			<div className="counter">
				<div>{count}</div>
				<Controls/>
				<hr/>

				<span>
					<SVGIcon icon="wrench" wrapperClassName="AppLanding__icon" size={80}/>
					<a href="https://github.com/Gigacore/React-Redux-Starter">Fork it on Github</a>
				</span>
			</div>
		);
	}
}

Counter.propTypes = {
	count: PropTypes.number,
};

export default Counter;
