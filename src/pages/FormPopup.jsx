import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, Grid, IconButton, Typography, Snackbar, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from '@mui/system';
import { server } from "../main";


// Styled components
const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    paddingBottom: theme.spacing(6),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const FormContainer = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(3),
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

const FormPopup = () => {
    const [showForm, setShowForm] = useState(false);

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


    // 
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [isSubmitting, setIsSubmitting] = useState(false);


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




    const submitHandler = async (e) => {
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

        setIsSubmitting(true);

        try {
            const response = await fetch(`${server}/user/submit`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if (data.success) {
                setMessage('Thank! you for submitting the form Sucessfully, We will get back to you shortly.');
                setAlertSeverity('success');
                setOpen(true);

                setName('');
                setContactNumber('');
                setAlternateNumber('');
                setCementName('');
                setQuantity('');
                setCity('');
                setState('');
                setPincode('');


                setTimeout(closeForm, 2000);
            } else {
                setMessage('Error: ' + data.message);
                setAlertSeverity('error');
                setOpen(true);
            }



        } catch (error) {
            console.error('Error: ', error);
            setMessage('Something went wrong!. Please try again');
            setAlertSeverity('error');
            setOpen(true);
        }

    }


    useEffect(() => {
        setShowForm(true); // Show form on load
    }, []);

    const closeForm = () => {
        setShowForm(false);
    };


    return (
        <>
            {/* Material-UI Dialog (Modal) */}
            <Dialog open={showForm} onClose={null} scroll="body" fullWidth maxWidth="sm" >

                <DialogTitleStyled>
                    <Typography variant="h4" textAlign="center" component="div">Cemstar - Supplies Cement Online Apply</Typography>
                    <IconButton edge="end" color="inherit" onClick={closeForm}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitleStyled>

                <FormContainer style={{ paddingTop: '7px' }}>
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
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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

                            {/* Half-width fields for larger screens */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    fullWidth
                                    label="Contact Number"
                                    variant="outlined"
                                    name="contact"
                                    type="number"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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
                                    variant="outlined"
                                    name="alt_contact"
                                    type="number"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
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


                        <DialogActions sx={{ justifyContent: "flex-start" }}>
                            <SubmitButton
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Send Now"}
                            </SubmitButton>
                        </DialogActions>

                    </form>


                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert
                            onClose={() => setOpen(false)}
                            // severity= "success"
                            severity={alertSeverity}
                            variant="filled"
                            sx={{ width: '100%' }}
                        >
                            {message}
                        </Alert>
                    </Snackbar>
                </FormContainer>
            </Dialog>
        </>
    );
};

export default FormPopup;
