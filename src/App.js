import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.scss';

function App() {
  const [ name, setName ] = useState({value: '', isValid: false})
  const [ day, setDay ] = useState({value: '', isValid: false})
  const [ selValue, setSelValue ] = useState({value: '', isValid: false})

  const namePerson = useSelector(state => state)

  const agePerson = useSelector(state => state)

  const selValuePerson = useSelector(state => state)

  const dispatch = useDispatch()

  const dayFunc = event => {
    const { value } = event.target;
    const date = new Date().getTime() - new Date(value).getTime();
    const agePerson =  new Date(date).getFullYear() - 1970
    setDay ({
      value: agePerson,
      isValid: agePerson>18
    })
  }
  const handleChangeInput = event => {
    setName({
      value: event.target.value,
      isValid: event.target.value.length >= 2
    })
  }

  const addToLocalStorag = () => {
    localStorage.setItem(name.value, day.value)
    localStorage.setItem(selValue.value, '')
  }

  const selectValue = val => {
    setSelValue(val.target.value)
  }

  const deleteFromeLocacl = () => {
    localStorage.clear()
  }

    return (
      <div>
      <div className='parent'>
        <div className="conteiner">
        <input onChange={handleChangeInput} className="name"placeholder="ФИО"></input>
        <input onChange={dayFunc} className="day" type='date'></input>
       
        <div className="dropDown"> 
           <select onChange={selectValue} className="sel">
             <option value="Отлично">Отлично</option>
             <option value="хорошо">хорошо</option>
             <option value="удачно">удачно</option>
             <option value="неудачно">неудачно</option>
           </select>
        </div>
       
        </div>
        <div className='buttonDiv'>
          <button onClick={addToLocalStorag} className="localAdd">Add Psrson to Local Storage</button>
          <button onClick={deleteFromeLocacl} className="localAdd" >remove LocaclStage</button>
          <button className='editButton'>Edit Person</button>
          </div>
          
      </div>
      
          <div className='addPersonDiv'>
          <h1>{name.value}</h1>
          <h1>{day.value}</h1>
          <input className="changeInput" placeholder={selValue}></input>
          </div>
      </div>
    )
  }

export default App
