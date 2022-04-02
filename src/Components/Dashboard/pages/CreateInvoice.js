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

        const create_url = backend_base_url + "create";

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

                    if (msg == `User ${email} registered and logged in`) {
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
                                        <Grid item xs={12} sm={6}>
                                            <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
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
