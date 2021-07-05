const AddTask = () => {
  return (
    <form className='add-form'>
      <did className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add task'/>
      </did>
      <did className='form-control'>
        <label>Day & time</label>
        <input type='text' placeholder='Add day & time'/>
      </did>
      <did className='form-control form-control-check'>
        <label>Set Remainder</label>
        <input type='checkbox'/>
      </did>
      <input className='btn btn-block' type='submit' value='Save task'/>
    </form>
  )
}

export default AddTask