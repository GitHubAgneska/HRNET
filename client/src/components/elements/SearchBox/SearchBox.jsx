import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import { SearchSectionWrapper, SearchBoxWrapper, SearchBoxInput, SearchSuggestionsWrapper } from './SearchBox_style'
import PropTypes from "prop-types"

const SearchBox = ({values, handleSearchChange, clearInput, handleSearchSubmit, suggestions, selectSuggestion, handleKeyDown} ) => {

    const suggestionsBoxIsActive = suggestions && suggestions.size > 0

    return (
        <SearchSectionWrapper suggestionsBoxIsActive={suggestionsBoxIsActive}>
            <SearchBoxWrapper>
                
                <SearchBoxInput 
                    type="text"
                    placeholder="search"
                    values={values}
                    onChange={e => handleSearchChange(e)}
                    onKeyDown={e => handleKeyDown(e)}
                />
                <FontAwesomeIcon icon={faTimes} onClick={() => clearInput()} />
                <FontAwesomeIcon icon={faSearch} onClick={() => handleSearchSubmit()} />
                
            </SearchBoxWrapper>

            { suggestions && suggestions.size > 0 && 
                <SearchSuggestionsWrapper>
                    <ul>
                        { [...suggestions.keys()].map( s => (  <li key={Math.random()} onClick={()=> selectSuggestion(s)}>{s}</li> )) }
                    </ul>
                </SearchSuggestionsWrapper>
            }

        </SearchSectionWrapper>
    )
}
export default SearchBox

SearchBox.propTypes = {
    values: PropTypes.string,
    handleSearchChange: PropTypes.func,
    clearInput: PropTypes.func,
    handleSearchSubmit: PropTypes.func,
    /* suggestions: PropTypes.object, */
    selectSuggestion: PropTypes.func,
    handleKeyDown: PropTypes.func
}
