import { Product } from '../product.model';
import * as ProductsActions from './procucts.actions';

const initalState = {
  products: [new Product('Bree cheese'), new Product('Cherry tomatos')]
};

export function productsReducer(state = initalState, action: ProductsActions.AddProduct) {
  switch (action.type) {
    case ProductsActions.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
  }
}
