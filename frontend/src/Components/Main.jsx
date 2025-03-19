import React from 'react'
import Sidebar from './Sidebar'

const Main = () => {
  return (
   <div className='flex'>
          <section>
           <Sidebar/>
          </section>
          <section>
           <div>
           <h1>chatUpdate</h1>
           </div>
          </section>
          <section>
            <div>
            <h1>chatscreen</h1>
            </div>
          </section>
   </div>
  )
}

export default Main
