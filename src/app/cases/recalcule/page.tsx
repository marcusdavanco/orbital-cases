import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero 
        logoUrl="/logo-recalcule.svg" 
        content={["Squads de desenvolvimento", "QA", "Software Development"]} 
        imageUrl="/header-bg-4.jpg" 
        title="Integração com CRM e Instituições Financeiras"
        index={3}
      />
      <Section 
        dark 
        imageUrl="" 
        image={
          {
            url: "/imagem-contexto-04.png", 
            floating: false, 
            height: 444, 
            width: 569
          }
        }
        title="Contexto" 
        content={['A Orbital Tech teve a oportunidade de colaborar com a Recalcule Crédito, um correspondente bancário focado em oferecer soluções de empréstimo que atendem às reais necessidades dos clientes.', 'Nossa parceria buscou melhorar a eficiência operacional da Recalcule, implementando soluções inovadoras para simplificar seus processos e proporcionar uma experiência mais ágil e personalizada para seus clientes.']}
      />
      <Section         
        title="Desafio" 
        content={['Nosso maior desafio foi auxiliar a Recalcule Crédito na transformação digital de seu negócio. Anteriormente, a maioria dos processos era realizada manualmente, o que limitava a eficiência e o alcance da empresa.', 'Além disso, desenvolver um Gateway de Empréstimo, uma aplicação de qualificação de leads e manter o website do cliente foram desafios técnicos significativos que enfrentamos.']}
      />
      <Section
        dark        
        title="Tecnologia" 
        content={['Para alcançar os objetivos propostos no projeto em parceria com a Recalcule Crédito, a Orbital Tech empregou uma variedade de tecnologias modernas e eficientes. As ferramentas fundamentais utilizadas foram:', 'Java: Para o desenvolvimento do backend robusto e escalável.', 'Spring Boot: Framework utilizado para facilitar o desenvolvimento do backend. Ele oferece uma estrutura poderosa e fácil de usar para o desenvolvimento de aplicações Java, permitindo uma implementação rápida e eficiente dos serviços necessários pela Recalcule Crédito, como a integração com o CRM Bitrix24 e as instituições financeiras.', 'React: React é ideal para o desenvolvimento de interfaces de usuário interativas e responsivas, permitindo que os clientes da Recalcule Crédito tenham uma experiência de usuário moderna e intuitiva ao acessar o site e utilizar as ferramentas de simulação de empréstimos.', 'Wordpress: Utilizado para o website institucional da Recalcule Crédito.', 'AWS (Amazon Web Services): Infraestrutura de hospedagem e implantação na nuvem.']}
      />
      <Section         
        title="Soluções" 
        content={['Integração com CRM Bitrix24: Implementamos uma integração completa com o CRM Bitrix24, permitindo à Recalcule Crédito centralizar e gerenciar todas as informações de clientes e leads em uma plataforma única. Isso melhorou significativamente a eficiência e a organização das operações da empresa.', 'Integração com Instituições Financeiras: Desenvolvemos integrações com diversas instituições financeiras, permitindo que a Recalcule Crédito consulte vários parceiros de empréstimos. Isso transformou a Recalcule Crédito em um Broker de empréstimo, oferecendo uma ampla gama de opções para seus clientes.', 'Gateway de Empréstimo: Construímos um Gateway de Empréstimo que permite aos clientes da Recalcule Crédito acessarem uma variedade de opções de empréstimo. Ao preencher o formulário no site, nossa API realiza a qualificação do lead, incluindo-o automaticamente no CRM Bitrix24 se tiver perfil para aderir ao empréstimo.', 'Aplicação de Lead Qualificado: Implementamos a solução Lead Qualificado, que automatiza a qualificação de leads. Quando um cliente preenche o formulário no site, nossa API realiza as verificações necessárias para qualificar o lead. Isso permitiu que a Recalcule Crédito trabalhasse apenas com leads qualificados, aumentando a eficiência e a taxa de conversão.', 'Manutenção do Website: Realizamos a manutenção contínua do website da Recalcule Crédito, garantindo que ele esteja sempre atualizado e seguindo as melhores práticas de mercado.']}
      />
      <section className="h-[914px] w-full relative">
      <Image 
        src={"/casal-idosos.jpg"}
        fill
        objectFit="cover"
        alt="Casal de idosos sorrindo enquanto olham um tablet"        
        quality={100}
        loading="lazy"
      />
      </section>
      <Section         
        dark
        title="Impacto" 
        content={['Transformação Digital: A transformação digital implementada permitiu que a Recalcule Crédito automatizasse processos anteriormente manuais, aumentando a eficiência e reduzindo erros.', 'Aumento de Simulações: Com nossa solução, a Recalcule Crédito viu um aumento significativo nas simulações de empréstimos diárias, passando de 30 para 300 simulações por dia. Isso demonstra o aumento da interação dos clientes e a eficácia da plataforma de empréstimos.', 'Eficiência Operacional: A centralização das informações no CRM Bitrix24, juntamente com a automação da qualificação de leads, permitiu que a Recalcule Crédito otimizasse suas operações, concentrando-se em leads de maior qualidade e aumentando suas chances de conversão.']}
      />
    </main>
  );
}

