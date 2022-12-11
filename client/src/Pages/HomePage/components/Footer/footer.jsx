import SendIcon from '@mui/icons-material/Send'
import styled from "styled-components";
const  Container= styled.div`
display:flex;
background-color:rgb(60, 60, 73);
color:gray;
font-weight:bold;
width:100%;
padding-bottom:25px;
@media (max-width:480px){
flex-direction:column-reverse;
}

`
const Para=styled.p`
text-transform:capitalize;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`
const Links= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
flex:1;

`
const  NewsLetter= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex:1;


`
const InputDiv= styled.div`
display:flex;
align-items:center;
background-color:white;
justify-content:center;
border:none;
width:70%


`
const EmailInp= styled.input`
flex:8;
border:transparent;
margin-right:0px;
height:100%;

`
const Footer = () => {
    return (  
<Container>
    <Links>
    <h2>Quick links</h2>
    <Para>Shop Now</Para>
    <Para> About us</Para>
    <Para>Recieve Updates</Para>
    <Para>Send Report</Para>
    <Para>Become an Affiliate</Para>
    <Para>Sell</Para>
    </Links>
    <NewsLetter>
        <h4> News letter</h4>
        <InputDiv>
        <EmailInp placeholder='Please enter your email to recieve updates'/>
        <SendIcon style={{flex:'2', backgroundColor:'teal',opacity:'1',color:'white'}}/>
        </InputDiv>
        
    </NewsLetter>

</Container>
    );
}
 
export default Footer;