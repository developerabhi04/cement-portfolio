import { TextField, Button, Grid, Typography, Snackbar, Alert } from "@mui/material";
import { styled } from '@mui/system';
import { useEffect, useState } from "react";
import { submitForm } from "../redux/actions/formAction";
import { useDispatch, useSelector } from "react-redux";

// Styled components
const FormContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(7),
    maxWidth: '700px',  // Limit the width
    margin: '0 auto',   // Center the form
    marginBottom: "7rem",
    // padding: "49px 11px",
}));

const SubmitButton = styled(Button)(() => ({
    backgroundColor: '#007DFF',
    color: 'white',
    padding: '12px 24px',
    fontWeight: '600',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '#007DDD',
    },
}));

const Form = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severity, setSeverity] = useState("success");

    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [alternateNumber, setAlternateNumber] = useState("");
    const [cementName, setCementName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pinCode, setPincode] = useState("");

    // Validation errors
    const [nameError, setNameError] = useState("");
    const [contactNumberError, setContactNumberError] = useState("");
    const [alternateNumberError, setAlternateNumberError] = useState("");
    const [pinCodeError, setPinCodeError] = useState("");

    const dispatch = useDispatch();
    const { loading, success, message, error } = useSelector((state) => state.form);

    const reset = () => {
        setName("");
        setContactNumber("");
        setAlternateNumber("");
        setCementName("");
        setQuantity("");
        setCity("");
        setState("");
        setPincode("");
    };


    // Validation logic
    const validateName = (value) => {
        if (!value.trim()) return "Name is required";
        if (value.length <= 2) return "Name must be at least 2 characters";
        return "";
    };

    const validateContactNumber = (value) => {
        if (!value) return "Contact number is required";
        if (!/^\d{10}$/.test(value)) return "Contact number must be 10 digits";
        return "";
    };

    const validateAlternateNumber = (value) => {
        if (value && !/^\d{10}$/.test(value)) return "Alternate number must be 10 digits";
        return "";
    };

    const validatePinCode = (value) => {
        if (!value) return "Pin Code is required";
        if (!/^\d{6}$/.test(value)) return "Pin Code must be 6 digits";
        return "";
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // Final validation before submission
        const nameError = validateName(name);
        const contactNumberError = validateContactNumber(contactNumber);
        const alternateNumberError = validateAlternateNumber(alternateNumber);
        const pinCodeError = validatePinCode(pinCode);

        if (nameError || contactNumberError || alternateNumberError || pinCodeError) {
            setNameError(nameError);
            setContactNumberError(contactNumberError);
            setAlternateNumberError(alternateNumberError);
            setPinCodeError(pinCodeError);
            return;
        }

        const formData = {
            name,
            contactNumber,
            alternateNumber,
            cementName,
            quantity,
            city,
            state,
            pinCode,
        };

        dispatch(submitForm(formData));
    };



    // useEffect(() => {
    //     // Open the Snackbar when success or error changes
    //     if (success || error) {
    //         setSeverity(success ? "success" : "error");
    //         setOpenSnackbar(true);
    //     }
    // }, [success, error]);



    useEffect(() => {
        // Show Snackbar on success or error
        if (success || error) {
            setSeverity(success ? "success" : "error");
            setOpenSnackbar(true);
        }

        // Reset form fields after successful submission
        if (success) {
            reset();
        }
    }, [success, error]);


    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackbar(false);
    };
    return (
        <FormContainer id="contact">
            {/* Center the heading */}
            <Typography variant="h4" gutterBottom textAlign="center" sx={{ marginBottom: "3rem", fontWeight: 600 }}>
                Online Apply
            </Typography>

            <form onSubmit={submitHandler}>
                <Grid container spacing={3}>
                    {/* Full-width fields */}
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Name"
                            variant="outlined"
                            name="name"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError(validateName(e.target.value));
                            }}
                            error={!!nameError}
                            helperText={nameError}
                        />
                    </Grid>

                    {/* Half-width fields */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Contact Number"
                            type="number"
                            variant="outlined"
                            name="contact"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={contactNumber}
                            onChange={(e) => {
                                setContactNumber(e.target.value);
                                setContactNumberError(validateContactNumber(e.target.value));
                            }}
                            error={!!contactNumberError}
                            helperText={contactNumberError}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Alternate Number"
                            type="number"
                            variant="outlined"
                            name="alt_contact"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={alternateNumber}
                            onChange={(e) => {
                                setAlternateNumber(e.target.value)
                                setAlternateNumberError(validateAlternateNumber(e.target.value));
                            }}
                            error={!!alternateNumberError}
                            helperText={alternateNumberError}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Cement Name"
                            variant="outlined"
                            name="cement_name"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={cementName}
                            onChange={(e) => setCementName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Quantity"
                            type="number"
                            variant="outlined"
                            name="quantity"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="City"
                            variant="outlined"
                            name="city"
                            placeholder="City"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="State"
                            variant="outlined"
                            name="state"
                            placeholder="State"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Pin Code"
                            variant="outlined"
                            name="pincode"
                            type="number"
                            placeholder="Pin Code"
                            sx={{
                                marginBottom: 2,
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                            value={pinCode}
                            onChange={(e) => {
                                setPincode(e.target.value);
                                setPinCodeError(validatePinCode(e.target.value));
                            }}
                            error={!!pinCodeError}
                            helperText={pinCodeError}
                        />
                    </Grid>
                </Grid>

                <SubmitButton type="submit" variant="contained" disabled={loading}>
                    {loading ? "Submitting..." : "Send Now"}
                </SubmitButton>
            </form>

            {/* Snackbar for success/error message */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {success ? message : error}
                </Alert>
            </Snackbar>

        </FormContainer>
    );
};

export default Form;
