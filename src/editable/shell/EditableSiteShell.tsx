'use client'

import type { ReactNode } from 'react'
import type { CSSProperties } from 'react'
import { EditableNavbar } from '@/editable/shell/EditableNavbar'
import { EditableFooter } from '@/editable/shell/EditableFooter'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export function EditableSiteShell({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div style={style} className={`${dc.shell.page} flex min-h-screen flex-col ${className}`}>
      <EditableNavbar />
      <div className="min-h-0 flex-1">{children}</div>
      <EditableFooter />
    </div>
  )
}
