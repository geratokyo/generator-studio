import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, color } from '@storybook/addon-knobs/react';
import {Dialog} from './Dialog'; 


let stories = storiesOf("Dialog", module); 

const GROUPS= {
    PROPS :"PROPS",
    STYLE : "STYLE"
}; 
const label = "Size"; 
const sizeOptions = ["small","medium","large"]
const defaultSize = "medium";

const poslabel = "Position"; 
const posOptions = ["top","bottom","left","right","middle"];
const defaultPos = "middle";


const wrapLabel = "Height"; 
const wrapOptions = ["default","small-height","medium-height","large-height","full-height"]
const defaultWrap = "default";

const wrapWLabel = "Width"; 
const wrapWOptions = ["default","small-width","medium-width","large-width","full-width"]
const defaultWWrap = "default";

stories.addDecorator(withKnobs)

stories.add("Default", ()=>{
    return (
        <div className="story-dialog-service">
            <Dialog 
                spacing={select(label,sizeOptions,defaultSize,GROUPS.PROPS)}
                position={select(poslabel, posOptions, defaultPos, GROUPS.PROPS)}
                wrapHeight={select(wrapLabel, wrapOptions, defaultWrap, GROUPS.PROPS)}
                wrapWidth={select(wrapWLabel, wrapWOptions, defaultWWrap, GROUPS.PROPS)}
                backdropColor={color("Backdrop Color", "rgba(0,0,0,0.4)", GROUPS.STYLE )}
                dialogColor={color("Dialog Color", "#fff", GROUPS.STYLE)}
            >
                <h1>some content</h1>
                <h1>some content</h1>
                <h1>some content</h1>
                <h1>some content</h1>
                <h1>some content</h1>
            </Dialog>
        </div>
    )
})