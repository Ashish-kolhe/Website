import React from 'react'

const ReferNav = () => {
  return (
    <div>
    <div className="navbar bg-white py-4">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 font-bold">
        <li><a href='/'>Home</a></li>
        <li><a href='https://refer-coddeit.vercel.app/'>Leaderboard</a></li>
        
      </ul>
    </div>
  </div>
<div className="navbar-center">

<a className="font-black text-xl text-gray-900" >Refer & Earn</a>

</div>
<div className="navbar-end">


</div>
</div>
</div>
  )
}

export default ReferNav