import React from 'react';
import { connect } from 'react-redux';
import { requestStream } from '../../actions/index';

class StreamShow extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.requestStream(this.props.match.params.id);

    }

    renderContent() {

        if (!this.props.stream) {
            return (
                <div>
                    ...Loading
                    </div>
            )
        }
        return (

            <div>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        )

    }

    render() {
        { console.log(this.props.stream) }
        return <div>{this.renderContent()}</div>
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    console.log(state);
    console.log(state.streams);
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { requestStream })(StreamShow);