export const cartCount = (cartItems) => {
    var totalCount = 0;
    cartItems.map(cartItem =>
        totalCount = totalCount + (cartItem.quantity)
    )
    return (totalCount);

}