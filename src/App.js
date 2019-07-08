import React, { Component } from 'react'
import MainLayout from './MainLayout';

export default class App extends Component {
    state = {
        name: 'Biplav'
    }
    abc = () => {
        this.setState({
            name: 'Maoist'
        }, ()=>{
            // console.log('name changed')
        })
    }
    render() {
        let hello = "earth"
        return (
            <MainLayout header="header1" footer="footer">
                {
                    console.log('hello')
                }
                <h1>{ this.props.data }</h1>
                <h2>{ this.state.name }</h2>
                <button onClick={this.abc}>Change My Name</button>
            </MainLayout>
        )
    }
}
