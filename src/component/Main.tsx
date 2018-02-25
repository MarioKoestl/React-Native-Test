import React from 'react'
import { Greeting } from './Greeting'
import { View } from 'react-native'

export namespace Main {
    export interface IProps {
    }
}

export class Main extends React.Component<Main.IProps, any> {
    public render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='sepp23434' />
                <Greeting name='hugo' />
            </View>
        )
    }
}