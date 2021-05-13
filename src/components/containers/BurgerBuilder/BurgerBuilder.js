import React, { Component } from 'react';
import Aux from '../../../hoc/AuxFolder/AuxComponent';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';


const INGRIDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.8
}

class BurgerBuilder extends Component {
    
    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState (ingridients) {
        const sum = Object.keys(ingridients).map(igKey => {
            return ingridients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        
        this.setState({purchaseable: sum > 0});
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {...this.state.ingridients};
        updatedIngridients[type] = updatedCount;
        console.log(updatedIngridients)
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingridients: updatedIngridients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngridients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if(oldCount <= 0) {return;}
        const updatedCount = oldCount - 1;
        const updatedIngridients = {...this.state.ingridients};
        updatedIngridients[type] = updatedCount;
        const priceSubtracted = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtracted;

        this.setState({ingridients: updatedIngridients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngridients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You made it!')
    }
    
    render() 
    {
        let disabledInfo = {...this.state.ingridients};
        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <=0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary 
                        ingridients={this.state.ingridients}
                        price={this.state.totalPrice} 
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                    addClick={this.addIngridientHandler}
                    removeClick={this.removeIngridientHandler}
                    disabled={disabledInfo} 
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;