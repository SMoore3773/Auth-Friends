import React from 'react';

const Friend = props =>{
    console.log('props in friend component',props)
    return(
        <div className='friendCard'>
            <div className='friendName'>{props.name}</div>
            <div className='friendAttr'>{props.age}</div>
            <div className='fiendAttr'>{props.email}</div>
        </div>
    )
}
export default Friend;