import { P } from '@/components/typography'
import { TabsContent } from '@/components/ui/tabs'
import Image from 'next/image'
import { FC } from 'react'

export interface IPolicyLists {
  id: number
  policy: string
}
export interface ISummaryHeadings {
  id: number
  icon: string
  heading: string
}
export interface ISummaryMain {
  id: number
  icon: string
  heading: string
}

export const summaryMain: ISummaryMain[] = [
  {
    id: 1,
    icon: '/icons/hotel.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 2,
    icon: '/icons/activity.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 3,
    icon: '/icons/activity.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 4,
    icon: '/icons/activity.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur.',
  },
  {
    id: 5,
    icon: '/icons/activity.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 6,
    icon: '/icons/chamuch.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur.',
  },
  {
    id: 7,
    icon: '/icons/chamuch.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur.',
  },
  {
    id: 8,
    icon: '/icons/hotel.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur.',
  },
]

export const summaryHeadings: ISummaryHeadings[] = [
  {
    id: 1,
    icon: '/icons/flight2.svg',
    heading:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at.',
  },
  {
    id: 2,
    icon: '/icons/transfer.svg',
    heading: 'Lorem ipsum dolor sit amet consectetur.',
  },
]
export const policyLists: IPolicyLists[] = [
  {
    id: 1,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at. Viverra gravida mi eu turpis morbi. Auctor ut consequat commodo sit. Dis tellus turpis sed leo urna vel sed velit tempor.',
  },
  {
    id: 2,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at. Viverra gravida mi eu turpis morbi. Auctor ut consequat commodo sit. Dis tellus turpis sed leo urna vel sed velit tempor.',
  },
  {
    id: 3,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at.',
  },
  {
    id: 4,
    policy:
      'Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque nisl aliquet ipsum at. Viverra gravida mi eu turpis morbi. Auctor ut consequat commodo sit. Dis tellus turpis sed leo urna vel sed velit tempor.',
  },
]

export const Summary: FC = () => {
  return (
    <TabsContent
      value="summary"
      className="w-full mt-0 bg-card-BG-Color-2/50 md:border border-secondary/5 md:rounded"
    >
      <div className="mt-[29px] md:mt-[22px] mb-[15px] md:mb-[35px] mx-[30px] flex flex-col items-start justify-center gap-[10px]">
        {summaryHeadings.map(({ id, icon, heading }) => (
          <div key={id} className="flex items-center justify-center gap-4">
            <Image src={icon} width={12} height={12} alt="" />
            <P variant="P1">{heading}</P>
          </div>
        ))}
      </div>

      <div className="bg-accent py-3 md:py-[18px] px-[14px] md:px-[30px] flex items-start justify-between mb-[19px] md:mb-[31px] rounded">
        <P variant="P1" className="font-bold">
          Krabi - Nights Stay
        </P>
      </div>

      <div className="md:pl-[30px] md:pr-6 pb-5 md:pb-[27px] flex flex-col md:flex-row items-start justify-center gap-5">
        <div className="w-full md:max-w-[152px] md:min-w-[152px] py-[10px] px-5 md::pt-[15px] md:pr-[23px] md:pb-7 md:pl-7 bg-white border border-secondary/10 md:border-primary/80 rounded-sm shadow-SearchTour md:shadow-none">
          <P variant="P1" className="font-bold mb-[2px] md:mb-[14px]">
            Day Plan
          </P>
          <P variant="P1">
            <span className="text-primary">20 Dec, Sat</span> 21 Dec, Sun 22 Dec, Mon 23 Dec, Tue 24
            Dec, Wed 25 Dec, Thu 26 Dec, Fri
          </P>
        </div>

        <div className="bg-white border rounded-[5px] pt-1 md:pt-[17px] pb-6 md:pb-[12px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[10px] gap-x-[70px] px-[14px] md:px-[25px] pb-[10px]">
            {summaryMain.map(({ id, icon, heading }) => (
              <div key={id} className="flex items-start justify-start gap-4">
                <Image src={icon} width={12} height={12} alt="" className="mt-[6px]" />
                <P variant="P1">{heading}</P>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-start gap-4 border-t px-[14px] md:px-[25px] pt-[10px]">
            <Image src="/icons/flight2.svg" width={12} height={12} alt="" />
            <P variant="P1">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
            </P>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}
