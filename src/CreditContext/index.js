import React, { useState } from "react";

const CreditContext = React.createContext();

function CreditProvider(props){
    const [DateBirthay, setDateBirthay] = React.useState(new Date());
    const [ocupation, setOcupation] = React.useState("");
    const [typeCredit, setTypeCredit] = React.useState("");
    const [name, setName] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [valueObject, setValueObject] = React.useState("");
    const [error, setError] = React.useState("");
    const [basic, setBasic] = React.useState(false);
    const [gold, setGold] = React.useState(false);
    const [black, setBlack] = React.useState(false);
    const [noCredit, setNoCredit] = React.useState(false);
    const [valueYearBasic, setValueYearBasic] = React.useState("");
    const [valueMonthBasic, setValueMonthBasic] = React.useState("");
    const [valueYearGold, setValueYearGold] = React.useState("");
    const [valueMonthGold, setValueMonthGold] = React.useState("");
    const [valueYearBlack, setValueYearBlack] = React.useState("");
    const [valueMonthBlack, setValueMonthBlack] = React.useState("");
  
    const ocupations = [
      { label: 'Empleado', id: 1 },
      { label: 'Pensionado', id: 2 },
      { label: 'Independiente', id: 3 },
    ];
  
    function ValidateFields (){
      let msgError = "";
      if(!DateBirthay){
        msgError += "La Fecha de Cumpleaños es Obligatoria.";
      }else{
        let old = fetOld(DateBirthay);
        if(old < 18){
          msgError += "Su Edad No Supera el minimos de Edad para adquirir el credito.";
        }

      }

      if(!ocupation){
        msgError += "La Ocupación es Obligatoria.";
      }

      if(!name){
        msgError += "El Nombre es Obligatorio.";
      }

      if(!typeCredit){
        msgError += "El Tipo de Credito es Obligatorio.";
      }

      if(!phone){
        msgError += "El Telefono es Obligatorio.";
      }else{
        if(phone.length > 10){
          msgError += "El Telefono No Puede Superar los 10 Digitos.";
        }
      }

      if(!mail){
        msgError += "El Correo Electronico es Obligatorio.";
      }

      if(!salary){
        msgError += "Los Ingresos Mensuales son Obligatorios.";
      }else{
        if(salary.length > 10){
          msgError += "El Valor supera la Cantidad Permitida.";
        }
      }

      if(!valueObject){
        msgError += "El Valor del Avaluo es Obligatorio.";
      }else{
        if(valueObject.length > 10){
          msgError += "El Valor supera la Cantidad Permitida.";
        }
      }

      setError(msgError);

      if(msgError === ""){
        verifySecurity();
      }
    }


    function verifySecurity(){
      let old = fetOld(DateBirthay);
      
      if((old >= 18 && old <=65) && salary >= 1000000 && (valueObject >= 500000 && valueObject <= 6000000)){
        setBasic(true);
      }else{
        setBasic(false);
      }

      if((typeCredit==="auto" || typeCredit==="moto") && (old >= 18 && old <=80) && (ocupation ==="empleado" || ocupation === "pensionado") && salary >= 1000000 && (valueObject >= 3500000 || valueObject <= 50000000)){
        setGold(true);
      }else{
        setGold(false);
      }

      if((old >= 18 && old <=50) && (ocupation ==="empleado") && salary >= 5000000 && (valueObject >= 5500000 || valueObject <= 500000000)){
        setBlack(true);
      }else{
        setBlack(false);
      }

   /*    if(basic || gold || black){
        createQuota();
      }else{
        setNoCredit(true);
      } */
    }

    

    function fetOld(dateString) {
      let today = new Date()
      let dateBirth = new Date(dateString)
      let old = today.getFullYear() - dateBirth.getFullYear()
      let diferenciaMeses = today.getMonth() - dateBirth.getMonth()
      if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && today.getDate() < dateBirth.getDate())
      ) {
        old--
      }
      return old
    }
      
    return (
        <CreditContext.Provider value={{
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
            typeCredit,
            setTypeCredit,
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
        }}>
            {props.children}
        </CreditContext.Provider>

    );
}

export {CreditContext, CreditProvider}