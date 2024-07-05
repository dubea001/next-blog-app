import { assets } from '@/Assets/assets';
import Sidebar from '@/Components/AdminComponents/Sidebar';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
            <div className='flex'>
                <ToastContainer theme='dark' />
                <Sidebar />
                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between w-full py-3 px-12 border-b border-black max-h-[60px]'>
                        <h3 className='font-semibold'>Admin Panel</h3>
                        <Image
                            src={assets.profile_icon}
                            width={40}
                            alt='admin profile'
                        />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}
