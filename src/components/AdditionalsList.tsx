import * as RadioGroup from '@radix-ui/react-radio-group';

export function AdditionalsList() {
  return (
    <form>
      <RadioGroup.Root
        className="flex flex-col gap-2"
        defaultValue="nenhum"
        aria-label="View density"
      >
        <div className="flex items-center">
          <RadioGroup.Item
            className="size-[0.813rem] data-[state=checked]:border-brand-primary cursor-default rounded-full bg-white border border-text-default outline-none hover:bg-violet3 focus:border-brand-primary"
            value="chantilly"
            id="r1"
          >
            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[7px] after:rounded-full after:bg-brand-primary" />
          </RadioGroup.Item>
          <label
            className="pl-1 text-sm font-medium leading-none text-text-default"
            htmlFor="r1"
          >
            Chantilly - R$ 3,00
          </label>
        </div>
        <div className="flex items-center">
          <RadioGroup.Item
            className="size-[0.813rem] data-[state=checked]:border-brand-primary cursor-default rounded-full bg-white border border-text-default outline-none hover:bg-violet3 focus:border-brand-primary"
            value="nutella"
            id="r2"
          >
            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[7px] after:rounded-full after:bg-brand-primary" />
          </RadioGroup.Item>
          <label
            className="pl-1 text-sm font-medium leading-none text-text-default"
            htmlFor="r2"
          >
            Borda de Nutella - R$ 4,00
          </label>
        </div>
        <div className="flex items-center">
          <RadioGroup.Item
            className="size-[0.813rem] cursor-default rounded-full data-[state=checked]:border-brand-primary  bg-white border border-text-default outline-none hover:bg-violet3 focus:border-brand-primary"
            value="nenhum"
            id="r3"
          >
            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[7px] after:rounded-full after:bg-brand-primary" />
          </RadioGroup.Item>
          <label
            className="pl-1 text-sm font-medium leading-none text-text-default"
            htmlFor="r3"
          >
            Nenhum
          </label>
        </div>
      </RadioGroup.Root>
    </form>
  );
}
