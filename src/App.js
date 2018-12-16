import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import EditInvoice from './components/invoices/EditInvoice'
import CreateInvoice from './components/invoices/CreateInvoice'
import Invoicepdf from './components/invoices/Invoicepdf'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/create' component={CreateInvoice} />
                        <Route exact path='/invoice/:id' component={EditInvoice} />
                        <Route exact path='/invoicepdf/:id' component={Invoicepdf} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App
