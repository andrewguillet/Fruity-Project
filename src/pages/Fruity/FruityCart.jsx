import { useSelector } from "react-redux";
import fruitsCart from "../../features/fruitsCart";

export default function FruityCart() {
  const fruityCart = useSelector((state) => state.fruitsCart);
  console.log(fruityCart);
  return (
    <div className="bg-slate-100 rounded">
      <p className="text-1xl p-5 border-b border-slate-400">Your Fruity Cart</p>
      <ul>
        {fruityCart.cart.length > 0 &&
          fruityCart.cart.map((fruit) => (
            <li className="px-5 py-2 text-xl" key={fruit.id}>
              <span className="mr-2 text-1xl">{fruit.quantity}</span>
              <span className="text-1xl">{fruit.name}</span>
            </li>
          ))}
        {fruityCart.cart.length === 0 && (
          <li className="px-5 py-2 text-xl"> Grab one fruit !</li>
        )}
      </ul>
      <p className="text-xl p-5 border-t border-slate-400">
        Total price :{" "}
        {fruityCart.cart.length > 0 && (
          <span>
            {fruityCart.cart.reduce(
              (acc, item) => item.price * item.quantity + acc,
              0
            )}{" "}
            $
          </span>
        )}
      </p>
    </div>
  );
}
