/*Revision de los controladores de Eventos*/
import { useState } from "react";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};
// /*Reglas de los Hooks*/
// // no se debe llamar desde dentro de un loop, una expresión condicional o cualquier lugar que no sea una función que defina a un componente//
// const App = () => {
//   // estos están bien
//   const [age, setAge] = useState(0)
//   const [name, setName] = useState('Juha Tauriainen')

//   if ( age > 10 ) {
//     // esto no funciona!
//     const [foobar, setFoobar] = useState(null)
//   }

//   for ( let i = 0; i < age; i++ ) {
//     // esto tampoco está bien
//     const [rightWay, setRightWay] = useState(false)
//   }

//   const notGood = () => {
//     // y esto también es ilegal
//     const [x, setX] = useState(-1000)
//   }

//   return (
//     //...
//   )
// }

// /*Renderizado condicional*/

// import { useState } from "react"

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }
//   return <div>button press history {props.allClicks.join(" ")}</div>;
// };

// const Button = (props) => {
//   console.log(props);
//   const { handleClick, text } = props;
//   return <button onClick={handleClick}>{text}</button>;
// };

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);
//   const [total, setTotal] = useState(0);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"));
//     const updateLeft = left + 1;
//     setLeft(updateLeft);
//     setTotal(left + right);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     const updateRight = right + 1;
//     setRight(updateRight);
//     setTotal(left + right);
//   };

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//       <p>total {total}</p>
//     </div>
//   );
// };

// /*La actualizacion del estado asincrona*/

// import { useState } from "react";

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);
//   const [total, setTotal] = useState(0);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"));
//     const updateLeft = left + 1;
//     setLeft(updateLeft);
//     setTotal(left + right);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     const updateRight = right + 1;
//     setRight(updateRight);
//     setTotal(left + right);
//   };

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(" ")}</p>
//       <p>total {total}</p>
//     </div>
//   );
// };

// /*Un estado mas complejo, depurando aplicaiones React*/

// import { useState } from "react";

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     setRight(right + 1);
//   };

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"));
//     setLeft(left + 1);
//   };

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(" ")}</p>
//     </div>
//   );
// };

// /*Refactorizacion de los componentes*/
// import { useState } from "react";

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// const Display = ({ counter }) => <div>{counter}</div>;

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("rendering with counter value", counter);

//   const increaseByOne = () => {
//     setCounter(counter + 1);
//     console.log("increasing, value before", counter);
//   };
//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//     console.log("decreasing, value before", counter);
//   };
//   const setZero = () => {
//     console.log("resetting to zero, value before", counter);
//     setCounter(0);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };

// /*Los cambios en el estado provocan re-renderizado*/
// import { useState } from "react";

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// const Display = (props) => {
//   return <div>{props.counter}</div>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => {
//     setCounter(counter + 1);
//   };
//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//   };
//   const setZero = () => {
//     setCounter(0);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };

// /*Pasando el estado a componentes hijos*/
// import { useState } from "react";

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// const Display = (props) => {
//   return <div>{props.counter}</div>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("rendering with counter value", counter);

//   const increaseByOne = () => {
//     setCounter(counter + 1);
//     console.log("increasing, value before", counter);
//   };
//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//     console.log("decreasing, value before", counter);
//   };
//   const setZero = () => {
//     console.log("resetting to zero, value before", counter);
//     setCounter(0);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };

// /*Pasando el estado a componentes hijos*/
// import { useState } from "react";

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// const Display = (props) => {
//   return <div>{props.counter}</div>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setZero = () => setCounter(0);

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };

// /*Un controlador de eventos es una funcion*/
// import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const setZero = () => setCounter(0);

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>plus</button>
//       <button onClick={setZero}>zero</button>
//     </div>
//   );
// };

/*Componente con estado*/

// import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   // const handleClick = () => {
//   //   console.log("clicked");
//   // };
//   // setTimeout(() => setCounter(counter + 1), 1000);

//   // console.log("redering...", counter);

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>plus</button>
//       <button onClick={() => setCounter(0)}>zero</button>
//     </div>
//   );
// };

/*Re-renderizado de la pagina*/

// const App = (props) => {
//   const { counter } = props;
//   return <div>{counter}</div>;
// };

/* ESTADOS DEL COMPONENTE, CONTROLADORES DE EVENTOS*/

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

/* APP PART1  */

// const App = () => {
//   const course = "Half Stack application development";
//   const parts = [
//     {
//       name: "Fundamentals of React",
//       exercises: 10,
//     },
//     {
//       name: "Using props to pass data",
//       exercises: 7,
//     },
//     {
//       name: "State of a component",
//       exercises: 14,
//     },
//   ];

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   );
// };

export default App;
