import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Act from 'actions';
import util from 'util';
class login extends Component {

	componentWillMount() {
		this.props.dispatch({
			type: Act.DD_CONFIG,
			needAuth: true
		});
	}
	render() {
	  //测试哈哈
		const { actions } = this.props;
		return null;
	}

}

function mapStateToProps(state) {
	const props = {};
	return props;
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps)(login);
