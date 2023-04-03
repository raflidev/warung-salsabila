import React, { useEffect } from 'react'

function Home() {
  const [categories, setCategories] = React.useState(['Semua','Makanan', 'Minuman', 'Cemilan', 'Lainnya', 'Minuman', 'Cemilan', 'Lainnyaasdasdasad']);
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');
  const [sebagai, setSebagai] = React.useState(['Reservasi', 'Delivery', 'Dine-in']);
  const [selectedSebagai, setSelectedSebagai] = React.useState(sebagai[0]);

  const [nama, setNama] = React.useState('');
  const [alamat, setAlamat] = React.useState('');

  const [popup, setPopup] = React.useState(false);

  useEffect(() => {
    if(localStorage.getItem('sebagai') === null) {
        setPopup(true);
    }else{
        setPopup(false);
    }
  }, [])

  const handlePilih = () => {
    localStorage.setItem('sebagai', selectedSebagai);
    localStorage.setItem('nama', nama);
    if(selectedSebagai === 'Delivery') {
        localStorage.setItem('alamat', alamat);
    }
    setPopup(false);
  }
  
  return (
    <div className='min-h-screen bg-gray-600 text-white font-poppins relative '>
        { popup &&
        <div className="absolute inset-x-0 top-0 m-auto w-full lg:w-2/6 py-20 rounded-xl bg-gray-900 z-10">
            <div className='flex justify-center items-center'>
                <div className='w-1/2 text-center'>
                    <div className='text-2xl'>Ingin pesan sebagai apa?</div>
                    {/* select */}
                    <div className='mt-5'>
                        <select value={selectedSebagai} onChange={(e) => setSelectedSebagai(e.target.value)} className='w-full bg-gray-800 text-white py-2 px-3 rounded-lg'>
                            { sebagai.map((s, index) => (
                                <option key={index} value={s}>{s}</option>
                            )) }
                        </select>

                        {
                            <div className='mt-5'>
                                <div className='flex flex-col'>
                                    <input type='text' value={nama} onChange={(e) => setNama(e.target.value)} id='nama' placeholder='Nama anda' className='py-2 px-3 rounded-lg mt-2 bg-gray-800 text-white' />
                                </div>

                                { selectedSebagai === 'Delivery' &&
                                    <div className='flex flex-col mt-5'>
                                        <input type='text' value={alamat} onChange={(e) => setAlamat(e.target.value)} id='alamat' placeholder='Alamat anda' className='py-2 px-3 rounded-lg mt-2 bg-gray-800 text-white' />
                                    </div>
                                }
                            </div>
                        }
                        <button onClick={handlePilih} className='w-full bg-green-500 hover:bg-green-600 py-2 px-3 rounded-lg mt-5'>Pilih</button>
                    </div>
                </div>
            </div>
        </div>
        }

        <div className='min-h-screen flex justify-center'>
            <div className='w-full md:w-2/6 bg-gray-800 px-4 md:px-10 pt-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium'>Warung Salsabilla <br/> Al-Arief</h1>
                    <div>
                        <div className='font-semibold rounded-xl text-right'>{localStorage.getItem('sebagai')}</div>
                        {
                            localStorage.getItem('sebagai') === 'Delivery' &&
                            <div className='flex space-x-1'>
                                <div className='text-sm text-right'>{localStorage.getItem('alamat')}</div>
                                <div>|</div>
                                <div className='text-sm text-right'>{localStorage.getItem('nama')}</div>
                            </div>
                        }
                        {
                            localStorage.getItem('sebagai') !== 'Delivery' &&
                            <div className='text-sm text-right'>{localStorage.getItem('nama')}</div>
                        }
                        <button className='text-right text-sm w-full hover:underline' onClick={() => setPopup(!popup)}>Ganti</button>
                    </div>
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
