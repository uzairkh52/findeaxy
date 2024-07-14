import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/sass/application.scss";
import "../styles/css/style.css";
// redux
import { useStore } from "@/store/Services/store";
import { Provider } from "react-redux";

import { Cookie, withCookie } from "next-cookie";

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withCookie(App);

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// import '@/styles/globals.css'

// import 'semantic-ui-css/semantic.min.css'
// import "../styles/sass/application.scss";
// import { Provider } from "react-redux";

// import rootReducer from '@/store/Services/Reducers/reducers';
// import { createStore } from 'redux';

// export default function App({ Component, pageProps }) {
//   const store = createStore(rootReducer) //imported above
//   return (
//     <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//   )
// }
