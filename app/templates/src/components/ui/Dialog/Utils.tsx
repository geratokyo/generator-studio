import * as React from 'react';
import { Button } from '../Button/Button';
import { DP } from '../../../constants';
import { Translation } from '../../../models/models';
import { EmbedCode } from '../EmbedCode/EmbedCode';
import { IS_SAFARI, IS_MOBILE } from '../../../config';

export function SHOW_EMBED_DIALOG(locale: Translation) {
   DP.show((res, rej) => {
       return (
               <div className="embed-container container">

                   <div className="row">
                       <div className="col s12">
                           <h1 className="dialog__header center"><p>{locale.embedCopyTitle}</p></h1>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col s12">
                           <EmbedCode
                               locale={locale}
                               height={600} />
                       </div>
                   </div>

               </div>
       )
   }, { wrapHeight:"medium-height", wrapWidth:'medium-width' })
}

export function SHOW_INFO_DIALOG(locale: Translation) {
   let infoHtml = { __html: locale.informationCopy }
   DP.show((res, rej) => {
       return (
               <div className="info-container container">

                   <div className="row">
                       <div className="col s12">
                           <h1 className="center dialog__header"><p>{locale.infoTitle}</p></h1>
                       </div>
                   </div>
                   <div className="row">
                       <div className="center col s12 m12  offset-m2" dangerouslySetInnerHTML={infoHtml}></div>
                   </div>
               </div>
       )
   }, { wrapHeight:"full-height", wrapWidth:'full-width' })
}