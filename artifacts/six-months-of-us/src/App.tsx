import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronUp,
  Gift,
  Heart,
  LockKeyhole,
  Mail,
  Menu,
  Pause,
  Play,
  RotateCcw,
  Shuffle,
  Sparkles,
  Ticket,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

import handPhoto from '@assets/,bkhfjdjd_1788273496727.jpeg';
import mirrorDress from '@assets/bkjbkjbkjbkb_1788273496727.jpeg';
import decoratedMirror from '@assets/chcycytf_1788273496728.jpeg';
import firstKiss from '@assets/gftyf7u_1788273496729.jpeg';
import sareePortrait from '@assets/ggigig_1788273496729.jpeg';
import videoOne from '@assets/hgigighubk_1788273496730.mp4';
import framedSaree from '@assets/hvghv_1788273496730.jpeg';
import videoTwo from '@assets/hvuvuvuv_1788273447934.mp4';
import softKiss from '@assets/igigigfuf_1788273516888.jpeg';
import sillyKiss from '@assets/jbkgkfkf_1788273516889.jpeg';
import heartKiss from '@assets/jgigig_1788273516890.jpeg';
import closeKiss from '@assets/jgyf_1788273516891.jpeg';
import tinyKeepsake from '@assets/jhfjfkhgkgf_1788273516891.jpeg';
import videoThree from '@assets/jhg_1788273516892.mp4';
import tealKiss from '@assets/jhgjfjff_1788273516892.jpeg';
import coupleMirror from '@assets/WhatsApp_Image_2026-09-01_at_6.58.30_PM_1788273535868.jpeg';
import contactSheet from '@assets/WhatsApp_Image_2026-09-01_at_6.58.31_PM_1788273535868.jpeg';
import nightMemory from '@assets/WhatsApp_Image_2026-09-01_at_6.58.32_PM_1788273535869.jpeg';

const queryClient = new QueryClient();

type PhotoMedia = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  note: string;
  className: string;
  accent: string;
};

const siteConfig = {
  accessCode: '0203',
  names: 'you + me',
  title: 'Six Months of Us',
  subtitle: 'a tiny archive of a very big feeling',
  date: '06.06.24 — 06.12.24',
  note: 'There are six months in here. The loud ones, the soft ones, and all the ordinary minutes that somehow became our favourite ones.',
};

const photos: PhotoMedia[] = [
  { id: 'hand', src: handPhoto, alt: 'A hand with a ring reaching into the frame', caption: 'the hand that found mine', note: 'Proof that the smallest details can carry an entire story.', className: 'photo-tall', accent: 'coral' },
  { id: 'dress', src: mirrorDress, alt: 'Solo mirror portrait in a cream and pink dress', caption: 'before the plot twist', note: 'You, looking lovely and pretending this was just a normal mirror picture.', className: 'photo-medium', accent: 'mustard' },
  { id: 'decorated', src: decoratedMirror, alt: 'Couple mirror selfie with hand-drawn border', caption: 'our first little world', note: 'Two people, one mirror, and a suspicious amount of peace signs.', className: 'photo-large', accent: 'teal' },
  { id: 'first-kiss', src: firstKiss, alt: 'Couple sharing a kiss in a mirror selfie', caption: 'the beginning of a habit', note: 'The camera roll has quietly confirmed that kissing became a recurring theme.', className: 'photo-large', accent: 'lavender' },
  { id: 'saree', src: sareePortrait, alt: 'Solo portrait wearing a rust saree', caption: 'main character, obviously', note: 'The saree. The mirror. The person I still cannot believe I get to call mine.', className: 'photo-tall', accent: 'rust' },
  { id: 'soft-kiss', src: softKiss, alt: 'Soft close-up couple portrait', caption: 'close enough', note: 'Somewhere between a photograph and a held breath.', className: 'photo-medium', accent: 'blue' },
  { id: 'silly', src: sillyKiss, alt: 'Playful close-up kiss selfie', caption: 'zero dignity, full commitment', note: 'A serious document from a very unserious pair.', className: 'photo-tall', accent: 'pink' },
  { id: 'heart', src: heartKiss, alt: 'Kiss selfie with pink heart overlays', caption: 'the evidence', note: 'The hearts were added later. The feeling was not.', className: 'photo-medium', accent: 'coral' },
  { id: 'close', src: closeKiss, alt: 'Close affectionate kiss photograph', caption: 'the world went quiet', note: 'A tiny, blurry, perfect little moment.', className: 'photo-medium', accent: 'mustard' },
  { id: 'keepsake', src: tinyKeepsake, alt: 'Handmade date keepsake held in two hands', caption: 'made by hand', note: 'A small handmade thing with a very large meaning.', className: 'photo-medium', accent: 'teal' },
  { id: 'teal', src: tealKiss, alt: 'Close affectionate portrait in a teal top', caption: 'soft launch of forever', note: 'The kind of closeness that makes a room feel warmer.', className: 'photo-tall', accent: 'teal' },
  { id: 'couple-mirror', src: coupleMirror, alt: 'Couple mirror selfie with a handmade card', caption: 'still us', note: 'Same mirror, new memories, exactly the right amount of chaos.', className: 'photo-large', accent: 'rust' },
  { id: 'contact', src: contactSheet, alt: 'Black and white contact sheet of couple memories', caption: 'proof sheet', note: 'Every frame says something slightly different. All of them say us.', className: 'photo-tall', accent: 'ink' },
  { id: 'night', src: nightMemory, alt: 'Nighttime couple memory', caption: 'after dark', note: 'The late-night chapter, where everything felt like a secret.', className: 'photo-medium', accent: 'blue' },
];

