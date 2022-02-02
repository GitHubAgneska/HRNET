import { SelectEntriesBoxWrapper } from './SelectEntriesBox_style'
import { useSelector } from 'react-redux'
import PropTypes from "prop-types"
import { useState } from 'react'

const SelectEntriesBox = ({options, selectEntriesAmount, currentlyshowing, listTotal}) => {

    const currentEntries = useSelector(initialState => initialState.list.entries)
    const [option,setOption] = useState(currentEntries)
    const handleChange = e => { setOption(e.target.value); selectEntriesAmount(e.target.value) }
    
    return (
        <SelectEntriesBoxWrapper>

            <label htmlFor="entries">Show per page: </label>
            <select 
                options={currentEntries}
                name="entries"
                value={option}
                onChange={handleChange}
                aria-required="true">
                { options.map(o => (
                    <option key={Math.random()}>{o}</option>
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