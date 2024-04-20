'use client'
import { Category } from '@/types/Category'
import { useEffect, useRef } from 'react'

interface Props {
  categories: Category[]
  handleChange: Function
}

export default function CategoryFilterBar({ categories, handleChange }: Props) {
  const catDropdownRef = useRef<HTMLDetailsElement | null>(null)
  const closeOnclickOutside = (e: globalThis.MouseEvent) => {
    const el = catDropdownRef.current
    if (el) {
      if (el && !el?.contains(e.target as Node)) {
        el.open = false
      }
    }
  }

  useEffect(() => {
    if (catDropdownRef.current) {
      window.addEventListener('click', (e) => {
        closeOnclickOutside(e)
      })
    }

    return window.removeEventListener('click', (e) => {
      closeOnclickOutside(e)
    })
  }, [])

  return (
    <section
      className={`filterBar mb-6 py-2 flex flex-row justify-end border-y-[1px] items-center`}
    >
      <div className="mr-4 font-bold">Filter: </div>
      <details
        ref={catDropdownRef}
        className="dropdown"
      >
        <summary className="m-1 btn">Categories</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {categories.map((cat) => {
            return (
              <li
                key={`filtercat-${cat._id}`}
                id={cat._id}
              >
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                      onChange={(e) => {
                        handleChange(cat, e.target.checked)
                      }}
                    />
                    <span className="label-text inline-block ml-2">
                      {cat.title}
                    </span>
                  </label>
                </div>
              </li>
            )
          })}
        </ul>
      </details>
    </section>
  )
}
