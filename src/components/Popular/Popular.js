import React from "react";
import { SelectedLanguages } from "./SelectedLanguages";
import { Repos } from "./Repos";
import { fetchPopularRepos } from "../../utils/api";
import { Loader } from "../Loader/Loader";

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    componentDidMount() {
        this.fetchHandler(this.state.selectedLanguage);
    }

    fetchHandler(language) {
        fetchPopularRepos(language)
            .then(data => this.setState({ repos: data }))
            .catch(error => this.setState({ error: error.message }))
    }

    selectLanguage(language) {
        if (language !== this.state.selectedLanguage) {
            this.setState({ selectedLanguage: language, repos: null });
            this.fetchHandler(language);
        }
    }
    render() {
        return (
            <div>
                <SelectedLanguages
                    selectedLanguage={this.state.selectedLanguage}
                    selectLanguageHandler={this.selectLanguage}
                />
                {this.state.repos ? <Repos repos={this.state.repos} /> : <Loader />}
            </div>
        )
    }
}

export default Popular;