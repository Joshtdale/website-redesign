// import {sanityClient} from "./sitecore-migration/util/sanity";

// const pageData = await sanityClient.fetch(`*[_id == "87ef9a5b-6e98-40c9-be34-e7c41a7a7869"]{content}[0]`);

// const accordionData = pageData.content[0].content[0].content[1].content[3].sharedAccordionItems;

// const parseAddress = (addressString) => {
//   const parts = addressString.split(" ");

//   let zip = parts.pop();
//   let state = parts.pop();
//   let city = '';
//   let number = "";
//   let street = "";
//   let unitNo = "";

//   // Extract street number
//   for (let i = 0; i < parts.length; i++) {
//     if (!isNaN(parts[i][0])) {
//       number = parts[i];
//       parts.splice(i, 1);
//       break;
//     }
//   }

//   // Extract unit number
//   for (let i = 0; i < parts.length; i++) {
//     if (
//       parts[i].toLowerCase() === "suite" ||
//       parts[i].toLowerCase() === "unit"
//     ) {
//       unitNo = parts[i] + " " + parts[i + 1];
//       parts.splice(i, 2);
//       break;
//     } else if (parts[i][0] === "#") {
//       unitNo = parts[i];
//       parts.splice(i, 1);
//       break;
//     } else if (!isNaN(parts[i][0]) && (parts[1].includes('th') || parts[1].includes('rd'))) {
//       break;
//     } else if (!isNaN(parts[i][0])  && (parts[1].includes('th') || parts[1].includes('rd'))) {

//       unitNo = parts[i];
//       parts.splice(i, 1);
//       break;
//     }
//   }

//   // Extract street name and city
//   let foundStreet = false;
//   for (let i = 0; i < parts.length; i++) {
//     const word = parts[i].replaceAll(',', '').replaceAll('.', '');

//     if (word.toLowerCase().replaceAll('.', '') === 'po' && parts[i + 1]?.toLowerCase() === 'box') {
//       street = 'PO Box';
//       parts.splice(i, 2);
//       unitNo = number
//       number = ''
//       city = parts[0]
//       break;

//     }
//     if (!foundStreet) {
//       street += word + ' ';
//       const suffixes = ["rd", "dr", "ave", "st", "hwy", "fl", "floor", "way", "blvd", "plaza", "court", "drive", "lane", "circle", "road", "terrace", "pike", "parkway", "street", "avenue", "highway"];
//       if (suffixes.includes(word.toLowerCase()) && !suffixes.includes(parts[i + 1]) ) {
//         foundStreet = true;
//       }
//     } else if (word.includes('#')){
//       unitNo = word
//     } else if (!state && /^[A-Za-z]{2}$/.test(word)) { // Check if the next part is a state abbreviation
//       state = word.toUpperCase(); // Assign it as state abbreviation
//       break; // Exit the loop as we've found the state abbreviation
//     } else if (i === parts.length - 1) { // If it's the last word in the address, consider it as part of the city
//       city += word + ' ';
//       break; // Exit the loop if we've added the last word to the city
//     } else {
//       city += word + ' ';
//     }
//   }
//   street = street.trim();
//   city = city.trim();

//   return {
//     _key: generateRandomString(),
//     optionalTitle: '',
//     number: number ? number.replaceAll(',', '') : '',
//     street: street ? street.replaceAll(',', '') : '',
//     unitNo: unitNo ? unitNo.replaceAll(',', '') : '',
//     city: city ? city.replaceAll(',', '') : '',
//     state: state ? state.replaceAll(',', '') : '',
//     zip: zip ? zip.replaceAll(',', '') : '',
//   };
// };

