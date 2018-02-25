import React from 'react'
import { Text } from 'react-native'

export namespace Greeting {
    export interface IProps {
        name: string
    }
}

export class Greeting extends React.Component<Greeting.IProps, any> {
    public render() {
        return (
            <Text>Hello {this.props.name}</Text>
        )
    }
}