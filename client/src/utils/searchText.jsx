import moment from 'moment'

export const searchSuggestions = (query, list) => {

    let suggested = [];
    let suggestions = new Map()
    let reg = new RegExp(query, 'gi')

    query = query.toLowerCase()
    list.forEach(obj => {
        let objectValue = ''
        for (let [key, value] of Object.entries(obj)) {
            if ( key === 'dob' || key === 'startDate' ) { objectValue = moment(value).format('MM/DD/YYYY') }
            else if ( key === 'state' ) { objectValue = value.name }
            else if ( key === 'id' ) { objectValue = value.toString() }
            else { objectValue = value }
            
            if ( objectValue.includes(query) || reg.test(objectValue) )  { 
                
                //let highligtedValue = `<span style={{backgroundColor:'yellow'}}>`+ objectValue + `</span>`
                
                if (suggestions.has(objectValue)) { suggestions.get(objectValue).push(obj) }
                else {
                    suggested.push(obj)
                    suggestions.set(objectValue, suggested)
                }
            }
            suggested = []
        }
    })
    return suggestions
}
