import React from 'react';
import Layout from './layout';

export default function App() {
    return (
    <Layout/>
    );
}

// interface Props { 
//     compiler: string; 
//     framework: string; 
// };

// export function App(props: Props) {
//     return (
//         <h1 style={centeredContent}>
//             Hello from {props.compiler} and {props.framework}!!!
//         </h1>
//     );
//}

// const centeredContent: React.CSSProperties = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%'
// }



// class App2 extends React.Component<Props> {
//     render() {
//         const { compiler, framework } = this.props
//         return (
//             <h1 style={centeredContent}>
//                 Hello from {this.props.compiler} and {this.props.framework}!!!
//             </h1>
//         )
//     }
// }