'use client';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function parseDate(str) {
  if (str.trim() === 'Present') return new Date();
  const [mon, year] = str.trim().split(' ');
  return new Date(parseInt(year), MONTHS.indexOf(mon), 1);
}

function calcDuration(period) {
  const dashIndex = period.lastIndexOf(' - ');
  const startStr = period.slice(0, dashIndex);
  const endStr = period.slice(dashIndex + 3);
  const isPresent = endStr.trim() === 'Present';

  const start = parseDate(startStr);
  const end = parseDate(endStr);

  const diffMonths = isPresent
    ? (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    : (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  if (diffMonths <= 0) return '< 1 mo';

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  if (years === 0) return `${months} mo${months !== 1 ? 's' : ''}`;
  if (months === 0) return `${years} yr${years !== 1 ? 's' : ''}`;
  return `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`;
}

export default function ExperienceDuration({ period }) {
  return <span className="exp-duration">{calcDuration(period)}</span>;
}
