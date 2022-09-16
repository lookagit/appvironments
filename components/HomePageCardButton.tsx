const HomePageCardButton = () => {
    return(
        <div className="flex flex-col justify-center space-y-8 items-center w-[1070px] h-[409px] bg-purple-dark">
            <div className="text-3xl font-bold text-primary font-mono">
                LET US CREATE FOR YOU!
            </div>
            <div className="">
                <img src="/images/appvironments-title_line.png"/>
            </div>
            <div className="text-primary font-bold font-mono text-lg">
                Meet up with professionals and get started! 
            </div>
            <button class="bg-secondary text-none text-sm py-3 px-4 rounded">
                Managed Development
            </button>
        </div>
    )
}

export default HomePageCardButton