import TableHeader from './Table-header'
import { TableWrapper, StyledTableHeader, StyledTable, StyledTableRow } from './Table_style'
import moment from 'moment'
import { useSelector } from 'react-redux'
import PropTypes from "prop-types"

const Table = ({currentPageToDisplay, sortListBy}) => {

    const currentQuery = useSelector(initialState => initialState.list.searchTerm)

    const tableHead = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department']

    /** @function tableRow 
     *  uses @type {Object} employee passed by @function tableData
     *  and  @type {Array} tableHead
     *  to generate @function columnData
     *  @function columnData maps these together to produce @type{Markup} for each table data cell <td>
     *  if needed, it processes data from employee object to prepare for render (@example using momentjs to format dates)
     *  @returns @type{Markup} StyledTableRow : each table row corresponding to an employee object, mapped as table data cells
    */
    const tableRow = employee => {

        // eslint-disable-next-line no-unused-vars
        const { key, value } = employee
        const tableCell = [...tableHead]
        
        const columnData = tableCell.map( prop => {
            let valueToDisplay
            if ( key[prop].hasOwnProperty('name') ) { valueToDisplay = key[prop]['name'] }
            else if ( prop === 'dob' || prop ==='startDate') { valueToDisplay = moment(key[prop]).format('MM/DD/YY') }
            else { valueToDisplay = key[prop] }
            let match = false;
            if (currentQuery.length > 2 && valueToDisplay.toLowerCase().includes(currentQuery)  ) { match=true }

            return (<td key={Math.random()} style={{backgroundColor:match?'yellow':'none',color:match?'black':'inherit'}} >{valueToDisplay}</td>) 
        })        
        return (<StyledTableRow key={Math.random()}>{columnData}</StyledTableRow>)
    }

    /** @function tableData 
     *  maps currentPage @type{employees[]} to key:index pairs
     *  for @function tableRow to use
     *  @returns {@function tableRow}
    */
    const tableData = () => { return currentPageToDisplay.map((key, index) => tableRow({key, index}))  }

    return (
        <TableWrapper>
            <StyledTable>
                <StyledTableHeader>
                    <TableHeader sortListBy={sortListBy}/>
                </StyledTableHeader>
                <tbody>{tableData()}</tbody>    
            </StyledTable>
        </TableWrapper>
    )
}

export default Table

Table.propTypes = {
    currentPageToDisplay: PropTypes.array.isRequired,
    sortListBy: PropTypes.func.isRequired,
} 