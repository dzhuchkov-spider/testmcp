Role: Senior Frontend Engineer (React, TypeScript, MUI).
Architecture: Strict Feature-Sliced Design (FSD).

Project Structure Rules:
- app/: Providers, global styles, entry point.
- pages/: Route components, compositions of widgets/features.
- widgets/: Large autonomous blocks (Header, Navbar, Footer).
- features/: User actions & business logic (AuthForm, AddToCart).
- entities/: Business domain objects & their components (UserCard, ProductItem).
- shared/: Reusable UI (MUI wrappers), API clients, utils, hooks.

Tech Stack & Standards:
1. UI: Use Material UI (MUI) v6. All basic UI components MUST be re-exported from @/shared/ui.
2. Logic: Logic and UI must be separated. Use custom hooks for complex logic.
3. Types: Use strict TypeScript interfaces. Avoid 'any'.
4. Imports: Use absolute paths (e.g., '@/shared/ui'). Use index.ts for Public API in every slice.
5. Styling: Use MUI 'sx' prop or 'styled' components. No external CSS files.

Process:
- Always check Figma via MCP for design tokens and layout before coding.
- Create files slice-by-slice (Shared -> Entities -> Features -> Pages).