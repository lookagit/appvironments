const HomePageElementButton = () => {
    return(

        <div className="flex flex-col  items-center w-[718px] h-[620px] bg-purple-dark mb-20 mt-20">
            <div className="text-2xl mt-10 font-medium text-primary font-sans">
                ESTIMATE YOUR COST
            </div>
            <div className="text-2xl font-medium text-primary font-sans">
                TO BUILD AN APP
            </div>
            <div>
                <img src="/images/appvironments_estimate_cost.png"/>
            </div>
            <button className="bg-primary text-primary text-sm py-3 px-4 rounded mt-20">
                Try our estimate calculator
            </button>           
        </div>
    )   
}

export default HomePageElementButton