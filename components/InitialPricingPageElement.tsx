const InitialPricingPageElement = () => {
    return(
        <div className="flex items-center relative mt-20">
            <div className="flex flex-col h-[700px] w-[1000px]">
                <div className="text-4xl font-medium text-primary font-sans">
                    ESTIMATE<br></br>
                </div>
                <div className="text-4xl font-medium text-secondary font-sans">
                    AND BUILD
                </div>
                <div className="text-xl text-black font-sans">
                    WELCOME TO SIMPLIFIED<br></br>
                    AND TRANSPARENT PRICING
                </div>
                <div>
                    <img src="/icons/line.png" className="w-[420px] mt-3 mb-3"/>
                </div>
                <div className="text-lg font-sans text-primary font-normal">
                    Monthly subscription and fair hourly<br></br> 
                    rates without hidden costs.
                </div>
            </div>
        </div>
    )
}

export default InitialPricingPageElement