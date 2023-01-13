import useIsMobile from 'hooks/useIsMobile'
import React, { useState } from 'react'
import PDFViewer from './PDFViewer'

export default function PDFButton() {
  const isMobile = useIsMobile()
  const [isPDFActive, setIsPDFActive] = useState(false)

  if (isMobile)
    return (
      <a
        href="/katalog.pdf"
        className="block mt-8 px-8 py-4 rounded bg-yellow-500 text-white text-xl hover:bg-yellow-600 font-medium font-sans"
        target="blank">
        Kataloğu incele
      </a>
    )

  return (
    <>
      <button
        onClick={() => setIsPDFActive(true)}
        className="block mt-8 px-8 py-4 rounded bg-yellow-500 text-white text-xl hover:bg-yellow-600 font-medium font-sans">
        Kataloğu incele
      </button>
      {isPDFActive && <PDFViewer close={() => setIsPDFActive(false)} />}
    </>
  )
}
