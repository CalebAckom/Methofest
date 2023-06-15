import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import './App.css';
import logo from './assets/methodist.png'
import mocker from './assets/3Dmocker.jpeg'

// Using a class component, we get access to State

class App extends Component {
    constructor() {
        super();

        this.state = {
            dioceses: [
                {
                    name: "Cape Coast",
                    id: "1",
                    email: "leanne.graham@mail.com",
                    endpoint: "REPpmHht5N46Qnuk7"
                },
                {
                    name: "Accra",
                    id: "2",
                    email: "ervin.howell@mail.com",
                    endpoint: "FmfUM3jAq3ASBKVd6"
                },
                {
                    name: "Kumasi",
                    id: "3",
                    email: "clementine.bauch@mail.com",
                    endpoint: "pdi4teyGWjbpB5br7"
                },
                {
                    name: "Sekondi",
                    id: "4",
                    email: "patricia.lebsack@mail.com",
                    endpoint: "u4R9iXkZuReBqmob9"
                },
                {
                    name: "Winneba",
                    id: "5",
                    email: "chelsey.dietrich@mail.com",
                    endpoint: "qfRSzMZ5P8nQCNaYA"
                },
                {
                    name: "Koforidua",
                    id: "6",
                    email: "dennis.schulist.mail.com",
                    endpoint: "mR9GYgobjy1rXuHA7"
                },
                {
                    name: "Sunyani",
                    id: "7",
                    email: "kurtis.weissnat@mail.com",
                    endpoint: "HXhAWtbtaeoty8RZ8"
                },
                {
                    name: "Tarkwa",
                    id: "8",
                    email: "nicholas.runolfsddottir@mail.com",
                    endpoint: "bjRge5panij4qBeB8"
                },
                {
                    name: "Tamale",
                    id: "9",
                    email: "glenna.reichert@mail.com",
                    endpoint: "SgRNExBzeUymmMLt7"
                },
                {
                    name: "Effiduase",
                    id: "10",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "73to2cTQwthj79nF7"
                },
                {
                    name: "Obuasi",
                    id: "11",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "nwKuebwTEfsEFPq98"
                },
                {
                    name: "Tema",
                    id: "12",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "rL3JKhRhAwwaEw2y6"
                },
                {
                    name: "Nkawkaw",
                    id: "13",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "Bidsq1V216oJGdB76"
                },
                {
                    name: "Somanya",
                    id: "14",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "WEJtDtcYB4zAfcMH8"
                },
                {
                    name: "Goaso",
                    id: "15",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "NCPEq3LtqUsPC7dy7"
                },
                {
                    name: "Ho",
                    id: "16",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "5dKY2WBm9L3buWLVA"
                },
                {
                    name: "Sefwi Bekwai",
                    id: "17",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "Y8men6HkmQFYDdyf6"
                },
                {
                    name: "Wenchi",
                    id: "18",
                    email: "clementina.dubuque@mail.com",
                    endpoint: "vPheiChQTLxn7jvA6"
                }
            ],
            searchField: ''
        };
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    };

    handleScroll = (e) => {
        const element = document.getElementById('scroll');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

    }

    render() {
        // Destructuring
        const { dioceses, searchField } = this.state;
        // Line 70 is equivalent to the below
        // const monsters = this.state.dioceses;
        // const searchField = this.state.searchField;
        const filteredDioceses = dioceses.filter(
            diocese => diocese.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <div style={{ height: '100vh', width: '100%', backgroundColor: '#ddd', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: '#170380', flex: 1, padding: '50px 0' }} >
                        <div>
                            <img src={logo} alt="" style={{ width: 80 }} />
                        </div>
                        <h1 className='texter'>THE METHODIST CHURCH GHANA</h1>
                        <h1 className='texter'>CONNEXIONAL METHOFEST 2023</h1>
                        <h1 className='directions'>DIRECTIONS TO BRANCH</h1>
                    </div>
                    <div style={{ background: 'white', flex: 1, position: 'relative' }} >
                        <div className="overlay">
                            <div className='img-wrapper'>
                                <img src={mocker} alt="" />
                            </div>
                            <div className='boom'>
                                <p className='dir'>A Digital Directional Road Guide to Akyem Oda Methodist Cathedral</p>
                                <button onClick={this.handleScroll}>Click me</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section id='scroll'>
                    <h1>Dioceses</h1>
                    <SearchBox
                        placeholder='Search Dioceses'
                        handleChange={this.handleChange}
                    />
                    <CardList dioceses={filteredDioceses} />
                </section>
            </div>
        )
    }
}

export default App;
