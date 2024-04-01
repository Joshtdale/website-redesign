// ./sanity/lib/client.ts

import { createClient } from "@sanity/client";
import config from "next/config";

// import { apiVersion, dataset, NEXT_PUBLIC_SANITY_PROJECT_ID } from "../.env";

export const client = createClient({
  apiVersion: '2023-11-19',
  dataset: 'production',
  projectId: 'rjs62vz1',
  useCdn: false,
  // These settings will be overridden in 
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});