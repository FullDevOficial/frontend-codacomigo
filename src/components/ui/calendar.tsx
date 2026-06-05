"use client"

import * as React from "react"
import { ptBR } from "date-fns/locale"

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames, type ClassNames, type DayPickerProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button} from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type CalendarProps = DayPickerProps & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "dropdown",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  const mergedClassNames = {
    root: cn("inline-block", defaultClassNames.root),
    months: cn(
      "relative flex flex-col gap-0 md:flex-row",
      defaultClassNames.months
    ),
    month: cn(("flex flex-col gap-0"), defaultClassNames.month),
    nav: cn(
      "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
      defaultClassNames.nav
    ),
    button_previous: cn("hidden"),
    button_next: cn("hidden"),
    month_caption: cn(
      "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
      defaultClassNames.month_caption
    ),
    dropdowns: cn(
  "flex h-[--cell-size] w-full items-center justify-center gap-2 text-sm font-medium",
  defaultClassNames.dropdowns
),
    dropdown_root: cn(
     "relative rounded-lg border border-gray-200 bg-white shadow-none",
      defaultClassNames.dropdown_root
    ),
    dropdown: cn(
      "bg-popover absolute inset-0 opacity-0",
      defaultClassNames.dropdown
    ),
    caption_label: cn(
      "select-none font-medium",
      captionLayout === "label"
        ? "text-sm"
        : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
      defaultClassNames.caption_label
    ),
    weekdays: cn("flex", defaultClassNames.weekdays),
    weekday: cn(
      "text-muted-foreground flex-1 select-none rounded-md text-[10px] font-normal",
      defaultClassNames.weekday
    ),
    week: cn("mt-0.2 flex w-full", defaultClassNames.week),
    week_number_header: cn(
      "w-[--cell-size] select-none",
      defaultClassNames.week_number_header
    ),
    week_number: cn(
      "text-muted-foreground select-none text-[0.8rem]",
      defaultClassNames.week_number
    ),
    day: cn(
      "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
      defaultClassNames.day
    ),
    range_start: cn(
      "bg-accent rounded-l-md",
      defaultClassNames.range_start
    ),
    range_middle: cn("rounded-none", defaultClassNames.range_middle),
    range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
    today: cn(
      "text-black-700 rounded-md data-[selected=true]:rounded-none",
      defaultClassNames.today
    ),
    outside: cn(
      "text-muted-foreground aria-selected:text-muted-foreground",
      defaultClassNames.outside
    ),
    disabled: cn(
      "text-muted-foreground opacity-50",
      defaultClassNames.disabled
    ),
    hidden: cn("invisible", defaultClassNames.hidden),
    ...classNames,
  } as Partial<ClassNames>

  const dayPickerProps = {
    locale: ptBR,
    showOutsideDays,
    className: cn(
    "bg-background group/calendar p-1 [--cell-size:1.6rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
      String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
      String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
      className
    ),
    captionLayout,
    formatters: {
       formatMonthDropdown: (date: Date) => {
        const months = [
         "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ]
      return months[date.getMonth()]
    },
      ...formatters,
    },
    classNames: mergedClassNames,
    components: {

      Dropdown: ({ value, onChange, options }: any) => (
  <Select
    value={String(value)}
    onValueChange={(v) =>
  onChange?.({
    target: {
      value: v,
    },
  } as React.ChangeEvent<HTMLSelectElement>)
}
  >
    <SelectTrigger
  className="
    h-8
    min-w-[80px]
    rounded-full
    border-zinc-200
    text-xs
    font-medium
    shadow-none
  "
>
      <SelectValue
  placeholder={
    options?.find((o: any) => String(o.value) === String(value))?.label
  }
/>
    </SelectTrigger>

    <SelectContent>
      {options?.map((option: any) => (
        <SelectItem
  key={option.value}
  value={String(option.value)}
  className="text-xs"
>
  {option.label}
</SelectItem>
      ))}
    </SelectContent>
  </Select>
),
      Root: ({ className, rootRef, ...props }) => {
        return (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={cn(className)}
            {...props}
          />
        )
      },
      Chevron: ({ className, orientation, ...props }) => {
        if (orientation === "left") {
          return (
            <ChevronLeftIcon className={cn("size-4", className)} {...props} />
          )
        }

        if (orientation === "right") {
          return (
            <ChevronRightIcon
              className={cn("size-4", className)}
              {...props}
            />
          )
        }

        return (
              <ChevronDownIcon
                 className={cn("size-3 text-red-700", className)}
                 {...props}
              />
)
      },
      DayButton: CalendarDayButton,
      WeekNumber: ({ children, ...props }) => {
        return (
          <td {...props}>
            <div className="flex size-[--cell-size] items-center justify-center text-center">
              {children}
            </div>
          </td>
        )
      },
      ...components,
    },
    ...props,
  } as DayPickerProps

  return <DayPicker {...dayPickerProps} />
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  console.log(className)
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "h-6 w-6 rounded-full border-0 shadow-none ring-0 data-[selected-single=true]:bg-red-100 data-[selected-single=true]:text-black hover:bg-red-50 hover:text-black focus:ring-0 focus-visible:ring-0 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
