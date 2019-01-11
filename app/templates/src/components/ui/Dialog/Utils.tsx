import * as React from 'react';
import { Button } from '../Button/Button';
import { DP } from '../../../constants';
import { Translation } from '../../../models/models';
import { EmbedCode } from '../EmbedCode/EmbedCode';
import { IS_SAFARI, IS_MOBILE } from '../../../config';

export function SHOW_EMBED_DIALOG(locale: Translation) {
    DP.show((res, rej) => {
        return (
            <EmbedComponent locale={locale} />
       )
    }, { wrapHeight: "medium-height", wrapWidth: 'medium-width' })
}

export function SHOW_INFO_DIALOG(locale: Translation) {
    DP.show((res, rej) => {
        return (
            <InfoComponent locale={locale} />
        )
    }, { wrapHeight: "full-height", wrapWidth: 'full-width' })
}



export const InfoComponent: React.SFC<any> = (props) => {
    let infoHtml = { __html: props.locale.informationCopy }
    return (
        <div className="info-container container">
            <div className="row">
                <div className="col s12">
                    <h1 className="center dialog__header"><p>{props.locale.infoTitle}</p></h1>
                </div>
            </div>
            <div className="row">
                <div className="center col s12 m12  offset-m2" dangerouslySetInnerHTML={infoHtml}></div>
            </div>
        </div>
    )
}

export const EmbedComponent: React.SFC<any> = (props) => {
    return (
        <div className="embed-container container">

            <div className="row">
                <div className="col s12">
                    <h1 className="dialog__header center"><p>{props.locale.embedCopyTitle}</p></h1>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <EmbedCode
                        locale={props.locale}
                        height={600} />
                </div>
            </div>

        </div>
    )
}