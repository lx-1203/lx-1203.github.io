export function buildDrawingTimeline(media) {
  const byDate = new Map();
  media.forEach(item => {
    const date = item.date || "";
    if (!byDate.has(date)) byDate.set(date, []);
    byDate.get(date).push(item);
  });

  const byYear = new Map();
  [...byDate.keys()]
    .sort((a, b) => b.localeCompare(a))
    .forEach(date => {
      const year = date ? date.slice(0, 4) : null;
      if (!byYear.has(year)) byYear.set(year, {year, entries: []});
      byYear
        .get(year)
        .entries.push({date: date || null, items: byDate.get(date)});
    });

  return [...byYear.values()];
}
