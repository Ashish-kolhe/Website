import React from 'react'
import ReferNav from '../components/ReferNav'

const page = () => {
  return (
    <div>
    <ReferNav/>
  <div className=" flex-row justify-items-center mt-4 pb-20">
  <img className='w-24' src="./rupee.gif" alt="" />
  <h1 className="font-black text-sm text-gray-900 mt-2">Be the First to Refer and Earn!</h1>
  <div className="overflow-x-auto mt-8 border-2 border-secondary rounded-2xl">
<table className="table text-center bg-white">
 
  <thead>
    <tr className="text-secondary">
     
      <th>Level</th>
      <th>Range</th>
      <th>₹ Per Referral</th>
      <th>Earnings</th>
    </tr>
  </thead>
  <tbody className="text-sm font-bold">
    {/* row 1 */}
    <tr>
      
      <td>Starter</td>
      <td>0-9</td>
      <td>₹10</td>
      <td>₹90</td>
    </tr>
    {/* row 2 */}
    <tr className="text-info">
      
    <td>Level 1</td>
      <td>10-24</td>
      <td>₹13</td>
      <td>₹195</td>
    </tr>
    {/* row 3 */}
    <tr className="text-success">
      
    <td>Level 2</td>
      <td>25-49</td>
      <td>₹15</td>
      <td>₹375</td>
    </tr>
    <tr className="text-red-500">
      
      <td>Level 3</td>
        <td>50-99</td>
        <td>₹17</td>
        <td>₹850</td>
      </tr>
      
  </tbody>
</table>
</div>
<h1 className="font-black text-sm text-gray-800 mt-3">Total Estimated Earnings for <span className="text-green-500 ">100</span> Referrals:</h1>
<h1 className="text-3xl font-black text-secondary mt-1 mb-8">₹1500</h1>
<h1 className="text-xs font-black text-gray-700 mt-1 mb-20">If you are already registered, <a className='text-blue-600 underline' href="https://refer-coddeit.vercel.app/">Click Here</a> 👈</h1>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSceGYvXY7pPzjAvZlYTqHpOPMzeGlNJfMkO2DkbhXuGqxOxdQ/viewform?embedded=true" width="400" height="200"  >Loading…</iframe>

    </div>
    </div>
  )
}

export default page