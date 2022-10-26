import {useState} from 'react';

const form = [
    { label: "First name*", type: "text",name: "firstName" },
    { label: "Last name*", type: "text", name: "lastName" },
    { label: "E-mail*", type: "text", name: "eMail" },
    { label: "Company name*", type: "text", name: "companyName" },
    { label: "Website URL", type: "text", name: "websiteURL"},
    { label: "Tell us briefly aobut your idea*", type: "text", name: "tellUsAbout"}
]

const select = [
    { label: "Industry*", type: "text", name: "industry" },
    { label: "Country*", type: "text", name:"country" },
    { label: "Employee count*", type: "text", name: "employeeCount" },
    { label: "Job title*", type: "text", name: "jobTitle" }, 
    { label: "Target start date*", type: "text", name: "targetStartDate" },
    { label: "What kind of project is this?*", type: "text", name: "whatKind" },
    { label: "Project budget*", type: "text", name: "projectBudget" }, 
]

const selectForm = [
    { label: "", text: ""},
    { label: "1", text: "option 1"},
    { label: "2", text: "option 2"},
    { label: "3", text: "otpion 3"},
]

const HomePageForm = () => {

    const [formValues, setFormValues ] = useState({
        firstName: '',
        lastName: '',
        eMail: '',
        companyName: '',
        websiteURL: '',
        tellUsAbout: '',
        phone: '',
    })

    const [selectValues, setSelectValues] = useState({
        industry: '',
        country: '',
        employeeCount: '',
        jobTitle: '',
        targetStartDate: '',
        whatKind: '',
        projectBudget: '',
    })

    const handleTextInput = (event:any, inputName:string) => {
        
        setFormValues(prevState => ({ ...prevState, [inputName]: event.target.value }));
    }

    const handleSelectInput = (event:any, inputName:string) => {
        setSelectValues(prevState => ({ ...prevState, [inputName]: event.target.value}));
    }    

    const [tellUsAbout, setTellUsAbout] =  useState('')
    const [phones, setPhones] = useState('')

    const handleSubmit = event => {
        console.log('handleSubmit ran', formValues)
        console.log(selectValues)
        event.preventDefault()

        console.log("tell us about yourself:", tellUsAbout)
        console.log("phone:", phones)

        setTellUsAbout('')
    }

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
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    {
                        form.map((formItem, key) => (
                            <div key={key}>
                                <div className="text-primary font-sans font-light text">
                                    {formItem.label}
                                </div>
                                <div className="">
                                    <input onChange={event => handleTextInput(event, formItem.name)} type={formItem.type} className="block w-[718px] h-[45px] bg-gray-light py-3 px-4 mb-3"/>
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
                                <select onChange={event => handleSelectInput(event, selectItem.name)} className="block w-[718px] h-[45px] bg-gray-light  py-3 px-4 mb-3">
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
                        <input value={tellUsAbout} onChange={event => setTellUsAbout(event.target.value)} type="text" className="block w-[718px] h-[90px] bg-gray-light py-3 px-4 mb-3 text-black"/>
                    </div>

                    <div className="text-primary font-sans font-light text"> 
                        Phone number*
                        <input value={phones} onChange={event => setPhones(event.target.value)} type="text" className="block w-[718px] h-[45px] bg-gray-light py-3 px-4 mb-3"/>
                    </div>

                    <button type="submit" className="bg-purple-dark text-primary py-3 px-4 rounded mt-20 w-[200px]">
                            Start build
                    </button>  
                </form>    
            </div>
        </div>    
    )
}

export default HomePageForm