// const findMemberCategory = (ref: string) => {
//   const categories = [
//     {
//       "_id": "067eb126-3620-4e8a-bc0c-115ad17dcac3",
//       "title": "OTHER AFFILIATE",
//     },
//     {
//       "_id": "30956313-3d13-4dd8-8f1d-6c8b3f93805a",
//       "title": "STATE ASSOCIATION"
//     },
//     {
//       "_id": "4a69e418-338b-47b3-baeb-cdfef6edc184",
//       "title": "ASSOCIATE MEMBERS"
//     },
//     {
//       "_id": "6d698fa4-a4ae-4d5d-a13a-b8d7dd802d90",
//       "title": "NATIONAL ASSOCIATION"
//     },
//     {
//       "_id": "bb350500-45f5-4ada-b10f-b201293177aa",
//       "title": "NATIONAL AFFILIATE"
//     },
//     {
//       "_id": "d71a5c97-0b34-4dd4-97a5-bda230918c4a",
//       "title": "PROFESSIONAL LEAGUE"
//     },
//     {
//       "_id": "da02dae2-f9d1-416a-b8d3-1b382a969ce8",
//       "title": "PRO LEAGUE STANDARDS"
//     },
//     {
//       "_id": "dce5c334-b755-41eb-912b-175e3ce902ae",
//       "title": "DISABLED SERVICE ORG"
//     }
//   ]
//   const category = categories.find(category => category.title === ref);
//   return category ? category._id : undefined;
// }

// const parseContent = content => {
//   const restructuredItems = [];
//   content.forEach(item => {
//     const newItem = {
//       _key: generateRandomString(),
//       name: item.header,
//       organizationMemberCategory: {
//         _ref: findMemberCategory(item.subheader),
//         _type: 'reference'
//       },
//       organizationLeaders: [],
//       logo: {},
//       addresses: [],
//       websites: [],
//       emailAddresses: [],
//       phoneNumbers: []
//     };
//     const extractedData = [];
//     let currentTitle = null;
//     item.content.forEach(contentBlock => {
//       if (contentBlock.title === 'Content - Block') {
//         contentBlock.content.forEach(subContent => {
//           if (subContent._type === 'portableText') {
//             subContent?.content?.forEach(content => {// The problem was here. Added an extra for each for multiple portableText blocks
//               content.children.forEach(item => {
//                 if (item.text === item.text.toUpperCase()) {
//                   // All caps text, so this is a title
//                   currentTitle = item.text;
//                 } else {
//                   // Not all caps, so this is a name
//                   extractedData.push({
//                     _key: generateRandomString(),
//                     title: currentTitle,
//                     name: item.text.trim() // Remove leading/trailing whitespace
//                   });
//                 }
//               })// the array of titles and names is here
//             })
//             newItem.organizationLeaders = extractedData
//           } else if (subContent._type === 'contentBlock' && subContent.title === 'Image - Block') {
//             // Extracting logo from image content
//             //     _type: 'image',
//             //     alt: (alt === undefined || alt.length === 0) ? 'Image' : alt,
//             //     asset: {
//             //       _type: 'reference',
//             //       _ref: ref,
//             //     },
//             newItem.logo = subContent.content?.[0]?.asset ?
//               {
//                 _type: 'image',
//                 asset: subContent.content?.[0]?.asset,
//               } :
//               undefined;
//           }
//         });
//       } else if (contentBlock.title === 'Contact Us') {
//         contentBlock.contacts.forEach(contact => {
//           if (contact.heading === 'WEBSITE') {
//             const website = contact.linkText.map(text => text.children.map(child => child.text).join('')).join('');
//             newItem.websites.push({
//               _key: generateRandomString(),
//               websiteId: '',
//               website: website
//             })
//           } else if (contact.heading === 'EMAIL') {
//             const email = contact.linkText.map(text => text.children.map(child => child.text).join('')).join('');
//             newItem.emailAddresses.push({
//               _key: generateRandomString(),
//               emailId: '',
//               email: email,
//             })
//           } else if (contact.heading === 'PHONE') {
//             const phoneNumber = contact.linkText.map(text => text.children.map(child => child.text).join('')).join('');
//             newItem.phoneNumbers.push({
//               _key: generateRandomString(),
//               phoneId: '',
//               phone: phoneNumber
//             })
//           } else if (contact.heading === 'MAILING ADDRESS') {
//             const address = contact.linkText.map(text => text.children.map(child => child.text).join('')).join(' ');
//             newItem.addresses.push(parseAddress(address))
//           }
//         });
//       }
//     });
//     restructuredItems.push(newItem);
//   });

//   return restructuredItems;
// }

// const generateRandomString = () => {
//   let result = '';
//   const length = 32;
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
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
