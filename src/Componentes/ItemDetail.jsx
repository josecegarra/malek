import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    return (
        <div>
            <img src={item?.images[0]} alt={item?.title} style={{ width: 300, height: 300 }} />
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail;