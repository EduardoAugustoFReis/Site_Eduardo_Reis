import {Container, Header, Main, Footer} from "./styles"

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { LiaRocketSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import { MdPhone } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export function Home(){
  return(
    <Container>

      <Header>
        <div>
        <a href="https://github.com/EduardoAugustoFReis" target="_blank"><AiFillGithub/> </a>
        <a href="https://www.linkedin.com/in/eduardo-augusto-franciscon-reis-173410283/" target="_blank"><AiFillLinkedin/></a>
        </div>

        <h1>Desenvolvedor Web</h1>
        
      </Header>
      
      <Main>
        <div className="bio_and_picture">

        <img src="https://github.com/EduardoAugustoFReis.png" alt="Foto de Eduardo Augusto, desenvolvedor deste site." />
        
        <div>
        <h2>Sobre mim</h2>
        <p>
          Estudante de ciências da computação em formação acadêmica à procura de uma opurtunidade para desenvolver ainda mais minhas habilidades. <br />
          Desenvolvi projetos full-stack na plataforma de ensino Rocketseat e na faculdade que estou atualmente cursando utlizando os conhecimentos abaixo.
          Espero poder aprender mais e me tornar um desenvolvedor completo tanto no Front-end quanto no Back-end.
        </p>

        <p>Logo abaixo estão meus conhecimentos adquiridos e projetos desenvolvidos.</p>
        
        </div>
    
        </div>

        <div className="acknowledge_and_Links">
        
        <div>          
        
        <h3>Conhecimentos</h3>
        <ul>
          <li><FaHtml5/> Html5</li>
          <li><FaCss3/> Css3</li>
          <li><IoLogoJavascript/> Javascript</li>
          <li><FaReact/> ReactJs</li>
          <li><FaNodeJs/> Node.js</li>
          <li><FaDatabase/> Sqlite</li>
          <li><FaGitSquare/> Git</li>
        </ul>  
        
        </div>

        <div>
        <h3>Links dos meus projetos</h3>
        <ul>
          <li> <AiFillGithub /> <a href="https://github.com/EduardoAugustoFReis" target="_blank">Github</a></li>
          <li> <AiFillLinkedin /> <a href="https://www.linkedin.com/in/eduardo-augusto-franciscon-reis-173410283/" target="_blank">Linkedin</a></li>
        </ul>

        <h3>Minhas certificações</h3>
        <ul>
          <li> <LiaRocketSolid /> <a href="https://app.rocketseat.com.br/certificates/6fc25325-ddfb-423a-b31c-c6cfc2d48628" target="_blank">Certificado Rocketseat.</a></li>
        </ul>
        </div>

        <div>
        <h3>Entre em contato</h3>
        <ul>
          <li> <CiMail/> <p>eduardo.afreis@gmail.com</p> </li>
          <li> <FaWhatsapp/> <p>(61) 99222-6555</p></li>
        </ul>
        </div>
      
        </div>  

      </Main>

      <Footer>
        <p>Acompanhe meus projetos no Github, obrigado pela oportunidade!</p>
      </Footer>

    </Container>
  )
}