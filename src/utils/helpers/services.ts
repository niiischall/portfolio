export const getStartDuration = (start: string) => {
  return new Date(start).toLocaleString('default', { month: 'long' }) + ', ' + new Date(start).getFullYear();
};

export const getEndDuration = (end: string) => {
  const today = Date.now();

  const currentMonth = new Date(today).getMonth();
  const currentYear = new Date(today).getFullYear();

  const startMonth = new Date(end).getMonth();
  const startYear = new Date(end).getFullYear();

  if (currentMonth === startMonth && currentYear === startYear) {
    return 'Present';
  }

  return new Date(end).toLocaleString('default', { month: 'long' }) + ', ' + new Date(end).getFullYear();
};
