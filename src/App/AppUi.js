import React from "react";
import { CreditContext } from "../CreditContext"; 
import { CreditIndex} from "../CreditIndex";
import {CreditResult} from "../CreditResult";

function AppUI(){
    const {
        DateBirthay,
        setDateBirthay,
        ocupation,
        setOcupation,
        name,
        setName,
        lastname,
        setLastname,
        phone,
        setPhone,
        mail,
        setMail,
        salary,
        setSalary,
        valueObject,
        setValueObject,
        ocupations,
        ValidateFields,
        error,
        setError,
        basic, 
        setBasic,
        gold, 
        setGold,
        noCredit, 
        setNoCredit,
        valueYearBasic, 
        setValueYearBasic,
        valueMonthBasic, 
        setValueMonthBasic,
        black, 
        setBlack,
        valueYearGold,
        setValueYearGold,
        valueMonthGold, 
        setValueMonthGold,
        valueYearBlack, 
        setValueYearBlack,
        valueMonthBlack, 
        setValueMonthBlack
    } = React.useContext(CreditContext);

if(basic || gold || black){
    return (
        <React.Fragment>
            <CreditResult>
                
                </CreditResult>
            
            
        </React.Fragment>
    );
}else{
    return (
        <React.Fragment>
            <CreditIndex>

</CreditIndex>
            
        </React.Fragment>
    );
}
    
}

export {AppUI}