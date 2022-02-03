
export const titleFormat = (t) => {
    if ( t === 'firstName') return t = 'first name'
    else if ( t === 'lastName') return t = 'last name'
    else if ( t === 'start_date') return t = 'start date'
    else if ( t === 'dob_date') return t = 'dob'
    else if ( t === 'zipcode') return t = 'zip code'
    else return t
}