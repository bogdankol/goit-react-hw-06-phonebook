import s from "./Filter.module.css";
import {useSelector, useDispatch} from 'react-redux';
import {filterContacts} from '../../../redux/contacts/contacts-actions'

function Filter() {
  const value = useSelector(({contacts: {filter}}) => filter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label}>
        Filter:
        <input
          name="filter"
          value={value}
          onChange={(e) => dispatch(filterContacts(e.target.value))}
          className={s.input}
        ></input>
      </label>
    </>
  );
}

export default Filter;
