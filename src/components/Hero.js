

export default function Hero(props){
    return (
        <section className="text-gray-600 body-font font-rubic" id="home">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-right">مسیریاب هوشمند مسیــــــرتــــ: راه حل نهایی برای مدیریت لجستیک</h1>
              <p className="mb-8 leading-relaxed text-right">مسیریاب هوشمند، یک راه حل نرم افزاری نوآورانه، به کسب و کارها در هر اندازه ای کمک می کند تا عملیات تحویل خود را بهینه سازی کنند و رضایت مشتری را افزایش دهند. با استفاده از الگوریتم‌های پیشرفته و فناوری‌های نوآورانه، مسیریاب هوشمند مسیرهای تحویل را بهینه می‌کند، هزینه‌های حمل و نقل را کاهش می‌دهد و زمان تحویل را بهبود می‌بخشد.</p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">عضویت</button>
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 text-right">
                  <label for="hero-field" className="leading-7 text-sm text-gray-600">ایمیل</label>
                  <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <p className="text-sm mt-2 text-gray-500">برای اطلاعیه های آینده در خبرنامه ثبت نام کنید</p>
              
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="Illustration_2.png"/>
            </div>
          </div>
        </section>
    )
}
