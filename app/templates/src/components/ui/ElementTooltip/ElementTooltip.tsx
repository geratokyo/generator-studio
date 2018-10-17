import * as React from "react"; 


export interface ElementTooltipProps{
    /**
     * This is the element that is going to triger the tooltip to show
     */
    shownElement:JSX.Element; 

    /**
     * Any addition class names to be added to the parent element
     */
    className?:string;

    /**
     * What triggers the too
     */
    triggeredOn:"click"|"hover";

    /**
     * Custom Funtion to call on toggle
     */
    onToggle?:()=>void;

}

export interface ElementTooltipState{
    contentVisible:boolean;
}


export class ElementTooltip extends React.Component<ElementTooltipProps, ElementTooltipState>{
constructor(props:ElementTooltipProps){
        super(props);
        this.state = {contentVisible:false}
    }

    showContent = ()=>{
        this.setState({contentVisible:true});
    }

    hideContent = ()=>{
        this.setState({contentVisible:false});
    }

    toggleContentView = () =>{
        this.state.contentVisible ? this.hideContent() : this.showContent();
        this.props.onToggle && this.props.onToggle();
    }

    render(){
        let props = this.props, 
            state = this.state; 
        return (
            <div className={"element-tooltip trigger-on-" + props.triggeredOn +" "+ props.className}
                data-visible={state.contentVisible}>
                <div className="element-tooltip__main"
                    onClick={this.toggleContentView}>
                    {props.shownElement}
                </div>
                <div className="element-tooltip__content" ref="content-container">
                    {props.children}
                </div>
            </div>
        )
    }
}