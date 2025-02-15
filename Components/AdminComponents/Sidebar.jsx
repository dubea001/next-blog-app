import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={assets.logo} width={120} alt='logo' />
            </div>
            <div className='w-28 sm:w-80 h-screen relative py-12 border border-black'>
                <div className='w-1/2 absolute right-0 sm:w-[80%]'>
                    <Link
                        href='/admin/addProduct'
                        className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'
                    >
                        <Image
                            src={assets.add_icon}
                            alt='add icon'
                            width={28}
                        />
                        <p className=''>Add blogs</p>
                    </Link>
                    <Link
                        href='/admin/blogList'
                        className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'
                    >
                        <Image
                            src={assets.blog_icon}
                            alt='add icon'
                            width={28}
                        />
                        <p className=''>Blog lists</p>
                    </Link>
                    <Link
                        href='/admin/subscriptions'
                        className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'
                    >
                        <Image
                            src={assets.email_icon}
                            alt='add icon'
                            width={28}
                        />
                        <p className=''>Subscriptions</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
