import * as React from 'react'; 
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
  
import { IStoreState } from '../../_reducers';
import { ACTIONS } from './Actions';
import { iActionType, Translation } from '../../models/models';


export interface HomePageProps extends ReactRedux.DispatchProp<any>{
    className?:string;
    locale:Translation;
}

const INIT_STATE:HomePageState = {

}

export interface HomePageState{

}


export class HomePage extends React.Component<HomePageProps, HomePageState>{

    constructor(props:HomePageProps){
        super(props); 
        this.state = INIT_STATE; 
    }

    render(){
        let cls = this.props.className || "";
        return (
            <div className={"home-page " + cls}>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <h1>Studio Generator</h1>
                    </div>
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state: IStoreState, ownProps):Partial<HomePageProps> =>{
    return {
        locale:state.app.locale
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);