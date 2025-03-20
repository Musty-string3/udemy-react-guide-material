
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // const animalList = [];
  // for (const animal of animals) {
  //   animalList.push(<li>{animal}</li>);
  // }

  // const helloAnimals = animals.map((animal) => {
  //   return <li>Hello: {animal}</li>
  // });

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{helloAnimals}</li> */}
        {
          animals.map((animal) => {
            return <li key={ animal }>Hello: {animal}</li>
          })
        }
      </ul>
    </>
  );
};

export default Example;
