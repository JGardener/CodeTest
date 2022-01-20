const Athlete = ({firstName, lastName, nationality, score, sex}) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{nationality}</td>
            <td>{score}</td>
            <td>{sex}</td>
        </tr>       
    )
}

export default Athlete;