import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles/styles';
export class Greeting extends React.Component {
    render() {
        return (React.createElement(Text, { style: styles.NameText },
            "Hello ",
            this.props.name));
    }
}
