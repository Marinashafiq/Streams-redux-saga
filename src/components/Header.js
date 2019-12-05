import React from 'react';
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';
import { setCurrentLang, getCurrentLang } from '../actions/index';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

class Header extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }
    switcher = (lang) => {
        console.log(lang);
        if (lang == 'ar') {
            this.props.setCurrentLang('en');
        }
        else {
            this.props.setCurrentLang('ar');
        }
    }

    renderLangSwitcher = () => {
        console.log(this.props.lang);
        return (
            <div className="m-3">
                <button id="en" className="ui button" onClick={() => this.switcher('en')}>English</button>
                <button id="ar" className="ui button" onClick={() => this.switcher('ar')}>العربية</button>
                <button id="ar" className="ui button" onClick={() => this.switcher(this.props.lang)}>{this.props.lang == 'ar' ? 'العربية' : 'English'}</button>
            </div>
        )
    }

    render() {
        const { messages } = this.props.intl;
        return (
            <div className="ui secondary pointing menu">
                {this.renderLangSwitcher()}
                <Link to="/" className="item">
                    {/* Streams */}
                    {messages.streams}
                </Link>
                <div className="right menu">
                    <Link to="/" className="item">
                        {messages.goStreams}
                    </Link>
                    <GoogleAuth />
                </div>
            </div>
        );
    }

};


const mapStateToProps = state => {
    console.log(state);
    return { lang: state.locale.lang }
}

const HeaderComponent = injectIntl(Header);

export default connect(mapStateToProps, { setCurrentLang, getCurrentLang })(HeaderComponent);
// export default Header;