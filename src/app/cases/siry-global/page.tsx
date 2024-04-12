'use client'

import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import Image from "next/image";

export default function page() {  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero 
        logoUrl="/Logo-Siry.svg" 
        content={["UX/UI Design", "Web Development"]} 
        imageUrl="/header-bg-1.jpg"
        mobileImageUrl="/header-bg-1-mobile.jpg"
        title="Site institucional"
        index={0}
      />
      <Section 
        dark 
        image={
          {
            url: "/imagem-contexto-01.png", 
            floating: true, 
            height: 542, 
            width: 729
          }
        }
        title="Contexto" 
        content={['A Orbital Tech teve a honra de colaborar com a Siry Global em um projeto empolgante que envolveu a modernização completa de sua presença online. Como consultoria de TI especializada, focamos em desenvolvimento web e UI/UX.', 'Nosso objetivo era elevar a identidade digital da Siry Global, especialmente para seu produto estrela, o Evolution.']}
        customHeight={597}
      />
      <Section         
        title="Desafio" 
        content={['O desafio que enfrentamos foi a necessidade de revitalizar a presença online da Siry Global, mantendo a essência de sua marca, mas modernizando-a para um público contemporâneo.', 'Além disso, o site do Evolution precisava não apenas informar, mas também envolver e converter visitantes em clientes potenciais.']}
      />
      <Section         
        dark
        title="Tecnologia" 
        content={['Para alcançar esses objetivos, utilizamos tecnologias de ponta no desenvolvimento do site. O novo site institucional e o hotsite do Evolution foram construídos com as mais recentes ferramentas de web development e web design.', 'Implementamos técnicas de UI/UX para garantir uma experiência de usuário atraente e intuitiva. Além disso, incorporamos elementos de SEO para melhorar a visibilidade nos motores de busca e integração com redes sociais para uma presença online ampliada.']}
      />
      <Section         
        title="Soluções" 
        content={['A solução que propusemos e implementamos foi um rebranding completo da presença online da Siry Global. Para o site institucional, criamos um design moderno e responsivo que reflete a essência da empresa de forma elegante e profissional. Já para o hotsite do Evolution, desenvolvemos uma plataforma interativa, destacando os recursos e benefícios do produto de forma cativante.', 'A integração de sistemas permitiu uma experiência contínua para os usuários, do site principal ao hotsite do produto.']}
      />
      <section className="h-[823px] w-full relative pb-[100px] bg-white">
      <Image 
        src={"/hero12.png"}
        fill
        objectFit="cover"
        alt="Página em diversos gadgets"        
        quality={100}
        loading="lazy"
      />
      </section>      
      <Section         
        dark
        title="Impacto" 
        content={['O impacto desse projeto foi significativo para o negócio da Siry Global. A nova presença online resultou em um aumento notável na interação dos clientes com a marca. O site institucional recebeu elogios pela sua usabilidade e design, refletindo positivamente na imagem da empresa.', 'O hotsite do Evolution, por sua vez, gerou um aumento nas consultas e interesse pelo produto, resultando em um aumento nas conversões e nas vendas.']}
      />
    </main>
  );
}