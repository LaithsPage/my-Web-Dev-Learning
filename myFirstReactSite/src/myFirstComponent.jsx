// From useState, we get the current state and a setter method for that state.
// Current state = count && setter/update method = setCount()
import { useState } from "react";

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
      }
    
  return (
    <div>
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
    </div>
  );
}

function MyButton({ count, handleClick }) {

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
























/* function MyButton() {
    // From useState, we get the current state and a setter method for that state.
    // Current state = count && setter/update method = setCount()
    const [count, setCount] = useState(0);

    // NTS -- how can we handle state without a closure?
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
} */



/* function ListItem(props) {
    return <li>{props.animal}</li>
}

function List(props) {

    if(!props.animals) {
        return <div>Loading...</div>;
    }

    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>;
    }
    
    return (
        <ul>
        {props.animals.map((animal) => {
            return animal.startsWith("B") ? <ListItem key={animal} animal={animal} /> : null;
        })}
    </ul>
    );
}

function Buddy() {
    const animals = ["Buddy", "Laith", "Quinn", "Becca"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals} />
        </div>
    );
} */