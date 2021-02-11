import React, { createContext, useState } from 'react'

const initialState = ''

export const SavedTracksContext = createContext()

function SavedTracksProvider({children}) {
    const[state, setState] = useState(initialState)
    
    return (
        <SavedTracksContext.Provider value={[state, setState]}>
            {children}
        </SavedTracksContext.Provider>
        
    )
}

export default SavedTracksProvider