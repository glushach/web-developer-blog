import React, { Component } from "react";
import './stylesNew.css';

/* use API https://www.thecocktaildb.com/*/
export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
      method: 'GET',
    })
      .then(res => {
        return res.json()
      })
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.drinks
        });
      }, (error) => {
          this.setState({
            isLoaded: true,
            error: true
          });
        }
      )
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <p>Error {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.idDrink}>
              {item.strDrink}
              <img width={50} src={item.strDrinkThumb}/>
            </li>
          ))}
        </ul>
      )
    }
  }

}