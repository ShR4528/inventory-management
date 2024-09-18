'use client'

import { useGetExpensesByCategoryQuery } from '@/app/state/api'
import React, { useMemo, useState } from 'react'
import Header from '../Header'


const Expenses = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const {data: expensesData, isLoading, isError} = useGetExpensesByCategoryQuery()

    const expenses = useMemo(() => expensesData ?? [], [expensesData])


    
    if(isLoading) return <div className="py-4">Loading...</div>

    if(isError || !expensesData) return <div className="text-center text-red-500">Failed to fetch expenses</div>

  return (
    <div>

   
    {/*  HEADER */}
    <div className='mb-5'>
        <Header name='Expenses'  />
        <p className='text-sm text-gray-500'>
        A visual representation of your expenses.
        </p>
    </div>

{/* FILTERS */}
    <div className='flex flex-col md:flex-row justify-between gap-4'>
        <div className='w-full md:w-1/3 bg-white shadow rounded-lg p-6'>
        <h3 className='text-lg font-semibold mb-4'>
            Filter by Category and Date
        </h3>

        <div className='space-y-4'>
            {/* CATEGORY */}
            <div>
                <label htmlFor="category" className='block text-sm font-medium text-gray-700'>
                    Category
                </label>
                <select
                 name="category" 
                id="category"
                className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
                onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option>All</option>
                    <option>Office</option>
                    <option>Professional</option>
                    <option>Salaries</option>
                </select>
            </div>

            {/* START  DATE */}
            <div>
                <label htmlFor="start-date" className='block text-sm font-medium text-gray-700'>
                    Start Date
                </label>
                <input 
                type='date'
                id='start-date'
                name='start-date'
                className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
                onChange={(e)=> setStartDate(e.target.value)}
                />
            </div>
            {/* END DATE */}
            <div>
                <label htmlFor="end-date" className='block text-sm font-medium text-gray-700'>
                    End Date
                </label>
                <input 
                type='date'
                id='end-date'
                name='end-date'
                className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
                />
            </div>
        </div>

        </div>
    </div>
</div>
  )
}

export default Expenses