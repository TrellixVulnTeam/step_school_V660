export const Figure = ({ user }) => {
    const { firstName: name, lastName: surname, image: src } = user;

    return (
        <figure>
            <img src={ src } alt='active user' width="250"/>
            <figcaption>{ name + ' ' + surname }</figcaption>
        </figure>
    )

}