import { z } from "zod";

export const PortableTextType = z.object({
    _type: z.literal('portableText'),
    _key: z.string().nullable().optional(),
    _ref: z.string().or(z.null()).optional(),
    _id:  z.string().or(z.null()).optional(),
    title: z.string().nullable().optional(),
    content: z.any().nullable().optional(),
    customStyles: z.string().nullable().optional(),
});