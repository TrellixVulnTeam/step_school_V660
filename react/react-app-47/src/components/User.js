
export const User = ( { user, onAddClass, active, activeID } ) => {

    const { id, username, email } = user;

    const handleClick = () => onAddClass(user)
    return (
        <tr
            className={ active || activeID }
            onClick={ handleClick }
        >
            <td>{ id }</td>
            <td>{ username }</td>
            <td>{ email }</td>
        </tr>
    )
}