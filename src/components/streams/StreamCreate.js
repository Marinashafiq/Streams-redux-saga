import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { requestNewStream } from '../../actions/index';


class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.requestNewStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default connect(null, { requestNewStream })(StreamCreate);