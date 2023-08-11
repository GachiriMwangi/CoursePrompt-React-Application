import React from 'react'
import {useState} from 'react'

const AddCourses = (  {onAdd} ) => {

    const [text, setName] = useState('')
    const [cluster, setCluster] = useState('')
    const [period, setPeriod] = useState('')
    const [reminder, setRecommended] = useState(false)


const onSubmit = (e) => {
e.preventDefault()

if(!text || !cluster || !period){
    alert("Please fill in the required details. ")
    return
}

onAdd({text, cluster, period, reminder})
setName('')
setCluster('')
setPeriod('')
setRecommended(false)
}

  return (
    <form className='add-form' onSubmit={onSubmit} >
        <div className='form-control'>
     <label>Name</label>
      <input type='text' value={text} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-control'>
      <label>Cluster points</label>
      <input type='text' value={cluster} onChange={(e) => setCluster(e.target.value)} />
</div> 
<div className='form-control'>
      <label>Period</label>
      <input type='text' value={period} onChange={(e) => setPeriod(e.target.value)} />
</div>
<div className='form-control form-control-check'>
      <label >Recommended</label>
      <input type='checkbox' checked={reminder} onChange={(e) => setRecommended(e.currentTarget.checked)}/>
</div>

      <button type='submit' className='btn-block'>Submit</button>
    </form>
  )
}

export default AddCourses
