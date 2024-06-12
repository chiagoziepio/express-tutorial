
const handlePostCart =(req, res)=>{
    const {name, price} = req.body
    if(!req.session.user) return res.status(401).send({msg: "unauthorized"});
    if(!name,!price) return res.status(400).send({msg:" item name and price needed"});
    const item = [{name, price}]
    const {cart} = req.session;
    if(cart){
        cart.push(item)
    }else{
        req.session.cart = item
    }
    res.status(201).send(item)
}

const handleGetCart = (req, res)=>{
    if(!req.session.user)return res.status(401).send({msg: "unauthorized"});
    if(!req.session.cart) return res.status(200).send({msg: "the cart is not empty"});
    res.status(200).send(req.session.cart)
}

module.exports = {handlePostCart, handleGetCart}