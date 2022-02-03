import styled from "styled-components"

export const TableWrapper = styled.div`
    max-height: 60vh;
    overflow: scroll;
    border: 1px solid #03846c;
    
    background-color: #d9e8e5;
`

export const StyledTable = styled.table` 
    width: 100%;
    tbody { font-size: 0.8rem; }
`

export const StyledTableHeader = styled.thead`
    min-height: 2rem;
    text-transform: uppercase;
    font-size: 0.8em;
    th {
        height: 3.5rem;
        position: sticky; top: 0; 
        color: white; 
        background-color:#03846c;
    }
`

export const TableHeaderIconWrapper = styled.div`
    min-height: 1rem;
`

export const StyledTableRow = styled.tr`
    height: 2rem;
    
    ${({entries}) => entries%2===0 ? 
    `:nth-child(even) { background-color: #d9e8e5; }`
    : `:nth-child(odd) { background-color: #ccc; color:black }` }

    &:hover { background-color: #53E0CB; color: black; border: none; }
    
    td { 
        width: 10%;
        overflow: hidden;
        border-bottom: 2px solid #03846c;
    }
`



