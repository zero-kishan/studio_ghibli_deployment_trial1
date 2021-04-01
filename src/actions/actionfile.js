const base_url ="https://ghibli-json-server.herokuapp.com"


export function wishlist(){
    const output = fetch('https://studio-ghibli-universe-backend.herokuapp.com/filmsPlaylist/view',{method:'GET'})
    .then((data) => data.json())

    return{
        type:'WISHLIST',
        payload:output
    }
}

export function wishlist_add(obj){
    fetch('https://studio-ghibli-universe-backend.herokuapp.com/filmsPlaylist/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(obj)
        
    })
    .then((data) => data.json())
    const output = fetch(`${base_url}/films_playlist`,{method:'GET'})
    .then((data) => data.json())
    console.log(output,'inside action file')
    return{
        type:'WISHLIST_ADD',
        payload:obj
    }
}

export function wishlist_delete(wishlist){
    fetch(`https://studio-ghibli-universe-backend.herokuapp.com/filmsPlaylist/delete/${wishlist._id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },


    })
    .then((data) => data.json())
    // const output = fetch(`${base_url}/wishlist/${wishlist.id}`,{method:'GET'})
    // .then((data) => data.json())
    console.log(wishlist,'inside action file')
    return{
        type:'WISHLIST_DELETE',
        payload:wishlist
    }
}

export function shopping_wishlist(){
    const output = fetch(`https://studio-ghibli-universe-backend.herokuapp.com/shoppingWishlist/view`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'SHOPPING_WISHLIST',
        payload:output
    }
}

export function shopping_wishlist_add(obj){
    fetch(`https://studio-ghibli-universe-backend.herokuapp.com/shoppingWishlist/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(obj)
        
    })
    .then((data) => data.json())
    const output = fetch(`https://studio-ghibli-universe-backend.herokuapp.com/shoppingWishlist/view`,{method:'GET'})
    .then((data) => data.json())
    console.log(output,'inside action file')
    return{
        type:'SHOPPING_WISHLIST_ADD',
        payload:obj
    }
}

export function shopping_wishlist_delete(wishlist){
    fetch(`https://studio-ghibli-universe-backend.herokuapp.com/shoppingWishlist/delete/${wishlist._id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },


    })
    .then((data) => data.json())
    // const output = fetch(`${base_url}/wishlist/${wishlist.id}`,{method:'GET'})
    // .then((data) => data.json())
    console.log(wishlist,'inside action file')
    return{
        type:'SHOPPING_WISHLIST_DELETE',
        payload:wishlist
    }
}



export function following(){
    const output = fetch(`https://studio-ghibli-universe-backend.herokuapp.com/following/view`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'FOLLOWING',
        payload:output
    }
}

export function following_add(obj){
    fetch(`https://studio-ghibli-universe-backend.herokuapp.com/following/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(obj)
        
    })
    .then((data) => data.json())
    const output = fetch(`${base_url}/following`,{method:'GET'})
    .then((data) => data.json())
    console.log(output,'inside action file')
    return{
        type:'FOLLOWING_ADD',
        payload:obj
    }
}

export function following_delete(wishlist){
    fetch(`https://studio-ghibli-universe-backend.herokuapp.com/following/delete/${wishlist._id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },


    })
    .then((data) => data.json())
    // const output = fetch(`${base_url}/wishlist/${wishlist.id}`,{method:'GET'})
    // .then((data) => data.json())
    console.log(wishlist,'inside action file')
    return{
        type:'FOLLOWING_DELETE',
        payload:wishlist
    }
}