type VideoMemory = { id: string; src: string; poster: string; title: string; eyebrow: string; caption: string };
const videos: VideoMemory[] = [
  { id: 'clip-one', src: videoOne, poster: decoratedMirror, title: 'the little in-between bits', eyebrow: 'moving memory / 01', caption: 'Not a grand gesture. Just the tiny proof that we were there.' },
  { id: 'clip-two', src: videoTwo, poster: coupleMirror, title: 'a day worth replaying', eyebrow: 'moving memory / 02', caption: 'Some days deserve a replay button.' },
  { id: 'clip-three', src: videoThree, poster: tealKiss, title: 'stay a little longer', eyebrow: 'moving memory / 03', caption: 'For when a still photo is not quite enough.' },
];

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal delay-${delay} ${className}`}>{children}</div>;
}

function SectionHeading({ kicker, title, copy, light = false }: { kicker: string; title: ReactNode; copy?: string; light?: boolean }) {
  return (
    <div className={`max-w-3xl ${light ? 'text-[#f8edda]' : ''}`}>
      <p className="font-mono-display text-[10px] uppercase tracking-[.28em] opacity-65">{kicker}</p>
      <h2 className="font-display mt-4 text-4xl leading-[.98] sm:text-6xl">{title}</h2>
      {copy && <p className="mt-5 max-w-xl text-sm leading-7 opacity-75 sm:text-base">{copy}</p>}
    </div>
  );
}

function PhotoTile({ photo, index, liked, onOpen, onLike }: { photo: PhotoMedia; index: number; liked: boolean; onOpen: () => void; onLike: () => void }) {
  const style = { ['--tilt' as string]: `${index % 2 === 0 ? -1.1 : 1.2}deg` } as CSSProperties;
  return (
    <article className={`photo-card ${photo.className} reveal ${index % 4 === 1 ? 'delay-1' : index % 4 === 2 ? 'delay-2' : ''}`} style={style} data-testid={`card-memory-${photo.id}`}>
      <button type="button" className="absolute inset-0 z-10 text-left" onClick={onOpen} data-testid={`button-open-memory-${photo.id}`} aria-label={`Open ${photo.caption}`}>
        <img src={photo.src} alt={photo.alt} loading={index > 2 ? 'lazy' : 'eager'} />
        <span className="photo-shade absolute inset-0 bg-[#321e29]/35" />
      </button>
      <span className={`tape tape-${photo.accent}`} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between bg-gradient-to-t from-[#321e29]/75 via-[#321e29]/10 to-transparent p-4 pt-14 text-[#fff7eb]">
        <div>
          <p className="font-mono-display text-[9px] uppercase tracking-[.18em] opacity-75">{String(index + 1).padStart(2, '0')} / memory</p>
          <p className="mt-1 font-display text-xl">{photo.caption}</p>
        </div>
        <button type="button" className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-[#fff7eb]/45 bg-[#321e29]/20" onClick={(event) => { event.stopPropagation(); onLike(); }} data-testid={`button-like-memory-${photo.id}`} aria-label={liked ? `Unlike ${photo.caption}` : `Like ${photo.caption}`}>
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-[#ffb2a9]' : ''} />
        </button>
      </div>
    </article>
  );
}

function VideoMemoryCard({ video }: { video: VideoMemory }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    if (!ref.current) return;
    if (ref.current.paused) {
      void ref.current.play();
      setPlaying(true);
    } else {
      ref.current.pause();
      setPlaying(false);
    }
  };
  return (
    <article className="video-shell overflow-hidden rounded-[1.4rem] border border-[#f8edda]/15 shadow-[0_18px_40px_rgba(26,17,22,.22)]" data-testid={`card-video-${video.id}`}>
      <div className="relative">
        <video ref={ref} src={video.src} poster={video.poster} muted={muted} playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} className="w-full" aria-label={video.title} />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-[#f8edda]">
          <span className="rounded-full border border-[#f8edda]/30 bg-[#261b22]/45 px-3 py-1 font-mono-display text-[9px] uppercase tracking-[.18em]">{video.eyebrow}</span>
          <button type="button" className="grid h-9 w-9 place-items-center rounded-full border border-[#f8edda]/30 bg-[#261b22]/45" onClick={() => setMuted(!muted)} data-testid={`button-mute-${video.id}`} aria-label={muted ? 'Unmute video' : 'Mute video'}>
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
        <button type="button" onClick={togglePlay} className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#f8edda] text-[#321e29] shadow-lg transition-transform hover:scale-105" data-testid={`button-play-${video.id}`} aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}>
          {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>
      </div>
      <div className="p-5 text-[#f8edda] sm:p-6">
        <h3 className="font-display text-2xl">{video.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#f8edda]/65">{video.caption}</p>
      </div>
    </article>
  );
}

function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState('');
  const [wrong, setWrong] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (code === siteConfig.accessCode) onUnlock();
    else { setWrong(true); setCode(''); window.setTimeout(() => setWrong(false), 1800); }
  };
  return (
    <main className="paper-grain flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#321e29] px-5 py-10 text-[#f8edda]">
      <div className="absolute left-[8%] top-[12%] font-display text-5xl text-[#ffb2a9] opacity-80">✶</div>
      <div className="absolute bottom-[15%] right-[10%] font-display text-7xl text-[#e8b45c] opacity-80">♡</div>
      <div className="relative w-full max-w-4xl">
        <div className="mb-10 flex items-center justify-between font-mono-display text-[10px] uppercase tracking-[.25em] text-[#f8edda]/55">
          <span>private archive / 01</span><span>for two eyes only</span>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-7 flex items-center gap-3 text-[#f5bdc0]"><LockKeyhole size={16} /><span className="font-mono-display text-[10px] uppercase tracking-[.22em]">a secret is waiting</span></div>
            <h1 className="font-display text-[clamp(4.5rem,12vw,9rem)] leading-[.78] tracking-[-.06em]">Six<br /><em className="text-[#ffb2a9]">Months</em><br />of Us</h1>
            <p className="mt-9 max-w-md font-display text-xl leading-snug text-[#f8edda]/75">A small, slightly silly love letter made out of the moments that made us.</p>
            <p className="mt-8 font-mono-display text-[10px] uppercase tracking-[.2em] text-[#f8edda]/45">{siteConfig.date}</p>
          </div>
          <form onSubmit={submit} className="relative rounded-[1.5rem] border border-[#f8edda]/15 bg-[#f8edda]/[.07] p-6 backdrop-blur-sm sm:p-8" data-testid="form-unlock">
            <span className="tape -top-3 right-5 rotate-6" aria-hidden="true" />
            <p className="font-mono-display text-[10px] uppercase tracking-[.2em] text-[#f8edda]/55">enter our little code</p>
            <p className="mt-3 font-display text-2xl">What date started it all?</p>
            <label htmlFor="access-code" className="sr-only">Private access code</label>
            <input id="access-code" value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 4))} inputMode="numeric" autoComplete="off" placeholder="••••" className={`mt-7 w-full border-b bg-transparent py-3 text-center font-mono-display text-3xl tracking-[.35em] outline-none placeholder:text-[#f8edda]/20 ${wrong ? 'border-[#ff8e8e] text-[#ffb2a9]' : 'border-[#f8edda]/35 focus:border-[#ffb2a9]'}`} data-testid="input-access-code" />
            <button type="submit" className="mt-7 flex w-full items-center justify-between rounded-full bg-[#f8edda] px-5 py-3 text-left text-sm font-semibold text-[#321e29] transition-transform hover:-translate-y-0.5" data-testid="button-unlock">
              <span>{wrong ? 'not quite — try again' : 'open the archive'}</span><ArrowRight size={16} />
            </button>
            <p className="mt-5 text-center font-mono-display text-[9px] uppercase tracking-[.15em] text-[#f8edda]/35">hint: the date on the tiny keepsake</p>
          </form>
        </div>
        <p className="mt-16 text-center font-mono-display text-[9px] uppercase tracking-[.2em] text-[#f8edda]/35">scroll slowly / there is no rush</p>
      </div>
    </main>
  );
}

