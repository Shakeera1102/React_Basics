function PropsExample(props) {
    return (
        <div>
            <h1>This is the Child Class - Props</h1>
            <h3>{props.name}</h3>
            <h3>{props.address}</h3>
            <h3>{props.age}</h3>
        </div>
    )
}

export default PropsExample;