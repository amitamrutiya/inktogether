<a name="readme-top"></a>

# Ink Together - Real-time collaboration, versatile canvas, rich media, secure.

Ink Together - Real-time collaboration, versatile canvas, rich media, secure.

https://github.com/amitamrutiya/inktogether/assets/91112485/4f68ea4f-27f7-4e78-8dbe-04dc65f027fb

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/amitamrutiya/inktogether?icon=github&color=black&scale=1.01)](https://github.com/amitamrutiya/inktogether/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/amitamrutiya/inktogether/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/amitamrutiya/inktogether?icon=github&color=black&scale=1.01)](https://github.com/amitamrutiya/inktogether/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/amitamrutiya/inktogether?icon=github&color=black&scale=1.01)](https://github.com/amitamrutiya/inktogether/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/amitamrutiya/inktogether?icon=github&color=black&scale=1.01)](https://github.com/amitamrutiya/inktogether/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/amitamrutiya/inktogether?icon=github&color=black&scale=1.01)](https://github.com/amitamrutiya/inktogether/pulls "GitHub pull requests")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://clone-miro.vercel.app/ "Vercel status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
inkTogether/
  |- app/
    |-- (dashboard)/
        |--- _components/
            |---- board-card/
            |---- sidebar/
            |---- board-list.tsx
            |---- empty-boards.tsx
            |---- empty-favourites.tsx
            |---- empty-org.tsx
            |---- empty-search.tsx
            |---- invite-button.tsx
            |---- navbar.tsx
            |---- new-board-button.tsx
            |---- org-sidebar.tsx
            |---- search-input.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- api/liveblocks-auth/
        |--- route.ts
    |-- board/[boardId]/
        |--- _components/
            |---- canvas.tsx
            |---- color-picker.tsx
            |---- cursor.tsx
            |---- cursors-presence.tsx
            |---- ellipse.tsx
            |---- info.tsx
            |---- layer-preview.tsx
            |---- loading.tsx
            |---- note.tsx
            |---- participants.tsx
            |---- path.tsx
            |---- rectangle.tsx
            |---- selection-box.tsx
            |---- selection-tools.tsx
            |---- text.tsx
            |---- tool-button.tsx
            |---- toolbar.tsx
            |---- user-avatar.tsx
        |--- page.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- auth/
    |-- modals/
    |-- ui/
    |-- actions.tsx
    |-- confirm-modal.tsx
    |-- hint.tsx
    |-- room.tsx
  |- config/
    |-- index.ts
  |- convex/
    |-- _generated/
    |-- auth.config.js
    |-- board.ts
    |-- boards.ts
    |-- schema.ts
    |-- tsconfig.json
  |- hooks/
    |-- use-api-mutation.tsx
    |-- use-disable-scroll-bounce.tsx
    |-- use-selection-bounds.tsx
  |- lib/
    |-- utils.ts
  |- providers/
    |-- convex-client-provider.tsx
    |-- modal-provider.tsx
  |- public/
    |-- placeholders/
    |-- elements.svg
    |-- empty-boards.svg
    |-- empty-favourites.svg
    |-- empty-search.svg
    |-- logo.svg
  |- store/
    |-- use-rename-modal.ts
  |- types/
    |-- canvas.ts
  |- .env.local
  |- .env.local.example
  |- .eslintrc.json
  |- .gitignore
  |- components.json
  |- environment.d.ts
  |- liveblocks.config.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# deployment for convex
CONVEX_DEPLOYMENT=dev:convex-app-name # team: <your-team-name>, project: <your-project-name>

# convex deployment url
NEXT_PUBLIC_CONVEX_URL=https://convex-app-name.convex.cloud

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# liveblocks api keys
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_dev_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY=sk_dev_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```

### 5. Convex Deployment Configuration:

#### a. Visit the Convex Website:

- Go to the [Convex website](https://convex.cloud/) and sign in to your account.

#### b. Access Deployment Settings:

- Navigate to the deployment settings section in your Convex account.

#### c. Retrieve Deployment Configuration:

- Find the deployment details, including team and project names.
- Update the `CONVEX_DEPLOYMENT` variable in the `.env.local` file with the obtained information.

### 6. Clerk Authentication Keys:

#### a. Visit the Clerk Website:

- Go to the [Clerk website](https://clerk.dev/) and sign in to your Clerk account.

#### b. Access API Keys:

- Find the section in your Clerk account related to API keys or authentication settings.

#### c. Generate Keys:

- Generate a pair of keys (Publishable Key and Secret Key).

#### d. Update `.env.local`:

- Replace the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` variables in the `.env.local` file with the keys obtained from Clerk.

### 7. Liveblocks API Keys:

#### a. Visit the Liveblocks Website:

- Go to the [Liveblocks website](https://liveblocks.io/) and sign in to your Liveblocks account.

#### b. Access API Keys:

- Navigate to your Liveblocks account settings or API keys section.

#### c. Generate Keys:

- Generate a pair of keys (Public Key and Secret Key) for development.

#### d. Update `.env.local`:

- Replace the `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` and `NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY` variables in the `.env.local` file with the Liveblocks API keys obtained.

### 8. Save and Secure:

- Save the changes to the `.env.local` file.

9. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.
10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![MySQL](https://skillicons.dev/icons?i=mysql "MySQL")](https://mysql.com/ "MySQL")


## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Ink Together.

- Thanks to CodeWithAntonio: https://codewithantonio.com/
- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.29.7
- [@liveblocks/client](https://www.npmjs.com/package/@liveblocks/client): ^1.10.1
- [@liveblocks/node](https://www.npmjs.com/package/@liveblocks/node): ^1.10.1
- [@liveblocks/react](https://www.npmjs.com/package/@liveblocks/react): ^1.10.1
- [@radix-ui/react-alert-dialog](https://www.npmjs.com/package/@radix-ui/react-alert-dialog): ^1.0.5
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar): ^1.0.4
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu): ^2.0.6
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [@radix-ui/react-tooltip](https://www.npmjs.com/package/@radix-ui/react-tooltip): ^1.0.7
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [convex](https://www.npmjs.com/package/convex): ^1.9.0
- [convex-helpers](https://www.npmjs.com/package/convex-helpers): ^0.1.23
- [date-fns](https://www.npmjs.com/package/date-fns): ^3.3.1
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.323.0
- [nanoid](https://www.npmjs.com/package/nanoid): ^5.0.6
- [next](https://www.npmjs.com/package/next): 14.1.0
- [next-themes](https://www.npmjs.com/package/next-themes): ^0.2.1
- [perfect-freehand](https://www.npmjs.com/package/perfect-freehand): ^1.2.2
- [query-string](https://www.npmjs.com/package/query-string): ^8.2.0
- [react](https://www.npmjs.com/package/react): ^18
- [react-contenteditable](https://www.npmjs.com/package/react-contenteditable): ^3.3.7
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [sonner](https://www.npmjs.com/package/sonner): ^1.4.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.1
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts): ^2.14.0
- [zustand](https://www.npmjs.com/package/zustand): ^4.5.1


## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
