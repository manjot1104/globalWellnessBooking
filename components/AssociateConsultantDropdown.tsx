'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { associateCities } from '@/data/associateConsultants'

export default function AssociateConsultantDropdown({ align = 'left' }: { align?: 'left' | 'right' }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto flex items-center justify-between gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-3 px-5 rounded-xl backdrop-blur-sm transition-all duration-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>Associate Consultant</span>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          className={`absolute top-full mt-2 py-2 bg-white rounded-xl shadow-xl border border-gray-100 z-20 overflow-hidden min-w-[220px] ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
          role="listbox"
        >
          {associateCities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/associate-consultants/${city.slug}`}
                className="block px-5 py-3 text-gray-800 font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {city.name}
                <span className="text-gray-400 text-sm font-normal ml-2">
                  ({city.consultants.length})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
