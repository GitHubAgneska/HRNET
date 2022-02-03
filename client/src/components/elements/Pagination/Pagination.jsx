import { PaginationWrapper, PageNumber } from './Pagination_style'
import PropTypes from "prop-types"

const Pagination = ({totalPages, currentActivePage, changePage}) => {

    return (

        <PaginationWrapper>
            
            {[...Array(totalPages)].map((x, i) =>
                <PageNumber
                    key={Math.random()}
                    currentActivePage={i===currentActivePage}
                    onClick={()=> changePage(i)}
                    >{i+1}</PageNumber>
            )}
        
        </PaginationWrapper>
    )
}
export default Pagination

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentActivePage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
}
