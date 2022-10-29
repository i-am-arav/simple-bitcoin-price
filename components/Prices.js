import React from 'react'

const Prices = (props) => {
  const [currency,setCurrency] = React.useState("USD");
  const [list,setList] = React.useState("");

  React.useEffect(() => {
      if(currency === 'USD') {
          setList(<li className='list-group-item'>Bitcoin Rate for {props.bpi.USD.description} : {' '} 
          <span className='badge badge-success'>{props.bpi.USD.code}</span>
          <strong>{' '}{props.bpi.USD.rate}</strong>
          </li>)
      }
      else if(currency === 'GBP') {
          setList(<li className='list-group-item'>Bitcoin Rate for {props.bpi.GBP.description} : {' '} 
          <span className='badge badge-success'>{props.bpi.GBP.code}</span>
          <strong>{' '}{props.bpi.GBP.rate}</strong>
          </li>)
      }
      else if(currency === 'EUR') {
          setList(<li className='list-group-item'>Bitcoin Rate for {props.bpi.EUR.description} : {' '} 
          <span className='badge badge-success'>{props.bpi.EUR.code}</span>
          <strong>{' '}{props.bpi.EUR.rate}</strong>
          </li>)
      }

  },[currency])
  return (
    <div>
        <ul className='list-group'>
            {list}
        </ul>
        <br />
        <div className='row'>
        <select className='col-6 ml-3 form-control' onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
        </select>
        </div>
         <p className='ml-1 mt-2'>Last updated : <strong>{props.time.updated}</strong></p>
    </div>
  )
}

export default Prices