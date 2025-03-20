import AnimalItems from './AnimalItem';

const AnimalList = ({ animals }) => {
    if (animals.length === 0) {
        return <h3>Animalが見つかりませんでした。</h3>
    }
    return (
        <ul>
        {animals.map((animal) => {
            return <AnimalItems animal={animal} key={animal} />
        })}
        </ul>
    )
}

export default AnimalList;