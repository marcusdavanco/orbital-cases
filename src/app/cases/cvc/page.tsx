import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero 
        logoUrl="/logo-cvc.svg" 
        content={["Squads de desenvolvimento", "QA", "Software Development"]}         
        imageUrl={`${window.outerWidth >= 1024 ? "/header-bg-3.jpg" : "/header-bg-3-mobile.jpg"}`}        
        title="Gateway de Hotéis"
        index={2}
      />
      <Section 
        dark 
        imageUrl="" 
        image={
          {
            url: "/context-cvc-img.png", 
            floating: false, 
            height: 379, 
            width: 540
          }
        }        
        title="Contexto" 
        content={['A Orbital Tech teve o privilégio de colaborar com a CVC, uma das maiores agências de viagens da América Latina.', 'Assim como uma tradição de excelência, a CVC buscava aprimorar ainda mais a experiência dos seus clientes no processo de busca e reserva de hotéis em destinos variados.']}
      />
      <Section         
        title="Desafio" 
        content={['Um dos maiores desafios foi a necessidade de criar um sistema que integrasse os catálogos de hotéis dos parceiros da CVC, permitindo aos clientes escolherem hotéis de forma fácil e intuitiva. Além disso, desenvolver um sistema reativo e a integração com uma API de polígonos representaram desafios técnicos significativos.', 'Também enfrentamos o desafio de integrar com múltiplos parceiros que utilizam diferentes tecnologias, exigindo uma abordagem cuidadosa para garantir a eficiência e precisão das informações.']}
      />
      <Section        
        dark 
        title="Tecnologia" 
        content={['Para alcançar os objetivos propostos no projeto em parceria com a CVC, a Orbital Tech empregou uma variedade de tecnologias modernas e eficientes. As ferramentas fundamentais utilizadas foram:', 'Java: Para o desenvolvimento do backend robusto e escalável.', 'Spring Boot: Facilitação do desenvolvimento do backend.', 'Spring Webflux: Spring Webflux é uma extensão do Spring Boot que permite o desenvolvimento de aplicações reativas e baseadas em fluxo de dados. Isso proporciona uma arquitetura mais eficiente e escalável para lidar com operações assíncronas e concorrentes.', 'React: Desenvolvimento da interface de usuário moderna e interativa.','AWS (Amazon Web Services): Utilizamos a infraestrutura da AWS para hospedar e implantar as aplicações desenvolvidas para a CVC. Com a AWS, pudemos garantir alta disponibilidade, segurança e desempenho para as aplicações da CVC, atendendo às demandas de um ambiente empresarial moderno e dinâmico.']}
      />
      <Section                
        title="Soluções" 
        content={['Gateway de Hotéis: Desenvolvemos um gateway de hotéis que permite aos clientes da CVC acessarem os catálogos completos de hotéis de seus parceiros. Quando um cliente escolhe destino e data no site da CVC, uma requisição é feita para os parceiros, recuperando todos os hotéis na área selecionada.', 'Integração com API de Polígonos: Implementamos a integração com uma API de polígonos, possibilitando que a CVC cadastrasse os hotéis em regiões específicas. Isso permitiu aos clientes filtrar hotéis com base em áreas geográficas precisas, proporcionando uma experiência de busca mais refinada e eficiente.']}
      />
      <section className="lg:h-[914px] h-[353px] w-full relative">
      <Image         
        src={`${window.outerWidth >= 1024 ? "/familia-viajando.png" : "/familia-viajando-mobile.jpg"}`}
        fill
        objectFit="cover"
        alt="Família Viajando"        
        quality={100}
        loading="lazy"
      />
      </section>
      <Section  
      dark              
        title="Impacto" 
        content={['Experiência Aprimorada para os Clientes: O gateway de hotéis e a integração com a API de polígonos melhoraram significativamente a experiência dos clientes ao buscar e selecionar hotéis. Agora, eles podem visualizar e selecionar opções com base em áreas geográficas específicas, garantindo uma escolha mais personalizada e precisa.', 'Eficiência Operacional: A centralização dos catálogos de hotéis e a automação do processo de busca e seleção reduziram o tempo e esforço necessários para os clientes encontrarem acomodações ideais. Além disso, a integração com a API de polígonos permitiu à CVC exibir os hotéis de forma mais precisa e relevante.','Parceria de Sucesso: A colaboração entre nossos squads de desenvolvimento, QA e Software Development foi essencial para o sucesso deste projeto. Trabalhamos em conjunto para superar os desafios técnicos e entregar uma solução de alta qualidade e funcionalidade para a CVC.']}
      />
    </main>
  );
}

