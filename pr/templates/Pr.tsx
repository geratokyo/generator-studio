import * as React from 'react'; 


export interface <%= uCamelCName %>Props{
    className?:string;
}


export const <%= uCamelCName %>: React.SFC<<%= uCamelCName %>Props> = (props)=>{

    let cls = props.className || "";
    return (
        <div className={"<%= kebabCName %> " + cls}>
            
        </div>
    )
}