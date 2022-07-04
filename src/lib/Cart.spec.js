import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Adidas running shoes - men',
    price: 35388,
  };

  let product2 = {
    title: 'Adidas running shoes - men',
    price: 41872,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created intance', () => {
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    it('should multiply quantity and price e receive the total amount', () => {});

    it('should ensure no more than on product exists at a time', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal().getAmount()).toEqual(35388);
    });

    it('should update total when a product gets included and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal().getAmount()).toEqual(41872);
      // 112.648
    });
  });

  describe('checkout', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    describe('checkout', () => {
      it('should return an object with the total and the list of items when summary() is called', () => {
        cart.add({
          product,
          quantity: 2,
        });

        cart.add({
          product: product2,
          quantity: 3,
        });

        expect(cart.summary()).toMatchSnapshot();
        expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
      });

      it('should reset the when checkout() is called', () => {
        cart.add({
          product: product2,
          quantity: 3,
        });

        cart.checkout();

        expect(cart.getTotal().getAmount()).toEqual(0);
      });
    });
  });
});
