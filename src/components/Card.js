import React, { useState,useRef,useEffect } from 'react'
import {useDispatch,useCart} from './Contextreducer'
export default function Card(props) {
    let dispatch=useDispatch();
    let options=props.options;
    let priceOptions=Object.keys(options)
    let data=useCart();
    const priceRef=useRef();
    const[qty,setqty]=useState(1)
    const[size,setsize]=useState("")
    const handleAddtocart= async()=>{
        let food=[]
        for (const item of data){
if(item.id===props.foodItem._id)
{
    food =item;
    break;
}

        }
        if(food!==[]){
            if(food.size===size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
                return
            }

        
        else if(food.size!==size){

await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
return
// await console.log(data)
        }
        return
    }
    else
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    }
    let finalPrice=qty *parseInt(options[size]);
    useEffect(()=>{
        setsize(priceRef.current.value)
    },[])
    return (
        <div>
            <div><div className="card mt-3" style={{ "width": "18rem", "MaxHeight": "360px" }}>
                <img className="card-img-top" src={props.foodItem.img} alt="..." style={{height:"120px",objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                   
                    <div className='container w-100'>
                        <select className=' m-2 h-100  bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (<option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                            }
                        </select>
                        <select className=' m-2 h-100  bg-success rounded'ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
                            {
                                priceOptions.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }
                        </select>
                        <div className='d-inline h-100 fs-5'>Rs{finalPrice}</div>
                    </div>

                </div>
                <hr></hr>
                <button className={'btn btn-success justify-center ms-2' } onClick={handleAddtocart}> Add to Cart</button>
            </div>
            </div>
        </div>
    )
}
