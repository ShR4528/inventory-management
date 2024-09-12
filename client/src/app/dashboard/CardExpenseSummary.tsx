import { useGetDashboardMetricsQuery } from '../state/api'

const colors = ["#00C49F", "#0088FE", "#FFBB28"]

const CardExpenseSummary = () => {
    const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery()
    return (
        <div className='row-span-3 bg-white shadow-sm rounded-2xl flex flex-col justify-between'>
            {isLoading ? (
                <div className='m-5'>Loading...</div>
            ) : (
                <>
                    {/* HEADER */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
                            Expense Summary
                        </h2>
                        <hr />
                    </div>
                    <div className='xl:flex justify-between pr-7'>

                    </div>
                </>

            )}
        </div>
    )
}

export default CardExpenseSummary