// import {sanityClient} from "./sitecore-migration/util/sanity";

// const pageData = await sanityClient.fetch(`*[_id == "87ef9a5b-6e98-40c9-be34-e7c41a7a7869"]{content}[0]`);

// const accordionData = pageData.content[0].content[0].content[1].content[3].sharedAccordionItems;



// const parseContent = content => {
//   const restructuredItems = [];

//
//   return restructuredItems;
// }


// for (const orgData of accordionData) {
//   const existingId = await sanityClient.fetch(`*[_type == "organizationMember" && name == $name]{_id}[0]`, {
//     name: orgData.header,
//   });

//   const parsedData = parseContent([orgData])?.[0];
//   if (!parsedData) {
//     console.error('Could not parse data for', orgData);
//     continue;
//   }

//   const document = {
//     ...(existingId ? {_id: existingId._id} : {}),
//     _type: 'organizationMember',
//     ...parsedData,
//   }

//   console.log(existingId ? 'updating' : 'creating', orgData.header);

//   existingId ?
//     await sanityClient.createOrReplace(document) :
//     await sanityClient.create(document);
// }
