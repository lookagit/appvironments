const HomePageCardButtonBig = () => {
    return(
        <div className="flex flex-col justify-center mb-10 mt-10 items-center w-[1070px] h-[640px] bg-purple-dark">
            <div className="text-secondary font-mono text-lg">
                Have experience in coding/app building?
            </div>
            <div className="text-3xl font-bold text-primary font-mono">
                WHY NOT DO IT BY YOURSELF?
            </div>
            <div>
                <img src="/images/appvironments-code-application.png"/>
            </div>
            <button className="bg-blue-light text-none text-sm py-3 px-4 rounded mt-20 w-[200px]">
                Learn more
            </button>                         
        </div>
    )
}

export default HomePageCardButtonBig