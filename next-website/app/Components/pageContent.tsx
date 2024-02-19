import { PortableText } from "./PortableText"

export const PageContent = (elements) => {
  console.log(elements.elements)
  return (
    <>
    {elements && elements.elements?.map((element) => {
  console.log(element._type)
      switch (element?._type) {
        case 'portableText': 
        return (
        <div key={element._key} className={`prose ${element.customStyles ?? ""}`}>
          <PortableText
            content={element.content}
          />
        </div>
        )
      }
    })}
    </>
  )
}
