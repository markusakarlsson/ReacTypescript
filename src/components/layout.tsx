import React, { CSSProperties } from 'react';
import Navbar from './navbar';
import Content from './content';

export default function Layout() {

    return (
        <div style={layoutStyle}>
            <Navbar/>
            <Content/>
        </div>
    );
}

const layoutStyle: CSSProperties = {
    height: '100%',
}