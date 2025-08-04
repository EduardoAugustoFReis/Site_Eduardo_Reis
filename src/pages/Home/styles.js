import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 150px auto 70px;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  @media(max-width: 620px){
    
  }

`;

export const Header = styled.div`
  grid-area: header;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_HEADER};
  
  >h1{
    color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIGHT};
    font-size: 2.8rem;
    text-align: center;
  }

  >div:nth-child(1){
     display: flex;
     justify-content: end;
     gap: 1.0rem;

     padding: 1.2rem;

    a{
    text-decoration: none;
    font-size: 2.5rem;
    color: ${ ({theme}) =>theme.COLORS.FONTS_COLORS_LIGHT};
    }

    a:hover{
        filter: brightness(0.9);
    }
  }

 
  @media(max-width: 620px){

    padding: 1.2rem;
    
    >h1{
      font-size: 2.4rem;
    }

  } 

`;

export const Main = styled.div`
  grid-area: content;
  width: 100%;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_COLOR};
  padding: 1.2rem;
  
   h2{
    color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIGHT};
    font-size: 3.8rem;
    padding-bottom: 1.0rem;
   }

   h3{
    color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIGHT};
    font-size: 2.6rem;
    padding-bottom: 1.0rem;
   }

   p{
    color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIGHT};
    font-size: 2.0rem;
    padding-bottom: 1.0rem;
   }


  .bio_and_picture{
    display: flex;
    justify-content: center;
    gap: 2.0rem;
    padding: 1.2rem;
    margin: 0 auto;
    max-width: 90.0rem;
    
    img{
      height: 28.0rem;
      width: 28.0rem;
      border-radius: 1.0rem;
    }
  }

  .acknowledge_and_Links{
    display: flex;
    justify-content: center;
    gap: 4.0rem;

    padding-top: 2.0rem;
    padding-bottom: 0.5rem;

    ul{
     list-style: none;

    >li{
      color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIST};
      font-size: 2.2rem;
      display: flex;
      align-items: center;
      
      gap: 5px;

      >p{
        color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIGHT};
        font-size: 1.8rem;
      }

      >a{
      text-decoration: none;
      font-size: 2.0rem;
      color: ${ ({theme}) =>theme.COLORS.FONTS_COLORS_LINKS};

      &:hover {
        text-decoration: underline;
      }
      }

      a:hover{
      filter: brightness(0.9);
    }

    }
   }
  }
  
  @media(max-width: 620px){
    
    h2{
    font-size: 3.0rem;
   }

   h3{
    font-size: 2.4rem;
   }

   p{
    font-size: 1.8rem;
   }

   .bio_and_picture{
    display: flex;
    align-items: center;
    flex-direction: column;

    img{
      height: 20.0rem;
      width: 20.0rem;
    }
   }

   .acknowledge_and_Links{
    display: flex;
    flex-direction: column;
    align-items: center;
   }    

  }

`;

export const Footer = styled.div`
  grid-area: footer;
  width: 100%;

  text-align: center;
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_FOOTER};
  padding-top: 2.0rem;
  
  >p{
    color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIGHT};
    font-size: 2.0rem;
  }

  
  @media(max-width: 620px){

    >p{
    color: ${ ({theme}) => theme.COLORS.FONTS_COLORS_LIGHT};
    font-size: 1.4rem;
    }

  }
`;