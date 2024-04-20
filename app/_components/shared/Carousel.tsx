'use client'
import { Image as SanityImageType } from 'sanity'
import { useState, useRef, useMemo, useEffect } from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

interface Props {
  items: SanityImageType[]
}
export default function Carousel({ items }: Props) {
  const [activeImage, setActiveImage] = useState<SanityImageType>(items[0])
  const activeImageRef = useRef(null)
  const cleanItems = useMemo(
    () => items.filter((item) => item.asset?._ref),
    [items]
  )
  console.log('alt: ', items[0])

  /**
   *
   * For transitions, we want some animation while next image is loading
   */

  const handleTriggerClick = (e: any, item: SanityImageType) => {
    e.preventDefault()
    // handle transition
    setActiveImage(item)
    // handle transition
  }

  return (
    <>
      <div className="w-full">
        <div
          id={`item-${activeImage?.asset?._ref}`}
          className="w-full h-[400px] overflow-hidden bg-slate-50"
          ref={activeImageRef}
          style={{
            backgroundImage: `url(${urlForImage(activeImage)
              .height(2000)
              .fit('max')
              .auto('format')
              .url()})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            // transition: 'opacity 1s ease-in-out',
          }}
        ></div>
        <p className="font-bold text-sm text-center mt-2">
          {activeImage?.alt as string}
        </p>
      </div>
      <div className="flex flex-row gap-3 items-center content-center justify-center">
        {cleanItems.length > 1 &&
          cleanItems.map((item, idx) => {
            return (
              <div
                key={`item-trigger-${item.asset?._ref}`}
                className="btn btn-xs cursor-pointer width-[80px] bg-transparent hover:bg-transparent border-4 h-auto p-0 overflow-hidden"
                onClick={(e) => handleTriggerClick(e, item)}
                style={{
                  borderColor:
                    item.asset?._ref === activeImage.asset?._ref
                      ? `#ec058e`
                      : `#f1f5f9`,
                }}
              >
                <Image
                  src={urlForImage(item).width(60).height(60).fit('max').url()}
                  width={60}
                  height={60}
                  alt={`${item.alt} thumbnail` || 'thumbnail'}
                />
              </div>
            )
          })}
      </div>
    </>
  )
}
