import { Container, Paper, Typography } from "@mui/material";
// import { matBlack } from "./color";
import { DataGridPremium, GridToolbar } from "@mui/x-data-grid-premium";


const TableExport = ({ rows, columns, heading, apiRef, initialState, rowHeight = 90 }) => {
    return (
        <Container sx={{ height: "90vh" }}>

            <Paper
                elevation={3}
                sx={{
                    padding: "1rem 4rem",
                    borderRadius: "1rem",
                    margin: "auto",
                    width: "100%",
                    overflow: "hidden",
                    height: "100%",
                    boxShadow: "none",
                }}
            >
                <Typography
                    textAlign={"center"}
                    variant="h4"
                    sx={{
                        margin: "2rem",
                        textTransform: "uppercase",
                    }}
                >
                    {heading}
                </Typography>

                <DataGridPremium
                    rows={rows}
                    columns={columns}
                    apiRef={apiRef}
                    rowHeight={rowHeight}
                    initialState={initialState}
                    disableRowSelectionOnClick
                    loading={rows.length === 0}
                    slots={{ toolbar: GridToolbar }} // Show toolbar
                />
            </Paper>
        </Container>
    )
}

export default TableExport