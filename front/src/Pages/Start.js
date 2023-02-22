import React from 'react';
import { Button } from '@mui/material';
import { withRouter } from 'react-router';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Start',
        };
    }

    render () {
        const {history} = this.props;
        return (
					<div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						<img src={require('../Images/logo.png')} />
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<img src={require('../Images/image1.png')} style={{ marginRight: 15, height: 500 }} />
							<img src={require('../Images/image2.png')} />
						</div>
                <Button variant='contained' color='success' size='large' sx={ { mt: 8, width: '85%' } } onClick={ () => {document.location.href = window.location.origin + '/home'} }>
							Get started
						</Button>
					</div>
				);
    }
}

export default Start;