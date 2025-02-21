import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  withCredentials: true,
});

// export const sanityClient = createClient({
//   projectId: "oa8t0gh6",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2023-01-01",
// });
