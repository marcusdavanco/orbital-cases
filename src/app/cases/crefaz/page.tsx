import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero 
        logoUrl="/logo-crefaz.svg" 
        content={["Squads de desenvolvimento", "QA", "Web Development"," Software Development"]} 
        imageUrl="/header-bg-2.jpg" 
        title="Central de Notificação"
        index={1}
      />
      <Section 
        dark 
        imageUrl="" 
        image={
          {
            url: "/imagem-contexto-02.png", 
            floating: false, 
            height: 397, 
            width: 484
          }
        }
        title="Contexto" 
        content={['A Orbital Tech colaborou com a Crefaz, uma financeira de destaque no Paraná. Como consultoria de TI, nossa missão foi trazer soluções inovadoras para a Crefaz, ajudando a otimizar seus processos e melhorar sua eficiência operacional.']}
      />
      <Section         
        title="Desafio" 
        content={['Nosso desafio foi criar soluções que simplificassem processos complexos, como o cruzamento de dados do SPC para negativação, integração com o CRM Bitrix24, central unificada de comunicação e a qualificação de leads.']}
      />
      <Section        
        dark 
        title="Tecnologia" 
        content={['Para alcançar os objetivos propostos no projeto em parceria com a Crefaz, a Orbital Tech empregou uma variedade de tecnologias modernas e eficientes. As ferramentas fundamentais utilizadas foram:', 'PHP e Laravel 10: Framework PHP poderoso e escalável, utilizado em todas as partes da integração com o CRM Bitrix24, automação de cruzamento de dados do SPC e implementação do Serviço de Lead Qualificado. Essas tecnologias foram escolhidas estrategicamente para garantir eficiência, segurança e integração em todo o processo.', 'ASP.NET 7: Framework para o desenvolvimento da Central de Notificações. MongoDB: Banco de dados NoSQL altamente escalável e de alta performance. Kafka: Plataforma distribuída de streaming de eventos, crucial para a eficiência da Central De Notificações.', 'Azure: Serviços de computação em nuvem da Microsoft, fornecendo escalabilidade e confiabilidade para o CENO.']}
      />
      <Section                
        title="Soluções" 
        content={['Automação de Cruzamento de Dados: Desenvolvemos uma automação para o cruzamento de dados do SPC, eliminando o processo manual e reduzindo drasticamente multas que podiam chegar a 100 mil reais mensais.', 'Módulo CENO de Notificações: Criamos o CENO, uma plataforma centralizada para envio de mensagens (email, SMS, WhatsApp), unificando as comunicações de vários departamentos e permitindo um melhor controle de custos.', 'Serviço de Lead Qualificado: Implementamos o Lead Qualificado, uma aplicação que qualifica leads automaticamente. Quando um cliente preenche o formulário no site, nossa API realiza as regras necessárias para a qualificação desse lead. Se o lead possuir perfil para aderir ao empréstimo na conta de energia, ele é incluído no board do CRM Bitrix24. Isso permitiu que os vendedores trabalhassem apenas com leads qualificados, economizando tempo e aumentando a eficiência nas vendas.', 'Integração com o CRM Bitrix24: Realizamos a integração de sistemas da Crefaz com o CRM Bitrix24, proporcionando uma experiência mais integrada e eficiente para a equipe de vendas. Agora, todas as informações estão centralizadas em uma única plataforma, facilitando o gerenciamento de clientes e potencializando o processo de vendas.']}
      />
      <section className="h-[680px] w-full relative">
      <Image 
        src={"/idosa-sorrindo-crefaz.jpg"}
        fill
        objectFit="cover"
        alt="Idosa sorrindo"        
        quality={100}
        loading="lazy"
      />
      </section>
      <Section  
      dark              
        title="Impacto" 
        content={['Economia Financeira: A automação e qualificação de leads reduziram multas e horas de trabalho manual, gerando economia significativa.', 'Eficiência Operacional: O CENO e a integração com o CRM Bitrix24 simplificaram as comunicações internas e externas da empresa, melhorando a eficiência e o controle de custos.', 'Vendas mais Estratégicas: Com o Lead Qualificado, os vendedores passaram a trabalhar apenas com leads qualificados, direcionando seus esforços de forma mais estratégica e aumentando as taxas de conversão.', 'Essas soluções não apenas fortaleceram nossa parceria com a Crefaz, mas também demonstraram nosso compromisso em trazer inovação e eficiência para nossos clientes. Estamos ansiosos para continuar colaborando e buscando novas oportunidades de melhorar ainda mais os processos da Crefaz por meio da tecnologia.']}
      />
    </main>
  );
}