function UnlockMoment({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="modal-backdrop fixed inset-0 z-50 grid place-items-center p-5 text-[#f8edda]" data-testid="overlay-unlock">
      <div className="unlock-card relative max-w-md text-center">
        <Sparkles className="mx-auto mb-5 text-[#e8b45c]" size={22} />
        <p className="font-mono-display text-[10px] uppercase tracking-[.3em] text-[#f8edda]/55">access granted</p>
        <h2 className="font-display mt-5 text-6xl leading-[.9] sm:text-8xl">Here we are.</h2>
        <p className="mx-auto mt-6 max-w-xs text-sm leading-6 text-[#f8edda]/70">The ordinary, the ridiculous, the very soft. All the little things that became ours.</p>
        <button type="button" onClick={onContinue} className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ffb2a9] px-6 py-3 text-sm font-semibold text-[#321e29]" data-testid="button-enter-memory">
          begin at the beginning <ArrowDown size={16} />
        </button>
      </div>
    </div>
  );
}

function NoteModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop fixed inset-0 z-50 grid place-items-center p-5" role="dialog" aria-modal="true" aria-label="A note for you" data-testid="dialog-note">
      <div className="relative max-h-[85dvh] w-full max-w-lg rotate-[-1deg] overflow-auto bg-[#f8edda] p-7 text-[#321e29] shadow-2xl sm:p-10">
        <span className="tape -top-2 left-1/2 -translate-x-1/2 rotate-2" aria-hidden="true" />
        <button type="button" onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[#321e29]/15" data-testid="button-close-note" aria-label="Close note"><X size={16} /></button>
        <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#a44a55]">opened note / 06</p>
        <h2 className="font-display mt-8 text-4xl">For the person<br />who makes home feel funny.</h2>
        <div className="mt-8 space-y-4 font-display text-lg leading-8 text-[#321e29]/80">
          <p>I like that our story is not made only of perfect pictures. It is made of sleepy faces, accidental screenshots, dramatic mirror poses, and the way your hand always finds mine without asking.</p>
          <p>Six months is both a very small amount of time and somehow a whole little universe. Thank you for making room for all of me in it.</p>
          <p>More ordinary days, please. More snacks. More photographs we will laugh at later.</p>
        </div>
        <p className="mt-10 font-display text-2xl text-[#a44a55]">always yours, <span className="italic">me</span> <span aria-hidden="true">♡</span></p>
      </div>
    </div>
  );
}

