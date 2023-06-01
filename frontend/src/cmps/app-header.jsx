import React from 'react'
import { Link } from "react-router-dom";
import logoImg from '../assets/img/krallo-logo-gray.svg'
import { BsBell, BsCircleHalf, BsSearch, BsTrello } from "react-icons/bs";
import UserImg from "./user-img"

export default function AppHeader() {

  return (
    <ul className="app-header flex between clean-list">
      <li className="gray-logo flex">
        <Link to="/workspaces" className='flex align-center'>
          <BsTrello />
          <div>
            Krallo
          </div>
        </Link>
      </li>
      <li>
        <div className="app-header-links flex">
          <input className="search-input" type="search" id="site-search" placeholder='Search' />
          <button className='btn-search'><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" fill="currentColor" fill-rule="evenodd"></path></svg></button>
          <button className='btn btn-icon' ><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z" fill="currentColor" fill-rule="evenodd"></path></svg></button>
          <button className='btn btn-icon' ><svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20V4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg></button>
          <Link className='user-img-header flex'><UserImg /></Link>
        </div>
      </li>
    </ul>
  )
}
