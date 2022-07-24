import React, { useState } from "react";
import { CreditContext } from "../CreditContext"; 
import { DatePicker } from "@material-ui/pickers";
import { FormControl } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./CreditIndex.css";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import {
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

function CreditIndex() {

    const { DateBirthay,setDateBirthay,ocupation,setOcupation,name,setName,lastname,setLastname,phone,setPhone,mail,setMail,salary,setSalary,valueObject,setValueObject,ocupations,ValidateFields,typeCredit, setTypeCredit,error,setError,basic,setBasicgold,setGoldnoCredit,setNoCreditvalueYearBasic,setValueYearBasicvalueMonthBasic,setValueMonthBasicblack,setBlackvalueYearGoldsetValueYearGoldvalueMonthGold,setValueMonthGoldvalueYearBlack,setValueYearBlackvalueMonthBlack,setValueMonthBlack } = React.useContext(CreditContext);

    const nameInsert = (event) => {
      setName(event.target.value);    
    };

    const lastNameInsert = (event) => {
      setLastname(event.target.value);    
    };

    const phoneInsert = (event) => {
      setPhone(event.target.value);    
    };

    const mailInsert = (event) => {
      setMail(event.target.value);    
    };

    const salaryInsert = (event) => {
      setSalary(event.target.value);    
    };

    const valueObjectInsert = (event) => {
      setValueObject(event.target.value);    
    };

    const handleCheck = (
      event: React.MouseEvent<HTMLElement>,
      newTypeCredit: string
    ) => {
      setTypeCredit(newTypeCredit);
    };
  
    const handleChange = (event: SelectChangeEvent) => {
      setOcupation(event.target.value);
    };

    function Goal(props) {
      if (!error) {
        return "";
      }
      return <Alert severity="warning">
              <AlertTitle>Error Ingreso de Datos</AlertTitle>
             <strong>{error}</strong>
            </Alert>;
    }


    return (
      <div className="container" id="advanced-search-form">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Goal />
        </Stack>
        <FormControl fullWidth>
          <Typography variant="h6" gutterBottom>
            ¿Que Tipo de Credito Deseas?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <ToggleButtonGroup
                color="primary"
                value={typeCredit}
                exclusive
                onChange={handleCheck}
                fullWidth
              >
                <ToggleButton value="auto">Auto</ToggleButton>
                <ToggleButton value="moto">Moto</ToggleButton>
                <ToggleButton value="tecnology">Tecnologia</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombre"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={name}
                onChange={nameInsert}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Apellido"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                value={lastname}
                onChange={lastNameInsert}
              />
            </Grid>
  
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Telefonó"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                value={phone}
                onChange={phoneInsert}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="mail"
                name="mail"
                label="E-mail"
                fullWidth
                variant="standard"
                value={mail}
                onChange={mailInsert}
              />
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                fullWidth
                value={DateBirthay}
                onChange={setDateBirthay}
                format="yyyy-MM-dd"
              />
            </Grid>
  
            <Grid item xs={12} sm={6}>
              <Select
                fullWidth
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ocupation}
                label="Ocupación"
                onChange={handleChange}
              >
                <MenuItem value="empleado">Empleado</MenuItem>
                <MenuItem value="pensionado">Pensionado</MenuItem>
                <MenuItem value="independiente">Independiente</MenuItem>
              </Select>
            </Grid>
  
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="salary"
                name="salary"
                label="Ingresos Mensuales"
                fullWidth
                variant="standard"
                value={salary}
                onChange={salaryInsert}
              />
            </Grid>
  
            <Grid item xs={12}>
              <TextField
                required
                id="value_object"
                name="value_object"
                label="Avaluo Objeto"
                fullWidth
                variant="standard"
                value={valueObject}
                onChange={valueObjectInsert}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={ValidateFields}>
                Cotizar
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    );
  }

  export {CreditIndex};