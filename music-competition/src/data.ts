export const competition = {
  name: 'Echo Music Competition', shortName: 'Echo', slogan: 'Ignite Your Spark',
  school: 'Raha International School', organiser: 'Academic Committee',
  date: null as string | null, venue: null as string | null,
  timing: 'Term 2 or later', timingStatus: 'Proposed',
  audience: 'The draft uses Grade 1–5, Grade 6–9 and Grade 10–12 pools. Equivalent grades across schools and final entry conditions are to be confirmed. A mixed-grade group rule must be agreed before registration opens.',
  participatingSchools: ['KCC', 'Gardens', 'GEMS American Academy'],
  repertoire: 'Free choice of piece — performers may choose their own song or instrumental work.',
  formats: ['Solo and group performances', 'Instrumental and vocal performances'],
  proposedMinutes: 4,
  pools: [
    { name: 'Grade 1–5', awards: [0, 0, 0] },
    { name: 'Grade 6–9', awards: [50, 0, 0] },
    { name: 'Grade 10–12', awards: [50, 30, 20] },
  ],
  submissionDeadline: null as string | null,
  changeDeadline: null as string | null,
  rules: 'Draft for school and Music staff review. Solo and group instrumental or vocal performances are under consideration. Final rules must be agreed and published before entries open.',
  performanceReview: [
    'Music staff should confirm time limits, backing tracks, accompaniment, sound-check arrangements and remaining performance arrangements. Repertoire is free choice.',
    'Publish how officials handle technical interruptions and time overruns.',
  ],
  judging: 'The judging panel is not confirmed. Ms. Michelle and possible judges from Gardens and GEMS American Academy have been discussed. Planning notes also suggest one judge from KCC, one from Gardens and possibly one from GEMS American Academy. These are discussion points, not appointments; availability and conflicts of interest need checking.',
  rubric: [
    { criterion: 'Musical interpretation', points: 35 },
    { criterion: 'Technical control', points: 30 },
    { criterion: 'Rhythm and continuity', points: 20 },
    { criterion: 'Communication', points: 15 },
  ],
  judgingReview: 'Apply the same published criteria within each pool. The final panel size, score aggregation and tie-break process must be agreed before entries open.',
  awardConditions: 'Rank entries within their age pool. Non-cash recognition for Grade 1–5, group prize-sharing and the minimum entry count for each advertised award are to be agreed. Confirmed cash allocations do not yet confirm award conditions.',
  budget: {
    allocationNote: 'AED 150 is the full cash prize allocation across all pools. Do not multiply it by the number of participating schools unless the organiser approves separate school awards.',
    schoolSupport: 'Trophies, medals and printing are expected to come from school support. The scope of that support is to be confirmed.',
    otherCosts: 'Venue, sound equipment, accompaniment, website hosting and payment charges have no confirmed cash cost yet. These costs are separate from the cash prize allocation.',
    responsibility: 'Agree which school or committee pays each expense, who collects fees and how any surplus will be used. Return unspent school funding in accordance with the agreed arrangement. Fees are not confirmed.',
  },
  operations: 'Explore PAC support for sound, stage changes and hosting. Staff should agree safeguarding, supervision and any recording or publication permissions through the school’s existing procedures.',
  team: [{ name: 'Jua', role: 'Music Lead' }, { name: 'Hyunwoo', role: 'Co-planning & PAC coordination' }],
};
export type ProgrammeItem = { id: string; performer: string; piece: string; artist: string; type: string };
export const sampleProgramme: ProgrammeItem[] = [
  { id: 'sample-1', performer: 'Sample Solo A', piece: 'Morning Sketch', artist: 'Sample composition', type: 'Instrumental · Piano' },
  { id: 'sample-2', performer: 'Sample Ensemble B', piece: 'A Little Brighter', artist: 'Sample composition', type: 'Vocal · Group' },
  { id: 'sample-3', performer: 'Sample Solo C', piece: 'After the Rain', artist: 'Sample composition', type: 'Instrumental · Guitar' },
];
export const sampleEntries = [
  { id: 'DEMO-001', name: 'Sample Solo A', grade: 'Grade 4', school: 'Sample School A', mode: 'Solo', type: 'Instrumental', duration: '3:20' },
  { id: 'DEMO-002', name: 'Sample Ensemble B', grade: 'Grade 8', school: 'Sample School B', mode: 'Group', type: 'Vocal', duration: '3:45' },
  { id: 'DEMO-003', name: 'Sample Solo C', grade: 'Grade 11', school: 'Sample School C', mode: 'Solo', type: 'Instrumental', duration: '2:50' },
];
export const initialAnnouncement = 'Introducing Echo Music Competition. The format and rules draft is ready for school and Music staff review. Three grade pools are proposed, and the cash prize allocation is confirmed at AED 150 across all pools. KCC, Gardens and GEMS American Academy are confirmed as participating schools, and repertoire is free choice. Dates and final entry rules are to be confirmed. Entries are not open.';
export const resultPlaces = ['1st place', '2nd place', '3rd place'];
export const cashPrizeTotal = competition.pools.reduce((total, pool) => total + pool.awards.reduce((sum, amount) => sum + amount, 0), 0);
