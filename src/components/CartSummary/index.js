// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <div className="cardSummary">
          <h1 className="cardSummary_heading">
            Order Total: <span className="span">Rs {total}/-</span>
          </h1>
          <p className="cardSummary_para">{cartList.length} items in cart</p>
          <button className="cardSummary_btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
