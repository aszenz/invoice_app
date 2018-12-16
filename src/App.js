import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import EditInvoice from './components/invoices/EditInvoice'
import CreateInvoice from './components/invoices/CreateInvoice'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/create' component={CreateInvoice} />
                        <Route path='/invoice/:id' component={EditInvoice} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App
