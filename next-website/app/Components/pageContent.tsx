const PageContent = (element) => {
    switch (element?._type) {
        case 'portableText': return <div key={element._key} className={`prose ${element.customStyles ?? ""}`}>
      <PortableText
        value={element.content}
      components={components}
      />
    </div>;
    }
}

export default PageContent