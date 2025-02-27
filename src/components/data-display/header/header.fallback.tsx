export function HeaderFallback() {
  return (
    <div className='animate-pulse p-6'>
      <div className='flex items-center justify-between'>
        <div className='bg-chip-background h-14 w-30 rounded-md' />
        <div className='bg-chip-background h-10 w-10 rounded-md' />
      </div>
      <div className='bg-chip-background mt-4 h-4 w-full rounded-md' />
      <div className='bg-chip-background mt-1 h-4 w-full rounded-md' />
      <div className='bg-chip-background mt-1 h-4 w-full rounded-md' />
    </div>
  );
}
