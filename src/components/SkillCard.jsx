import React from 'react'

function SkillCard(props) {
    return (
        <span className='border p-1 m-1' style={{ width: "auto" }}>
            <span>{props.data} </span>
            <button onClick={() => props.handleRemove(props.data)} className='btn btn-danger px-1 m-0 rounded-circle'>X</button>
        </span>
    )
}

export default SkillCard