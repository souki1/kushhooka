src/
├── assets/                # Images, icons, fonts
│   └── logo.svg
│
├── components/            # Reusable UI components
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Loader.tsx
│   └── layout/
│       ├── Navbar.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
│
├── layouts/               # Page layouts (wrappers)
│   ├── MainLayout.tsx
│   └── AuthLayout.tsx
│
├── pages/                 # Route-level pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx
│   └── NotFound.tsx
│
├── routes/                # Routing config
│   └── router.tsx
│
├── hooks/                 # Custom hooks
│   └── useAuth.ts
│
├── services/              # API calls (backend later)
│   ├── api.ts
│   └── auth.service.ts
│
├── store/                 # Global state (Redux/Zustand later)
│   └── auth.store.ts
│
├── utils/                 # Helpers & constants
│   ├── constants.ts
│   └── helpers.ts
│
├── styles/                # Global styles
│   └── globals.css
│
├── App.tsx
├── main.tsx
└── index.css             

