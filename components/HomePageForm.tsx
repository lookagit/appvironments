const form = [
    { label: "First name*", type: "text" },
    { label: "Last name*", type: "text" },
    { label: "E-mail*", type: "text" },
    { label: "Company name*", type: "text" },
    { label: "Website URL", type: "text" },
]

const select = [
    { label: "Industry*", type: "text" },
    { label: "Country*", type: "text" },
    { label: "Employee count*", type: "text" },
    { label: "Job title*", type: "text" }, 
    { label: "Target start date*", type: "text" },
    { label: "What kind of project is this?*", type: "text" },
    { label: "Project budget*", type: "text" }, 
]

const selectForm = [
    { label: "", text: ""},
    { label: "1", text: "option 1"},
    { label: "2", text: "option 2"},
    { label: "3", text: "otpion 3"},
]



const handleChange = event => {
    console.log(event.target.value);
  }


const HomePageForm = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-medium text-primary font-sans"> 
                FREE APP DEVELOPMENT ESTIMATE
            </div>
            <div className="mb-10 mt-10">
                <img src="/images/appvironments-title_line.png"/>
            </div>
            <div className="text-lg font-sans text-black font-normal">
                TIMELINE AND ROUGH COST
            </div>
            <div className="text-md font-sans text-black font-normal underline italic">
                As you know NDA is a must.
            </div>

            <div className="flex flex-col mt-20 mb-20 items-center">
                {
                    form.map((formItem, key) => (
                        <div key={key}>
                            <div className="text-primary font-sans font-light text">
                                {formItem.label}
                            </div>
                            <div className=""> 
                                <input type={formItem.type} className="block w-[718px] h-[45px] bg-gray-light py-3 px-4 mb-3"/>
                            </div>
                        </div>
                    ))
                }


                {
                    select.map((selectItem, key) => (
                        <div key={key}>
                            <div className="text-primary font-sans font-light text">
                                {selectItem.label}
                            </div>
                            <select onChange={handleChange} className="block w-[718px] h-[45px] bg-gray-light  py-3 px-4 mb-3">
                        {
                            selectForm.map((option, key) => (
                                <option key={key} value={option.label}>
                                    {option.text}
                                </option>
                            ))
                        }
                            </select> 
                        </div>
                    ))
                }
              

                <div className="text-primary font-sans font-light text"> 
                    Tell us briefly aobut your idea*
                    <input type="text" className="block w-[718px] h-[90px] bg-gray-light py-3 px-4 mb-3 text-black"/>
                </div>

                <div className="text-primary font-sans font-light text"> 
                    Phone number*
                    <input type="text" className="block w-[718px] h-[45px] bg-gray-light py-3 px-4 mb-3"/>
                </div>

                <button className="bg-purple-dark text-primary py-3 px-4 rounded mt-20 w-[200px]">
                        Start build
                </button>  
                
            </div>
        </div>    
    )
}

export default HomePageForm