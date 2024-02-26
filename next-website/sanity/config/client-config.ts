import { env } from "process";

const config = {
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-11-19'
};

export default config;