import  styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {GiHamburgerMenu} from 'react-icons/gi';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';
import logo from '../../../../felslogs.jpeg'
const LogoContainer= styled.div`
flex:1;
display:flex;
align-items:center;
`
const Logo= styled.img`
height:50px;
width:50px;
@media(max-width:480px){
width:30px;
height:30px;
left:15px;
position:absolute; 
}
`
const HeaderContainer= styled.div`
display:flex;
height:60px;
 background-color:rgb(60, 60, 73);
 justify-content: space-around;
 align-items:center;
 position:relative;
`
const IconsContainer= styled.div`
display:flex;
flex:1;
justify-content:flex-end;
@media (max-width:480px){
    display:none;
}
`
const  Icon= styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: ${props=>props.bg};
display:flex;
justify-content:center;
align-items:center;
`
const Announcement= styled.div`
font-size:20px;
color :white;
 display:flex;
 flex:1;
 justify-content: center;
 text-transform:capitalize;
 @media (max-width:480px){
    display:none;
 }
`

const Header = () => {
    return ( 
        <HeaderContainer>
            <LogoContainer>
            <Logo src={logo}/>
            </LogoContainer>
            <Announcement>welcome to a3 gadgets</Announcement>
            < GiHamburgerMenu className='ham'/>
            <IconsContainer>
                <Icon bg={'blue'}>
                    <FacebookIcon style={{color:'white'}}/>
                </Icon>
                <Icon bg={'red'}>
                    <PinterestIcon style={{color:'white'}}/>
                </Icon >
                <Icon bg={'teal'}>
                    <TwitterIcon style={{color:'white'}}/>
                </Icon>
                <Icon bg={'orange'}>
                    <InstagramIcon style={{color:'white'}}/>
                    
                </Icon>


            </IconsContainer>

        </HeaderContainer>
     );
}
 
export default Header; 