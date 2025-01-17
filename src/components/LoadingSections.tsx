import { LoadingDishes } from './LoadingDishes';

export function LoadingSections() {
  return (
    <>
      <div className="px-6 flex gap-2 pt-4 animate-pulse">
        <div className="bg-chip-background h-[2.063rem] rounded-2xl w-16 shrink-0" />
        <div className="bg-chip-background h-[2.063rem] rounded-2xl w-28 shrink-0" />
        <div className="bg-chip-background h-[2.063rem] rounded-2xl w-36 shrink-0" />
        <div className="bg-chip-background h-[2.063rem] rounded-2xl w-36 shrink-0" />
        <div className="bg-chip-background h-[2.063rem] rounded-2xl w-36 shrink-0" />
      </div>
      <LoadingDishes />
    </>
  );
}
