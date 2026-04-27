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
      name: "Ana Luíza",
      role: "Proprietária Residencial, Salvador",
      content: "O projeto de Casa Inteligente superou minhas expectativas. Iluminação e climatização integradas de forma simples. A equipe é muito profissional.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Eng. Pedro Santos",
      role: "Diretor Comercial, Porto Seguro",
      content: "Parceria de longo prazo. A RD Engenharia resolve toda a parte burocrática e técnica dos nossos grandes empreendimentos comerciais.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
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
    href="https://wa.me/557391317853" // ALTERE PARA O SEU NÚMERO (Formato: 55 + DDD + Número)
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[100] group"
  >
    <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity animate-pulse" />
    <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
      <WhatsAppIcon className="text-white w-8 h-8" />
    </div>
    
    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-solar-blue px-4 py-2 rounded-xl shadow-xl border border-slate-100 font-bold text-sm whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
      Solicitar Orçamento no Zap!
    </div>
  </a>
);

const QuickQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    kwp: "",
    service: "Homologação Fotovoltaica"
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, city, kwp, service } = formData;
    const message = `Olá, RD Engenharia Elétrica! Sou o(a) ${name || 'interessado(a)'} de ${city || 'sua região'} e preciso de suporte para ${service}. O sistema possui ${kwp || 'uma potência específica'} kWp. Como podemos iniciar o processo de homologação?`;
    const whatsappUrl = `https://wa.me/557391317853?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="bg-solar-blue rounded-[40px] overflow-hidden shadow-2xl border border-white/5 grid lg:grid-cols-5">
          <div className="lg:col-span-2 p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-solar-blue to-blue-950 text-white relative">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10">
              <span className="text-solar-yellow font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Orçamento Técnico</span>
              <h2 className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight">
                Homologação <br/> <span className="text-solar-red underline decoration-4 underline-offset-8">Descomplicada </span> pelo Zap.
              </h2>
              <p className="text-white/60 mb-8 max-w-sm">
                Focamos na burocracia para você focar na venda e instalação. Informe a potência do sistema ao lado.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-solar-yellow/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-solar-yellow" />
                  </div>
                  <span className="text-xs text-white/80 font-medium">B2B: Suporte para integradores</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-solar-yellow/20 flex items-center justify-center">
                    <TrendingDown className="w-3 h-3 text-solar-yellow" />
                  </div>
                  <span className="text-xs text-white/80 font-medium">Agilidade nos pareceres de acesso</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-10 md:p-14 bg-white text-solar-blue">
            <form onSubmit={handleSendMessage} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Nome ou Empresa</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow/20 outline-none transition-all placeholder:text-slate-300" 
                  placeholder="Seu nome ou nome da sua empresa" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Cidade / Estado</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow/20 outline-none transition-all placeholder:text-slate-300" 
                  placeholder="Ex: Porto Seguro - BA" 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Serviço Técnico</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow/20 outline-none transition-all appearance-none cursor-pointer"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Homologação Fotovoltaica</option>
                  <option>Projeto de Subestação</option>
                  <option>Aumento de Carga</option>
                  <option>Assessoria Neoenergia</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Potência do Sistema (kWp)</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow/20 outline-none transition-all placeholder:text-slate-300" 
                  placeholder="Ex: 12.5 kWp" 
                  value={formData.kwp}
                  onChange={(e) => setFormData({...formData, kwp: e.target.value})}
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black uppercase tracking-[0.15em] flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-green-500/10"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Solicitar Homologação via WhatsApp
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 font-medium uppercase tracking-wider">
                  Retorno técnico especializado em até 24h úteis.
                </p>
              </div>
            </form>
          </div>
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
          <a href="#contato" className="hover:text-solar-yellow transition-colors">Contato</a>
        </div>

        <button className="bg-solar-yellow text-solar-blue px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-solar-yellow/20">
          ORÇAMENTO
        </button>
      </div>
    </nav>
  );
};

// --- SEÇÃO HERO (BOAS-VINDAS E APRESENTAÇÃO PRINCIPAL) ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-solar-blue overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-solar-yellow/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>
      
      {/* Padrão de grade de fundo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* TEXTO PEQUENO ACIMA DO TÍTULO */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-solar-yellow/30 bg-solar-yellow/5 text-solar-yellow text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <ShieldCheck className="w-3 h-3" />
            Engenharia e Homologação Técnica: BA | DF | PE
          </div>
          
          {/* TÍTULO PRINCIPAL (HERO) */}
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Engenharia <span className="text-solar-red italic">Elétrica</span> e Soluções em <span className="text-solar-yellow">Homologação.</span>
          </h1>
          
          {/* DESCRIÇÃO PRINCIPAL (HERO) */}
          <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Suporte técnico especializado para integradores e clientes finais. Cuidamos de toda a burocracia junto à <span className="text-white font-bold underline decoration-solar-yellow decoration-2 underline-offset-4">Neoenergia</span> e concessionárias locais.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-solar-yellow text-solar-blue px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:gap-4 transition-all shadow-xl shadow-solar-yellow/10">
              Solicitar Projeto Técnico <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
              Nossos Serviços
            </button>
          </div>

          {/* ESTATÍSTICAS RÁPIDAS NO HERO */}
          <div className="mt-12 flex gap-8 items-center border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold text-white font-display">+500</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-medium">Projetos Aprovados</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white font-display">100%</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-medium">Conformidade Coelba</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl skew-y-1">
            {/* IMAGEM DESTAQUE DO SITE (PAINÉIS SOLARES / ENGENHARIA) */}
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
              alt="Instalação Solar RD" 
              className="w-full h-[540px] object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-solar-blue/80 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-card p-6 rounded-xl border-solar-yellow/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-solar-yellow/20 rounded-full flex items-center justify-center border border-solar-yellow/30">
                    <Zap className="text-solar-yellow w-6 h-6" />
                  </div>
                  <div>
                    {/* TEXTO DO BOX FLUTUANTE SOBRE A IMAGEM */}
                    <h4 className="text-white font-bold text-lg">Subestações MT</h4>
                    <p className="text-white/60 text-sm">Projetos de alta complexidade aprovados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-solar-yellow/20 rounded-2xl -z-0 blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-2xl -z-0 blur-xl" />
        </motion.div>
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

// --- CONFIGURAÇÃO DA SEÇÃO DE SERVIÇOS (CARDS) ---
const Services = () => {
  const services = [
    {
      icon: FileBadge,
      title: "Homologação Fotovoltaica", // Título do serviço
      description: "Processos completos junto à concessionária Coelba e outras. Do dimensionamento ao parecer de acesso definitivo." // Descrição do serviço
    },
    {
      icon: Zap,
      title: "Alteração de Carga",
      description: "Aumento de potência instalada e adequação de padrão de entrada para residências, comércios e indústrias."
    },
    {
      icon: Building2,
      title: "Projetos de Subestação",
      description: "Engenharia de Média Tensão (MT) para clientes de grande porte, garantindo segurança e redução de custos operacionais."
    },
    {
      icon: Home,
      title: "Instalações de Baixa Tensão",
      description: "Engenharia elétrica detalhada para novos empreendimentos, vistorias técnicas e projetos executivos residenciais."
    },
    {
      icon: Cpu,
      title: "Casa Inteligente",
      description: "Automação residencial completa: iluminação, segurança e climatização integradas para máximo conforto e economia."
    }
  ];

  return (
    <section id="servicos" className="bg-slate-50/50 relative py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-solar-yellow font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Especialidades</span>
          {/* TÍTULO DA SEÇÃO DE SERVIÇOS */}
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6 text-solar-blue">
            Soluções Técnicas com <span className="text-solar-yellow italic">Rigor</span> de Engenharia.
          </h2>
          {/* TEXTO DE APOIO DA SEÇÃO DE SERVIÇOS */}
          <p className="text-slate-500 text-lg">
            Atuamos em toda a Bahia entregando projetos que unem viabilidade econômica a uma execução tecnicamente perfeita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CONFIGURAÇÃO DA GALERIA DE FOTOS (MOSAICO) ---
const Gallery = () => {
  const images = [
    // Para trocar estas imagens, salve na pasta /public e altere o link para '/sua-foto.jpg'
    { url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-2", title: "Energia Solar" },
    { url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1", title: "Setor Comercial" },
    { url: "/subestacao.png", span: "md:col-span-1 md:row-span-1", title: "Subestações" },
    { url: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800", span: "md:col-span-1 md:row-span-1", title: "Automação" },
    { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 md:row-span-1", title: "Projetos Elétricos" },
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-solar-yellow font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
            <h2 className="font-display text-4xl font-black text-solar-blue">Engenharia em Prática</h2>
          </div>
          <button className="text-solar-blue font-bold text-sm uppercase tracking-widest border-b-2 border-solar-yellow pb-1 hover:text-solar-yellow transition-colors">
            Ver Todos os Projetos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-display text-2xl font-bold">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SEÇÃO DE CONTATO E FORMULÁRIO ---
const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-solar-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-solar-yellow/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            {/* TÍTULO SEÇÃO DE CONTATO */}
            <h2 className="font-display text-4xl font-extrabold mb-8">Vamos tirar seu projeto do papel?</h2>
            {/* DESCRIÇÃO SEÇÃO DE CONTATO */}
            <p className="text-white/60 text-lg mb-12">
              Nossa equipe de engenheiros está pronta para analisar sua necessidade técnica no estado da Bahia.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, text: "R Princesa Isabel, 236, Porto Seguro - BA" }, // SEU ENDEREÇO
                { icon: Phone, text: "+55 (73) 9131-7853" }, // SEU TELEFONE
                { icon: Mail, text: "rodrigues.solar@hotmail.com" }, // SEU E-MAIL
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    <item.icon className="w-5 h-5 text-solar-yellow" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Nome Completo</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-solar-yellow outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-solar-yellow outline-none transition-colors" placeholder="(71) 00000-0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Assunto</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-solar-yellow outline-none transition-colors appearance-none">
                  <option className="bg-solar-blue">Homologação Solar</option>
                  <option className="bg-solar-blue">Projetos MT (Subestação)</option>
                  <option className="bg-solar-blue">Automação Residencial</option>
                  <option className="bg-solar-blue">Aumento de Carga</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Mensagem</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-solar-yellow outline-none transition-colors" placeholder="Descreva brevemente sua necessidade técnico..." />
              </div>

              <button className="w-full bg-solar-yellow text-solar-blue py-5 rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-solar-yellow/10">
                Enviar Mensagem
              </button>
            </form>
          </div>
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
              <li><a href="#depoimentos" className="hover:text-solar-yellow transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-solar-yellow transition-colors">Contato Direto</a></li>
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
        <QuickQuote />
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
                { label: "Selo de Qualidade", value: "ABC" },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 border border-white/10 rounded-2xl bg-white/5">
                  <div className="text-3xl font-display font-black text-solar-yellow mb-2">{stat.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
