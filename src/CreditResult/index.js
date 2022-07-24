import React, { useState } from "react";
import { CreditContext } from "../CreditContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  CardHeader,
  createTheme,
  Grid,
  ListItemIcon,
  ThemeProvider,
} from "@mui/material";
import StarRate from "@mui/icons-material/StarRate";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CardGroup } from "react-bootstrap";
import "./CreditResult.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CurrencyFormat from "react-currency-format";

function CreditResult() {
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
  } = React.useContext(CreditContext);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [dense, setDense] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Othertheme = createTheme({
    palette: {
      primary: {
        light: "#4fc3f7",
        main: "#039be5",
        dark: "#0288d1",
        contrastText: "#fff",
      },
      other: {
        light: "#fff176",
        main: "#fff176",
        dark: "#f9a825",
        contrastText: "#000",
      },
      secondary: {
        light: "#9e9e9e",
        main: "#9e9e9e",
        dark: "#616161",
        contrastText: "#fff",
      },
    },
  });

  
    if(basic){
      let value_coberture_basic = (valueObject*30)/100;
      let value_commision_basic = (salary*5)/100;
      let value_year_basic = value_coberture_basic+value_commision_basic;
      let value_total_year_basic = value_year_basic - (value_year_basic*50/100)
      setValueYearBasic(value_total_year_basic);

      let value_month_basic = value_coberture_basic/12;
      let value_total_month_basic = value_month_basic - (value_month_basic*50/100);

      setValueMonthBasic(value_total_month_basic);


    }      

    if(gold){
      let value_coberture_gold = (valueObject*60)/100;
      let value_commision_gold = (salary*5)/100;
      let value_year_gold = value_coberture_gold+value_commision_gold;
      let value_total_year_gold = value_year_gold - (value_year_gold*50/100)
      setValueYearGold(value_total_year_gold);

      let value_month_gold = value_coberture_gold/12;
      let value_total_month_gold = value_month_gold - (value_month_gold*50/100);

      setValueMonthGold(value_total_month_gold);

    }   
    
    if(black){
      let value_coberture_black = (valueObject*90)/100;
      let value_commision_black = (salary*5)/100;
      let value_year_black = value_coberture_black+value_commision_black;
      let value_total_year_black = value_year_black - (value_year_black*50/100)
      setValueYearBlack(value_total_year_black);

      let value_month_black = value_coberture_black/12;
      let value_total_month_black = value_month_black - (value_month_black*50/100);

      setValueMonthBlack(value_total_month_black);

    }   
  

  

  return (
    <div className="container" id="advanced-search-form-result">
      <h1>
        {name} {lastname}
      </h1>
      {"\n"}
      <h2>Estos son los seguros que podemos ofrecerte</h2>

      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Solicitud De Credito
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Su Credito Sera Efectuado ¿Dese Evaluar Otro Credito?
          </Typography>
        </Box>
      </Modal>
    </div>

      <Grid container spacing={2}>
        
        {basic?(<Grid item xs={4}>
          <Card sx={{ maxWidth: 350, backgroundColor: "#5CBBDC" }}>
            <CardHeader title="Seguro Básico"></CardHeader>
            <CardContent>
              <List dense={dense}>
                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Cobertura del 30% del valor avaluado" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Pago Mensual o Anual" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Puedes Asegurar desde tu cel hasta ti vehiculo" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Puedes Acceder con ingresos minimos" />
                </ListItem>
              </List>
              <Divider light />

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }} aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pago Mensual</TableCell>
                      <TableCell align="right"> <CurrencyFormat value={valueMonthBasic} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pago Anual</TableCell>
                      <TableCell align="right"><CurrencyFormat value={valueYearBasic} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </CardContent>
            <CardActions>
              <ThemeProvider theme={Othertheme}>
                <Button onClick={handleOpen} color="primary" variant="contained" disableElevation>
                  Solicitar
                </Button>
              </ThemeProvider>
            </CardActions>
          </Card>
        </Grid>):""}
        
        {gold?(
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 350, backgroundColor: "#E1CC55" }}>
              <CardHeader title="Seguro Gold"></CardHeader>
              <CardContent>
                <List dense={dense}>
                  <ListItem>
                    <ListItemIcon>
                      <StarRate />
                    </ListItemIcon>
                    <ListItemText primary="Cobertura del 30% del valor avaluado" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarRate />
                    </ListItemIcon>
                    <ListItemText primary="Pago Mensual o Anual" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarRate />
                    </ListItemIcon>
                    <ListItemText primary="Puedes Asegurar desde tu cel hasta ti vehiculo" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarRate />
                    </ListItemIcon>
                    <ListItemText primary="Puedes Acceder con ingresos minimos" />
                  </ListItem>
                </List>
                <Divider light />
  
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Pago Mensual</TableCell>
                        <TableCell align="right"><CurrencyFormat value={valueMonthGold} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pago Anual</TableCell>
                        <TableCell align="right"><CurrencyFormat value={valueYearGold} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </CardContent>
              <CardActions>
                <ThemeProvider theme={Othertheme}>
                  <Button onClick={handleOpen} color="other" variant="contained" disableElevation>
                    Solicitar
                  </Button>
                </ThemeProvider>
              </CardActions>
            </Card>
          </Grid>
        ):""}
        
        {black?(<Grid item xs={4}>
          <Card sx={{ maxWidth: 350, backgroundColor: "#6D6E70" }}>
            <CardHeader title="Seguro Black"></CardHeader>
            <CardContent>
              <List dense={dense}>
                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Cobertura del 30% del valor avaluado" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Pago Mensual o Anual" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Puedes Asegurar desde tu cel hasta ti vehiculo" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarRate />
                  </ListItemIcon>
                  <ListItemText primary="Puedes Acceder con ingresos minimos" />
                </ListItem>
              </List>
              <Divider light />

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pago Mensual</TableCell>
                      <TableCell align="right"><CurrencyFormat value={valueMonthBlack} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pago Anual</TableCell>
                      <TableCell align="right"><CurrencyFormat value={valueYearBlack} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </CardContent>
            <CardActions>
              <ThemeProvider theme={Othertheme}>
                <Button onClick={handleOpen} color="secondary" variant="contained" disableElevation>
                  Solicitar
                </Button>
              </ThemeProvider>
            </CardActions>
          </Card>
        </Grid>):""}
        
      </Grid>
    </div>
  );
}

export { CreditResult };
