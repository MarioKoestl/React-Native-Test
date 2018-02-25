import React from 'react'
import { Greeting } from './Greeting'
import { View } from 'react-native'
import { styles } from './styles/styles'

export namespace Main {
    export interface IProps {
    }
    export interface IState {
        showIt: boolean
    }
}

export class Main extends React.Component<Main.IProps, Main.IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            showIt: true
        }
        setInterval( () => {
            this.setState((prevState) => {
                    return {
                        ...this.state,
                        showIt: !prevState.showIt
                    }
            })
        }, 1000)
    }

    public render() {
        let { showIt } = this.state
        let text = showIt ? 'resi Ich liebe dich!!' : ''
        return (
            <View style={styles.MainView}>
                <Greeting name={text} />
            </View>
        )
    }
}