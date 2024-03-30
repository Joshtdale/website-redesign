
export function StudioLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className='bg-primary-black'>
        <body>
          {children}
        </body>
      </html>
    )
  }