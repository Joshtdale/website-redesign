import { PortableText } from "./PortableText"
import { Image } from './Image/index';
import { ContentBlock } from "./ContentBlock";

export const PageContent = (elements) => {
  console.log(elements.elements)
  return (
    <>
      {elements && elements.elements?.map((element) => {
        console.log(element._type)
        switch (element?._type) {
          case 'image':
            console.log(element)
            return (
              <div key={element._key} className={`prose ${element.customStyles ?? ""}`}>
                <Image {...element}/>
              </div>
            )
          case 'portableText':
            return (
              <div key={element._key} className={`prose ${element.customStyles ?? ""}`}>
                <PortableText
                  content={element.content}
                />
              </div>
            )
          case 'contentBlock':
            return (
              <>
                <ContentBlock
                  content={element}
                />
                </>
            )
        }
      })}
    </>
  )
}
