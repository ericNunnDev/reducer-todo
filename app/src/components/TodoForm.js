import React, { useState } from 'react'
import { connect } from 'react-redux';

const TodoForm = props => {
    const [newItem, setNewItem] = useState('');

    const handleChange = e => {
        setNewItem(e.target.value);
    };

    return ( 
        <div>
            <form>
                <input
                  className='todoInput'
                  type='text' 
                  name='item'
                  value={newItem}
                  onChange={handleChange}
                  />
                <button>Add Item</button>
            </form>
        </div>
     );
}
 
export default TodoForm;