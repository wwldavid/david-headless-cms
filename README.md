-- Initializing the Project Repository and Setting Up Version Control

1. pnpm create next-app@latest david-headless-cms
2. wwldavid/david-headless-cms (create repository in github)
3. git init
4. git remote add origin https://github.com/wwldavid/david-headless-cms.git

-- Setting Up and Configuring Sanity Studio for the Project

5. mkdir sanity && cd sanity (under the david-headless-cms/ directory)
6. pnpm create sanity@latest
   （Select "Create a new project" --> Select dataset (production) --> Select default output path (sanity)）
   （or this is the second time I use sanity studio, I use the former dataset, then I
   Select the existing project name --> Select dataset (production) --> Select default output path (sanity)）
   ---important: use the former dataset's projectId in sanity.config.ts,otherwise, cannot see the former data.
7. pnpm install (install sanity dependencies)
8. npm run dev (or: npx sanity dev) (this command is for development)
9. cd /Users/wanlongwu/Desktop/david-headless-cms/sanity/david-wanlong-gallery
10. pnpm dev
    http://localhost:3333/

11. create painting and artist schema
    schemaTypes/painting.ts
    schemaTypes/artist.ts
12. update schemaTypes/index.ts

-- Creating the Frontend Application with Next.js, TypeScript, and Tailwind CSS

13. pnpm create next-app client --ts --tailwind （create frontend folder）

-- configure sanity client

14. cd client
15. pnpm add @sanity/client
16. client/src/lib/sanity.js
    configure Sanity Client

-- Deploy the front-end project to Vercel

17. pnpm setup
18. pnpm add -g vercel  
    （ Install the Vercel CLI globally in the root directory (david-headless-cms/) ）
19. cd client
20. vercel login
21. vercel

--

22. .env.local (create .env.local file in the client directory)
23. sanity login (use GitHub account to make sure in the oa8t0gh6 project).
    --> Settings --> API --> CORS Origins --> Add a Vercel domain (https://client-five-drab.vercel.app)

-- Edit database data in Sanity Studio

24. pnpm add concurrently --save-dev （install concurrently）
    david-headless-cms>package.json (modifying script configuration)
    "dev": "concurrently \"next dev\" \"sanity dev\""
25. cd sanity --> pnpm run dev
    (Sanity Studio using vite@6.1.1 ready in 2372ms and running at http://localhost:3333/)

    \*\*\* if not "cd sanity", run "pnpm run dev" in root directory (start Next.js and Sanity Studio simultaneously), open http://localhost:3333 error message will appear like this"An error occurred that Sanity Studio was unable to recover from.
    [object Object]
    Could not resolve configuration file:

    - No sanity.config.ts file found
    - No sanity.config.js file found"
