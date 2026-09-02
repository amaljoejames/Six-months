import { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Heart, Sparkles, X, Mail, ChevronUp, Shuffle, Check, Gift, RotateCcw, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { type ReactNode } from 'react';
import { Link } from 'wouter';

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

// Screen 1: Opening
function OpeningScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="paper-grain flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#f2e9d8] px-5 py-10 text-[#321e29]">
      <div className="absolute left-[8%] top-[12%] font-display text-5xl text-[#a44a55] opacity-80">✶</div>
      <div className="absolute bottom-[15%] right-[10%] font-display text-7xl text-[#e8b45c] opacity-80">♡</div>
      <div className="relative w-full max-w-4xl text-center">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#a44a55]">a tiny thing for you / 01</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-8 font-display text-[clamp(4rem,10vw,7rem)] leading-[.8] tracking-[-.05em]">
            Hey<br /><span className="text-[#a44a55]">Muskan…</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 font-display text-2xl text-[#321e29]/70">come here for a second 🫵🏻</p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-12">
            <p className="font-display text-xl mb-8">I made a tiny thing for you.</p>
            <button 
              type="button" 
              onClick={onContinue}
              className="inline-flex items-center gap-3 rounded-full bg-[#321e29] px-6 py-4 text-sm font-semibold text-[#f8edda] transition-transform hover:-translate-y-0.5"
            >
              Okay… show me 👀 <ArrowDown size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 2: Soft Landing
function SoftLandingScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="paper-grain min-h-[100dvh] bg-[#f8edda] px-5 py-20 text-[#321e29]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#a44a55]">the first thing / 02</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-5xl leading-[.9] sm:text-7xl">
            Okay, first things first…
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-12 space-y-8">
            <p className="font-display text-3xl">You didn't get the offer letter.</p>
            <p className="font-display text-3xl text-[#a44a55]">And yeah… that sucks.</p>
            <p className="font-display text-3xl">But…</p>
            <p className="font-display text-4xl text-[#e8b45c]">That doesn't mean YOU suck.</p>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <button 
            type="button" 
            onClick={onContinue}
            className="mt-16 inline-flex items-center gap-3 rounded-full border-2 border-[#321e29] px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            I know, but tell me more <ArrowDown size={16} />
          </button>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 3: Digital Hug
function DigitalHugScreen({ onContinue }: { onContinue: () => void }) {
  const [hugged, setHugged] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleHug = () => {
    setHugged(true);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <main className="paper-grain min-h-[100dvh] bg-[#e8b45c] px-5 py-20 text-[#321e29]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#321e29]/60">virtual comfort / 03</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-5xl leading-[.9] sm:text-7xl">
            Need a hug?
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <button 
            type="button" 
            onClick={handleHug}
            className={`mt-12 inline-flex items-center gap-3 rounded-full px-8 py-6 text-lg font-semibold transition-all ${
              hugged 
                ? 'bg-[#f8edda] scale-110' 
                : 'bg-[#321e29] text-[#f8edda] hover:scale-105'
            }`}
          >
            {hugged ? <Heart size={24} fill="currentColor" className="text-[#a44a55]" /> : <span>🫂 Come here</span>}
          </button>
        </Reveal>
        {showMessage && (
          <Reveal className="mt-8 space-y-4">
            <p className="font-display text-3xl">It's okay.</p>
            <p className="font-display text-2xl text-[#321e29]/70">Take a breath.</p>
          </Reveal>
        )}
        {hugged && (
          <Reveal delay={1}>
            <button 
              type="button" 
              onClick={onContinue}
              className="mt-16 inline-flex items-center gap-3 rounded-full border-2 border-[#321e29] px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              Feeling a little better <ArrowDown size={16} />
            </button>
          </Reveal>
        )}
      </div>
    </main>
  );
}

// Screen 4: Things to Remember
function ThingsToRememberScreen({ onContinue }: { onContinue: () => void }) {
  const reminders = [
    "One rejection doesn't define you.",
    "Your effort still counts.",
    "You are allowed to feel disappointed.",
    "You can try again.",
    "Your worth isn't decided by an HR email.",
    "There are more opportunities ahead.",
    "You don't have to figure everything out today."
  ];

  return (
    <main className="paper-grain min-h-[100dvh] bg-[#f2e9d8] px-5 py-20 text-[#321e29]">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#a44a55]">reminders / 04</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-4xl leading-[.9] sm:text-6xl">
            Things you should remember
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {reminders.map((reminder, index) => (
              <Reveal key={index} delay={(index % 3) + 1}>
                <div className="rotate-[-1deg] border-2 border-[#321e29]/15 bg-[#f8edda] p-6 shadow-md">
                  <p className="font-display text-xl leading-snug">{reminder}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={3}>
          <button 
            type="button" 
            onClick={onContinue}
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#321e29] px-6 py-4 text-sm font-semibold text-[#f8edda] transition-transform hover:-translate-y-0.5"
          >
            I'm trying to remember <ArrowDown size={16} />
          </button>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 5: Tiny Reminder
function TinyReminderScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="paper-grain min-h-[100dvh] bg-[#321e29] px-5 py-20 text-[#f8edda]">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#ffb2a9]">important reminder / 05</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] leading-[.85] tracking-[-.04em]">
            You are still<br /><span className="text-[#ffb2a9]">THAT girl.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-12 font-display text-2xl text-[#f8edda]/70 max-w-2xl mx-auto">
            The offer letter missed out on you.<br />
            Not the other way around.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <button 
            type="button" 
            onClick={onContinue}
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#ffb2a9] px-6 py-4 text-sm font-semibold text-[#321e29] transition-transform hover:-translate-y-0.5"
          >
            Okay, but what now <ArrowDown size={16} />
          </button>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 6: Playful Section
function PlayfulScreen({ onContinue }: { onContinue: () => void }) {
  const [showPrescription, setShowPrescription] = useState(false);

  return (
    <main className="paper-grain min-h-[100dvh] bg-[#a44a55] px-5 py-20 text-[#f8edda]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#ffb2a9]">official diagnosis / 06</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-4xl leading-[.9] sm:text-6xl">
            Severe case of being<br /><span className="text-[#ffb2a9]">too awesome for one company.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <button 
            type="button" 
            onClick={() => setShowPrescription(true)}
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#f8edda] px-6 py-4 text-sm font-semibold text-[#321e29] transition-transform hover:-translate-y-0.5"
          >
            Prescribe me something <Sparkles size={16} />
          </button>
        </Reveal>
        {showPrescription && (
          <Reveal delay={1} className="mt-12 rotate-[-2deg] border-2 border-[#f8edda]/30 bg-[#f8edda]/10 p-8">
            <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#ffb2a9]">prescription</p>
            <div className="mt-6 space-y-4 text-left">
              <p className="font-display text-2xl">1 cup chai ☕</p>
              <p className="font-display text-2xl">2 hours of ranting</p>
              <p className="font-display text-2xl">3 stupid jokes</p>
              <p className="font-display text-2xl text-[#ffb2a9]">Unlimited confidence</p>
            </div>
          </Reveal>
        )}
        {showPrescription && (
          <Reveal delay={2}>
            <button 
              type="button" 
              onClick={onContinue}
              className="mt-16 inline-flex items-center gap-3 rounded-full border-2 border-[#f8edda] px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              I'll take it <ArrowDown size={16} />
            </button>
          </Reveal>
        )}
      </div>
    </main>
  );
}

// Screen 7: Compliment Generator
function ComplimentScreen({ onContinue }: { onContinue: () => void }) {
  const [compliment, setCompliment] = useState('');
  const [showCompliment, setShowCompliment] = useState(false);

  const compliments = [
    "You're smarter than you give yourself credit for.",
    "Your comeback arc is going to be ridiculous.",
    "Someone's future company is about to get very lucky.",
    "Certified cutie. Also certified capable.",
    "You're doing better than you think.",
    "The right opportunity will find you.",
    "You have something special that can't be taught.",
    "This is just a plot twist, not the ending."
  ];

  const generateCompliment = () => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(random);
    setShowCompliment(true);
  };

  return (
    <main className="paper-grain min-h-[100dvh] bg-[#e8b45c] px-5 py-20 text-[#321e29]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#321e29]/60">boost / 07</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-4xl leading-[.9] sm:text-6xl">
            Tell me something nice
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <button 
            type="button" 
            onClick={generateCompliment}
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#321e29] px-8 py-6 text-sm font-semibold text-[#f8edda] transition-transform hover:-translate-y-0.5"
          >
            <Sparkles size={18} /> Generate
          </button>
        </Reveal>
        {showCompliment && (
          <Reveal delay={1} className="mt-12">
            <div className="rotate-[1deg] border-2 border-[#321e29]/20 bg-[#f8edda] p-8 shadow-lg">
              <p className="font-display text-2xl leading-snug">"{compliment}"</p>
            </div>
          </Reveal>
        )}
        {showCompliment && (
          <Reveal delay={2}>
            <button 
              type="button" 
              onClick={onContinue}
              className="mt-16 inline-flex items-center gap-3 rounded-full border-2 border-[#321e29] px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              That's actually sweet <ArrowDown size={16} />
            </button>
          </Reveal>
        )}
      </div>
    </main>
  );
}

// Screen 8: Things I Believe
function BeliefScreen({ onContinue }: { onContinue: () => void }) {
  const beliefs = [
    "I believe you're capable.",
    "I believe you'll figure it out.",
    "I believe this isn't your ending.",
    "I believe you'll surprise yourself.",
    "And yes…",
    "I believe in you."
  ];

  return (
    <main className="paper-grain min-h-[100dvh] bg-[#f2e9d8] px-5 py-20 text-[#321e29]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#a44a55]">my beliefs / 08</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-4xl leading-[.9] sm:text-6xl">
            Things I believe about you
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-12 space-y-6">
            {beliefs.map((belief, index) => (
              <Reveal key={index} delay={(index % 2) + 1}>
                <div className={`rotate-[${index % 2 === 0 ? -1 : 1}deg] border-l-4 border-[#a44a55] bg-[#f8edda] p-6 ${index === beliefs.length - 1 ? 'border-[#e8b45c] bg-[#e8b45c]/10' : ''}`}>
                  <p className={`font-display text-2xl ${index === beliefs.length - 1 ? 'text-[#321e29]' : ''}`}>{belief}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={3}>
          <button 
            type="button" 
            onClick={onContinue}
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#321e29] px-6 py-4 text-sm font-semibold text-[#f8edda] transition-transform hover:-translate-y-0.5"
          >
            Thanks for believing in me <ArrowDown size={16} />
          </button>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 9: Mini Game - Destroy Rejection
function DestroyRejectionScreen({ onContinue }: { onContinue: () => void }) {
  const [destroyed, setDestroyed] = useState(false);
  const [step, setStep] = useState(0);

  const handleDestroy = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setDestroyed(true);
    }
  };

  return (
    <main className="paper-grain min-h-[100dvh] bg-[#321e29] px-5 py-20 text-[#f8edda]">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#ffb2a9]">therapy / 09</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-4xl leading-[.9] sm:text-6xl">
            Destroy the rejection letter
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-12">
            {!destroyed ? (
              <button 
                type="button" 
                onClick={handleDestroy}
                className={`rotate-[${step * 15}deg] transition-all duration-300 ${
                  step === 0 ? 'bg-[#f8edda] text-[#321e29]' :
                  step === 1 ? 'bg-[#a44a55] text-[#f8edda] scale-95' :
                  step === 2 ? 'bg-[#e8b45c] text-[#321e29] scale-90' :
                  'bg-[#ffb2a9] text-[#321e29] scale-85'
                } px-8 py-6 font-display text-xl`}
              >
                {step === 0 ? '📧 Rejection Email' :
                 step === 1 ? '💥 Being squashed' :
                 step === 2 ? '✨ Turning to confetti' :
                 '❤️ Becoming hearts'}
              </button>
            ) : (
              <Reveal>
                <div className="space-y-6">
                  <p className="font-display text-3xl text-[#ffb2a9]">Okay. That email has officially been dealt with.</p>
                  <button 
                    type="button" 
                    onClick={onContinue}
                    className="inline-flex items-center gap-3 rounded-full bg-[#ffb2a9] px-6 py-4 text-sm font-semibold text-[#321e29] transition-transform hover:-translate-y-0.5"
                  >
                    That felt good <ArrowDown size={16} />
                  </button>
                </div>
              </Reveal>
            )}
          </div>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 10: Future Opportunities
function FutureScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="paper-grain min-h-[100dvh] bg-[#21767b] px-5 py-20 text-[#f8edda]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#e8b45c]">what's next / 10</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-4xl leading-[.9] sm:text-6xl">
            The path forward
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rotate-[-2deg] border-2 border-[#f8edda]/30 bg-[#f8edda]/10 p-4">
                <p className="font-display text-xl line-through opacity-50">HCLTech ❌</p>
              </div>
              <ArrowDown className="text-[#e8b45c]" size={24} />
            </div>
            <div className="flex items-center gap-4">
              <div className="rotate-[1deg] border-2 border-[#e8b45c]/30 bg-[#e8b45c]/10 p-4">
                <p className="font-display text-xl">Next opportunity ?</p>
              </div>
              <ArrowDown className="text-[#ffb2a9]" size={24} />
            </div>
            <div className="flex items-center gap-4">
              <div className="rotate-[-1deg] border-2 border-[#ffb2a9]/30 bg-[#ffb2a9]/10 p-4">
                <p className="font-display text-xl">Next interview ?</p>
              </div>
              <ArrowDown className="text-[#e8b45c]" size={24} />
            </div>
            <div className="flex items-center gap-4">
              <div className="rotate-[2deg] border-2 border-[#e8b45c]/30 bg-[#e8b45c]/10 p-4">
                <p className="font-display text-xl">Next offer ?</p>
              </div>
              <ArrowDown className="text-[#ffb2a9]" size={24} />
            </div>
            <div className="flex items-center gap-4">
              <div className="rotate-[-1deg] border-2 border-[#ffb2a9] bg-[#ffb2a9] p-6 shadow-lg">
                <p className="font-display text-2xl">Something better ✨</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <button 
            type="button" 
            onClick={onContinue}
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#f8edda] px-6 py-4 text-sm font-semibold text-[#21767b] transition-transform hover:-translate-y-0.5"
          >
            I like that timeline <ArrowDown size={16} />
          </button>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 11: Personal Message
function PersonalMessageScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="paper-grain min-h-[100dvh] bg-[#f8edda] px-5 py-20 text-[#321e29]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#a44a55]">from me to you / 11</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-4xl leading-[.9] sm:text-6xl">
            Muskan,
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-12 space-y-6 font-display text-xl leading-8 text-[#321e29]/80">
            <p>I know you wanted this one.</p>
            <p>So it's completely okay to be disappointed.</p>
            <p>But please don't start doubting yourself because of it.</p>
            <p>You are still the same smart, funny, cute, capable girl you were yesterday.</p>
            <p>Nothing changed.</p>
            <p>And if things get a little heavy sometimes…</p>
            <p>you don't have to handle everything alone.</p>
            <p>I'll be here cheering for you.</p>
            <p className="text-2xl text-[#a44a55]">Always. 💗</p>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <button 
            type="button" 
            onClick={onContinue}
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#321e29] px-6 py-4 text-sm font-semibold text-[#f8edda] transition-transform hover:-translate-y-0.5"
          >
            That means a lot <ArrowDown size={16} />
          </button>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 12: Final Celebration
function FinalCelebrationScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="paper-grain min-h-[100dvh] bg-[#a44a55] px-5 py-20 text-[#f8edda]">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="absolute left-[5%] top-[15%] font-display text-6xl text-[#ffb2a9] opacity-60">✶</div>
          <div className="absolute right-[5%] bottom-[20%] font-display text-8xl text-[#e8b45c] opacity-60">♡</div>
        </Reveal>
        <Reveal>
          <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#ffb2a9]">the comeback / 12</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] leading-[.85] tracking-[-.04em]">
            Your comeback<br /><span className="text-[#ffb2a9]">starts here. ✨</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-12 font-display text-2xl text-[#f8edda]/70">Next chapter, pookie.</p>
        </Reveal>
        <Reveal delay={3}>
          <button 
            type="button" 
            onClick={onContinue}
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#f8edda] px-6 py-4 text-sm font-semibold text-[#321e29] transition-transform hover:-translate-y-0.5"
          >
            One more thing… <ArrowDown size={16} />
          </button>
        </Reveal>
      </div>
    </main>
  );
}

// Screen 13: Final Surprise
function FinalSurpriseScreen() {
  const [showFinal, setShowFinal] = useState(false);
  const [smiling, setSmiling] = useState(false);

  const handleFinal = () => {
    setShowFinal(true);
  };

  const handleSmile = () => {
    setSmiling(true);
  };

  return (
    <main className="paper-grain min-h-[100dvh] bg-[#321e29] px-5 py-20 text-[#f8edda]">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="absolute left-[5%] top-[15%] font-display text-6xl text-[#ffb2a9] opacity-60">✶</div>
          <div className="absolute right-[5%] bottom-[20%] font-display text-8xl text-[#e8b45c] opacity-60">♡</div>
        </Reveal>
        {!showFinal ? (
          <>
            <Reveal>
              <p className="font-mono-display text-[10px] uppercase tracking-[.25em] text-[#ffb2a9]">the secret / 13</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] leading-[.85] tracking-[-.04em]">
                I'M ROOTING<br /><span className="text-[#ffb2a9]">FOR YOU. 💗</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-12 space-y-4 font-display text-xl text-[#f8edda]/70">
                <p>Whatever happens next…</p>
                <p>I'm in your corner.</p>
                <p>Now go make that offer letter regret missing you. 😌</p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <button 
                type="button" 
                onClick={handleFinal}
                className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#ffb2a9] px-6 py-4 text-sm font-semibold text-[#321e29] transition-transform hover:-translate-y-0.5"
              >
                Okay, now smile :) <Heart size={16} />
              </button>
            </Reveal>
          </>
        ) : (
          <Reveal>
            <div className="space-y-8">
              <div className="text-8xl animate-bounce">😊</div>
              <p className="font-display text-3xl text-[#ffb2a9]">There it is.</p>
              <p className="font-display text-xl text-[#f8edda]/70">That's the smile I was looking for.</p>
              <div className="mt-12 pt-8 border-t border-[#f8edda]/20">
                <Link to="/" className="inline-flex items-center gap-3 rounded-full border-2 border-[#f8edda]/30 px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5">
                  <ArrowLeft size={16} /> Back to Six Months
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </main>
  );
}

// Main Muskan Experience
function MuskanExperience() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <OpeningScreen onContinue={() => setCurrentScreen(1)} />,
    <SoftLandingScreen onContinue={() => setCurrentScreen(2)} />,
    <DigitalHugScreen onContinue={() => setCurrentScreen(3)} />,
    <ThingsToRememberScreen onContinue={() => setCurrentScreen(4)} />,
    <TinyReminderScreen onContinue={() => setCurrentScreen(5)} />,
    <PlayfulScreen onContinue={() => setCurrentScreen(6)} />,
    <ComplimentScreen onContinue={() => setCurrentScreen(7)} />,
    <BeliefScreen onContinue={() => setCurrentScreen(8)} />,
    <DestroyRejectionScreen onContinue={() => setCurrentScreen(9)} />,
    <FutureScreen onContinue={() => setCurrentScreen(10)} />,
    <PersonalMessageScreen onContinue={() => setCurrentScreen(11)} />,
    <FinalCelebrationScreen onContinue={() => setCurrentScreen(12)} />,
    <FinalSurpriseScreen />
  ];

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));
    return () => revealObserver.disconnect();
  }, [currentScreen]);

  return (
    <div className="paper-grain site-shell min-h-[100dvh] overflow-x-hidden">
      {screens[currentScreen]}
    </div>
  );
}

export default MuskanExperience;
