import { SelectEntriesBoxWrapper } from './SelectEntriesBox_style'
import { useSelector } from 'react-redux'
import PropTypes from "prop-types"

const SelectEntriesBox = ({options, selectEntriesAmount, currentlyshowing, listTotal}) => {

    const currentEntries = useSelector(initialState => initialState.list.entries)

    return (
        <SelectEntriesBoxWrapper>

            <label htmlFor="entries">Show per page: </label>
            <select 
                options={options}
                name="entries"
                value={currentEntries}
                onChange={e => ( console.log(e.target.value))}
                aria-required="true">
                { options.map(o => (
                    <option key={Math.random()} onClick={() => {selectEntriesAmount(o)}}>{o}</option>
                ))}
            </select>

            <div currentlyshowing={currentlyshowing}>Showing: {currentlyshowing} of {listTotal}</div>
        </SelectEntriesBoxWrapper>
    )
}

export default SelectEntriesBox

SelectEntriesBox.propTypes = {
    options: PropTypes.array.isRequired,
    selectEntriesAmount: PropTypes.func.isRequired,
    currentlyshowing: PropTypes.number.isRequired,
    listTotal: PropTypes.number
}