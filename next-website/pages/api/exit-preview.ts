import { NextApiRequest, NextApiResponse } from "next";

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    const slug = req.query.slug;
    res.setDraftMode({ enable: false })
    res.writeHead(307, { Location: typeof slug === 'string' ? slug : '/' })
    res.end()
    // res.setPreviewData({});
    // res.redirect(typeof slug === 'string' ? slug : '/')
}
