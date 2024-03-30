'use client'
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { StudioLayout } from "@/app/StudioLayout";

export default function StudioPage() {
    return (
        <StudioLayout>
            <NextStudio config={config} />
        </StudioLayout>
    )
}