import styled from "styled-components";
import { AiOutlineSearch } from 'react-icons/ai';


const Header = () => {
  return (
    <>
      <Logo>
        <img src="/images/logo.svg" alt="AshBerry"/>
      </Logo>
      
        
        
          <Searchcontainer>
          <IconButton>
          <AiOutlineSearch size={22}/>
            </IconButton>
            <SearchInput/>
          </Searchcontainer>
          
            {/* <En>
            
            <i className="far fa-search"></i>
            <input type="text" id="filter-jobs" name="filter-jobs" placeholder="Filter by title" />
            </En>
             */}
            
            <Nav>

          <a>
            <span>HOME</span>
            <span>HOME</span>
            <i class="fas fa-home"></i>
          </a>
          <a>
            <span>Add Friends</span>
            <i class="fas fa-user-friends"></i>
          </a>
          </Nav>

</>
      )
 

  
};

const Searchcontainer = styled.div`
position: relative;
   height: 360px;
   width:46px;
   border-radius:0;
   display:flex;
   align-items:center;
   background: #f2f2f2;
   justify-content: space-between;
   padding-left: 5px;
   transition: all 0.3s ease;

`;
const SearchInput = styled.div`
padding-left: 48px;
border:none;
position: absolute;
top:0;
left:0;
height: 100%;
width: 100%;
background-color: transparent;
outline: none;
font-size: 16px;
border:1px solid transparent
`;


const body = styled.div`
    margin: 0;
    font-family: Helvetica,Arial, sans-serif;
    font-weight: 400;
    color: rgba(0,0,0,.87);`
  ;

const IconButton = styled.button`
   position: relative;
   height: 36px;
   width:36px;
   border:none;
   z-index:1;
   cursor: pointer;
   background: none;

 
`;

const header = styled.div`
    height: 101px;
    width: 245px;

    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.06),0 0 2px rgba(0,0,0,.07);
    `

const logo = styled.img` 
    height: 51px;
    width: 51px;
`;


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  cursor: pointer;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
 
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      color:blueviolet;
    }

    span {
      color: black;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
     }



  }

`;

export default Header;






