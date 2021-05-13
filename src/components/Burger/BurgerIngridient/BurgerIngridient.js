import React from 'react';
import PropTypes from 'prop-types';
import styling from './BurgerIngridient.css';


const burgerIngridient = (props) => {
    let ingridient = null;
    
    
    switch (props.type) {
        case('bread-bottom'):
            ingridient = <div className={styling.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingridient = <div className={styling.BreadTop}>
                <div className={styling.Seeds1}></div>
                <div className={styling.Seeds2}></div>
            </div>;
            break;
        case('meat'):
            ingridient = <div className={styling.Meat}></div>;
            break;
        case('cheese'):
            ingridient = <div className={styling.Cheese}></div>;
            break;
        case('salad'):
            ingridient = <div className={styling.Salad}></div>;
            break;
            case('bacon'):
            ingridient = <div className={styling.Bacon}></div>;
            break;
        default:
            ingridient = null;

    }

burgerIngridient.propTypes = {
    type: PropTypes.string.isRequired
};
    

    return ingridient;


};

export default burgerIngridient;