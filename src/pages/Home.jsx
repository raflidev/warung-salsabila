import React from 'react'

function Home() {
  const [categories, setCategories] = React.useState(['Semua','Makanan', 'Minuman', 'Cemilan', 'Lainnya', 'Minuman', 'Cemilan', 'Lainnyaasdasdasad']);

  return (
    <div className='min-h-screen bg-gray-400 text-white font-poppins'>
        <div className='min-h-screen flex justify-center'>
            <div className='w-full md:w-2/6 bg-gray-800 px-4 md:px-10 pt-10'>
                <div className='flex justify-between text-center'>
                    <div></div>
                    <h1 className='text-xl font-medium'>Warung Salsabilla <br/> Al-Arief</h1>
                    <div></div>
                </div>
                <div>
                    <div className='flex justify-between mt-10'>
                        <div className='flex space-x-3 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent md:scrollbar-thumb-gray-100 scrollbar-track-transparent md:scrollbar-track-gray-800 pb-2'>
                            {categories.map((category, index) => (
                                <button key={index} className='hover:bg-green-500 duration-300 py-2 px-3 rounded-lg font-medium hover:text-white'>{category}</button>
                            ))}        
                        </div>
                    </div>
                </div>

                <div className='mt-10 pb-36'>
                    <div className='grid gap-5'>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2'>
                                <img src='https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2022033110001045563/detail/menueditor_item_97f110c795a04f1e94e3497b0eb87994_1648720671028640151.webp' alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                            </div>
                            <div className='w-full md:w-full px-4 space-y-2'>
                                <div className='text-xl md:text-2xl font-semibold'>Title</div>
                                <div className='text-sm md:text-lg font-light'>Deskripsi</div>
                                <div className='font-semibold text-lg md:text-xl'>Rp 24.000</div>
                            </div>
                            <div className='w-1/3 text-right'>
                                <button className='hover:bg-green-500 py-2 px-5 rounded bg-gray-700 duration-300'>Add +</button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2'>
                                <img src='https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2022033110001045563/detail/menueditor_item_97f110c795a04f1e94e3497b0eb87994_1648720671028640151.webp' alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                            </div>
                            <div className='w-full md:w-full px-4 space-y-2'>
                                <div className='text-xl md:text-2xl font-semibold'>Title</div>
                                <div className='text-sm md:text-lg font-light'>Deskripsi</div>
                                <div className='font-semibold text-lg md:text-xl'>Rp 24.000</div>
                            </div>
                            <div className='w-1/3 text-right'>
                                <button className='hover:bg-green-500 py-2 px-5 rounded bg-gray-700 duration-300'>Add +</button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2'>
                                <img src='https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2022033110001045563/detail/menueditor_item_97f110c795a04f1e94e3497b0eb87994_1648720671028640151.webp' alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                            </div>
                            <div className='w-full md:w-full px-4 space-y-2'>
                                <div className='text-xl md:text-2xl font-semibold'>Title</div>
                                <div className='text-sm md:text-lg font-light'>Deskripsi</div>
                                <div className='font-semibold text-lg md:text-xl'>Rp 24.000</div>
                            </div>
                            <div className='w-1/3 text-right'>
                                <button className='hover:bg-green-500 py-2 px-5 rounded bg-gray-700 duration-300'>Add +</button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2'>
                                <img src='https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2022033110001045563/detail/menueditor_item_97f110c795a04f1e94e3497b0eb87994_1648720671028640151.webp' alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                            </div>
                            <div className='w-full md:w-full px-4 space-y-2'>
                                <div className='text-xl md:text-2xl font-semibold'>Title</div>
                                <div className='text-sm md:text-lg font-light'>Deskripsi</div>
                                <div className='font-semibold text-lg md:text-xl'>Rp 24.000</div>
                            </div>
                            <div className='w-1/3 text-right'>
                                <button className='hover:bg-green-500 py-2 px-5 rounded bg-gray-700 duration-300'>Add +</button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2'>
                                <img src='https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2022033110001045563/detail/menueditor_item_97f110c795a04f1e94e3497b0eb87994_1648720671028640151.webp' alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                            </div>
                            <div className='w-full md:w-full px-4 space-y-2'>
                                <div className='text-xl md:text-2xl font-semibold'>Title</div>
                                <div className='text-sm md:text-lg font-light'>Deskripsi</div>
                                <div className='font-semibold text-lg md:text-xl'>Rp 24.000</div>
                            </div>
                            <div className='w-1/3 text-right'>
                                <button className='hover:bg-green-500 py-2 px-5 rounded bg-gray-700 duration-300'>Add +</button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-1/2'>
                                <img src='https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2022033110001045563/detail/menueditor_item_97f110c795a04f1e94e3497b0eb87994_1648720671028640151.webp' alt='food' className='h-24 md:h-36 w-24 md:w-36 object-cover rounded-xl' />
                            </div>
                            <div className='w-full md:w-full px-4 space-y-2'>
                                <div className='text-xl md:text-2xl font-semibold'>Title</div>
                                <div className='text-sm md:text-lg font-light'>Deskripsi</div>
                                <div className='font-semibold text-lg md:text-xl'>Rp 24.000</div>
                            </div>
                            <div className='w-1/3 text-right'>
                                <button className='hover:bg-green-500 py-2 px-5 rounded bg-gray-700 duration-300'>Add +</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='fixed inset-x-0 bottom-0 mx-auto w-full md:w-2/6'>
                    <div className='w-full bg-green-500 py-10 px-4 md:px-10'>
                        <div className='flex justify-between text-lgf items-center text-center'>
                            <div className='w-2/6'>
                                <span className='font-bold'>2</span> item
                            </div>
                            <div className='font-bold w-full'>
                                <button className='hover:underline px-6 py-2 rounded duration-300'>
                                    View Cart
                                </button>
                            </div>
                            <div className='w-2/6 text-center rounded-xl bg-green-600 py-2 px-3 font-bold'>
                                Rp 48.000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
