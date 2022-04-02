import React from "react";
import { Typography } from "@mui/material";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";
import { backend_base_url } from "../../../constants";

export const CreateInvoice = () => {
    const handleSubmit = (event) => {
        // if using a form for example
        const data = new FormData(event.currentTarget);

        const UBLID = data.get("UBLID");
        const CustomizationID = data.get("CustomizationID");
        const ProfileID = data.get("ProfileID");
        const ID = data.get("ID");
        const IssueDate = data.get("IssueDate");
        const InvoiceCode = data.get("InvoiceCode");
        const Currency = data.get("Currency");
        const BuyerReference = data.get("BuyerReference");
        const AddDocReference = data.get("AddDocReference");
        const SupplierID = data.get("SupplierID");
        const SupplierStreet = data.get("SupplierStreet");
        const SupplierCity = data.get("SupplierCity");
        const SupplierPost = data.get("SupplierPost");
        const SupplierCountry = data.get("SupplierCountry");
        const SupplierRegistration = data.get("SupplierRegistration");
        const CustomerStreet = data.get("CustomerStreet");
        const CustomerAddStreet = data.get("CustomerAddStreet");
        const CustomerCity = data.get("CustomerCity");
        const CustomerPost = data.get("CustomerPost");
        const CustomerCountry = data.get("CustomerCountry");
        const CustomerRegistration = data.get("CustomerRegistration");
        const PaymentType = data.get("PaymentType");
        const PaymentID = data.get("PaymentID");
        const PaymentTerms = data.get("PaymentTerms");
        const TaxAmount = data.get("TaxAmount");
        const TaxableAmount = data.get("TaxableAmount");
        const TaxSubtotalAmount = data.get("TaxSubtotalAmount");
        const TaxID = data.get("TaxID");
        const TaxPercent = data.get("TaxPercent");
        const TaxSchemeID = data.get("TaxSchemeID");
        const LegalLineExtension = data.get("LegalLineExtension");
        const TaxExclusiveAmount = data.get("TaxExclusiveAmount");
        const TaxInclusiveAmount = data.get("TaxInclusiveAmount");
        const PayableRoundingAmount = data.get("PayableRoundingAmount");
        const PayableAmount = data.get("PayableAmount");
        const InvoiceID = data.get("InvoiceID");
        const InvoiceQuantity = data.get("InvoiceQuantity");
        const InvoiceLineExtension = data.get("InvoiceLineExtension");
        const InvoiceName = data.get("InvoiceName");
        const InvoiceTaxID = data.get("InvoiceTaxID");
        const InvoiceTaxPercent = data.get("InvoiceTaxPercent");
        const InvoiceTaxSchemeID = data.get("InvoiceTaxSchemeID");
        const InvoicePriceAmount = data.get("InvoicePriceAmount");
        const InvoiceBaseQuantity = data.get("InvoiceBaseQuantity");

        let body_deets = { 
            UBLID, 
            CustomizationID, 
            ProfileID, 
            ID,
            IssueDate,
            InvoiceCode,
            Currency,
            BuyerReference,
            AddDocReference,
            SupplierID,
            SupplierStreet,
            SupplierCity,
            SupplierPost,
            SupplierCountry,
            SupplierRegistration,
            CustomerStreet,
            CustomerAddStreet,
            CustomerCity,
            CustomerPost,
            CustomerCountry,
            CustomerRegistration,
            PaymentType,
            PaymentID,
            PaymentTerms,
            TaxAmount,
            TaxableAmount,
            TaxSubtotalAmount,
            TaxID,
            TaxPercent,
            TaxSchemeID,
            LegalLineExtension,
            TaxExclusiveAmount,
            TaxInclusiveAmount,
            PayableRoundingAmount,
            PayableAmount,
            InvoiceID,
            InvoiceQuantity,
            InvoiceLineExtension,
            InvoiceName,
            InvoiceTaxID,
            InvoiceTaxPercent,
            InvoiceTaxSchemeID,
            InvoicePriceAmount,
            InvoiceBaseQuantity
        };

        const create_url = backend_base_url + "invoice/create";

        trackPromise(
            axios({
                method: "POST",
                url: create_url,
                data: body_deets,
            })
                .then((data) => {
                    let msg = data.data.msg;
                    let token = data.data.token;
                    setAlertContent(msg);

                    if (msg == `Successfully created and stored invoice for ${email}`) {
                        setSuccessAlert(true);
                    } else {
                        setFailAlert(true);
                    }                })
                .catch((error) => {
                    console.log(error);
                    setAlertContent("An unknown error occured, please try again another time.");
                    setFailAlert(true);
                })
        );
    };

    const resetAlerts = (event) => {
        setFailAlert(false);
    };

    return (
        <Grid container direction="row" flexGrow={1} spacing={0} alignItems="center" justifyContent="center" style={{ border: "solid 1px red" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: `url(${SignupImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", width: "100vw", backgroundPosition: "top" }}>
                <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "700px", width: "550px", borderRadius: "20px", marginRight: "10vw", marginLeft: "10vw" }}>
                    <Grid container height="100vh" direction="column" alignItems="center" justifyContent="center">
                        <Container component="main" maxWidth="xs">
                            <img style={{ width: 120, height: "auto", marginBottom: "5vh" }} src={LogoDark} alt="Landing page logo" />
                        </Container>

                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Typography component="h1" variant="h5" fontFamily="Montserrat" fontWeight="700" alignItems="flex-start" marginBottom="10px">
                                Create Invoice
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box component="form" onChange={resetAlerts} onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="UBLID" label="UBLID" id="UBLID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="CustomizationID" label="CustomizationID" id="CustomizationID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="ProfileID" label="ProfileID" id="ProfileID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="ID" label="ID" id="ID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="IssueDate" label="IssueDate" id="IssueDate" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceCode" label="InvoiceCode" id="InvoiceCode" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="Currency" label="Currency" id="Currency" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="BuyerReference" label="BuyerReference" id="BuyerReference" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="AddDocReference" label="AddDocReference" id="AddDocReference" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="SupplierID" label="SupplierID" id="SupplierID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="SupplierStreet" label="SupplierStreet" id="SupplierStreet" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="SupplierCity" label="SupplierCity" id="SupplierCity" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="SupplierPost" label="SupplierPost" id="SupplierPost" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="SupplierCountry" label="SupplierCountry" id="SupplierCountry" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="SupplierRegistration" label="SupplierRegistration" id="SupplierRegistration" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="CustomerStreet" label="CustomerStreet" id="CustomerStreet" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="CustomerAddStreet" label="CustomerAddStreet" id="CustomerAddStreet" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="CustomerCity" label="CustomerCity" id="CustomerCity" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="CustomerPost" label="CustomerPost" id="CustomerPost" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="CustomerCountry" label="CustomerCountry" id="CustomerCountry" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="CustomerRegistration" label="CustomerRegistration" id="CustomerRegistration" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="PaymentType" label="PaymentType" id="PaymentType" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="PaymentID" label="PaymentID" id="PaymentID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="PaymentTerms" label="PaymentTerms" id="PaymentTerms" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxAmount" label="TaxAmount" id="TaxAmount" />
                                        </Grid>                  
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxableAmount" label="TaxableAmount" id="TaxableAmount" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxSubtotalAmount" label="TaxSubtotalAmount" id="TaxSubtotalAmount" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxID" label="TaxID" id="TaxID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxPercent" label="TaxPercent" id="TaxPercent" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxSchemeID" label="TaxSchemeID" id="TaxSchemeID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="LegalLineExtension" label="LegalLineExtension" id="LegalLineExtension" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxExclusiveAmount" label="TaxExclusiveAmount" id="TaxExclusiveAmount" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="TaxInclusiveAmount" label="TaxInclusiveAmount" id="TaxInclusiveAmount" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="PayableRoundingAmount" label="PayableRoundingAmount" id="PayableRoundingAmount" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="PayableAmount" label="PayableAmount" id="PayableAmount" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceID" label="InvoiceID" id="InvoiceID" />
                                        </Grid>                                          
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceQuantity" label="InvoiceQuantity" id="InvoiceQuantity" />
                                        </Grid>                
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceLineExtension" label="InvoiceLineExtension" id="InvoiceLineExtension" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceName" label="InvoiceName" id="InvoiceName" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceTaxID" label="InvoiceTaxID" id="InvoiceTaxID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceTaxPercent" label="InvoiceTaxPercent" id="InvoiceTaxPercent" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceTaxSchemeID" label="InvoiceTaxSchemeID" id="InvoiceTaxSchemeID" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoicePriceAmount" label="InvoicePriceAmount" id="InvoicePriceAmount" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="InvoiceBaseQuantity" label="InvoiceBaseQuantity" id="InvoiceBaseQuantity" />
                                        </Grid>
                                    </Grid>
                                    <FailAlert alertFail={alertFail} alertContent={alertContent} />
                                    <SuccessAlert alertSuccess={alertSuccess} alertContent={alertContent} />
                                    <LoadingIndicatorSignup handleExistingUser={handleExistingUser} registered={alertSuccess} />
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Card>
            </div>
        </Grid>
    );
};
