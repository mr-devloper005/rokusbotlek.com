'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#0f2747', '--editable-footer-text': '#ffffff' } as CSSProperties
  const directoryLinks = globalContent.footer.columns[0]?.links || []
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-white/10 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-[4.5rem] w-[4.5rem] object-contain" />
            <span className="text-lg font-black tracking-[-0.04em]">{globalContent.site.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">{globalContent.footer.description}</p>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-white/45">{globalContent.footer.bottomNote}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">{globalContent.footer.columns[0]?.title || 'Directory'}</h3>
          <div className="mt-4 grid gap-2">
            {directoryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 text-sm font-bold text-white/75 hover:text-white">
                {item.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Account</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create listing', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-white/75 hover:text-white">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-white/75 hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold text-white/50">
        (c) {year} {globalContent.site.name}. All rights reserved.
      </div>
    </footer>
  )
}
