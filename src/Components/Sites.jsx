import React, { Component } from 'react'

export class Sites extends Component {
  render() {
    return (
        <div className='grid bg-indigo-500 w-full'>
            <div className='inline-grid grid-cols-1 bg-sky-500'>
                <div className='inline-grid items-center justify-items-end bg-red-200 text-white grid-cols-2'>
                    <span>Sort Last Added</span>
                    <span>Rows Per Page</span>
                </div>
                <div className='bg-red-500 text-white'>
                    SD-WAN Sites
                </div>
                <div className='inline-grid grid-cols-10 bg-red-800 gap-4 p-4'>
                    <div className='bg-yellow-400 inline-grid grid-cols-9 col-span-9 gap-4'>
                        <div className='bg-indigo-800'>country</div>
                        <div className='bg-indigo-800'>sites</div>
                        <div className='bg-indigo-800'>Access design</div>
                        <div className='bg-indigo-800'>group name</div>
                        <div className='bg-indigo-800'>group id</div>
                        <div className='bg-indigo-800'>mrc</div>
                        <div className='bg-indigo-800'>mrc</div>
                        <div className='bg-indigo-800 inline-grid grid-cols-2'>
                            <i>X</i>
                            <i>Y</i>
                        </div>
                        <div className='bg-indigo-800'>
                            <i>Z</i>
                        </div>
                    </div>
                    <div className='bg-green-400 col-span-1'>
                        <div className="inline-grid bg-zinc-600">
                            <i>X</i>
                            <span>Settings</span>
                        </div>
                    </div>
                    <div className='bg-yellow-400 inline-grid grid-cols-9 col-span-9 gap-4 hidden'>
                        <div className='bg-indigo-800'>country</div>
                        <div className='bg-indigo-800'>sites</div>
                        <div className='bg-indigo-800'>Access design</div>
                        <div className='bg-indigo-800'>group name</div>
                        <div className='bg-indigo-800'>group id</div>
                        <div className='bg-indigo-800'>mrc</div>
                        <div className='bg-indigo-800'>mrc</div>
                        <div className='bg-indigo-800 inline-grid grid-cols-2'>
                            <i>X</i>
                            <i>Y</i>
                        </div>
                        <div className='bg-indigo-800'>
                            <i>Z</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Sites