function Lightbox({ photo, index, total, onClose, onPrevious, onNext, liked, onLike }: { photo: PhotoMedia; index: number; total: number; onClose: () => void; onPrevious: () => void; onNext: () => void; liked: boolean; onLike: () => void }) {
  return (
    <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={photo.caption} data-testid="dialog-lightbox">
      <button type="button" className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Close image viewer" data-testid="button-lightbox-backdrop" />
      <div className="relative z-10 grid max-h-[92dvh] w-full max-w-5xl items-center gap-5 md:grid-cols-[minmax(0,1fr)_260px]">
        <div className="relative flex max-h-[75dvh] justify-center overflow-hidden rounded-xl bg-[#201820]">
          <img src={photo.src} alt={photo.alt} className="max-h-[75dvh] w-auto max-w-full object-contain" data-testid={`img-lightbox-${photo.id}`} />
          <button type="button" onClick={onPrevious} className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#f8edda]/90 text-[#321e29]" data-testid="button-lightbox-previous" aria-label="Previous memory"><ArrowLeft size={17} /></button>
          <button type="button" onClick={onNext} className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#f8edda]/90 text-[#321e29]" data-testid="button-lightbox-next" aria-label="Next memory"><ArrowRight size={17} /></button>
        </div>
        <div className="relative z-10 text-[#f8edda]">
          <button type="button" onClick={onClose} className="absolute -top-12 right-0 grid h-9 w-9 place-items-center rounded-full border border-[#f8edda]/30" data-testid="button-close-lightbox" aria-label="Close image viewer"><X size={17} /></button>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#f8edda]/55">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</p>
          <h2 className="mt-4 font-display text-4xl leading-none">{photo.caption}</h2>
          <p className="mt-4 text-sm leading-6 text-[#f8edda]/65">{photo.note}</p>
          <button type="button" onClick={onLike} className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#f8edda]/30 px-4 py-2 text-sm" data-testid="button-lightbox-like">
            <Heart size={15} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-[#ffb2a9]' : ''} /> {liked ? 'kept close' : 'keep this one'}
          </button>
        </div>
      </div>
    </div>
  );
}

function AppHome() {
  const [unlocked, setUnlocked] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [treasures, setTreasures] = useState(0);
  const [couponClaimed, setCouponClaimed] = useState(false);
  const [choice, setChoice] = useState('');
  const [bucket, setBucket] = useState([false, false, false, false]);
  const [activeMemory, setActiveMemory] = useState('decorated');
  const [showTop, setShowTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!unlocked) return;
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { revealObserver.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [unlocked]);

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhoto(null);
      if (event.key === 'ArrowRight') setSelectedPhoto((value) => value === null ? 0 : (value + 1) % photos.length);
      if (event.key === 'ArrowLeft') setSelectedPhoto((value) => value === null ? 0 : (value - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedPhoto]);

  const likedCount = useMemo(() => Object.values(liked).filter(Boolean).length, [liked]);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };
  const toggleLike = (id: string) => setLiked((current) => ({ ...current, [id]: !current[id] }));
  const randomMemory = () => {
    const randomIndex = Math.floor(Math.random() * photos.length);
    setSelectedPhoto(randomIndex);
    setActiveMemory(photos[randomIndex].id);
  };
  const addTreasure = () => setTreasures((value) => Math.min(value + 1, 6));

  if (!unlocked) return <LockScreen onUnlock={() => { setUnlocked(true); setShowUnlock(true); }} />;

  return (
    <div className="paper-grain site-shell min-h-[100dvh] overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-[#5b3c3c]/10 bg-[#f2e9d8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button type="button" onClick={() => scrollTo('top')} className="flex items-center gap-3 text-left" data-testid="button-home-top">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#a44a55] font-display text-lg text-[#f8edda]">♡</span>
            <span><span className="block font-display text-lg leading-none">six months</span><span className="font-mono-display text-[8px] uppercase tracking-[.2em] opacity-55">of us</span></span>
          </button>
          <nav className={`${mobileMenu ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-4 border-b border-[#5b3c3c]/10 bg-[#f2e9d8] px-5 py-5 sm:static sm:flex sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:p-0`} aria-label="Memory sections">
            <button type="button" onClick={() => scrollTo('story')} className="text-left font-mono-display text-[10px] uppercase tracking-[.16em] opacity-65 hover:opacity-100" data-testid="button-nav-story">our story</button>
            <button type="button" onClick={() => scrollTo('wall')} className="text-left font-mono-display text-[10px] uppercase tracking-[.16em] opacity-65 hover:opacity-100" data-testid="button-nav-wall">the wall</button>
            <button type="button" onClick={() => scrollTo('future')} className="text-left font-mono-display text-[10px] uppercase tracking-[.16em] opacity-65 hover:opacity-100" data-testid="button-nav-future">next chapter</button>
            <button type="button" onClick={() => setShowNote(true)} className="inline-flex items-center gap-2 rounded-full bg-[#321e29] px-4 py-2 text-left text-xs font-semibold text-[#f8edda]" data-testid="button-nav-note"><Mail size={13} /> open a note</button>
          </nav>
          <button type="button" onClick={() => setMobileMenu(!mobileMenu)} className="grid h-9 w-9 place-items-center sm:hidden" data-testid="button-mobile-menu" aria-label="Toggle navigation">{mobileMenu ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </header>

      <main ref={mainRef}>
        <section id="top" className="relative mx-auto grid min-h-[calc(100dvh-65px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="relative z-10">
            <Reveal><p className="font-mono-display text-[10px] uppercase tracking-[.3em] text-[#a44a55]">a private digital love letter / 06.06.24</p></Reveal>
            <Reveal delay={1}><h1 className="mt-7 max-w-3xl font-display text-[clamp(4.7rem,12vw,10rem)] leading-[.78] tracking-[-.065em] text-[#321e29]">Six<br /><span className="text-[#a44a55]">Months</span><br /><i>of Us</i></h1></Reveal>
            <Reveal delay={2}><p className="mt-9 max-w-md font-display text-xl leading-7 text-[#321e29]/70">A scrapbook of the soft launches, the silly faces, and the small ordinary moments that became a whole life in miniature.</p></Reveal>
            <Reveal delay={3}><div className="mt-10 flex flex-wrap items-center gap-3"><button type="button" onClick={() => scrollTo('story')} className="inline-flex items-center gap-3 rounded-full bg-[#321e29] px-5 py-3 text-sm font-semibold text-[#f8edda]" data-testid="button-start-story">start at the beginning <ArrowDown size={15} /></button><button type="button" onClick={randomMemory} className="inline-flex items-center gap-2 rounded-full border border-[#321e29]/20 px-5 py-3 text-sm" data-testid="button-random-memory"><Shuffle size={15} /> surprise me</button></div></Reveal>
            <Reveal delay={4}><p className="mt-12 font-mono-display text-[10px] uppercase tracking-[.2em] text-[#321e29]/45">scroll slowly / tap everything / {likedCount} kept close</p></Reveal>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:rotate-[3deg]">
            <Reveal className="relative z-10"><div className="photo-card aspect-[4/5] rotate-[2deg] border-[10px] border-[#f8edda] shadow-[0_24px_55px_rgba(73,43,34,.22)]"><img src={decoratedMirror} alt="Couple mirror selfie with hand-drawn border" /><span className="absolute bottom-5 left-5 rounded-sm bg-[#f8edda] px-3 py-2 font-display text-lg text-[#321e29] shadow-md">this is our bit ♡</span></div></Reveal>
            <div className="absolute -bottom-7 -left-9 z-20 w-44 -rotate-[11deg] bg-[#e8b45c] px-4 py-3 shadow-lg sm:-left-16" data-testid="text-hero-note"><p className="font-mono-display text-[9px] uppercase tracking-[.14em] text-[#321e29]/60">field note / 001</p><p className="mt-2 font-display text-xl leading-none text-[#321e29]">we look good in mirrors.</p></div>
            <div className="absolute -right-8 -top-8 font-display text-7xl text-[#a44a55] sm:-right-16">✶</div>
          </div>
        </section>

        <section className="border-y border-[#5b3c3c]/10 bg-[#e9dfcb]/55">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-8 sm:grid-cols-4 sm:px-8">
            {[['01', 'tiny keepsakes'], ['02', 'camera roll eras'], ['03', 'vertical videos'], ['∞', 'more to come']].map(([number, label], index) => <Reveal key={label} delay={index % 4}><div className="border-r border-[#5b3c3c]/15 px-4 first:pl-0 last:border-0"><p className="font-display text-3xl text-[#a44a55] sm:text-4xl">{number}</p><p className="mt-1 font-mono-display text-[9px] uppercase tracking-[.12em] opacity-55">{label}</p></div></Reveal>)}
          </div>
        </section>

        <section id="story" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
          <Reveal><SectionHeading kicker="chapter one / how it started" title={<>It was never<br /><em className="text-[#a44a55]">just a picture.</em></>} copy="It was a hand in the frame. A mirror. A date written in tiny letters. A look that lasted a second longer than it needed to." /></Reveal>
          <div className="mt-20 grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal delay={1}><div className="relative mx-auto max-w-sm"><div className="photo-card aspect-[3/4] rotate-[-4deg] border-[9px] border-[#f8edda]"><img src={handPhoto} alt="A hand with a ring reaching into the frame" /></div><p className="absolute -bottom-8 -right-5 max-w-[180px] rotate-[5deg] font-display text-2xl leading-none text-[#a44a55]">first, there was a hand.</p></div></Reveal>
            <Reveal delay={2}><div className="grid gap-7 sm:grid-cols-2"><div className="border-t-2 border-[#a44a55] pt-4"><p className="font-mono-display text-[10px] uppercase tracking-[.2em] text-[#a44a55]">the theory</p><p className="mt-4 font-display text-3xl leading-tight">You looked at me like you already knew the punchline.</p></div><div className="sm:mt-16"><p className="font-mono-display text-[10px] uppercase tracking-[.2em] opacity-50">the truth</p><p className="mt-4 text-sm leading-7 opacity-70">I was nervous. You were probably nervous too. We both took pictures anyway, which feels like a very us way to begin.</p><div className="mt-8 font-display text-5xl text-[#e8b45c]">01 —</div></div></div></Reveal>
          </div>
        </section>

        <section className="bg-[#a44a55] px-5 py-28 text-[#f8edda] sm:px-8 sm:py-36">
          <div className="mx-auto max-w-7xl">
             <Reveal><SectionHeading light kicker="chapter two / the plot thickens" title={<>Then we got<br /><em className="text-[#ffb2a9]">a little silly.</em></>} copy="Somewhere along the way, romance became peace signs, blurry selfies, stolen kisses, and absolutely no respect for a normal camera angle." /></Reveal>
            <div className="mt-16 grid items-end gap-8 md:grid-cols-3">
              <Reveal delay={1}><div className="photo-card aspect-[3/4] rotate-[-3deg] border-[8px] border-[#f8edda]"><img src={sillyKiss} alt="Playful close-up kiss selfie" /><span className="absolute right-3 top-3 rounded-full bg-[#e8b45c] px-3 py-2 font-mono-display text-[9px] uppercase tracking-[.12em] text-[#321e29]">very serious</span></div></Reveal>
              <Reveal delay={2}><div className="photo-card aspect-[4/5] rotate-[2deg] border-[8px] border-[#f8edda] md:mb-12"><img src={firstKiss} alt="Couple sharing a kiss in a mirror selfie" /></div></Reveal>
              <Reveal delay={3}><div className="photo-card aspect-[3/4] rotate-[-1deg] border-[8px] border-[#f8edda]"><img src={heartKiss} alt="Kiss selfie with pink heart overlays" /></div></Reveal>
            </div>
            <Reveal delay={2}><div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-[#f8edda]/25 pt-6 sm:flex-row sm:items-center"><p className="font-display text-2xl">the official record: <span className="text-[#ffb2a9]">we make each other laugh.</span></p><button type="button" onClick={() => setShowNote(true)} className="inline-flex items-center gap-2 border-b border-[#ffb2a9] pb-1 font-mono-display text-[10px] uppercase tracking-[.16em]" data-testid="button-open-letter"><Mail size={14} /> read the footnote</button></div></Reveal>
          </div>
        </section>

        <section id="moving" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
           <Reveal><SectionHeading kicker="interlude / press play" title={<>Still frames<br /><em className="text-[#21767b]">were not enough.</em></>} copy="For the bits that wobble, breathe, and disappear too quickly if you are not paying attention." /></Reveal>
          <div className="mt-16 grid gap-7 md:grid-cols-3">{videos.map((video, index) => <Reveal key={video.id} delay={index + 1}><VideoMemoryCard video={video} /></Reveal>)}</div>
        </section>

        <section id="wall" className="border-y border-[#5b3c3c]/10 bg-[#dfd5c3]/45 px-5 py-28 sm:px-8 sm:py-40">
          <div className="mx-auto max-w-7xl">
             <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><Reveal><SectionHeading kicker="chapter three / the wall" title={<>A very biased<br /><em className="text-[#a44a55]">archive.</em></>} copy="Not a gallery. A trail of clues. Follow the colours, the bad angles, and the hands always reaching for each other." /></Reveal><Reveal delay={1}><button type="button" onClick={randomMemory} className="inline-flex w-fit items-center gap-2 rounded-full border border-[#321e29]/20 bg-[#f2e9d8] px-5 py-3 text-sm" data-testid="button-wall-random"><Shuffle size={15} /> pick a memory for me</button></Reveal></div>
            <div className="masonry-wall mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
              {photos.map((photo, index) => <div key={photo.id} className="mb-6 break-inside-avoid"><PhotoTile photo={photo} index={index} liked={!!liked[photo.id]} onOpen={() => { setSelectedPhoto(index); setActiveMemory(photo.id); }} onLike={() => toggleLike(photo.id)} /></div>)}
            </div>
            <Reveal><div className="mt-10 flex items-center gap-3 font-mono-display text-[10px] uppercase tracking-[.2em] opacity-55"><span className="h-px w-12 bg-current" /> end of current evidence <span className="text-[#a44a55]">♡</span></div></Reveal>
          </div>
        </section>

        <section className="bg-[#21767b] px-5 py-28 text-[#f8edda] sm:px-8 sm:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal><div><p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#e8b45c]">a tiny ceremony</p><h2 className="mt-5 font-display text-5xl leading-[.9] sm:text-7xl">leave a little<br /><i>love here.</i></h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#f8edda]/70">There are six small hearts hidden in this chapter. Tap them when you find them. Consider it a very low-stakes treasure hunt.</p><div className="mt-7 flex items-center gap-4"><span className="font-display text-5xl text-[#ffb2a9]">{treasures}</span><span className="font-mono-display text-[9px] uppercase tracking-[.16em] text-[#f8edda]/55">/ 06 found</span></div></div></Reveal>
            <Reveal delay={2}><div className="grid grid-cols-3 gap-4 sm:gap-6">{['hand', 'soft-kiss', 'keepsake', 'night', 'teal', 'close'].map((id, index) => { const photo = photos.find((item) => item.id === id) ?? photos[0]; const found = index < treasures; return <button key={id} type="button" onClick={addTreasure} className={`relative aspect-square overflow-hidden rounded-full border-4 transition-transform hover:-translate-y-1 ${found ? 'border-[#ffb2a9]' : 'border-[#f8edda]/25 bg-[#165b60]'}`} data-testid={`button-treasure-${id}`} aria-label={found ? `Found heart ${index + 1}` : `Find hidden heart ${index + 1}`}><img src={photo.src} alt="" className={`h-full w-full object-cover transition-opacity ${found ? 'opacity-100' : 'opacity-25'}`} />{found ? <Heart className="absolute inset-0 m-auto text-[#ffb2a9]" fill="currentColor" size={20} /> : <span className="absolute inset-0 grid place-items-center font-display text-3xl text-[#f8edda]/55">♡</span>}</button>; })}</div></Reveal>
          </div>
        </section>

        <section id="future" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
          <div className="grid gap-16 lg:grid-cols-[1fr_.8fr]">
             <Reveal><div><SectionHeading kicker="chapter four / next, please" title={<>Our future<br /><em className="text-[#a44a55]">looks like this.</em></>} copy="A few things to do when the camera roll needs new material. Check them off as we go." /><div className="mt-10 space-y-3">{['take a train with no plan', 'find our very specific little café', 'make a photo booth strip', 'keep choosing each other on ordinary days'].map((item, index) => <button type="button" key={item} onClick={() => setBucket((items) => items.map((value, itemIndex) => itemIndex === index ? !value : value))} className="flex w-full items-center gap-4 border-b border-[#5b3c3c]/15 py-4 text-left" data-testid={`button-bucket-${index}`}><span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${bucket[index] ? 'border-[#a44a55] bg-[#a44a55] text-[#f8edda]' : 'border-[#321e29]/25'}`}>{bucket[index] && <Check size={14} />}</span><span className={`text-sm ${bucket[index] ? 'text-[#a44a55] line-through' : ''}`}>{item}</span><span className="ml-auto font-display text-xl text-[#e8b45c]">{String(index + 1).padStart(2, '0')}</span></button>)}</div></div></Reveal>
            <Reveal delay={2}><div className="relative mt-4 lg:mt-28"><div className="photo-card aspect-[4/5] rotate-[4deg] border-[10px] border-[#f8edda]"><img src={framedSaree} alt="Portrait in a rust saree with a hand-drawn border" /></div><div className="absolute -bottom-8 -left-7 rotate-[-5deg] bg-[#e8b45c] px-5 py-4 shadow-xl"><p className="font-mono-display text-[9px] uppercase tracking-[.18em] opacity-60">future field note</p><p className="mt-2 font-display text-2xl leading-none">same us,<br />more places.</p></div></div></Reveal>
          </div>
        </section>

        <section className="bg-[#321e29] px-5 py-28 text-[#f8edda] sm:px-8 sm:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <Reveal><div><p className="font-mono-display text-[10px] uppercase tracking-[.28em] text-[#ffb2a9]">a gift for later</p><h2 className="mt-5 font-display text-5xl leading-[.9] sm:text-7xl">one coupon.<br /><i>redeem wisely.</i></h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#f8edda]/65">Valid for one long hug, one snack chosen without judgement, and a completely unnecessary photograph together.</p></div></Reveal>
              <Reveal delay={2}><div className={`relative mx-auto w-full max-w-xl rotate-[-2deg] border border-dashed border-[#e8b45c]/60 p-2 ${couponClaimed ? 'opacity-95' : ''}`} data-testid="card-coupon"><div className="flex items-center gap-5 border border-[#e8b45c]/40 p-6 sm:p-9"><Ticket className="shrink-0 text-[#e8b45c]" size={34} /><div className="flex-1"><p className="font-mono-display text-[9px] uppercase tracking-[.25em] text-[#e8b45c]">SIX MONTHS / VALID FOREVER</p><p className="mt-3 font-display text-3xl sm:text-4xl">{couponClaimed ? 'coupon redeemed with love' : 'one date, your choice'}</p></div><span className="font-display text-3xl text-[#ffb2a9]">♡</span></div><button type="button" onClick={() => setCouponClaimed(!couponClaimed)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#ffb2a9] px-4 py-3 text-sm font-semibold text-[#321e29]" data-testid="button-redeem-coupon">{couponClaimed ? <><RotateCcw size={15} /> redeem again</> : <><Gift size={15} /> claim this coupon</>}</button></div></Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e8b45c] px-5 py-32 text-[#321e29] sm:px-8 sm:py-44">
          <div className="absolute -right-4 top-8 font-display text-[12rem] leading-none text-[#a44a55]/15 sm:right-10">♡</div>
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal><p className="font-mono-display text-[10px] uppercase tracking-[.3em] text-[#321e29]/60">the last page, for now</p><h2 className="mt-7 font-display text-[clamp(4rem,11vw,9rem)] leading-[.78] tracking-[-.06em]">To be<br /><i>continued.</i></h2><p className="mx-auto mt-9 max-w-lg font-display text-2xl leading-tight text-[#321e29]/75">Six months down. A ridiculous number of tiny moments to go.</p></Reveal>
            <Reveal delay={2}><div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"><button type="button" onClick={() => setChoice('yes')} className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${choice === 'yes' ? 'bg-[#a44a55] text-[#f8edda]' : 'bg-[#321e29] text-[#f8edda]'}`} data-testid="button-final-yes">{choice === 'yes' ? <Check size={16} /> : <Heart size={16} />} yes, obviously</button><button type="button" onClick={() => setChoice('again')} className={`inline-flex items-center gap-2 rounded-full border border-[#321e29]/25 px-6 py-3 text-sm font-semibold ${choice === 'again' ? 'bg-[#f8edda]/60' : ''}`} data-testid="button-final-again"><RotateCcw size={15} /> start it again</button></div></Reveal>
            {choice && <Reveal className="mt-8"><p className="font-display text-2xl" data-testid="text-final-choice">{choice === 'yes' ? 'good. I was hoping you would say that. ♡' : 'the best stories are worth rereading.'}</p></Reveal>}
            <Reveal delay={3}><div className="mt-20 flex items-center justify-center gap-5 font-mono-display text-[9px] uppercase tracking-[.2em] text-[#321e29]/45"><span>made for {siteConfig.names}</span><span>✶</span><span>with all my heart</span></div></Reveal>
          </div>
        </section>
      </main>

      {showTop && <button type="button" onClick={() => scrollTo('top')} className="fixed bottom-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-full bg-[#321e29] text-[#f8edda] shadow-xl" data-testid="button-back-to-top" aria-label="Back to top"><ChevronUp size={17} /></button>}
      {showUnlock && <UnlockMoment onContinue={() => { setShowUnlock(false); window.setTimeout(() => scrollTo('story'), 80); }} />}
      {showNote && <NoteModal onClose={() => setShowNote(false)} />}
      {selectedPhoto !== null && <Lightbox photo={photos[selectedPhoto]} index={selectedPhoto} total={photos.length} liked={!!liked[photos[selectedPhoto].id]} onClose={() => setSelectedPhoto(null)} onPrevious={() => setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length)} onNext={() => setSelectedPhoto((selectedPhoto + 1) % photos.length)} onLike={() => toggleLike(photos[selectedPhoto].id)} />}
      <div className="sr-only" aria-live="polite" data-testid="status-memory-selection">active memory: {activeMemory}</div>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={AppHome} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;