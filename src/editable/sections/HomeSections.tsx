import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, MapPin, Search, Star } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function categoryOf(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category) || post.tags?.[0] || 'Local business'
}

function locationOf(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return [content.city, content.location, content.address].find((value): value is string => typeof value === 'string' && Boolean(value.trim())) || 'Service area listed'
}

function BusinessCard({ post, href, featured = false }: { post: SitePost; href: string; featured?: boolean }) {
  return (
    <Link href={href} className={`group block overflow-hidden rounded-lg border border-[var(--editable-border)] bg-white shadow-[0_14px_42px_rgba(37,99,200,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_58px_rgba(37,99,200,0.14)] ${featured ? 'md:col-span-2' : ''}`}>
      <div className={featured ? 'grid md:grid-cols-[0.95fr_1.05fr]' : ''}>
        <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${featured ? 'min-h-[280px]' : 'aspect-[16/10]'}`}>
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#07152e] shadow-sm">{categoryOf(post)}</span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="inline-flex min-w-0 items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#2563c8]">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">{locationOf(post)}</span>
            </p>
            <span className="inline-flex shrink-0 items-center gap-1 text-sm font-black text-[#07152e]"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.8</span>
          </div>
          <h3 className={`${featured ? 'text-3xl' : 'text-xl'} mt-4 line-clamp-3 font-black leading-tight tracking-[-0.04em] text-[#07152e]`}>{post.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{getEditableExcerpt(post, featured ? 180 : 125)}</p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#eaf2ff] px-4 py-2 text-sm font-black text-[#2563c8]">
            View business <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-[var(--editable-border)] bg-white px-5 py-4 text-center shadow-sm">
      <p className="text-3xl font-black tracking-tight text-[#07152e]">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
    </div>
  )
}

export function EditableHomeHero({ primaryRoute }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  return (
    <section className="relative overflow-hidden bg-[#07152e] text-white">
      <img src="/Hero-home.jpg?height=1100&width=1800" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-100">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">{heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mx-auto mt-9 grid max-w-4xl gap-3 rounded-lg bg-white p-3 text-[#07152e] shadow-[0_22px_70px_rgba(0,0,0,0.25)] md:grid-cols-[1fr_1fr_auto]">
            <label className="flex min-h-14 items-center gap-3 rounded-md border border-blue-100 bg-[#f8fbff] px-4">
              <Search className="h-5 w-5 text-[#2563c8]" />
              <input name="q" placeholder="Business or service" className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-slate-500" />
            </label>
            <label className="flex min-h-14 items-center gap-3 rounded-md border border-blue-100 bg-[#f8fbff] px-4">
              <MapPin className="h-5 w-5 text-[#2563c8]" />
              <input name="category" placeholder="Category or location" className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-slate-500" />
            </label>
            <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#2563c8] px-7 text-sm font-black text-white">
              <Search className="h-4 w-4" /> Search
            </button>
          </form>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href={primaryRoute} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-black text-[#07152e]">Browse listings <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/create" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-black text-white">List your business</Link>
          </div>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {['Verified provider profiles', 'Location and service filters', 'Direct contact from detail pages'].map((item) => (
            <div key={item} className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white/84 backdrop-blur">
              <CheckCircle2 className="mr-2 inline h-4 w-4 text-blue-200" /> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  if (!railPosts.length) return null
  return (
    <section className={`${pal.warmBg} border-t border-[var(--editable-border)]`}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Featured providers</p>
            <h2 className={dc.type.sectionTitle}>Popular businesses to explore</h2>
          </div>
          <Link href={primaryRoute} className="hidden text-sm font-semibold text-[#2563c8] hover:underline sm:inline">See all</Link>
        </div>
        <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {railPosts.map((post) => (
            <div key={post.id || post.slug} className="w-[285px] shrink-0 snap-start">
              <BusinessCard post={post} href={postHref(primaryTask, post, primaryRoute)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 7)
  if (!featured.length) return null
  return (
    <section className={pal.lavenderBg}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <p className={`${dc.type.eyebrow} text-center ${pal.accentText}`}>Directory cards</p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Business listings worth a closer look</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-600">Compare providers by service category, location, contact options, and the details that help customers choose.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((post, index) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} featured={index === 0} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(7)
  const picks = sectionPosts.slice(0, 4)
  return (
    <section className={pal.grayBg}>
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Better browsing</p>
          <h2 className={dc.type.sectionTitle}>Search across services, locations, and categories.</h2>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${pal.mutedText}`}>Find the right provider faster with clean cards, concise service summaries, and direct routes to contact details.</p>
          <form action="/search" className="mt-8 flex max-w-md rounded-lg border border-[var(--editable-border)] bg-white p-2 shadow-sm">
            <input name="q" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button className="inline-flex items-center gap-2 rounded-md bg-[#2563c8] px-5 py-3 text-sm font-semibold text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        <div className="grid gap-4">
          {picks.map((post) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="grid gap-4 rounded-lg border border-[var(--editable-border)] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:grid-cols-[150px_minmax(0,1fr)]">
              <div className="relative aspect-[5/4] overflow-hidden rounded-md bg-[var(--slot4-media-bg)] sm:aspect-square">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="min-w-0 py-2 pr-2">
                <p className={`text-[11px] font-extrabold uppercase tracking-[0.2em] ${pal.accentText}`}>{categoryOf(post)}</p>
                <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]">{post.title}</h3>
                <p className={`mt-3 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getEditableExcerpt(post, 145)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-4 px-4 pb-16 sm:grid-cols-3 sm:px-6 lg:px-8">
        <Stat value="280+" label="Searchable listings" />
        <Stat value="48" label="Service categories" />
        <Stat value="24/7" label="Directory access" />
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className={`${pal.panelBg} scroll-mt-24 overflow-hidden`}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Ready to connect?</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">List a business or find the provider you need.</h2>
          <p className={`mt-4 text-lg ${pal.mutedText}`}>Use the directory to compare businesses, review service details, and move directly to a call, email, or website.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/create" className={dc.button.primary}>Create listing</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
