import { Grid, Skeleton, Stack } from "@mui/material"; // Importing the new Grid2

const Loaders = () => {
    return (
        <>
            <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
                {/* <Grid item md={3} sm={4} height={"100%"} sx={{ display: { xs: "none", sm: "block" }, }} >
                    <Skeleton variant="rectangular" height={"100vh"} />
                </Grid> */}

                <Grid item md={12} sm={12} xs={12} lg={12} height={"100%"}>
                    <Stack spacing={"1rem"}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Skeleton key={index} variant="rounded" height={"5rem"} />
                        ))}
                    </Stack>
                </Grid>

                {/* <Grid item md={4} lg={3}  height={"100%"} sx={{ display: { xs: "none", md: "block" } }}>
                    <Skeleton variant="rectangular" height={"100vh"} />
                </Grid> */}
            </Grid>
        </>
    );
};


export default Loaders;
