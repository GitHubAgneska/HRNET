import styled from "styled-components"

export const SelectEntriesBoxWrapper = styled.div`
    color:white;
    height: 45px;
    font-size:0.8rem;
    text-align: left;
    line-height: 2;
    @media screen and (max-width:600px) {display: inline-block;  width:unset}
    select {
        padding: 5px;
        font-size: .8em;
        border-radius: 20px;
        border: 1px solid white;
        background-color:white;
        :focus-within { border: 2px solid violet !important; }
        
        /* border: ${ ({valid}) => valid  ? ' 2px solid green;' :'2px solid lightgrey;' } */
    }
`