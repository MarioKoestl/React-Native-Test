import React from 'react';
import { Text } from 'react-native';
export class Greeting extends React.Component {
    render() {
        return (React.createElement(Text, null,
            "Hello ",
            this.props.name));
    }
}
