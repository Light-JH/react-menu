import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component {
    
    renderComments(comments) {
        const commentsElement = comments.map(comment => {
            
            return (
                <div>               
                    <ul className = "list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>                   
                </div>
            )
        });
        return commentsElement;   
    }
    
    renderDish(dish) {
        return (
            <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render(){
        if (this.props.dish != null) {
            return(
                <div className = "container">
                    <div className = "row">
                        <div className = "col-12 col-md-5 m-1">
                           {this.renderDish(this.props.dish)} 
                        </div>
                        <div className = "col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <p style = "text-align:left">{this.renderComments(this.props.dish.comments)}</p>    
                        </div>                       
                    </div>               
                </div>
            )
        } else {
           return  <div></div>
        }
    }
    // constructor (props) {
    //     super (props)
    //     this.state = { 
    //         selectedDish:null
    // }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish});
    // }


    // renderDish(dish){
    //     if (dish != null) {
    //         return(
    //             <div className = "container">
    //                 <div className = "row">
    //                     <div className = "col-12 col-md-5 m-1">
    //                         <Card>
    //                             <CardImg top src={dish.image} alt={dish.name} />
    //                             <CardBody>
    //                             <CardTitle>{dish.name}</CardTitle>
    //                             <CardText>{dish.description}</CardText>
    //                             </CardBody>
    //                         </Card>
    //                     </div>
    //                     <div className = "col-12 col-md-5 m-1">
    //                         <Card>
    //                             <CardBody>
    //                                 <CardTitle>Comments</CardTitle> 
    //                                 <CardText>{dish.comment} </CardText>  
    //                                 <CardText>{--dish.author}, {dish.date}</CardText>  
    //                             </CardBody>
    //                         </Card>
    //                     </div>
    //                 </div>               
    //             </div>
    //         )
    //     } else {
    //         <div></div>
    //     }
    // }

}

export default DishDetail;