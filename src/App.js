import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box';
import './App.css';
import { Card } from "./components/card";
import LandingHero from './components/landing-hero';
import { dioceses } from './helpers/dioceses-data';

class App extends Component {
    constructor() {
        super();
        this.state = {
            dioceses: dioceses,
            searchField: ''
        };
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    };

    render() {
        const { dioceses, searchField } = this.state;
        const filteredDioceses = dioceses.filter(diocese => diocese.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="App">
                <LandingHero />
                <section id='scroll'>
                    <h1>Dioceses</h1>
                    <SearchBox
                        placeholder='Search Diocese'
                        handleChange={this.handleChange}
                    />
                    <div className="card-list">
                        {
                            filteredDioceses.map(diocese => (
                                <Card key={diocese.id} diocese={diocese} />
                            ))
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default App;