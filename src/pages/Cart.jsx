import React from 'react'
import allData from '../data'
import { Link } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = React.useState(
        localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : []
    );

    const [data, setData] = React.useState(allData);
  return (
    <div className='min-h-screen bg-gray-600 text-white font-poppins relative '>
      <div className='min-h-screen flex justify-center'>
        <div className='w-full md:w-2/6 bg-gray-800 px-4 md:px-10 pt-10'>
            <div className="flex justify-between">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
                <div className='text-xl font-medium'>
                    Cart
                </div>
                <div></div>
            </div>

            <div className='my-10'>
                <div className='grid gap-5'>
                    { cart.map((c, index) => (
                        <div key={index} className='flex justify-between items-center'>
                        <div className='w-1/2'>
                            <img src={data[c-1].gambar} alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                        </div>
                        <div className='w-full md:w-full px-4 space-y-2'>
                            <div className='text-xl md:text-2xl font-semibold'>{data[c-1].nama}</div>
                            {/* add - + */}
                            <div className='flex text-lg font-bold'>
                                <button className='bg-gray-900 py-2 px-3 rounded-l hover:bg-gray-600'>-</button>
                                <div className='bg-gray-900 py-2 px-3'>
                                    {/* total includes id */}
                                    {cart.filter(item => item === c).length}
                                </div>
                                <button className='bg-gray-900 py-2 px-3 rounded-r text-green-500 hover:bg-gray-600' onClick={() => setCart([...cart, c])}>+</button>
                            </div>
                            
                        </div>
                        <div className='w-1/3 text-right'>
                            <div className='font-semibold text-lg md:text-xl'>Rp {data[c-1].harga}</div>
                        </div>
                    </div>
                    ))} 
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
