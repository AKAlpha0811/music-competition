import { initialAnnouncement, sampleProgramme, sampleEntries } from './data';
// Replace this boundary with an API adapter when a backend is introduced.
// Returns fresh demo data; never reads/writes browser storage or sends entries.
export const demoRepository = {
  load: () => ({ announcement: initialAnnouncement, programme: sampleProgramme.map(item => ({ ...item })), entries: sampleEntries.map(item => ({ ...item })) }),
};
