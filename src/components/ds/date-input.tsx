"use client"

import * as React from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ds/input"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DateInput() {
  const [date, setDate] = React.useState<Date | undefined>()
  const [inputValue, setInputValue] = React.useState("")

  const minYear = 1900
  const maxYear = new Date().getFullYear()

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value.replace(/\D/g, "")

    value = value.slice(0, 8)

    if (value.length > 4) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`
    } else if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`
    }

    setInputValue(value)

    if (value.length === 10) {
      const [day, month, year] = value.split("/").map(Number)

      if (
        year >= minYear &&
        year <= maxYear &&
        month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= 31
      ) {
        const parsedDate = new Date(year, month - 1, day)

        if (!isNaN(parsedDate.getTime())) {
          setDate(parsedDate)
        }
      }
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full">
          <Input
            value={inputValue}
            onChange={handleDateChange}
            placeholder="dd/mm/aaaa"
            inputMode="numeric"
            className="w-full border-[1.5px] rounded-full h-12 shadow-none placeholder:text-zinc-300 placeholder:font-inter placeholder:font-light"
          />
        </div>
      </PopoverTrigger>

      <PopoverContent className=" w-auto p-1 border border-gray-200 rounded-xl shadow-md">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
             if (!selectedDate) return

               setDate(selectedDate)

               setInputValue(
                format(selectedDate, "dd/MM/yyyy", {
                 locale: ptBR,
            })
         )
    }}
          captionLayout="dropdown"
          disabled={{
          before: new Date(1900, 0, 1),
          after: new Date(),
  }}
/>
      </PopoverContent>
    </Popover>
  )
}