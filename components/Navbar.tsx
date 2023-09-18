import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";

import CustomButton from './CustomButton';

const Navbar = () => (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto
        flex justify-between item-center
        sm:px-16 px-6 py-4'>
            <Link href="/" className="flex
            justify-center items-center">
                <Image
                 src = "/logo.svg"
                 alt= "Car Hub Logo"
                 width={118}
                 height={18}
                 className="object-contain"
                />
            </Link>

            <CustomButton
                title="Sign In Now"
                btnType='button'
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
        </nav>
    </header>
)

export default Navbar