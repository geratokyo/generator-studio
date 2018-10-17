import * as React from 'react'; 


export interface <%= uCamelCName %>Props{

}

const <%= uCamelCName %>HOC= <P extends Object>(WrappedComponent:React.ComponentType<P>)=>{
    return class <%= uCamelCName %>HOC extends React.Component<P, any>{
        state = {
        }

        render(){
            let {...props} = this.props as <%= uCamelCName %>Props;
            return (<div className={"<%= kebabCName %> "}>
                
            </div>)
        }
    }
}

export default <%= uCamelCName %>HOC; 