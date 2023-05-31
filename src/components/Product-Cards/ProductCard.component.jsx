import './ProductCard.style.scss'
import Button from '../Buttons/button.component'
export default function ProductCard ({product:{name,imageUrl,price}}){
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer' >
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>ADD TO CART</Button>
        </div>
    )
}