import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'

export default class MainLayout extends Component {
    render() {
        return (
            <>
                <Header header={this.props.header}/>
                <main>
                    {this.props.children}
                </main>
                <Footer footer={this.props.footer}/>
            </>
        )
    }
}
