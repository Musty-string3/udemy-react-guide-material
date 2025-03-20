import { useState } from "react";
import AnimalList from './components/AnimalList';
import AnimalFitler from './components/AnimalFilter';

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFitler filterState={ [filterVal, setFilterVal] }/>
      <AnimalList animals={filterdAnimals}/>
    </>
  );
};

export default Example;
