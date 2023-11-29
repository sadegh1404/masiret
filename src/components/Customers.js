import Link from "next/link";


export  default function Customer(props){
    return (
        <section className="text-gray-600 body-font" id="customers">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">مناسب برای کسب و کار های شما</h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium mr-5">توزیع کنندگان مواد غذایی و نوشیدنی</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium mr-5">توزیع کنندگان دارویی</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium mr-5">توزیع کنندگان محصولات خرده‌فروشی</span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium mr-5">شرکت‌های تولیدی با کانال‌های توزیع مستقیم به مصرف کننده</span>
                    </div>
                </div>
                </div>
                <Link href='#home' scroll={false}><button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">ثبت نام در خبرنامه</button></Link>
            </div>
        </section>

    )
}