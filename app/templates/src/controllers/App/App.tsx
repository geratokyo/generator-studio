import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom';

import { ACTIONS } from './Actions';
import { AppProps, inAppState, inAppInitialState } from './StateAndProps';
import Splash from '../../pages/Splash/Splash';
import DATA_SERVICE from '../../services/DataService';
import { Spinner } from '../../components/ui/Spinner/Spinner';

export const STATE_KEY = 'app';

class App extends React.Component<AppProps, inAppState>{
    constructor(props: AppProps) {
        super(props);
        this.state = inAppInitialState;
    }

    componentDidMount() {
        /*******************************************************
        * Update Firebase credentials and uncomment to load data
        ********************************************************/

        // if (DATA_SERVICE.isDataLoaded) {

        //     this.props.loadData(DATA_SERVICE.getData());
        // } else {
        //     DATA_SERVICE.load().then((e) => {
        //         this.props.loadData(e);
        //     })
        // }
    }

    render() {
        // if (!DATA_SERVICE.isDataLoaded) {
        //     return <Spinner />
        // }
        return (
            <div className={`app`}>
                <Router hashType="noslash">
                    <Switch>
                        <Route exact path="/" component={Splash} />
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
