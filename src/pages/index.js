import React, { useEffect, useState } from 'react';
import { Button, Container, Flex, Heading, NavLink, ThemeProvider } from 'theme-ui';
import {deep}  from '@theme-ui/presets';
import netlifyIdentity from 'netlify-identity-widget'
import { Link } from '@reach/router';


export default props => {
    const [user, setUser] = useState();
    useEffect(() => {
        netlifyIdentity.init()
        netlifyIdentity.on("login", user => setUser(user))
        netlifyIdentity.on("logout", user => setUser())
    
    })
    return (
    <ThemeProvider theme={deep}>
        <Container>
            <Flex as="nav">
                <NavLink as={Link} to="/" p={2}>Home</NavLink>
                <NavLink as={Link} to="/app" p={2}>Dashboard</NavLink>
                <NavLink as={Link} to="/" p={2}>
                {user && (
                    <NavLink href="#!" p={2}>{user.user_metadata.full_name}</NavLink>)}
                </NavLink>
            </Flex>
            <Flex sx={{flexDirection: "column", padding: '3'}}>
                <Heading as="h1">Get stuff done</Heading>
                <Button sx={{marginTop: 2}}
                    onClick={() => netlifyIdentity.open() }
                >Log In</Button>
            </Flex>
    </Container>
    </ThemeProvider>
    
)
}
