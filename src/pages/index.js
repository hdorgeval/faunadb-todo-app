import React from 'react';
import { Button, Container, Flex, Heading, ThemeProvider } from 'theme-ui';
import {deep}  from '@theme-ui/presets';

export default props => (
    <ThemeProvider theme={deep}>
        <Container>
            <Flex sx={{flexDirection: "column", padding: '3'}}>
                <Heading as="h1">Get stuff done</Heading>
                <Button sx={{marginTop: 2}}
                    onClick={() => alert('cicked')}
                >Log In</Button>
            </Flex>
    </Container>
    </ThemeProvider>
    
)
