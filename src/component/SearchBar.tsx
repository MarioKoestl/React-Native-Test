import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export class SearchBar extends React.Component<{}, { query: string; results: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            query: '',
            results: ''
        };
    }


    private handleSearch = () => {
        const userInput = this.state.query;
        const resultHtml = '<p>Suchergebnis für: ' + userInput + '</p>';

        // BAD: Unsanitized user input assigned to innerHTML
        const container = (document as any).getElementById('search-results');
        if (container) {
            container.innerHTML = resultHtml;
        }

        this.setState({ results: resultHtml });
    };


    private buildQuery = (tableName: string) => {
        const userId = this.state.query;
        // BAD: Direct string concatenation with user input
        const sql = "SELECT * FROM " + tableName + " WHERE id = '" + userId + "'";
        console.log("Executing query: " + sql);
        return sql;
    };

    public render() {
        return (
            <View>
                <TextInput
                    value={this.state.query}
                    onChangeText={(text) => this.setState({ query: text })}
                    placeholder="Suchbegriff eingeben..."
                />
                <TouchableOpacity onPress={this.handleSearch}>
                    <Text>Suchen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.buildQuery('users')}>
                    <Text>Query ausführen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
