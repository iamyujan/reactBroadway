import React, { Component } from 'react'
import MainLayout from './MainLayout';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: 'Biplav'
        }
        console.log('constructor');
    }
    componentWillMount(){
        console.log('componentWill Mount');
    }
    componentDidMount(){
        console.log('component Did Mount')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        alert('press ok to continue')
        console.log('component did update')
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
    handleChange = () => {
        console.log('name changed')
        this.setState({
            name: 'Maoist'
        }, ()=>{
        })
    }
    render() {
        console.log('render')
        let hello = "earth"
        return (
            <MainLayout header="header1" footer="footer">
                <h1>{ this.props.data }</h1>
                <h2>{ this.state.name }</h2>
                <button onClick={this.handleChange}>Change My Name</button>
                <a href="https://github.com">Git</a>
            </MainLayout>
        )
    }
}
