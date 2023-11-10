import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div className='flex justify-center items-center pt-10 pb-20'>
        <div>
            <h2 className='text-3xl font-bold text-center'>OUR Field Work</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-10'>
                <div className='rounded-lg border-gray-400 shadow-2xl border'>
                    <Image src="/service_img1.jpg" width={1000} height={1000} alt='' className='w-720 h-52 rounded-md'/>
                </div>
                <div className='rounded-lg border-gray-400 shadow-2xl border'>
                    <Image src="/service_img2.jpg" width={1000} height={1000} alt='' className='w-720 h-52 rounded-md'/>
                </div>
                <div className='rounded-lg border-gray-400 shadow-2xl border'>
                    <Image src="/service_img3.jpg" width={1000} height={1000} alt='' className='w-720 h-52 rounded-md'/>
                </div>
                <div className='rounded-lg border-gray-400 shadow-2xl border'>
                    <Image src="/service_img4.jpg" width={1000} height={1000} alt='' className='w-720 h-52 rounded-md'/>
                </div>
                <div className='rounded-lg border-gray-400 shadow-2xl border'>
                    <Image src="/service_img2.jpg" width={1000} height={1000} alt='' className='w-720 h-52 rounded-md'/>
                </div>
                <div className='rounded-lg border-gray-400 shadow-2xl border'>
                    <Image src="/service_img1.jpg" width={1000} height={1000} alt='' className='w-720 h-52 rounded-md'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work