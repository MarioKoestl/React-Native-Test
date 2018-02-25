import React from 'react';
import { Greeting } from './Greeting';
import { View } from 'react-native';
export class Main extends React.Component {
    render() {
        return (React.createElement(View, { style: { alignItems: 'center' } },
            React.createElement(Greeting, { name: 'sepp23434' }),
            React.createElement(Greeting, { name: 'hugo' })));
    }
}
