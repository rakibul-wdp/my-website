import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { FC } from 'react'

export interface IPaginationLinks {
  id: number
}

export const paginationLinks: IPaginationLinks[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
]

export const PaginationSection: FC = () => {
  return (
    <Pagination className="mt-[14px] md:mt-[22px]">
      <PaginationContent className="gap-[10px]">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-transparent hover:bg-primary border py-[15.98px] px-[17px] rounded-full"
          />
        </PaginationItem>
        {paginationLinks.map(({ id }) => (
          <PaginationItem key={id}>
            <PaginationLink
              href="#"
              className="bg-transparent hover:bg-primary border py-[14px] px-[21px] rounded-full"
            >
              {id}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-transparent hover:bg-primary border py-[15.98px] px-[17px] rounded-full"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
