export const addProduct = (cart, setCart, product, count) => {
    let hasItem = cart.filter(item => item.product.id === product.id)[0]

    if (hasItem) {
        setCart([...cart.filter(item => item.product.id !== hasItem.product.id), {
            ...hasItem, 
            count: hasItem.count + 1
        }])
    } else {
        setCart([...cart, {product, count}])
    }
    console.log('Added');
    console.log(cart)
    console.log(product)
}