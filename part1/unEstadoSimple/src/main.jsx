/*Re-rederizado de la pagina main.jsx*/

// import ReactDOM from "react-dom/client";
// import App from "./App";

// let counter = 1;

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <App counter={counter} />
//   );
// };

// counter += 1;
// refresh();
// counter += 1;
// refresh();

// setInterval(() => {
//   refresh();
//   counter += 1;
// }, 1000);

/*Componente con estado*/

import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
