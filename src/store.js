import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import fruits from "./features/fruits";
import fruitsCart from "./features/fruitsCart";
import logger from "redux-logger";
import users from "./features/user";
import chrono from "./features/chrono";

export const store = configureStore({
  reducer: {
    counter,
    fruits,
    fruitsCart,
    users,
    chrono,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Methode pas trop utilisé pour intercepter les infos, autre methode  avec logger plus simple.
// function customMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       // Permet avoir accès aux states du store (counter, fruits, fruitsCart)
//       // console.log(store.getState());

//       // Permet de dispatch au niveau du middleware, pour envoyer sur d'autres middleware ou directement ds le reducer
//       // console.log(next)

//       // Action en question
//       // console.log(action)
//       next({
//         type: "fruitsCart/addOne",
//         payload: {
//           name: "Mango",
//           url: "../../public/images/mango.jpg",
//           price: 99,
//           id: 12345678,
//         },
//       });
//     };
//   };
// }
