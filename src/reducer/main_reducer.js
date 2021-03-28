import {combineReducers} from 'redux';
import shopping_wishlist from './shopping_wishlist_reducer';
//import gallery from './gallery_reducer';
import wishlist from './wishlist_reducer';

const rootReducer = combineReducers({
    wishlist,
    shopping_wishlist
});

export default rootReducer;
