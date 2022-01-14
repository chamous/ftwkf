import React,{ useRef,useEffect } from 'react'

const Paypal = ({paymentValue}) => {
    const paypal = useRef();
    useEffect(() => {
        if(paymentValue){
            window.paypal.Buttons({
                createOrder: (data,actions,err)=>{
                    return actions.order.create({
                        intent : "CAPTURE",
                        purchase_units:[
                            {
                                description : "SUBSCIRPTION TO EVENT",
                                amount: {
                                    currency_code :"USD",
                                    value : paymentValue
                                }
                            }
                        ]
                    })
                },
                onApprove : async(data,actions)=>{
                    const order = await actions.order.capture();
                    console.log("++ ORDER ",order);
                },
                onError : (err)=>{
                    console.log("++err ",err);
                }
            }).render(paypal.current);
        }
        
    }, [paymentValue])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default Paypal
