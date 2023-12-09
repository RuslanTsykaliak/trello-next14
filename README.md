### Trello Next.js 14

Key Features:
- Auth
- Organizations / Workspaces
- Board creation
- Unsplash API for random beautiful cover images
- Activity log for an entire organization
- Board rename and delete
- List creation
- List rename, delete, drag & drop reorder and copy
- Card creation
- Card description, rename, delete, drag & drop reorder and copy
- Card activity log
- Board limit for every organization
- Stripe subscription for each organization to unlock unlimited boards
- Landing page
- MySQL DB
- Prisma ORM
- shadcnUI & TailwindCSS


## Getting Started

To get started, clone this repository and navigate to the project directory. Then, install the dependencies using one of the following package managers:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

# Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

Prisma configuration:

```bash
npx prisma init
npx prisma generate
npx prisma db push
```

Stripe:

```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```



After installing the dependencies and .env, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Libraries

Shadcn UI:

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button skeleton accordion separator sheet tooltip popover label
```

Dependencies:

```bash
npm install @clerk/nextjs usekooks-ts zustand -D prisma @prisma/client zod sonner date-fns @tanstack/react-query @radix-ui/react-avatar @radix-ui/react-label stripe unsplash-js lodash -D @types/lodash @hello-pangea/dnd
```