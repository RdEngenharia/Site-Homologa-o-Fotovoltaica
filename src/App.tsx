/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sun, 
  Zap, 
  Building2, 
  Home, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  CheckCircle2,
  FileBadge,
  MessageCircle,
  TrendingDown,
  Star,
  Quote,
  Navigation
} from "lucide-react";

// --- CONFIGURAÇÃO DOS DEPOIMENTOS DE CLIENTES ---
const Testimonials = () => {
  const reviews = [
    {
      name: "Ricardo Mendes", // Nome do cliente
      role: "Síndico, Condomínio Solar das Palmeiras", // Cargo ou Local
      content: "A rapidez na homologação junto à Coelba foi impressionante. Em menos de 30 dias já estávamos operando com o sistema solar. Excelente suporte técnico.", // Texto do depoimento
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" // Foto do cliente (pode ser link ou caminho local como '/cliente1.jpg')
    },
    {
      name: "João Batista",
      role: "Produtor Rural, Região de Vitória da Conquista",
      content: "Fizeram um projeto de subestação para minha propriedade que reduziu as perdas e estabilizou nossa carga de irrigação. Conhecimento técnico nota 10.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Eng. Pedro Santos",
      role: "Diretor Comercial, Porto Seguro",
      content: "Parceria de longo prazo. A RD Engenharia resolve toda a parte burocrática e técnica dos nossos grandes empreendimentos comerciais.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Ana Luíza",
      role: "Gerente Industrial, Feira de Santana",
      content: "Precisávamos de um aumento de carga urgente para a nova linha de produção e a RD resolveu em tempo recorde. Sem dores de cabeça com a Coelba.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-solar-yellow font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Feedback</span>
          {/* TÍTULO DA SEÇÃO DE DEPOIMENTOS */}
          <h2 className="font-display text-4xl font-black text-solar-blue">O que nossos clientes dizem</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-solar-yellow text-solar-yellow" />)}
              </div>
              <Quote className="w-8 h-8 text-slate-100 mb-4" />
              <p className="text-slate-600 text-sm italic mb-8 flex-grow leading-relaxed">
                "{rev.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <img src={rev.avatar} className="w-10 h-10 rounded-full object-cover" alt={rev.name} referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-sm text-solar-blue">{rev.name}</h4>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CONFIGURAÇÃO DA ÁREA DE ATUAÇÃO E ESTADOS ---
const CoverageArea = () => {
  const regions = [
    { 
      name: "Bahia", // Estado
      cities: ["Salvador", "Porto Seguro", "Vitória da Conquista", "Feira de Santana"], // Cidades principais
      concessionaire: "Neoenergia Coelba" // Nome da Concessionária
    },
    { 
      name: "Distrito Federal", 
      cities: ["Brasília", "Taguatinga", "Ceilândia"], 
      concessionaire: "Neoenergia Brasília" 
    },
    { 
      name: "Pernambuco", 
      cities: ["Recife", "Olinda", "Caruaru", "Petrolina"], 
      concessionaire: "Neoenergia Pernambuco" 
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-solar-yellow font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Área de Atuação</span>
          {/* TÍTULO DA SEÇÃO DE ATUAÇÃO */}
          <h2 className="font-display text-4xl font-black text-solar-blue mb-6">Selo de Aprovação em <span className="text-solar-red underline decoration-4 underline-offset-8">3 Estados</span></h2>
          {/* TEXTO DE APOIO */}
          <p className="text-slate-500 text-lg mb-10">
            Especialistas em trâmites burocráticos e projetos técnicos junto ao grupo <span className="font-bold text-solar-blue">Neoenergia</span>. Atuamos com agilidade na Bahia, Brasília e Pernambuco.
          </p>
          
          <div className="space-y-6">
            {regions.map((region, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-display font-bold text-lg text-solar-blue">{region.name}</h4>
                  <span className="text-[10px] bg-solar-yellow/20 text-solar-blue px-2 py-1 rounded font-bold uppercase">{region.concessionaire}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city, cIdx) => (
                    <span key={cIdx} className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-solar-blue rounded-2xl text-white flex items-center gap-6">
             <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center shrink-0">
               <MapPin className="text-solar-yellow w-6 h-6" />
             </div>
             <p className="text-sm text-white/80 leading-relaxed font-medium">
               Atendemos integradores e proprietários finais com suporte técnico integral e <span className="text-solar-yellow font-bold">100% de aprovação técnica</span>.
             </p>
          </div>
        </div>

        <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
          {/* 
              COMO MUDAR ESTA IMAGEM:
              1. Salve sua foto na pasta /public (ex: mapa_bahia.jpg)
              2. Troque o link abaixo pelo nome do arquivo: src="/mapa_bahia.jpg"
          */}
          <img 
            src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" 
            alt="Bahia Paisagem" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-solar-blue/80 via-transparent to-transparent flex items-end p-10">
            <div className="glass-card p-6 rounded-2xl border-white/10 w-full">
              <div className="flex items-center gap-4">
                <Sun className="text-solar-yellow w-8 h-8" />
                <div>
                  <h4 className="text-white font-bold">Sol para Todos</h4>
                  <p className="text-white/60 text-sm">Levando engenharia solar a cada canto do estado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// WhatsApp Icon SVG Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.44h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- COMPONENTE DO BOTÃO FLUTUANTE DO WHATSAPP ---
const WhatsAppFloatingButton = () => (
  <a 
    href="https://wa.me/557391317853" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[100] group"
  >
    <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity animate-pulse" />
    <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
      <WhatsAppIcon className="text-white w-8 h-8" />
    </div>
    
    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-solar-blue px-4 py-2 rounded-xl shadow-xl border border-slate-100 font-bold text-sm whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
      Falar com Engenheiro Agora!
    </div>
  </a>
);

// --- PAGAMENTO E GARANTIA (CONFIANÇA) ---
const TrustBanner = () => {
  return (
    <section className="py-24 bg-solar-yellow relative overflow-hidden">
      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-solar-blue/20 mb-10">
            <ShieldCheck className="w-5 h-5 text-solar-blue" />
            <span className="text-solar-blue font-black uppercase tracking-[0.3em] text-xs">Garantia de Aprovação</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-solar-blue mb-10 leading-tight">
            Pagamento em <span className="underline decoration-solar-blue/30 underline-offset-8">duas etapas:</span> 50% antes e 50% após a aprovação técnica.
          </h2>
          <p className="text-solar-blue/70 text-xl font-bold mb-12">
            Risco zero para sua empresa. Só recebemos o saldo final quando o projeto estiver homologado.
          </p>
          <a 
            href="https://wa.me/557391317853?text=Quero+resolver+minha+homologação+agora+e+pagar+50/50"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-solar-blue text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto w-fit"
          >
            Falar com Engenheiro Agora
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
import React, { useState, useEffect, ElementType } from "react";

// --- CONFIGURAÇÃO DA BARRA DE NAVEGAÇÃO (NAVBAR) ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-solar-blue/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* LOGO DO SITE - SALVE COMO 'logo.png' NA PASTA /public */}
          <img src="/logo.png" alt="RD Engenharia Elétrica" className="h-12 w-auto object-contain" />
          <span className="font-display font-bold text-xl tracking-tight text-white hidden sm:inline-block">
            RD ENGENHARIA<span className="text-solar-red"> ELÉTRICA</span>
          </span>
        </div>
        
        {/* LINKS DO MENU NAVEGAÇÃO */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/80">
          <a href="#servicos" className="hover:text-solar-yellow transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-solar-yellow transition-colors">Projetos</a>
          <a href="#sobre" className="hover:text-solar-yellow transition-colors">Sobre Nós</a>
        </div>

        <a 
          href="https://wa.me/557391317853?text=Quero+resolver+minha+homologação+agora"
          target="_blank"
          className="bg-solar-yellow text-solar-blue px-5 py-2.5 rounded-full font-black text-xs hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-solar-yellow/20"
        >
          FALAR COM ENGENHEIRO
        </a>
      </div>
    </nav>
  );
};

// --- CONFIGURAÇÃO DO HERO (INÍCIO) ---
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background com efeito de malha técnica */}
      <div className="absolute inset-0 bg-[#0A0F1C]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TAG DE FOCO COM DOR DO CLIENTE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-yellow/10 border border-solar-yellow/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-solar-yellow animate-pulse" />
              <span className="text-solar-yellow text-[10px] font-black uppercase tracking-[0.2em]">Zero dor de cabeça: Homologação em Tempo Recorde</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
              Aprovação na Coelba <span className="text-solar-yellow text-glow italic">sem Reprovação.</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium">
              Cansado de engenheiros que demoram meses? Nossa homologação é <span className="text-white font-bold">rápida e eficiente.</span> Resolvemos toda a burocracia para você focar na sua obra.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/557391317853?text=Quero+resolver+minha+homologação+agora+e+evitar+reprovações"
                target="_blank"
                className="group relative px-8 py-5 bg-solar-yellow text-solar-blue font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all text-center shadow-2xl shadow-solar-yellow/20"
              >
                Resolver minha homologação
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-5 bg-white/5 text-white font-bold uppercase tracking-widest rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center backdrop-blur-md"
              >
                Ver Especialidades
              </button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <div className="text-3xl font-display font-black text-white">+500</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Projetos Aprovados</div>
              </div>
              <div>
                <div className="text-3xl font-display font-black text-white text-glow">100%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Eficiência Técnica</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-solar-yellow/20 rounded-full blur-[120px] animate-pulse" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl skew-y-1">
              <img 
                src="/obra1.jpg" 
                alt="Engenheiro Responsável"
                className="w-full h-[650px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-blue via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border border-white/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Aprovação Garantida</h4>
                    <p className="text-white/60 text-sm">Normativas Coelba/Neoenergia rigorosamente atendidas.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: ElementType;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-solar-yellow/20 transition-all duration-300"
  >
    <div className="w-14 h-14 bg-slate-50 text-solar-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-solar-yellow group-hover:text-solar-blue transition-colors duration-300">
      <Icon className="w-7 h-7 stroke-[1.5]" />
    </div>
    <h3 className="font-display font-bold text-xl mb-4 group-hover:text-solar-blue transition-colors">
      {title}
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-6">
      {description}
    </p>
    <div className="flex items-center gap-2 text-xs font-bold text-solar-blue/40 uppercase tracking-widest group-hover:text-solar-yellow transition-colors">
      Saiba Mais <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

// --- CONFIGURAÇÃO DA SEÇÃO DE SERVIÇOS (FOCO EM ESPECIALIDADES) ---
const Services = () => {
  const specialties = [
    {
      icon: CheckCircle2,
      title: "Homologação Fotovoltaica",
      description: "Processos urgentes para evitar reprovações na Coelba. Cuidamos do parecer de acesso de ponta a ponta.",
      tags: ["Bahia", "Brasília", "Pernambuco"]
    },
    {
      icon: Zap,
      title: "Alteração de Carga",
      description: "Aumento de potência e redimensionamento de padrão de entrada. Rapidez na aprovação técnica.",
      tags: ["Upgrade", "Indústria", "Comércio"]
    },
    {
      icon: Building2,
      title: "Subestação de Média Tensão",
      description: "Projetos técnicos e execução de subestações compactas e convencionais com rigor absoluto.",
      tags: ["MT", "Engenharia", "Alta Tensão"]
    }
  ];

  return (
    <section id="servicos" className="bg-[#0A0F1C] relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-solar-yellow/5 blurred-circle opacity-20" />
      
      <div className="section-container relative z-10 text-center mb-24">
        <span className="text-solar-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Especialidades</span>
        <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8">
          Foque na Obra, <span className="text-solar-yellow bg-white/5 px-4 py-2 rounded-2xl">nós aprovamos.</span>
        </h2>
        <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium">
          Esqueça os atrasos. Somos engenheiros focados em desobstruir processos técnicos na Neoenergia.
        </p>
      </div>

      <div className="section-container grid md:grid-cols-3 gap-8">
        {specialties.map((spec, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-solar-yellow transition-all duration-500 hover:-translate-y-3 cursor-default"
          >
            <div className="w-16 h-16 bg-solar-yellow/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-solar-blue transition-colors">
              <spec.icon className="w-8 h-8 text-solar-yellow group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-6 group-hover:text-solar-blue transition-colors">
              {spec.title}
            </h3>
            <p className="text-white/40 group-hover:text-solar-blue/70 text-lg leading-relaxed mb-8 transition-colors">
              {spec.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {spec.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 group-hover:bg-solar-blue/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-solar-blue transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- CONFIGURAÇÃO DA GALERIA DE FOTOS (MOSAICO) ---
const Gallery = () => {
  const images = [
    { url: "/obra2.jpg", span: "md:col-span-2 md:row-span-2", title: "Aprovação Residencial" },
    { url: "/subestacao.png", span: "md:col-span-1 md:row-span-1", title: "Subestações de Média Tensão" },
    { url: "/obra3.png", span: "md:col-span-1 md:row-span-1", title: "Diagramas e Projetos" },
    { url: "/obra4.png", span: "md:col-span-2 md:row-span-1", title: "Entregas Recentes" },
  ];

  return (
    <section id="galeria" className="py-24 bg-[#080C14]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-solar-yellow font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">Resultados <span className="text-solar-yellow">Reais.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[1000px] md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[32px] group cursor-pointer border border-white/5 ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-blue opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <div>
                  <h4 className="text-white font-display text-2xl font-black mb-2">{img.title}</h4>
                  <div className="w-12 h-1 px-4 bg-solar-yellow rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CONFIGURAÇÃO DO FOOTER (RODAPÉ) ---
const Footer = () => {
  return (
    <footer className="bg-solar-blue border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-solar-yellow" />
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              {/* LOGO DO FOOTER */}
              <img src="/logo.png" alt="RD Logo" className="h-10 w-auto" />
              <span className="font-display font-bold text-lg text-white">RD ENGENHARIA<span className="text-solar-red underline decoration-2 underline-offset-4"> ELÉTRICA</span></span>
            </div>
            {/* TEXTO RESUMO FOOTER */}
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Expertise técnica em Porto Seguro e região. Engenharia elétrica de alta performance, soluções solares e subestações com rigor técnico.
            </p>
            <div className="flex gap-4">
              {/* LINKS REDES SOCIAIS (ALTERE O href="#") */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-solar-yellow hover:text-solar-blue transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-solar-yellow hover:text-solar-blue transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#servicos" className="hover:text-solar-yellow transition-colors">Nossos Serviços</a></li>
              <li><a href="#galeria" className="hover:text-solar-yellow transition-colors">Portfólio</a></li>
              <li><a href="#sobre" className="hover:text-solar-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="https://wa.me/557391317853?text=Olá+gostaria+de+falar+com+um+engenheiro" target="_blank" className="hover:text-solar-yellow transition-colors font-bold text-solar-yellow">Falar com Engenheiro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Serviços</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Homologação Solar</li>
              <li>Subestações MT</li>
              <li>Aumento de Carga</li>
              <li>Assessoria Técnica</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contatos Oficiais</h4>
            {/* ENDEREÇO DA EMPRESA */}
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Sede Administrativa</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              R Princesa Isabel, 236 - Frei Calixto <br/> Porto Seguro - BA, 45.810-000
            </p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Comercial</p>
            <p className="text-white/60 text-sm">(73) 9131-7853</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
          <div className="flex gap-8">
            {/* CNPJ E RAZÃO SOCIAL */}
            <span>CNPJ: 44.367.932/0001-42</span>
            <span>RD COMERCIO E SERVICOS ELETRICOS LTDA</span>
          </div>
          <div className="flex gap-8">
            <span>© 2024 - Todos os direitos reservados</span>
            <a href="#" className="hover:text-solar-yellow underline decoration-solar-yellow/20">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <WhatsAppFloatingButton />
      <main>
        <Hero />
        <Services />
        <TrustBanner />
        <Gallery />
        <Testimonials />
        <CoverageArea />
        <section id="sobre" className="bg-solar-blue py-24 border-y border-white/5">
          <div className="section-container text-center max-w-4xl">
            <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              A Excelência Técnica que seu Empreendimento Exige.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-16">
              {[
                { label: "Anos de Mercado", value: "05+" },
                { label: "Cidades Atendidas", value: "20+" },
                { label: "MWp Homologados", value: "15.4" },
                { label: "Selo de Qualidade", value: "RD" },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 border border-white/10 rounded-2xl bg-white/5">
                  <div className="text-3xl font-display font-black text-solar-yellow mb-2">{stat.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
