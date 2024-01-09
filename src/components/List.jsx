import React from 'react'
import { useState } from 'react';

const List = () => {
    // array of names
    const [list, setList] = useState(['Murphy', 'Rigney', 'Noah', 'Ethan', 'Ren', 'Andres', 'Carillo', 'Jon', 'Mercutio', 'Kyle'])
    // sets type of list
    const [type, setType] = useState('ul')
    // sets direction of the list
    const [direction, setDirection] = useState('horizontal')
    // if the list is ordered, return it with the <ol> element
    // classname lines up with a css class that determines the direction of the list
    if(type == 'ol'){
        return (
            <ol className={direction}>
                {list.map(item=>{
                    return(
                        <li>{item}</li>
                    )
                    
                })}
            </ol>
        )
    }
    // if the list isn't ordered, or if it is undefined, it will return an unordered list, which means it is the default list state
    return (
        <ul className={direction}>
            {list.map(item=>{
                return(
                    <li>{item}</li>
                )
                
            })}
        </ul>
    )

}

export default List