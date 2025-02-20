1. pnpm create next-app@latest david-headless-cms
2. wwldavid/david-headless-cms (create repository in github)
3. git init
4. git remote add origin https://github.com/wwldavid/david-headless-cms.git

5. mkdir sanity && cd sanity (under the david-headless-cms/ directory)
6. pnpm create sanity@latest
   （Select "Create a new project" --> Select dataset (production) --> Select default output path (sanity)）
7. pnpm install (install sanity dependencies)
8. npm run dev (or: npx sanity dev) (this command is for development)
9. cd /Users/wanlongwu/Desktop/david-headless-cms/sanity/david-wanlong-gallery
10. pnpm dev
    http://localhost:3333/
