// import { useDispatch, useSelector } from 'react-redux'
// import { Container, Table } from 'react-bootstrap'
// import React from 'react'
// import { increment, decrement } from '../redux/cartSystem'
// import { clear } from '../redux/cartSystem'



// const Cart = () => {



//   const { cart, grandTotal } = useSelector((state) => state.user)

//   const dispatch = useDispatch()

//   return (
//     <div>
//       <Container fluid="md" className='py-5'>
//         {/* <h2>Shopping Cart</h2> */}
//         <Table border={2} >
//           <thead>

//             <tr>
//               <th>IMAGES</th>
//               <th>TITLE</th>
//               <th>QUANTITY</th>
//               <th>PRICE</th>
//               <th>TOTAL PRICE</th>
//             </tr>
//           </thead>

//           <tbody>
//             {cart && cart.map((item, index) => (
//               <tr key={index}>

//                 <td>
//                   <img src={item.thumbnail} style={{ width: '200px' }} />
//                 </td>

//                 <td>{item.title}</td>

//                 <td>
//                   <button onClick={() => dispatch(increment(index))}>+</button>
//                   {item.qty}
//                   <button onClick={() => dispatch(decrement(index))}>-</button>
//                 </td>

//                 <td>{item.price}</td>

//                 <td>{item.total}</td>

       

//               </tr>
//             ))}
//           </tbody>


//         </Table>

//         <tr>

//           <h4>GRAND TOTAL :{grandTotal}</h4>

//         </tr>
//         {/* <button>REMOVE</button> */}
//         <button onClick={() => dispatch(clear())}>REMOVE PRODUCT</button>

//       </Container>
//     </div>
//   )
// }

// export default Cart



import { useDispatch, useSelector } from 'react-redux'
import { Container, Table } from 'react-bootstrap'
import React from 'react'
import { increment, decrement, clear, deletei } from '../redux/cartSystem'

const Cart = () => {

  const { cart, grandTotal } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <Container fluid="md" className='py-5'>
      <h2>Shopping Cart</h2>
      <Table bordered>

        <thead>
          <tr>
            <th>IMAGES</th>
            <th>TITLE</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>TOTAL PRICE</th> 
          </tr>
        </thead>

        <tbody>
          {cart && cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.thumbnail} style={{ width: '200px' }} />
              </td>
              <td>{item.title}</td>
              <td>
                <button onClick={() => dispatch(increment(index))}>+</button>
                {item.qty}
                <button onClick={() => dispatch(decrement(index))}>-</button>
              </td>
              <td>{item.price}</td>
              <td>{item.total}</td>
              <td>
                <button onClick={() => dispatch(deletei(index))} className="btn btn-danger">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>GRAND TOTAL:{grandTotal}</h4>
      <button onClick={() => dispatch(clear())} className='bubble-btn'>REMOVE ALL PRODUCTS</button>
    </Container>
  )
}

export default Cart