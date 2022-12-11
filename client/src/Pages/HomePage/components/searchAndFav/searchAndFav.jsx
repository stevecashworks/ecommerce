import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
 import {useEffect} from 'react';
import {Link} from 'react-router-dom';
  import {useDispatch, useSelector} from 'react-redux';
  import {selectScroll, setScroll} from '../../../../scrollSlice'


const Container=  styled.div`
display:flex;
align-items:center;
justify-content: space-around;

@media (max-width:480px){
    width:100%;
    display:block;
    margin:20px auto;
    flex-direction:column;

    }

`
const CompLogo=styled.h1`
font-family: Dancing Script, cursive;
flex:1;
margin-left:10px;
@media (max-width:480px){
    display:none;
}

`
const SearchContainer= styled.div`
display:flex;
font-size:40px;
width:500px;
flex:1;
@media (max-width:480px){
    gap:10px;
    flex-direction:column;
    margin:0 auto;
    width:80%;
    align-items:center;
    
}
`

const SearchInp= styled.input`
font-size:30px;
border:none;
margin-left:0;
height:95%;
outline:0;
@media(max-width:480px){
    font-size:20px;
    width:90%;
    
}


`
const Search= styled.div`
display:flex;
height:40px;
align-items:center;
 border:1px solid black;

${SearchInp}: focus & {
    border:none;
    outline:0;
}
@media (max-width:480px){
    width:80%;
    
}
`
const SearchBtn=styled.button`
color:white;
background-color:rgb(60, 60, 73);
font-weight:400;
opacity:0.9;
padding: 0 15px; 
border:none;
@media (max-width:480px){
    height:35px;
    width:120px;
    margin-top:10px

}
`

const Preferences= styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
padding:10px;
width:300px;
@media (max-width:480px){
    position:fixed;
    top:80px;
    width:120px;
    right:20px;
    
}
` 

const SearchAndFav
= () => {
    const dispatch=useDispatch()
    const wentDown=!(useSelector(selectScroll))
    
     useEffect(()=>{
        window.addEventListener('scroll',()=>{dispatch(setScroll(window.scrollY>0))})
     },[])
  const noOfItems=useSelector(state=>state.cart.noOfItems)
    return ( 
        <Container>
            <CompLogo>A3Gadgets</CompLogo>
            <SearchContainer>
                <Search>
                    <SearchInp placeholder="Search for  products here"></SearchInp>
                <SearchOutlinedIcon style={{color:'grey'}}/>
                </Search>
                <SearchBtn>Search</SearchBtn>

            </SearchContainer>
            
                    {

                      wentDown&& <Preferences>
                <Link to='/login'>
                <PersonOutlinedIcon style={{color:'grey', marginRight:'15px', fontSize:'35px'}}/>
                </Link>
                <Badge color='secondary' style={{color:'grey' , marginRight:'15px' , fontSize:'35px'}}>
                <FavoriteBorderOutlinedIcon />

                </Badge>
                <Link to='cart'>
                <Badge badgeContent={noOfItems} color='secondary' style={{color:'grey', marginRight:'15px' , fontSize:'35px'}}>
               <ShoppingCartOutlinedIcon />
                </Badge>
                </Link>
            </Preferences>
                }             
              
            
            
        </Container>
     );
}
 
export default SearchAndFav
;