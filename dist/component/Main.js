import React from 'react';
import { Greeting } from './Greeting';
import { View } from 'react-native';
import { styles } from './styles/styles';
export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIt: true
        };
        setInterval(() => {
            this.setState((prevState) => {
                return Object.assign({}, this.state, { showIt: !prevState.showIt });
            });
        }, 1000);
    }
    render() {
        let { showIt } = this.state;
        let text = showIt ? 'resi Ich liebe dich!!' : '';
        return (React.createElement(View, { style: styles.MainView },
            React.createElement(Greeting, { name: text })));
    }
}
