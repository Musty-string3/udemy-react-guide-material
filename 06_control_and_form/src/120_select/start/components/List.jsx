const List = ({ items }) => {
    return (
        <ul>
            {
                items.map(item => {
                    return (
                        <>
                            <button>完了</button>
                            <li>{ item }</li>
                        </>
                    )
                })
            }
        </ul>
    )
}

export default List;