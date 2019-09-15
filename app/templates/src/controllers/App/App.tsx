import * as React from 'react';
import { Reducer } from './Reducer';
import { AppProps, inAppState, WINDOW_VIEWS, inAppInitialState, AppInitState, AppState } from './StateAndProps';
import { ACTIONS, TYPES } from './Actions';
import * as _ from 'lodash';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import HomePage from '../../pages/Homepage/Homepage';
import DATA_SERVICE from '../../services/DataService';
import { Spinner } from '../../components/ui/Spinner/Spinner';

export const STATE_KEY = 'app';

class App extends React.Component<AppProps, inAppState>{
    constructor(props: AppProps) {
        super(props);
        this.state = inAppInitialState;
    }

    componentDidMount() {
        if (DATA_SERVICE.isDataLoaded) {

            this.props.loadData(DATA_SERVICE.getData());
        } else {
            DATA_SERVICE.load().then((e) => {
                this.props.loadData(e);
            })
        }
    }

    render() {
        let state = this.state,
            props = this.props;

        if (!DATA_SERVICE.isDataLoaded) {
            return <Spinner />
        }
        return (
            <div className={`app`}>
                <Router hashType="noslash">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/full-content" component={HomePage} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

function mapStateToProps(state: any, ownProps) {
    return {
        appState: state.app
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadData: ACTIONS.DATA_LOADED }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);