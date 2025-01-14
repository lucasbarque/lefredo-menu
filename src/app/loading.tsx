import Image from 'next/image';

export default function Loading() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Image
        src="/splash.jpg"
        fill
        alt=""
        quality={100}
        className="object-cover animate-pulse"
      />

      <Image
        src="/logo.svg"
        alt=""
        width={211}
        height={96}
        quality={100}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-pulse"
      />
    </div>
    // <div className="h-full w-full animate-pulse overflow-hidden p-6">
    //   <div className="flex flex-col gap-3">
    //     <div className="h-8 w-28 rounded-md bg-gradient-to-l from-slate-200 to-slate-300" />
    //     <div className="h-8 w-40 rounded-md bg-gradient-to-l from-slate-200 to-slate-300" />
    //   </div>

    //   <div className="mt-3 flex gap-3">
    //     <div className="h-8 w-28 shrink-0 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
    //     <div className="h-8 w-40  shrink-0 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
    //     <div className="h-8 w-40  shrink-0 rounded-full bg-gradient-to-l from-slate-200 to-slate-300" />
    //   </div>

    //   <div className="mt-8">
    //     <div className="h-6 w-40 rounded-md bg-gradient-to-l from-slate-200 to-slate-300" />
    //   </div>

    //   <div className="mt-3">
    //     <div className="w-full rounded-md bg-gradient-to-l from-slate-200 to-slate-300 p-4">
    //       <div className="flex gap-2">
    //         <div className="h-24 w-24 shrink-0 rounded-md bg-gradient-to-l from-slate-400 to-slate-300" />
    //         <div className="flex w-full flex-col gap-2">
    //           <div className="h-3 w-3/4 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //         </div>
    //       </div>
    //       <div className="mt-2 ml-auto h-3 w-20 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //     </div>
    //   </div>
    //   <div className="mt-3">
    //     <div className="w-full rounded-md bg-gradient-to-l from-slate-200 to-slate-300 p-4">
    //       <div className="flex gap-2">
    //         <div className="h-24 w-24 shrink-0 rounded-md bg-gradient-to-l from-slate-400 to-slate-300" />
    //         <div className="flex w-full flex-col gap-2">
    //           <div className="h-3 w-3/4 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //         </div>
    //       </div>
    //       <div className="mt-2 ml-auto h-3 w-20 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //     </div>
    //   </div>
    //   <div className="mt-3">
    //     <div className="w-full rounded-md bg-gradient-to-l from-slate-200 to-slate-300 p-4">
    //       <div className="flex gap-2">
    //         <div className="h-24 w-24 shrink-0 rounded-md bg-gradient-to-l from-slate-400 to-slate-300" />
    //         <div className="flex w-full flex-col gap-2">
    //           <div className="h-3 w-3/4 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //         </div>
    //       </div>
    //       <div className="mt-2 ml-auto h-3 w-20 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //     </div>
    //   </div>
    //   <div className="mt-3">
    //     <div className="w-full rounded-md bg-gradient-to-l from-slate-200 to-slate-300 p-4">
    //       <div className="flex gap-2">
    //         <div className="h-24 w-24 shrink-0 rounded-md bg-gradient-to-l from-slate-400 to-slate-300" />
    //         <div className="flex w-full flex-col gap-2">
    //           <div className="h-3 w-3/4 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //           <div className="h-3 w-full rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //         </div>
    //       </div>
    //       <div className="mt-2 ml-auto h-3 w-20 rounded-md bg-gradient-to-l from-slate-300 to-slate-400" />
    //     </div>
    //   </div>
    // </div>
  );
}
