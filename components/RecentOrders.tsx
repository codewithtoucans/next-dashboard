import {FaShoppingBag} from "react-icons/fa";
import {data} from "@/data";

const RecentOrders = () => {
    return (
        <div className='w-full col-span-1 lg:h-[70vh] bg-white rounded-lg h-[50vh] border p-4 overflow-scroll relative'>
            <h1>Recent Orders</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id} className='flex bg-gray-100 my-3 p-2 items-center hover:bg-gray-200 rounded-lg'>
                        <div className='p-3 bg-purple-100 rounded-lg'>
                            <FaShoppingBag className='text-purple-800'/>
                        </div>
                            <div className='flex flex-col gap-y-1 pl-6'>
                                <p className='font-bold text-purple-400'>$123.9</p>
                                <p className='text-sm'>{item.name}</p>
                            </div>
                            <p className='absolute text-sm right-10 md:hidden'>1 Min ago</p>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default RecentOrders