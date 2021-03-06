/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

import './style.scss';

class DnsServerRestartButton extends React.Component {

	getButtonText = () => {
		if ( this.props.serverRunning ) {
			return 'Restart DNS server';
		}

		return 'Waiting for server...';
	};

	restartServer = () => {
		if ( this.props.serverRunning ) {
			this.context.socketComm.dispatch(
				'server:restart',
			);
		}
	};

	render = () => {
		return (
			<button
				className="dns-server-restart-button"
				onClick={ this.restartServer }
			>
				{ this.getButtonText() }
			</button>
		);
	};
}

DnsServerRestartButton.propTypes = {
	serverRunning: PropTypes.bool.isRequired,
};

DnsServerRestartButton.contextTypes = {
	socketComm: PropTypes.object,
};

export default DnsServerRestartButton;
