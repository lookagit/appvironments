const HomePageBoxButton = () => {
    return(
        <div className="flex flex-col justify-center items-center space-y-10  w-[1070px] h-[840px] bg-purple-dark">
            <div className="text-3xl font-bold text-secondary font-mono">
                EASY AND ACCESSIBLE
            </div>
            <div className="">
                <img src="/images/appvironments-title_line.png"/>
            </div>
            <div className="text-primary font-bold font-mono text-lg">
                Faster productions and business-ready apps
            </div>    
                <div className="flex flex-col items-start space-y-10 ml-10"> 
                    <div className="text-primary font-mono text-md">
                        Most apps use same features, frameworks etc...<br></br>
                        So why bother building them each time from scratch?
                    </div>
                    <div className="text-secondary underline font-bold font-mono text-lg">
                        We're here to help make your idea a reality.
                    </div>
                    <div className="text-primary font-mono text-md list-disc">
                        Based on what features you want for your project Appsvironments is here to help<br></br>
                        you navigate thru our code packages and services so we can provide you with<br></br>
                        complement code.
                    </div>
                    <div className="text-primary font-mono text-md">
                        After you've found the perfect package our team, of experienced developers and<br></br>
                        project managers, will help you each and every step of the way to make your project<br></br>
                        to the production.
                    </div>
                </div>    
            <button class="bg-primary text-primary text-sm py-3 px-4 rounded mt-20">
                Estimate with an Expert
            </button>           
        </div>
    )
}

export default HomePageBoxButton