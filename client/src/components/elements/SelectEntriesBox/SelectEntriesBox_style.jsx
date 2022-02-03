import styled from "styled-components"

export const SelectEntriesBoxWrapper = styled.div`
    color:white;
    padding: 3%;
    font-size:0.8rem;
    text-align: left;
    line-height: 2;
    @media screen and (max-width:600px) {
        display: inline-block; width:unset;
        select { }

    }
    select {
        @media screen and (max-width:600px) { padding: 2px; font-size: 1em;  border-radius: 5px; }
        @media screen and (min-width:600px) {padding: 5px;  font-size: .8em; border-radius: 20px;}
    
        background-color:white;
        :focus-within { border: 2px solid violet !important; }
        
        /* border: ${ ({valid}) => valid  ? ' 2px solid green;' :'2px solid lightgrey;' } */
    }
`