import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles.js';
import Badge from '@material-ui/core/Badge';

const Container = styled.div`
height:60px;
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-item:centre;
justify-content:space-between;`

const Left = styled.div`
flex:1;
display:flex;
align-item:centre;`

const Language = styled.span`
font-size :14px;
Cursor:pointer;
display:flex`

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-item:center;
margin-left:25px
padding:5px`

const Input = styled.div`
`

const Centre = styled.div`
flex:1;
align-item:center;`


const Right = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:flex-end
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`
export const NavBar = () => {
  const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <Left>

          <Language>
            EN
          </Language>

          <SearchContainer>

            <SearchIcon />
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
          </SearchContainer>

        </Left>

        <Centre> <Typography variant="h6" className={classes.title}>
          COCO
        </Typography>
        </Centre>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color='primary'>
            <ShoppingCartIcon />
            </Badge>
          </MenuItem>

        </Right>
      </Wrapper>

    </Container>
  )
}

