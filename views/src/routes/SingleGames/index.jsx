import React, { Component, PropTypes } from 'react'
// import cs from 'classnames'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventBusAction from 'actions/EventBusAction'

// import './styles'

class SingleGame extends Component {
	constructor (props) {
		super(props)
		this.state = {
		}
	}
	componentDidMount() {
		/*  根据AccessToken获取用户基础信息  */
	}
	render() {
		return (
			<div className="single-game-view">
				{ this.props.children }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {store: state}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(EventBusAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleGame)

SingleGame.propTypes = {
	children: PropTypes.any,
	actions: PropTypes.any,
	history: PropTypes.any,
	location: PropTypes.any
}

SingleGame.contextTypes = {
	router: React.PropTypes.any.isRequired
}