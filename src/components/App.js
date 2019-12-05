import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
// import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
// import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
import { IntlProvider } from 'react-intl';
import messages from '../locale/messages';
import { connect } from 'react-redux';
import Auth from "../Auth";
const StreamCreate = lazy(() => import('./streams/StreamCreate'));
const StreamList = lazy(() => import('./streams/StreamList'));



class App extends React.Component {
  render() {
    const { lang } = this.props;
    console.log(lang);
    return (
      <IntlProvider
        locale={lang}
        messages={messages[lang]}
      >
        <div className="ui container">
          <Router history={history}>
            <div>
              <Header />
              <Suspense fallback={<h1>Still Loading…</h1>}>
                <Switch>
                  <StreamList path="/" exact />
                  <StreamCreate path="/streams/new" exact />
                  <PrivateRoute path="/streams/:id" exact component={StreamShow} />
                  <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
                  <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
                </Switch>
              </Suspense>
            </div>
          </Router>
        </div>
      </IntlProvider>

    )
  }

}

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log(this.props.auth.isSignedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.getAuth() === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.auth,
    lang: state.locale.lang
  }
}

export default connect(mapStateToProps)(App);
