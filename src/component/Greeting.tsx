import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles/styles'

export namespace Greeting {
    export interface IProps {
        name: string
    }
}

export class Greeting extends React.Component<Greeting.IProps, any> {
    public render() {
        return (
            <Text style={styles.NameText}>Hello {this.props.name}</Text>
        )
    }
}