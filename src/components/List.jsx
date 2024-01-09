import React from 'react'
import { useState } from 'react';

const List = () => {
    const [list, setList] = useState(['Murphy', 'Rigney', 'Noah', 'Ethan', 'Ren', 'Andres', 'Carillo', 'Jon', 'Mercutio', 'Kyle'])
    const [type, setType] = useState('ul')
    const [direction, setDirection] = useState('horizontal')
    console.log(list)
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