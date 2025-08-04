import { Container, Header, Main, Footer } from "./styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import ButtonIcon from "../../components/ButtonIcon";

export function Home() {
  const whatsappMessage = encodeURIComponent(
    "Olá Eduardo! Vi seu portfólio e gostaria de conversar sobre oportunidades. 😊"
  );

  return (
    <Container>
      <Header>
        <div>
          <a
            href="https://github.com/EduardoAugustoFReis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acesse meu GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-augusto-franciscon-reis-173410283/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acesse meu LinkedIn"
          >
            <AiFillLinkedin />
          </a>
        </div>

        <h1>Desenvolvedor Web & Mobile</h1>
      </Header>

      <Main>
        <div className="bio_and_picture">
          <img
            src="https://github.com/EduardoAugustoFReis.png"
            alt="Foto de Eduardo Augusto, desenvolvedor deste site."
          />

          <div>
            <h2>Sobre mim</h2>
            <p>
              Me chamo <strong>Eduardo Augusto</strong>, tenho 24 anos,
              estudante do 7º semestre de Ciência da Computação na universidade
              IESB. estou me especializando no desenvolvimento de aplicações
              <strong> web e mobile</strong>.
            </p>
            <p>
              Tenho como objetivo atuar como desenvolvedor web ou mobile,
              contribuindo com soluções e desenvolvendo meus conhecimentos.
            </p>
          </div>
        </div>

        <div className="acknowledge_and_Links">
          <div className="knowledge">
            <h3>Conhecimentos</h3>
            <ul>
              <li>React.js</li>
              <li>React Native</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>Noções de Back-end (Node.js)</li>
              <li>Versionamento com Git</li>
            </ul>
          </div>

          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <AiFillGithub />
                <a
                  href="https://github.com/EduardoAugustoFReis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <AiFillLinkedin />
                <a
                  href="https://www.linkedin.com/in/eduardo-augusto-franciscon-reis-173410283/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ButtonIcon
          icon={FaWhatsapp}
          ariaLabel="Enviar mensagem no WhatsApp"
          onClick={() =>
            window.open(
              `https://wa.me/5561992226555?text=${whatsappMessage}`,
              "_blank"
            )
          }
        />
      </Main>

      <Footer>
        <p>Acompanhe meus projetos no GitHub!</p>
      </Footer>
    </Container>
  );
}
