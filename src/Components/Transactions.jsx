import React from 'react'

function Transactions() {
    
    const trxs = [
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)},
        {"amount": 12.2, "value": 66789, "date": new Date(2022, 11, 17)}
    ]

    return (
        <div className='grid justify-center items-center p-4'>
            <ul className='grid gap-y-1'>
                {trxs.map((trx) => {
                    return (
                        <li className='grid grid-cols-3 justify-center items-center p-4 rounded-xl text-white bg-violet-700 '>
                            <div className='col-span-1'>{trx.amount} ETH</div>
                            <div className='col-span-1'>${trx.value.toLocaleString("en-US")}</div>
                            <div className='col-span-1'>{trx.date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    
}

export default Transactions