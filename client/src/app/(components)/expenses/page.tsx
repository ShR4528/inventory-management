'use client'

import { useGetExpensesByCategoryQuery } from '@/app/state/api'
import React, { useMemo, useState } from 'react'


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
    <div>Expenses</div>
  )
}

export default Expenses