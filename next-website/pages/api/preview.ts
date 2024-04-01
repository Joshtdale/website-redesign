// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler (
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const slug = req.query.slug;
//     res.setDraftMode({ enable: true })
//     res.writeHead(307, { Location: typeof slug === 'string' ? slug : '/' })
//     res.end()
//     // res.setPreviewData({});
//     // res.redirect(typeof slug === 'string' ? slug : '/')
// }

// export default function handler(req, res) {
//     res.setPreviewData({})
//     res.end('Preview mode enabled')
//   }