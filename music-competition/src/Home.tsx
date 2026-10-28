import { competition as c } from './data';

export function Home({ announcement }: { announcement: string }) {
  return <>
    <section className="hero" aria-labelledby="echo-title">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="gold-rule"/><span className="eyebrow">An inter-school music experience</span></div>
        <h1 id="echo-title">{c.shortName}<span>Music Competition</span></h1>
        <p className="hero-slogan">{c.slogan}.</p>
        <p className="hero-description">A voice. A melody. A moment that stays.<br/>Your sound deserves to be heard.</p>
        <div className="actions"><a className="button" href="#competition">Discover the competition <span aria-hidden="true">↗</span></a><a className="text-link" href="#registration">How to enter <span aria-hidden="true">↗</span></a></div>
        <div className="hero-note"><span className="status-dot"/> In the making <span className="hero-note-divider">/</span> Dates to be confirmed</div>
      </div>
      <div className="echo-art" aria-hidden="true">
        <div className="art-top"><span>THE ART OF BEING HEARD</span><span>✦</span></div>
        <svg viewBox="0 0 560 560" fill="none" className="resonance-art">
          <defs><linearGradient id="echo-gold" x1="70" y1="50" x2="500" y2="510" gradientUnits="userSpaceOnUse"><stop stopColor="#f5e3b8"/><stop offset=".45" stopColor="#b58e4b"/><stop offset="1" stopColor="#5c4523"/></linearGradient></defs>
          <g stroke="url(#echo-gold)">{Array.from({ length: 13 }, (_, i) => <ellipse key={i} cx="280" cy="280" rx={76 + i * 14} ry={205 - i * 7} transform={`rotate(${i * 9 - 54} 280 280)`} strokeWidth={i === 6 ? 1.5 : .7} opacity={.34 + i * .045}/>)}</g>
          <circle cx="280" cy="280" r="4" fill="#d6b77a"/>
          <path d="M48 280h57m350 0h57M280 42v42m0 392v42" stroke="#a68248" strokeWidth=".7"/>
        </svg>
        <div className="art-bottom"><span>DIFFERENT SCHOOLS.<br/>ONE RESONANCE.</span><span className="art-index">E / MC</span></div>
      </div>
    </section>
    <section className="school-strip" aria-labelledby="schools-title"><div><span className="eyebrow" id="schools-title">Sharing the stage</span><span className="strip-note">Confirmed participating schools</span></div><div className="school-names">{c.participatingSchools.map(school => <span key={school}>{school}</span>)}</div></section>
    <section className="home-story"><div><span className="eyebrow">More than a performance</span><h2>Let your music<br/>leave an <em>echo.</em></h2></div><div className="story-copy"><p>Different schools. Individual voices. A shared love of music. Echo brings student musicians together to express themselves on one stage.</p><p>Choose your own piece and make it yours. Solo and group instrumental or vocal performances are under consideration.</p><a className="text-link" href="#competition">Explore the format & rules <span aria-hidden="true">↗</span></a></div></section>
    <section className="event-strip" aria-label="Competition at a glance"><div><span className="eyebrow">01 / When</span><strong>{c.timing}</strong><small>Proposed · exact date to be confirmed</small></div><div><span className="eyebrow">02 / Where</span><strong>{c.venue ?? 'To be confirmed'}</strong><small>Venue details will follow</small></div><div><span className="eyebrow">03 / Your repertoire</span><strong>Free choice. Your expression.</strong><small>{c.repertoire}</small></div></section>
    <section className="home-lower"><div className="entry-invitation"><span className="eyebrow">Your next step</span><h2>The stage starts<br/>with <em>you.</em></h2><p>Get to know the grade pools, confirmed cash awards and proposed performance conditions. Try the entry preview while the final details take shape.</p><a className="button secondary" href="#registration">Explore the entry preview <span aria-hidden="true">↗</span></a><span className="quiet-note">Demo only. Entries are not being collected.</span></div><aside className="announcement"><div className="section-line"><span className="eyebrow">From the committee</span><span className="announcement-star" aria-hidden="true">✦</span></div><span className="tag">Latest update</span><h3>A new name.<br/>A shared stage.</h3><p className="preserve">{announcement}</p><a className="text-link" href="#competition">Read the competition details <span aria-hidden="true">↗</span></a></aside></section>
  </>;
}
