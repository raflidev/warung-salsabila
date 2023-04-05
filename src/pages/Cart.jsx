import React from 'react'
import allData from '../data'
import { Link } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = React.useState([]);
    const [data, setData] = React.useState(allData);
    const [popup, setPopup] = React.useState(false);

    React.useEffect(() => {
        if(localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
    }, [])

    const addCartHandler = (index) => {
        let newCart = cart;
        newCart[index][1] += 1;
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(JSON.parse(localStorage.getItem('cart')));
    }

    const decreaseCartHandler = (index) => {
        let newCart = cart;
        if(newCart[index][1] > 1){
            newCart[index][1] -= 1;
            localStorage.setItem('cart', JSON.stringify(newCart));
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
    }

  return (
    <div className='min-h-screen bg-gray-600 text-white font-poppins relative '>
        { popup &&
        <div className="absolute inset-x-0 top-0 m-auto w-full lg:w-2/6 py-20 rounded-xl bg-gray-900 z-10 duration-300">
            <div className='flex justify-center items-center'>
                <div className='absolute right-6 top-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-red-500 cursor-pointer" onClick={() => setPopup(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='w-1/2 text-center'>
                    <div className='text-2xl'>Konfirmasi Pesanan</div>
                    <div className="mt-5">
                        <div className="text-lg">{localStorage.getItem('sebagai')} atas nama {localStorage.getItem('nama')}</div>
                    </div>
                </div>
            </div>
        </div>
        }
      <div className='min-h-screen flex justify-center'>
        <div className='w-full md:w-2/6 bg-gray-800 pt-10'>
            <div className="flex justify-between  px-4 md:px-10">
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

            <div className='my-10 px-4 md:px-10'>
                <div className='grid gap-5'>
                    { cart.map((c, index) => (
                        // console.log(c[1]),
                        <div key={index} className='flex justify-between items-center'>
                        <div className='w-1/2'>
                            <img src={data[c[0]-1].gambar} alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                        </div>
                        <div className='w-full md:w-full px-4 space-y-2'>
                            <div className='text-xl md:text-2xl font-semibold'>{data[c[0]-1].nama}</div>
                            <div className='flex text-lg font-bold'>
                                <button className='bg-gray-900 py-2 px-3 rounded-l hover:bg-gray-600' onClick={
                                    () => decreaseCartHandler(index)} >-</button>
                                <div className='bg-gray-900 py-2 px-3'>
                                    {/* filtering cart id*/}
                                    {cart.filter((cart) => cart[0] === c[0]).map((cart) => cart[1])}

                                </div>
                                <button className='bg-gray-900 py-2 px-3 rounded-r hover:bg-gray-600' onClick={() => addCartHandler(index)} >+</button>
                            </div>
                            
                        </div>
                        <div className='w-1/3 text-right'>
                            <div className='font-semibold text-lg md:text-xl'>Rp {data[c[0]-1].harga * c[1]}</div>
                        </div>
                    </div>
                    ))} 
                </div>
            </div>

            <div className='my-5 absolute bottom-0 w-full md:w-2/6'>
                <hr />
                <div className='px-4 md:px-10 mt-10'>
                    <div className='flex justify-between text-xl items-center'>
                        <div className='font-semibold'>Total</div>
                        <div className='font-bold text-2xl'>
                            Rp {cart.map((c) => data[c[0]-1].harga * c[1]).reduce((a, b) => a + b, 0)}
                        </div>
                    </div>
                    <button onClick={() => setPopup(true)} className='w-full bg-green-500 text-center py-3 rounded-full text-xl font-semibold mt-5 hover:-translate-y-1 duration-300'>
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
