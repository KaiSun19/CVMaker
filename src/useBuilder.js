import { useState,useEffect } from "react";

const SaveForm = () =>{

    const [ values, setValues] = useState({
        firstname : "",
        lastname : "",
        email : "",
        address: ""
    })

    const handleChange = e =>{

        const {name,value} = e.currentTarget
        setValues({
            ...values,
            [name] : value
        })

    }

    return {handleChange, values};
}

export default SaveForm;