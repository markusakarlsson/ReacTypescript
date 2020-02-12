import React, { CSSProperties } from 'react';

export default function SectionItem() {
    return (
        <div style={itemStyle}>
            <h3>TITLE</h3>
            <img src="" alt=""/>
        </div>
    );
}

const itemStyle: CSSProperties = {
    height: '100%'
}