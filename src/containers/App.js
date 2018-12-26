import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { items } from '../item/item.js';
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state = {
            items: items,
            searchfield:''
        }
    }
    
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}));
    // }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {items, searchfield} = this.state;
        const filteredRobot = items.filter(items => {
            return items.no.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !items.length ? 
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>IMS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList items={filteredRobot}/>
                </Scroll>
            </div>
        )
    
        
    }
}

export default App;