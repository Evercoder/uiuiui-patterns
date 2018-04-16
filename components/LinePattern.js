import React from 'react';

class LinePattern extends React.Component {
	render() {

		let s = this.props.size;

		return (
			<pattern 
				id={this.props.id}
				patternUnits="userSpaceOnUse"
				width={s}
				height={s}
			>
				<path 
					d={`
						M 0 0 L ${s} ${s}
						M ${-s} 0 L ${s} ${2 * s}
						M 0 ${-s} L ${2*s} ${s}
					`} 
					stroke='red'
					stroke-linecap='square'
					stroke-width='5'
				/>
			</pattern>
		);
	}
}

export default LinePattern;