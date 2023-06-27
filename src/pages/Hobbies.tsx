import {Box, Divider, Grid, IconButton, Paper, Stack, Toolbar, Tooltip, Typography,} from "@mui/material";
import {AssignmentInd, GitHub, LinkedIn} from "@mui/icons-material";
import SkillsComponent from "../components/SkillsComponent";
// @ts-ignore
import CV from "../assets/pdf/CV Anthony Limon.pdf"

const Hobbies = () => {
    const handleOnClick = async () => {
        const element = await fetch(CV)
        const blob = await element.blob()
        const url = URL.createObjectURL(blob)
        let alink = document.createElement("a")
        alink.href = url
        alink.download = CV
        alink.click()
    }

    return (
        <Box>
            <Toolbar/>
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                }}
            >
                <Stack width={"100%"}>
                    <Box mb={5}>
                        <Divider variant={"middle"}/>
                        <Typography
                            align={"center"}
                            variant={"h2"}
                            color={"primary"}
                            sx={{my: 2}}
                        >
                            About me :
                        </Typography>
                        <Divider variant={"middle"}/>
                    </Box>
                    <Grid container spacing={2} mt={5}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={12} sx={{p: 5}}>
                                <Box display={"flex"} flexWrap={"wrap"}>
                                    <Typography variant={"h5"} color={"primary"} mr={2}>
                                        Email :
                                    </Typography>
                                    <Typography variant={"h5"} flexWrap={"wrap"}>
                                        anthony.limon@epitech.eu
                                    </Typography>
                                </Box>
                                <Box display={"flex"} flexWrap={"wrap"} my={4}>
                                    <Typography variant={"h5"} color={"primary"} mr={2}>
                                        Phone :
                                    </Typography>
                                    <Typography variant={"h5"}>07 60 06 05 74</Typography>
                                </Box>
                                <Box display={"flex"} my={4} flexWrap={"wrap"}>
                                    <Typography variant={"h5"} color={"primary"} mr={2}>
                                        Location :
                                    </Typography>
                                    <Typography variant={"h5"}>Bollwiller, Alsace</Typography>
                                </Box>
                                <Box display={"flex"} my={4} flexWrap={"wrap"}>
                                    <Typography variant={"h5"} color={"primary"} mr={2}>
                                        Date of birth :
                                    </Typography>
                                    <Typography variant={"h5"}>16/08/1997</Typography>
                                </Box>
                                <Box display={"flex"} flexWrap={"wrap"}>
                                    <Tooltip title={"My Github"} placement={"bottom"} arrow>
                                        <IconButton
                                            aria-label={"My Github"}
                                            href={"https://github.com/anthonynomil"}
                                            size={"large"}
                                        >
                                            <GitHub/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={"My Linkedin"} placement={"bottom"} arrow>
                                        <IconButton
                                            aria-label={"My Linkedin"}
                                            href={"https://www.linkedin.com/in/limon-anthony/"}
                                            size={"large"}
                                        >
                                            <LinkedIn/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={"My CV"} placement={"bottom"} arrow>
                                        <IconButton
                                            arial-label={"My CV"}
                                            href={"#"}
                                            size={"large"}
                                            onClick={handleOnClick}
                                        >
                                            <AssignmentInd/>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SkillsComponent/>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </Box>
    );
};

export default Hobbies;
