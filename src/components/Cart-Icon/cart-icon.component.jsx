import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-svgrepo-com.svg'

export default function CartIcon ({...otherProps}){
return (
    <div {...otherProps} className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
}