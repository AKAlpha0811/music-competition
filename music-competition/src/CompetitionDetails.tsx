import { competition as c, cashPrizeTotal, resultPlaces } from './data';

export function ConfirmedDetails() {
  return <section className="panel section-space"><span className="tag">Confirmed</span><h2>Participating schools & repertoire</h2><div className="pool-list">{c.participatingSchools.map(school => <span key={school}>{school}</span>)}</div><h3>Free-choice repertoire</h3><p>{c.repertoire}</p></section>;
}

export function AwardSchedule() {
  return <section className="prize-section">
    <div className="section-line"><div><span className="eyebrow">Cash prizes by age pool</span><h2>Confirmed prize allocation</h2></div><span className="tag">AED {cashPrizeTotal} total</span></div>
    <p className="prize-copy">{c.budget.allocationNote}</p>
    <div className="table-scroll"><table className="award-table">
      <caption className="sr-only">Confirmed cash prize allocation in AED by grade pool</caption>
      <thead><tr><th scope="col">Pool</th>{resultPlaces.map(place => <th scope="col" key={place}>{place}</th>)}<th scope="col">Cash total</th></tr></thead>
      <tbody>{c.pools.map(pool => <tr key={pool.name}><th scope="row">{pool.name}</th>{pool.awards.map((amount, index) => <td key={index}>{amount ? `AED ${amount}` : 'No cash award'}</td>)}<td>AED {pool.awards.reduce((sum, amount) => sum + amount, 0)}</td></tr>)}</tbody>
      <tfoot><tr><th scope="row" colSpan={4}>All pools</th><td>AED {cashPrizeTotal}</td></tr></tfoot>
    </table></div>
    <p className="prize-copy award-note">{c.awardConditions}</p>
  </section>;
}

export function CompetitionDetails() {
  return <>
    <section className="notice"><strong>Music format and rules — draft for school and Music staff review.</strong><span>Participating schools, free-choice repertoire and the cash prize allocation below are confirmed. The format, eligibility details, judging and event arrangements remain subject to review.</span></section>
    <div className="editorial-grid"><section><span className="tag">Confirmed</span><h2>Built by students.<br/>For a shared stage.</h2><p>Organised by the {c.organiser}. This year’s slogan is “{c.slogan}”.</p><div className="team">{c.team.map(person => <div key={person.name}><strong>{person.name}</strong><span>{person.role}</span></div>)}</div></section>
      <section className="panel"><span className="tag">Draft · eligibility to be confirmed</span><h2>Find your grade pool.</h2><div className="pool-list">{c.pools.map(pool => <span key={pool.name}>{pool.name}</span>)}</div><p>{c.audience}</p><dl className="details"><div><dt>Timing</dt><dd>{c.timing} — {c.timingStatus}<br/><small>Exact date: {c.date ?? 'To be confirmed'}</small></dd></div><div><dt>Venue</dt><dd>{c.venue ?? 'To be confirmed'}</dd></div></dl></section></div>
    <ConfirmedDetails/>
    <section className="section-space"><div className="section-line"><h2>Ways to take the stage</h2><span className="tag">Proposed</span></div><div className="format-row"><div><span className="large-number">01 / 02</span><h3>Solo or together.</h3><p>{c.formats.join('. ')} are under consideration. Final categories and performance format are to be confirmed.</p></div><div><span className="large-number">{String(c.proposedMinutes).padStart(2, '0')}:00</span><h3>A proposed maximum.</h3><p>A maximum of {c.proposedMinutes} minutes per performance is proposed. Music staff must confirm the final time limit.</p></div></div></section>
    <div className="editorial-grid section-space"><section><span className="eyebrow">Before entries open</span><h2>Entry information & deadlines</h2><p>Provide performer name, grade, school and school contact details. Groups should include the group name and every member’s grade. Include the piece title, composer or artist, expected length and equipment needs.</p><dl className="details"><div><dt>Submission deadline</dt><dd>{c.submissionDeadline ?? 'To be confirmed'}</dd></div><div><dt>Change deadline</dt><dd>{c.changeDeadline ?? 'To be confirmed'}</dd></div></dl><p>Both deadlines and the mixed-grade group rule must be agreed before registration opens.</p></section><section><span className="eyebrow">Performance conditions</span><h2>Prepare for the stage.</h2><p>{c.rules}</p>{c.performanceReview.map(item => <p key={item}>{item}</p>)}</section></div>
    <section className="section-space"><div className="section-line"><h2>Judging & criteria</h2><span className="tag">Proposed · not final</span></div><p>{c.judging}</p><div className="table-scroll"><table><caption className="sr-only">Proposed rubric, 100 points per judge</caption><thead><tr><th scope="col">Criterion</th><th scope="col">Points per judge</th></tr></thead><tbody>{c.rubric.map(item => <tr key={item.criterion}><th scope="row">{item.criterion}</th><td>{item.points}</td></tr>)}</tbody><tfoot><tr><th scope="row">Total per judge</th><td>{c.rubric.reduce((sum, item) => sum + item.points, 0)}</td></tr></tfoot></table></div><p className="footnote">{c.judgingReview}</p></section>
    <AwardSchedule/>
    <div className="editorial-grid section-space"><section><span className="eyebrow">Beyond the prize fund</span><h2>Other costs & support</h2><p>{c.budget.schoolSupport}</p><p>{c.budget.otherCosts}</p><p>{c.budget.responsibility}</p></section><section><span className="eyebrow">Event operation · to be agreed</span><h2>A supported stage.</h2><p>{c.operations}</p></section></div>
  </>;
}
