import React, {useState} from 'react'

const initialFormValues={
    name: '',
    description:'',
    duedate: '',
    frequency:'',
}
export const CreateTodo = () => {
    const [form, setForm] = useState(initialFormValues)
    const [toDos, setToDos] = useState([])
    /* Post needs name, description, duedate, frequency */
    return (
        <div>
            <form>
                <label>
                    Name
                    <input>
                    </input>
                </label>
                <label>
                    Description
                    <input>
                    </input>
                </label>
                <label>
                    Due Date
                    <input>
                    </input>
                </label>
                <label>
                    Frequency
                    <input>
                    </input>
                </label>
            </form>
        </div>
    )
}
