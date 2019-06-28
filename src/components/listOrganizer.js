import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ListOrganizer extends Component {
	state = {
		open: true
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { columnsToOrganize, sortColumn, sortList, style } = this.props;
		return (
			<div className="" style={{ ...style }}>
				<div className="">
					<label className="" style={{ marginRight: '15px' }}>
						Sorted by:
					</label>
					<select onChange={sortList} value={sortColumn} className="select-box">
						{columnsToOrganize.map(
							x =>
								x.sort && (
									<option key={x.id} value={x.id}>
										{x.label}
									</option>
								)
						)}
					</select>
				</div>
			</div>
		);
	}
}

ListOrganizer.propTypes = {
	columnsToOrganize: PropTypes.array.isRequired
};

export default ListOrganizer;
