import React from 'react'
import facebook from  '../../public/admin/footer/facebook.svg'
import instagram from  '../../public/admin/footer/instagram.svg'
import Twitter from  '../../public/admin/footer/twitter.svg'
export default function Footer() {
  return (
    <div className='bg-black text-white px-5 md:px-[7rem] mt-5 pt-10 flex-col sm:flex-row justify-between  flex pb-10'>
     <p>&copy; 2024 Tech Haven. All Right Reserved.</p>

      <div className='flex gap-10'>
          <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={Twitter} alt="" />
      </div>
    
    </div>
  )
}
