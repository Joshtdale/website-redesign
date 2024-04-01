"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";

// import Posts from "@/components/Posts";
import { PAGE_QUERY } from "@/lib/queries";

export default function PagePreview({
  page,
  params
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    PAGE_QUERY,
    params,
    { page }
  );
console.log(data)
  return data ? (
    <div>
        There is data
    </div>
  ) : (
    <div className="bg-red-100">No Pages found</div>
  );
}