import './cart-item.style.scss'
export default function CartItem({cartItem:{name,quantity,imageUrl,id,price}}){
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} X${price}</span>
            </div>
        </div>
    )
}