const AnimalItems = ({ animal }) => {
    return (
        <li>
            {animal}
            {animal === "Dog" && "★"}
        </li>
    )
}

export default AnimalItems;