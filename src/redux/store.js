import { createStore } from 'redux';

import cartReducer from './cart/cartReducer';
import likeReducer from './instagramLike/instaReducer';

const store = createStore(cartReducer);
export default store;

console.log(store.getState().cart);
