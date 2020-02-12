import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';

export default function Content () {

    return (
        <div style={contentStyle}>
            <SectionItem />
            <SectionItem />
            <SectionItem />
        </div>
    );
}

const contentStyle: CSSProperties = {
    height: '100%',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '0 1em'
}