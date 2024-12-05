import { P } from '@/components/typography'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import Image from 'next/image'
import { FC } from 'react'

export interface IStarRatings {
  id: number
  star: string
  starIcon: string
}
export interface IUserRatings {
  id: number
  rating: string
}
export interface ISmallFilter {
  id: number
  title: string
}

export const smallFilter: ISmallFilter[] = [
  {
    id: 1,
    title: 'Rating',
  },
  {
    id: 2,
    title: 'Location',
  },
  {
    id: 3,
    title: 'User Rating',
  },
  {
    id: 4,
    title: 'Hotel',
  },
]

export const userRatings: IUserRatings[] = [
  {
    id: 1,
    rating: '3 & Above',
  },
  {
    id: 2,
    rating: '4 & Above',
  },
  {
    id: 3,
    rating: '4.5 & Above',
  },
]

export const starRatings: IStarRatings[] = [
  {
    id: 1,
    star: '3',
    starIcon: '/icons/star-gray.svg',
  },
  {
    id: 2,
    star: '4',
    starIcon: '/icons/star-gray.svg',
  },
  {
    id: 3,
    star: '5',
    starIcon: '/icons/star-gray.svg',
  },
]

export const select = (
  <Select>
    <SelectTrigger className="w-[180px] bg-card-BG-Color-2/40">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
    </SelectContent>
  </Select>
)

export const DialogFilter: FC = () => {
  return (
    <div>
      <div className="hidden lg:block lg:mb-[25px]">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-[15px]">
            <P variant="P1">Star Rating</P>
            <ToggleGroup type="single" className="gap-3">
              {starRatings.map(({ id, star, starIcon }) => (
                <ToggleGroupItem
                  value={star}
                  key={id}
                  className="px-0 border rounded-[2px] bg-card-BG-Color-2/40"
                >
                  <P variant="P1" className="text-secondary">
                    {star}
                  </P>
                  <Image src={starIcon} alt="search logo" width={10} height={10} />
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex flex-col items-start justify-center gap-[15px]">
            <P variant="P1">Location</P>
            {select}
          </div>

          <div className="flex flex-col items-start justify-center gap-[15px]">
            <P variant="P1">User Rating</P>
            <ToggleGroup type="single" className="gap-3">
              {userRatings.map(({ id, rating }) => (
                <ToggleGroupItem
                  value={rating}
                  key={id}
                  className="py-2 px-[11px] border rounded-[2px] bg-card-BG-Color-2/40"
                >
                  <P variant="P1" className="text-secondary">
                    {rating}
                  </P>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex flex-col items-start justify-center gap-[15px]">
            <P variant="P1">Hotel Type</P>
            {select}
          </div>

          <div className="flex flex-col items-start justify-center gap-[15px]">
            <P variant="P1">Filters</P>
            <Image src="/icons/filters.svg" alt="search logo" width={36} height={36} />
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full flex items-center justify-center gap-[7px]">
        {smallFilter.map(({ id, title }) => (
          <Select key={id}>
            <SelectTrigger className="px-2 py-[7px]">
              <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        ))}
        <div className="flex items-center justify-center gap-[4px] ml-[7px]">
          <P variant="P1">Filters</P>
          <Image src="/icons/filters.svg" alt="search logo" width={14} height={14} />
        </div>
      </div>

      <P variant="P1" className="hidden lg:block">
        Showing 12 Stays in Krabi <span className="font-bold">Sort By</span>{' '}
        <span className="text-primary">Popularity</span>
      </P>
    </div>
  )
}
