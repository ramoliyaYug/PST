import React from 'react'

const List = () => {
    const arr = ["yug","ananya","anvita","annu","shivika"]
  return (
    <div>
        <ul>
            {arr.map((names,i)=>{                
                return <li key={i}>{names}</li>
            })}
        </ul>
    </div>
  )
}

export default List