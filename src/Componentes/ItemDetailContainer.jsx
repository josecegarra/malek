import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItem } from '../firebase/db'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        // fetch(`https://dummyjson.com/products/${id}`)
        //     .then(res => res.json())
        //     .then(product => setItem(product));

        getItem(id, setItem)
    }, [id])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;