/* =====================================================================
   CONFIGURACIÓN DE LA EMPRESA — Refrescos Amazonas (Agua Amazonas)
   Es el ÚNICO archivo que cambia entre empresas. index.html es idéntico
   en todas las carpetas: se corrige una vez y se copia.
   Todas las empresas comparten el proyecto Supabase "Indicador de planta";
   el servidor separa los datos por "id" y valida PIN / clave en cada consulta.
   ===================================================================== */
window.EMPRESA = {
  id: 'amazonas',                                   // NO cambiar: es la llave de la empresa en la base de datos
  nombre: 'Amazonas',
  nombreApp: 'Amazonas',                       // nombre bajo el ícono en iPhone
  etiqueta: 'Amazonas · Planta',
  tituloPestana: 'Indicador de Planta — Amazonas',
  logo: 'logo.png',
  logoAlto: 46,
  logoAltoMovil: 38,
  supabaseUrl: 'https://xqofeibahcqhhhzbfzrp.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxb2ZlaWJhaGNxaGhoemJmenJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0OTQ4MDgsImV4cCI6MjEwMDA3MDgwOH0.msvLO_R0DcxXtzHiJcReKLnele8mKODdizixOU4j99M',   // llave pública: ya no da acceso a las tablas

  // Colores del logo: azul marino #011A6A y rosa delfín #F7379C
  tema: {
    'steel':'#011A6A', 'steel-dark':'#000F45', 'brand-blue':'#D81B7E',
    'ink':'#151B3D', 'ink-soft':'#5A6080',
    'paper':'#FFFFFF', 'card':'#FFFFFF', 'line':'#E6E9F2',
    'tint':'#FFF0F7', 'input-bg':'#FAFBFE', 'track':'#EDEFF5',
    'card-shadow':'0 1px 2px rgba(1,26,106,.04), 0 8px 24px rgba(1,26,106,.07)',
    'accent-bar':'linear-gradient(90deg,#F7379C 0%,#FA93C8 40%,#011A6A 100%)'
  }
};
