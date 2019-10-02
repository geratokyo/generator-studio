import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IStoreState } from '../../_reducers';
import { Translation } from '../../models/models';

export interface SplashProps extends ReactRedux.DispatchProp<any>{
    className?:string;
    locale:Translation;
}

const INIT_STATE:SplashState = {

}

export interface SplashState{

}

export class Splash extends React.Component<SplashProps, SplashState>{

    constructor(props:SplashProps){
        super(props);
        this.state = INIT_STATE;
    }

    render(){
        const { props, state } = this;
        const cls = this.props.className || "";

        return (
            <div className={"splash " + cls}>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <h1>Studio Generator</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps):Partial<SplashProps> =>{
    return {
        locale:state.app.locale
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
