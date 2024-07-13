import { useDispatch } from "react-redux";
import { addedNumCart } from "../../store/cart";
import { useSelector } from "react-redux";


function ProduceDetails({ produce }) {
  const cart = useSelector(state=> state.cart)
  const cartItem = {};
  const dispatch = useDispatch()

  const plusButtonClick = () => {
    console.log('produceDetail CART', cart[produce.id])
    if(cart[produce.id]) dispatch(addedNumCart({id: produce.id, count: cart[produce.id].count}))
    else dispatch(addedNumCart({id: produce.id}))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={plusButtonClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
