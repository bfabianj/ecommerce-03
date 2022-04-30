// SDK de Mercado Pago
import mercadopago from "mercadopago";

// Agrega credenciales
mercadopago.configure({
    access_token: "TEST-6691666334934441-030320-660bad1608da89afa48f009acb10f0b6-209274292",
});

console.log('*************************************************')
console.log('    Configuración del SDK de Mercado Pago OK!    ')
console.log('*************************************************')

const feedBack = (req, res) => {
	let info = {
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	}
    console.log(info)

    res.redirect('/')
}

export default {
    feedBack
}