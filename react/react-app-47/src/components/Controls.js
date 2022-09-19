import { validate } from "../helpers/validate";

export const Controls = ({ onSkip, onLimit, skip, limit, /*onSetActiveUser, activeUser*/ }) => {

    const handleClickLeft = () => {
        let nextSkip = skip === 0 ? 100 - limit : skip < limit ? 0 : skip - limit;
        onSkip(nextSkip);
        // onSetActiveUser(activeUser);
    };

    const handleClickRight = () => {
        let nextSkip = skip + limit >= 100 ? 0 : skip + limit;
        onSkip(nextSkip);
        // onSetActiveUser(activeUser);
    };

    const handleChangeLimit = (e) => onLimit(validate(e.target.value));
    const handleChangeSkip = (e) => onSkip(validate(e.target.value));

    return (
        <div>
            <button type="button" onClick={ handleClickLeft }>&larr;</button>
            <input type="number" min="1" max="100" placeholder="skip" onChange={ handleChangeSkip } />
            <input type="number" min="1" max="100" placeholder="limit" onChange={ handleChangeLimit } />
            <button type="button" onClick={ handleClickRight }>&rarr;</button>
        </div>
    );
}