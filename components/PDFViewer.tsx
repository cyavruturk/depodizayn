import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'

interface Props {
  close(): void
}
export default function PDFViewer({ close }: Props) {
  const [totalPages, setTotalPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)

  return (
    <div
      onClick={close}
      className="fixed z-50 left-0 top-0 right-0 bottom-0 bg-black/75 flex items-center justify-center flex-col">
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-8 bg-white shadow-lg">
        <div className="flex justify-end">
          <button onClick={close} className="mb-4">
            Kapat
          </button>
        </div>
        <Document
          file="/katalog.pdf"
          loading="Katalog yükleniyor..."
          onLoadError={console.error}
          onLoadSuccess={({ numPages }) => setTotalPages(numPages)}>
          <Page pageNumber={pageNumber} />
        </Document>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            disabled={pageNumber === 1}
            onClick={() => setPageNumber((v) => v - 1)}
            className="px-4 py-2 rounded bg-yellow-500 text-white disabled:bg-gray-200">
            Geri
          </button>
          <div className="w-16 text-center">
            {pageNumber} / {totalPages}
          </div>
          <button
            disabled={pageNumber === totalPages}
            onClick={() => setPageNumber((v) => v + 1)}
            className="px-4 py-2 rounded bg-yellow-500 text-white disabled:bg-gray-200">
            İleri
          </button>
        </div>
      </div>
    </div>
  )
}
