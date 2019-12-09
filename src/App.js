import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.scss';

function App() {
  const initialValueName =   localStorage.getItem('name') || '' 
  const initialValueDay  =   localStorage.getItem('day')  || '' 
  const initialValueSel  =   localStorage.getItem('sel')  || '' 

  const [ name, setName ]         = useState({value: initialValueName, isValid: false})
  const [ day, setDay ]           = useState({value: initialValueDay,  isValid: false})
  const [ selValue, setSelValue ] = useState({value: initialValueSel,  isValid: false})
  const [ add, setAdd ]           = useState({isValid: false})
  const [ person, setPerson ]     = useState({date:[]})

  const namePerson = useSelector(name => name)

  const agePerson = useSelector(day => day)

  const selValuePerson = useSelector(selValue => selValue)

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
  const stArr = []

  const addToLocalStorag = () => {
    localStorage.setItem(name.value, 'name')
    localStorage.setItem(day.value, 'day')
    localStorage.setItem(selValue, 'sel')
      stArr.push(name.value, day.value, selValue)
      setPerson({
        setAdd: stArr 
      })
  }
  const selectValue = val => {
    setSelValue(val.target.value)
  }

  const deleteFromeLocacl = () => {
    localStorage.clear()
  }

    const addStudent = () => {
      setAdd({
        isValid: true
      }) 
    }

    return (
      <div>
      <div className='parent'>
        <div className="conteiner">
        <input onChange={handleChangeInput} className={`name ${name.isValid ? "blue" : "red"}`} placeholder="ФИО"></input>
        <input onChange={dayFunc} className={`day ${day.isValid ? "blue" : "red"}`} type='date'></input>
       
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
        <button onClick={addStudent} className='personButton'>View Person</button>
          <button onClick={() => 
          dispatch({
            type: "SET_NAME",
            name: name,
            
          })
          } onClick={addToLocalStorag} 
          className="localAdd">Add Psrson to Local Storage</button>

          <button onClick={deleteFromeLocacl} className="localAdd" >Remove LocaclStage</button>
          </div>
          
      </div>
      
          <div>
        {
          add.isValid ?
          <div>
          <h1>{name.value}</h1>
          <h1>{day.value}</h1>
          <h1>{selValue}</h1>
          <button>Edit Person</button>
          </div>
          : ''
        }
          </div>
      </div>
    )
  }

export default App
