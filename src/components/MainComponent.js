import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor (props){
    super(props);

    this.state = {
      dishes: DISHES, 
      selectedDish: null
    }  
  }

  onDishSelect(dishId) {
    this.setState({ 
        selectedDish: dishId
    });        
}

  render () {
    return(   
      <div className="App">
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href="/">Ristornate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {Menu(this.state.dishes, this.onDishSelect)}
        
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    )
  } 
}
export default Main;
