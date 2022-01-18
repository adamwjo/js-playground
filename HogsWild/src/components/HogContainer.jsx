import React, { useState } from 'react'
import HogCard from './HogCard'

export default function HogContainer({ hogData }) {

    const [currentSort, setCurrentSort] = useState('all')

    function sortHogs(){
        const hogsToSort = [...hogData]

        if(currentSort === "weight"){
            return hogsToSort.sort((hog1, hog2) => hog1.weight - hog2.weight)
        } else if(currentSort === "name") {
            return  hogsToSort.sort((hog1, hog2) => hog1.name > hog2.name ? 1 : -1)
        } else {
            return hogsToSort
        }
    }

    console.log(sortHogs())
    return (
        <div className="ui grid container">
            <div>
                <input onChange={(e) => setCurrentSort(e.target.value)} type="checkbox" id="name" name="name" value="name"/>
                <label htmlFor='name'>Sort by name</label><br/>
                <input onChange={(e) => setCurrentSort(e.target.value)} type="checkbox" id="weight" name="weight" value="weight"/>
                <label for="weight">Sort By Weight</label><br></br>
            </div>
            { sortHogs().map(hog =>  <HogCard key={hog.id} data={hog} />) }
        </div>
    )
}
