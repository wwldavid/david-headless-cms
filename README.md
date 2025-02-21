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

--
