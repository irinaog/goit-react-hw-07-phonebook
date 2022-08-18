import css from './FilterContacts.module.css';

import { useDispatch,  } from 'react-redux';
import { filter } from 'Redux/phoneBookSlice';

export const FilterContacts = () => {

    const dispath = useDispatch();

    return (<>
        <div className={css.filterContainer}>
        <label htmlFor='filter' className={css.filterTitle}> Find contacts by name </label>
        <input
                id='filter'
                className={css.filterInput}
                type="text"
                name="filter"
                onChange={(e) => {
                    dispath(filter(e.currentTarget.value))
                }}
            ></input>
        </div>
    </>
    )
};
