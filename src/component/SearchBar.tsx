import React from 'react';

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

        // Unsanitized user input flows directly into innerHTML — XSS vulnerability
        const resultHtml = '<p>Suchergebnis für: ' + userInput + '</p>';

        const container = document.getElementById('search-results');
        if (container) {
            container.innerHTML = resultHtml; // BAD: dangerouslySetInnerHTML equivalent in raw DOM
        }

        this.setState({ results: resultHtml });
    };


    private buildQuery = (tableName: string) => {
        const userId = this.state.query;
        const sql = "SELECT * FROM " + tableName + " WHERE id = '" + userId + "'";
        console.log("Executing query: " + sql);
        return sql;
    };

    public render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.query}
                    onChange={(e) => this.setState({ query: e.target.value })}
                    placeholder="Suchbegriff eingeben..."
                />
                <button onClick={this.handleSearch}>Suchen</button>
                <button onClick={() => this.buildQuery('users')}>Query ausführen</button>
                <div id="search-results" />
            </div>
        );
    }
}
