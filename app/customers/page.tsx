'use client'
import {BsPersonFill, BsThreeDotsVertical} from "react-icons/bs";
import {useQuery} from "@tanstack/react-query";
import {getUserData} from "@/data";


const Customers = () => {
    const {data, isLoading, isError, error} = useQuery<User[]>({
        queryKey: ['user'],
        queryFn: getUserData,
        staleTime: 60 * 60 * 1000
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    if (isError) {
        console.log(error)
        return <div>Something was wrong</div>
    }


    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <div className='flex justify-between items-center p-3'>
                <h2 className='text-sm font-bold'>Customers</h2>
                <h2 className='text-sm font-semibold'>Welcome back, Popcorn</h2>
            </div>
            <div className='p-4'>
                <div className='bg-white w-full border mx-auto mt-4 flex flex-col justify-start'>
                    <div className='grid md:col-span-3 sm:col-span-2 grid-cols-4 justify-between items-center my-3 p-2'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Email</span>
                        <span className='hidden md:grid'>Last Order</span>
                        <span className='sm:grid hidden'>Method</span>
                    </div>
                    <ul>
                        {data!.map(item => (
                            <li key={item.id}
                                className='bg-gray-100 hover:bg-gray-200 rounded-lg py-3 p-2 grid md:col-span-3 sm:col-span-2 grid-cols-4 justify-between items-center'>
                                <div className='flex items-center'>
                                    <div className='p-3 rounded-lg bg-purple-100'>
                                        <BsPersonFill className='text-purple-800'/>
                                    </div>
                                    <p className='pl-6'>{item.name}</p>
                                </div>
                                <p className='sm:text-left text-right'>{item.email}</p>
                                <p className='hidden md:grid'>27 Minutes ago</p>
                                <div className='sm:flex items-center relative hidden'>
                                    <p>PayPal</p>
                                    <BsThreeDotsVertical
                                        className='absolute right-8 hover:border hover:border-gray-200 hover:rounded-lg cursor-pointer'/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Customers