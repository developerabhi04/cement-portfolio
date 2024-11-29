
import { TextField, Button, Grid, Typography } from "@mui/material";
import { styled } from '@mui/system';

// Styled components
const FormContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(7),
    maxWidth: '700px',  // Limit the width
    margin: '0 auto',   // Center the form
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


    return (
        <FormContainer>
            {/* Center the heading */}
            <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: "3rem", fontWeight: 600 }}>
                Non-Trade Cement Online Apply
            </Typography>

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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                        />
                    </Grid>

                    {/* Half-width fields */}
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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
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
                                '& .MuiFormLabel-asterisk': { color: 'red' }
                            }}
                        />
                    </Grid>
                </Grid>
                <SubmitButton type="submit" variant="contained">
                    Send Now
                </SubmitButton>
            </form>
        </FormContainer>
    );
};

export default Form;
