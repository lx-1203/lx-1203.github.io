import {buildDrawingTimeline} from "./drawingTimeline";

it("orders years and dates newest first while keeping same-day media together", () => {
  const media = [
    {src: "sketch.jpg", date: "2024-03-03"},
    {src: "old.jpg", date: "2023-07-02"},
    {src: "finished.jpg", date: "2024-03-03"},
    {src: "new.jpg", date: "2025-01-23"},
    {src: "process.mp4", date: "2025-01-23"},
    {src: "december.jpg", date: "2024-12-21"}
  ];
  const original = [...media];
  const timeline = buildDrawingTimeline(media);

  expect(timeline.map(group => group.year)).toEqual(["2025", "2024", "2023"]);
  expect(timeline[1].entries.map(entry => entry.date)).toEqual([
    "2024-12-21",
    "2024-03-03"
  ]);
  expect(timeline[0].entries[0].items.map(item => item.src)).toEqual([
    "new.jpg",
    "process.mp4"
  ]);
  expect(timeline[1].entries[1].items.map(item => item.src)).toEqual([
    "sketch.jpg",
    "finished.jpg"
  ]);
  expect(media).toEqual(original);
  expect(
    timeline.flatMap(group => group.entries.flatMap(entry => entry.items))
  ).toHaveLength(media.length);
});

it("keeps undated media at the end without inventing a date", () => {
  const undated = {src: "unknown.jpg"};
  const dated = {src: "dated.jpg", date: "2024-01-17"};
  expect(buildDrawingTimeline([undated, dated])).toEqual([
    {year: "2024", entries: [{date: "2024-01-17", items: [dated]}]},
    {year: null, entries: [{date: null, items: [undated]}]}
  ]);
});

it("handles an empty drawing collection", () => {
  expect(buildDrawingTimeline([])).toEqual([]);
});
