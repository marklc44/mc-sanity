'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import classNames from 'classnames'
import heroStyles from '@/app/_styles/HomeHero.module.css'

gsap.registerPlugin(useGSAP)

export default function AnimatedHomeHero() {
  // refs for all elements
  const container = useRef(null)

  const objKeys = [
    'softwareEngineer',
    'dogDad',
    'consultant',
    'businessOwner',
    'neuroscienceEnthusiast',
    '...rest',
  ]

  const editorBaseTxtColor = '#5DA9E9'
  const editorVarTxtColor = '#CAE9FF'
  const splitCharsPlusComma = (str: string) => {
    const chars = str.split('')
    return [...chars, ',']
  }

  useGSAP(
    (context, contextSafe) => {
      const mRight = '0.5em'
      const cursorBlinkRate = 0.75
      const cursorRepeat = 1
      const immediateAppearance = 0.05

      let tl = gsap.timeline()
      tl.to('.nameSpacer', { width: 0, duration: 0.25, delay: 0.25 })
      tl.to(
        '#full-name',
        { transform: 'scale(1)', color: editorVarTxtColor, duration: 0.5 },
        '>'
      )
      tl.to(
        container.current,
        {
          textAlign: 'left',
          duration: 0.5,
        },
        '<'
      )
      tl.to(
        container.current,
        {
          background: '#051014',
          color: 'white',
          textAlign: 'left',
          padding: '32px',
          duration: 0.5,
        },
        '<'
      )
      tl.to(
        '#cursor',
        {
          display: 'inline-block',
          color: 'white',
          duration: immediateAppearance,
        },
        '>'
      )
      tl.to(
        '#cursor',
        { opacity: 0, duration: cursorBlinkRate, repeat: cursorRepeat },
        '>'
      )
      tl.to('#cursor', { opacity: 1, duration: immediateAppearance }, '>')
      tl.to(
        '#const',
        {
          opacity: '1',
          marginRight: mRight,
          width: 'auto',
          duration: immediateAppearance,
        },
        '>'
      )
      tl.to(
        '#cursor',
        { opacity: 0, duration: cursorBlinkRate, repeat: cursorRepeat },
        '>'
      )
      tl.to('#cursor', { opacity: 1, duration: immediateAppearance }, '>')
      tl.to(
        '#open-paren',
        {
          opacity: '1',
          marginRight: mRight,
          width: 'auto',
          duration: immediateAppearance,
        },
        '>'
      )
      tl.to(
        '#close-paren',
        {
          opacity: '1',
          marginRight: mRight,
          width: 'auto',
          duration: immediateAppearance,
        },
        '>'
      )
      tl.to(
        '#cursor',
        { opacity: 0, duration: cursorBlinkRate, repeat: cursorRepeat },
        '>'
      )
      tl.to('#cursor', { opacity: 1, duration: immediateAppearance }, '>')
      tl.to(
        '#equals',
        {
          opacity: '1',
          marginRight: mRight,
          width: 'auto',
          duration: immediateAppearance,
        },
        '>'
      )
      tl.to(
        '#cursor',
        { opacity: 0, duration: cursorBlinkRate, repeat: cursorRepeat },
        '>'
      )
      tl.to('#cursor', { display: 'none', duration: immediateAppearance }, '>')
      tl.to(
        '#items-container',
        { display: 'block', duration: immediateAppearance },
        '>'
      )
      objKeys.forEach((key, idx) => {
        const chars = splitCharsPlusComma(key)
        tl.to(
          `#key-${idx}`,
          { display: 'block', duration: immediateAppearance },
          '>'
        )
        tl.to(
          `#cursor${idx}`,
          { display: 'inline-block', duration: immediateAppearance },
          '<'
        )
        tl.to(
          `#cursor${idx}`,
          { opacity: 0, duration: cursorBlinkRate, repeat: cursorRepeat },
          '>'
        )
        tl.to(
          `#cursor${idx}`,
          { opacity: 1, duration: immediateAppearance },
          '>'
        )
        chars.forEach((char, charIdx) => {
          tl.to(
            `#key-${idx}-char-${charIdx}`,
            { display: 'inline-block', duration: 0.05 },
            '>'
          )
        })
        tl.to(
          `#cursor${idx}`,
          { opacity: 1, duration: immediateAppearance },
          '>'
        )
        if (idx !== objKeys.length - 1) {
          tl.to(
            `#cursor${idx}`,
            { opacity: 0, duration: immediateAppearance },
            '>'
          )
        } else {
          tl.to(
            `#cursor${idx}`,
            { opacity: 0, duration: cursorBlinkRate, repeat: -1 },
            '>'
          )
        }
      })
    },
    { scope: container }
  )

  const containerClasses = classNames(
    'animationContainer text-[1.1em] lg:text-4xl leading-[24px] lg:leading-[48px] min-h-[236px] w-full',
    heroStyles.codeFont
  )

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-4 py-12 pt-24 pb-6 lg:py-24">
      <div
        ref={container}
        id="hero-animation-container"
        className={containerClasses}
      >
        <span
          style={{
            opacity: 0,
            width: 0,
            color: editorBaseTxtColor,
          }}
          id="const"
        >
          const
        </span>
        <span
          style={{
            opacity: 0,
            width: 0,
            color: editorBaseTxtColor,
          }}
          id="open-paren"
        >{`{`}</span>

        <div
          id="items-container"
          style={{
            display: 'none',
          }}
        >
          {objKeys.map((key, idx) => {
            const chars = splitCharsPlusComma(key)

            return (
              <div
                className={heroStyles.objKey}
                key={key}
                id={`key-${idx}`}
                style={{
                  display: 'none',
                  color: editorVarTxtColor,
                }}
              >
                {chars.map((char, charIdx) => {
                  return (
                    <span
                      key={`key-${idx}-char-${charIdx}`}
                      id={`key-${idx}-char-${charIdx}`}
                      style={{
                        display: 'none',
                      }}
                    >
                      {char}
                    </span>
                  )
                })}
                <span
                  id={`cursor${idx}`}
                  className="font-bold text-white"
                  style={{
                    display: 'none',
                    opacity: 1,
                  }}
                >
                  |
                </span>
              </div>
            )
          })}
        </div>

        <span
          style={{
            opacity: 0,
            width: 0,
            color: editorBaseTxtColor,
          }}
          id="close-paren"
        >{`}`}</span>
        <span
          style={{
            opacity: 0,
            width: 0,
            color: editorBaseTxtColor,
          }}
          id="equals"
        >{`=`}</span>
        <span
          id="cursor"
          className="font-bold text-white"
          style={{
            display: 'none',
            opacity: 1,
          }}
        >
          |
        </span>
        <span
          style={{
            transformOrigin: 'left bottom',
            transform: 'scale(2)',
          }}
          id="full-name"
        >
          <span id="firstname">Mark</span>
          <span
            style={{
              width: '0.5em',
            }}
            className="nameSpacer"
          ></span>
          <span id="lastname">Centoni</span>
        </span>
      </div>
    </div>
  )
}
