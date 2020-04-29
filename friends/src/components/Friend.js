import React from 'react';

const Friend = props =>{
    console.log('props in friend component',props)
    return(
        <div className='friendCard'>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.email}</div>
        </div>
    )
}
export default Friend;