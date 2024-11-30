import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from '@mui/system';

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

    useEffect(() => {
        setShowForm(true); // Show form on load
    }, []);

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <>
            {/* Material-UI Dialog (Modal) */}
            <Dialog open={showForm} onClose={closeForm} fullWidth maxWidth="sm">
                <DialogTitleStyled>
                    <Typography variant="h4">Non-Trade Cement Online Apply</Typography>
                    <IconButton edge="end" color="inherit" onClick={closeForm}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitleStyled>

                <FormContainer style={{ paddingTop: '7px' }}>
                    <form>
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
                                    placeholder="Name"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
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
                                    placeholder="Contact Number"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
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
                                    placeholder="Alternate Number"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
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
                                    placeholder="Cement Name"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
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
                                    placeholder="Quantity"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
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
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
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
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
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
                                    placeholder="Pin Code"
                                    sx={{
                                        marginBottom: 2,
                                        '& .MuiFormLabel-asterisk': {
                                            color: 'red',
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </FormContainer>

                <DialogActions sx={{ justifyContent: "flex-start" }}>
                    <SubmitButton
                        type="submit"
                        variant="contained"
                    >
                        Send Now
                    </SubmitButton>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FormPopup;
