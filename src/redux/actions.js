export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"

export  const addFav = (character) => {
    return{type: ADD_FAV, paylod: character }
}


export const removeFav = (id) => {
 return{type: REMOVE_FAV, paylod: id}
}
