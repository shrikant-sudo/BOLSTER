import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CheckboxRowSelectionDemo from "../components/DataTable";

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <Box><CheckboxRowSelectionDemo /></Box>
            </Container>
        </React.Fragment>
    );
}