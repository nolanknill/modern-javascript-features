function Car( { id, type, color, doHonk, price } ) {
    const handleClick = () => {
        // Run whatever code we want
        // Before calling the prop-passed function
        doHonk(id)
    }
    
    return (
        <article onClick={handleClick}>
            <h3>{type}</h3>
            <p>${price}</p>
            <p>Color: {color}</p>
        </article>
    )
}

export default Car;