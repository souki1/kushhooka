src/
├── assets/                 # Static assets (images, icons, fonts)
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/             # Reusable UI components
│   ├── common/             # Buttons, Inputs, Modals, etc.
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Loader.tsx
│   │
│   └── layout/             # Layout-related components
│       ├── Navbar.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
│
├── layouts/                # Page-level layouts
│   ├── MainLayout.tsx
│   └── AuthLayout.tsx
│
├── pages/                  # Route-level pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx
│   └── NotFound.tsx
│
├── routes/                 # Application routing
│   └── router.tsx
│
├── hooks/                  # Custom React hooks
│   └── useAuth.ts
│
├── services/               # API services & backend integration
│   ├── api.ts
│   └── auth.service.ts
│
├── store/                  # Global state management
│   └── auth.store.ts
│
├── utils/                  # Utility functions & constants
│   ├── constants.ts
│   └── helpers.ts
│
├── styles/                 # Global & shared styles
│   └── globals.css
│
├── App.tsx                 # Root component
├── main.tsx                # Application entry point
└── index.css               # Tailwind CSS import
