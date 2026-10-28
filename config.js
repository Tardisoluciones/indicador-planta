/* =====================================================================
   CONFIGURACIÓN DE LA EMPRESA — Comercializadora Gerco S.A.S.
   Es el ÚNICO archivo que cambia entre empresas. index.html es idéntico
   en todas las carpetas: se corrige una vez y se copia.
   Todas las empresas comparten el proyecto Supabase "Indicador de planta";
   el servidor separa los datos por "id" y valida PIN / clave en cada consulta.
   ===================================================================== */
window.EMPRESA = {
  id: 'gerco',                                   // NO cambiar: es la llave de la empresa en la base de datos
  nombre: 'Gerco',
  nombreApp: 'Gerco',                          // nombre bajo el ícono en iPhone
  etiqueta: 'Gerco · Planta',
  tituloPestana: 'Indicador de Planta — Gerco',
  logo: 'logo.png',
  logoAlto: 30,

  supabaseUrl: 'https://xqofeibahcqhhhzbfzrp.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxb2ZlaWJhaGNxaGhoemJmenJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0OTQ4MDgsImV4cCI6MjEwMDA3MDgwOH0.msvLO_R0DcxXtzHiJcReKLnele8mKODdizixOU4j99M',   // llave pública: ya no da acceso a las tablas

  tema: {}   // vacío = colores originales de Gerco
};
