import React, {useState} from 'react'
import './todoForm.less'



interface TodoFormProps {
    addHandler(title: string):void
}


export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('')

    const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.addHandler(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mrgtop2">
            <label htmlFor="title" className="active">Enter name todo:</label>
            <input type="text" id="title" placeholder="Enter name todo"
            value={title}
            onChange={changeHandle} 
            onKeyPress={keyPressHandler}/>
        </div>
    )
}