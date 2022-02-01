import styled from "styled-components"

export const SearchSectionWrapper = styled.section`
    @media screen and (max-width:600px) {  width:100%; }
    @media screen and (min-width:600px) {  width:50%; }
    transition: all 0.2s;
    
    ${({ suggestionsBoxIsActive }) => suggestionsBoxIsActive && 
    `
        position: absolute;
        z-index: 2;
        width: 60%;
        background-color: gray;
        border-radius: 15px
    `}
`

export const SearchBoxWrapper = styled.div`
    width: 100%;
    height: 30px;
    padding:1%;
    display: inline-flex;
    align-items: center;
    svg { margin: 1%; }
    
    ${({ suggestionsBoxIsActive }) => suggestionsBoxIsActive && 
    `
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    `}
    
    ${({ suggestionsBoxIsActive }) => !suggestionsBoxIsActive && 
        `border-radius: 15px ; background-color:white;`}
`

export const SearchBoxInput = styled.input`
    width: 95%; height: 25px;
    border: none !important;
    outline: none;
    border-radius: 15px;
    padding: 0px 5px;
    ::placeholder { font-weight: light; opacity: 0.8; }
    :focus-within { border: 2px solid violet !important; }
`

export const SearchSuggestionsWrapper = styled.div`
    border: 2px solid #ccc;
    text-align: justify;
    color: white;
    ul {
        li { 
            min-height: 2rem;
            display: flex;
            align-items: center;
            padding: 1%;
            font-size: 0.8rem;
            &:hover { background-color: #ccc; color:black; }
        }
        li:not(:first-child) { border-top: 1px solid #ccc; }
        li:last-child {
            border-bottom-right-radius: 12px;
            border-bottom-left-radius: 12px; }
    }

    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

`
