import * as React from 'react';
import { Cemester, iCmsItem, Content } from "cemester";
import ScrollableAnchor from "react-scrollable-anchor";

import { SinglePage } from './SinglePage';

const GET_CUSTOM_COMPONENT = (item: iCmsItem, contentPg: SinglePage) => {
    switch (item.type) {
        case "SectionScrollable":
            return (
                <ScrollableAnchor id={item.key}>
                    <section
                        key={item.key}
                        className={item.attributes.className}
                    >
                        {item.children.map(e => <Content item={e} key={e.key} />)}
                    </section>
                </ScrollableAnchor>
            );
        default:
            break;
    }
};

export default GET_CUSTOM_COMPONENT;
