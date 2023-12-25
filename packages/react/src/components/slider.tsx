import {
  Label,
  Slider as BaseSlider,
  SliderOutput,
  type SliderProps as BaseSliderProps,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";

export interface SliderProps extends BaseSliderProps {
  label?: string;
}

function Slider({ label, ...props }: SliderProps) {
  return (
    <BaseSlider {...props}>
      <div className="flex justify-between">
        <Label className="text-sm text-neutral-950 dark:text-neutral-50">
          {label}
        </Label>
        <SliderOutput className="text-sm text-neutral-950 dark:text-neutral-50" />
      </div>
      <SliderTrack className="relative w-full h-7">
        {({ state }) => (
          <>
            <div className="absolute h-2 top-[50%] translate-y-[-50%] w-full rounded-full bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700" />
            <div
              className="absolute h-2 top-[50%] translate-y-[-50%] rounded-full bg-brand-500"
              style={{ width: `${state.getThumbPercent(0) * 100}%` }}
            />
            <SliderThumb className="h-5 w-5 top-[50%] rounded-full bg-neutral-100 border border-neutral-200 transition outline-none ring-brand-500 ring-offset-neutral-50 cursor-grab hover:bg-neutral-200 data-[dragging=true]:cursor-grabbing data-[dragging=true]:bg-brand-500 data-[focused=true]:ring-2 data-[focused=true]:ring-offset-2 dark:bg-neutral-800 dark:border-neutral-700 dark:ring-offset-neutral-950 dark:hover:bg-neutral-700" />
          </>
        )}
      </SliderTrack>
    </BaseSlider>
  );
}

Slider.displayName = "Slider";

export { Slider };
