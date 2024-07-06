import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// Shared Tailwind CSS classes
const cardClasses = 'border p-4 rounded-lg'
const imgClasses = 'mx-auto mb-4'
const buttonClasses = 'bg-green-500 text-white p-2 mt-2 w-full rounded-lg'

const SearchResults = () => {
    const {name}=useParams();
useEffect(()=>{
    if(name){
     
  const search =()=>{
       const queryParams = {
            search: name,
            page: 1,
            limit: 10
          };
          
          axios.get('http://localhost:5454/api/search', { params: queryParams })
            .then(response => {
              console.log(response.data);
            })
  }
    }

})
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Search results</h2>
      <p className="text-muted-foreground">
        Showing 10 & more results for <span className="font-semibold">"sandal"</span>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className={cardClasses}>
          <img src="https://placehold.co/150x100" alt="Mysore Sandal Soap" className={imgClasses} />
          <h3 className="font-semibold">Mysore Sandal Soap : 3x150 gms</h3>
          <p className="text-muted-foreground">
            MRP ₹243 <span className="line-through">₹218</span>
          </p>
          <p className="text-green-500">₹25 OFF</p>
          <select className="border mt-2 p-1 w-full">
            <option>3x150 gm</option>
          </select>
          <button className={buttonClasses}>ADD TO CART</button>
        </div>

        {/* Repeat the above card structure for other items */}
      </div>
    </div>
  )
}

export default SearchResults