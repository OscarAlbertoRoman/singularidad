<<<<<<< HEAD
# SINGULARIDAD — Landing Page

Agencia de Inteligencia Artificial · singularidad.net.ar

## Stack

- **Next.js 14** (App Router)
- **TailwindCSS 3**
- **Framer Motion 11**
- **TypeScript**

## Estructura de componentes

```
app/
  layout.tsx          ← SEO, fuentes, metadata
  page.tsx            ← Ensamblado de secciones
  globals.css         ← Tailwind + CSS base

components/
  Nav.tsx             ← Navbar fija con efecto scroll
  Hero.tsx            ← Hero principal con animaciones
  Metrics.tsx         ← Barra de métricas
  Problema.tsx        ← Sección el problema
  Soluciones.tsx      ← Cards de soluciones
  Proceso.tsx         ← Pasos del proceso
  CtaFinal.tsx        ← CTA de cierre
  Footer.tsx          ← Pie de página
  ChatbotPlaceholder.tsx ← Widget flotante (listo para integración)
```

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy en Vercel

### Opción 1: CLI

```bash
npm install -g vercel
vercel --prod
```

### Opción 2: GitHub + Vercel (recomendado)

1. Push a GitHub: `git push origin main`
2. Ir a [vercel.com](https://vercel.com) → Import Project
3. Seleccionar el repositorio
4. Vercel auto-detecta Next.js
5. Click **Deploy**

### Variables de entorno (cuando integres el chatbot)

```
NEXT_PUBLIC_CHATBOT_API_KEY=tu_clave_aqui
NEXT_PUBLIC_CHATBOT_ENDPOINT=https://api.tuproveedor.com
```

## Integrar el chatbot real

Editar `components/ChatbotPlaceholder.tsx`:
- Reemplazar el window placeholder con el widget de tu proveedor
- Conectar con Anthropic API, Botpress, Tidio, Intercom, etc.
- El botón flotante y estado ya están implementados

## Dominio personalizado en Vercel

1. Settings → Domains → Add Domain
2. Ingresar: `singularidad.net.ar`
3. Agregar registro CNAME en tu DNS: `www → cname.vercel-dns.com`
4. Para el apex domain, agregar A record: `76.76.21.21`
=======
# singularidad-site
>>>>>>> 01d43042469c97273cd62f5d70f9ac411f37adbc
