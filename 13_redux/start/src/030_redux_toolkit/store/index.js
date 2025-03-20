// import { configureStore } from '@reduxjs/toolkit'
// import reducer from "./modules/counter"


// export default configureStore({
//   reducer: {
//     counter: reducer,
//   }
// });



import { configureStore } from '@reduxjs/toolkit'
import reducer from './modules/counter'


export default configureStore({
  reducer: {
    counter: reducer,
  }
});