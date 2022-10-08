const HomePageCardButton = () => {
    return(
        <div className="flex flex-col justify-center space-y-8 mb-10 mt-10 items-center w-7/12 h-96 bg-purple-dark">
            <div className="text-3xl font-medium text-primary font-sans">
                LET US CREATE FOR YOU!
            </div>
            <div className="">
                <img src="/images/appvironments-title_line.png"/>
            </div>
            <div className="text-primary font-sans text-lg">
                Meet up with professionals and get started! 
            </div>
            <button className="bg-blue-light text-none text-sm py-3 px-4 rounded">
                Managed Development
            </button>
        </div>
    )
}

export default HomePageCardButton