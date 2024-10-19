export default function Loading() {
  return (
    <div className="h-full w-full animate-pulse overflow-hidden p-6">
      <div className="h-10 w-10 rounded-2xl bg-gradient-to-l from-slate-200 to-slate-300" />

      <div className="w-full flex items-center justify-center mt-52">
        <div className="bg-gradient-to-l from-slate-200 to-slate-300  h-10 w-72 rounded-sm" />
      </div>

      <div className="bg-gradient-to-l from-slate-200 to-slate-300  h-[1px] mt-4 w-full rounded-sm" />

      <div className="mt-3 flex flex-col gap-3">
        <div className="h-2 w-full rounded-sm bg-gradient-to-l from-slate-200 to-slate-300" />
        <div className="h-2 w-full rounded-sm bg-gradient-to-l from-slate-200 to-slate-300" />
        <div className="h-2 w-full rounded-sm bg-gradient-to-l from-slate-200 to-slate-300" />
      </div>

      <div className="h-10 w-28 mt-4 rounded-sm bg-gradient-to-l from-slate-200 to-slate-300" />
    </div>
  );
}
