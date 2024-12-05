import { P, SubTitle, Title } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

export interface IFlightTimes {
  id: number
  when: string
  time: string
}
export interface IFlightDetails {
  id: number
  icon: string
  label: string
  title: string
}
export interface IFlights {
  id: number
  flightIcon: string
  flightTimes: IFlightTimes[]
  flightDetails: IFlightDetails[]
}
export interface IHotelTimes {
  id: number
  when: string
  time: string
}
export interface IHOtelDetails {
  id: number
  icon: string
  label: string
  title: string
}
export interface IHotels {
  id: number
  hotelIcon: string
  hotelTimes: IHotelTimes[]
  hotelDetails: IHOtelDetails[]
}

export const hotels: IHotels[] = [
  {
    id: 1,
    hotelIcon: '/images/hotels-1.png',
    hotelTimes: [
      {
        id: 1,
        when: 'Check-In',
        time: 'Sun, Dec 22',
      },
      {
        id: 2,
        when: 'Check Out',
        time: 'Mon, Dec 22',
      },
    ],
    hotelDetails: [
      {
        id: 1,
        icon: '/icons/flight-time.svg',
        label: 'Check-In time',
        title: '6:40 am',
      },
      {
        id: 2,
        icon: '/icons/gate.svg',
        label: 'Room no.',
        title: 'On arrival',
      },
      {
        id: 3,
        icon: '/icons/flight-time.svg',
        label: 'Check-out time',
        title: '10:00am',
      },
    ],
  },
  {
    id: 2,
    hotelIcon: '/images/hotels-2.png',
    hotelTimes: [
      {
        id: 1,
        when: 'Check-In',
        time: 'Thur, Jun 2',
      },
      {
        id: 2,
        when: 'Check Out',
        time: 'Sat, Jun 4',
      },
    ],
    hotelDetails: [
      {
        id: 1,
        icon: '/icons/flight-time.svg',
        label: 'Check-In time',
        title: '1:40 am',
      },
      {
        id: 2,
        icon: '/icons/gate.svg',
        label: 'Room no.',
        title: 'On arrival',
      },
      {
        id: 3,
        icon: '/icons/flight-time.svg',
        label: 'Check-out time',
        title: '12:00pm',
      },
    ],
  },
]

export const flights: IFlights[] = [
  {
    id: 1,
    flightIcon: '/images/flights-1.svg',
    flightTimes: [
      {
        id: 1,
        when: 'IN 230',
        time: '11:00 pm',
      },
      {
        id: 2,
        when: 'IN 230',
        time: '6:00 am',
      },
    ],
    flightDetails: [
      {
        id: 1,
        icon: '/icons/date.svg',
        label: 'Date',
        title: '12-11-22',
      },
      {
        id: 2,
        icon: '/icons/gate.svg',
        label: 'Gate',
        title: '2B',
      },
      {
        id: 3,
        icon: '/icons/flight-time.svg',
        label: 'Flight time',
        title: 'IN 230(6 hrs 40min)',
      },
      {
        id: 4,
        icon: '/icons/seat-no.svg',
        label: 'Seat no.',
        title: '22',
      },
    ],
  },
  {
    id: 2,
    flightIcon: '/images/flights-2.png',
    flightTimes: [
      {
        id: 1,
        when: 'IN 230',
        time: '11:00 pm',
      },
      {
        id: 2,
        when: 'IN 230',
        time: '6:00 am',
      },
    ],
    flightDetails: [
      {
        id: 1,
        icon: '/icons/date.svg',
        label: 'Date',
        title: '12-11-22',
      },
      {
        id: 2,
        icon: '/icons/gate.svg',
        label: 'Gate',
        title: '2B',
      },
      {
        id: 3,
        icon: '/icons/flight-time.svg',
        label: 'Flight time',
        title: 'IN 230(6 hrs 40min)',
      },
      {
        id: 4,
        icon: '/icons/seat-no.svg',
        label: 'Seat no.',
        title: '22',
      },
    ],
  },
]

export const History: FC = () => {
  return (
    <TabsContent value="history" className="w-full">
      <Title variant="H3" className="mb-[23px] md:mb-[27px]">
        History
      </Title>
      <div
        className={cn(
          'mt-0 bg-[#F7F8FA] border border-secondary/5 rounded md:rounded-[10px] p-[10px] md:p-[30px] pb-4 md:pb-[57px]',
        )}
      >
        <div className="w-full flex items-center justify-between mb-[15px] md:mb-10">
          <SubTitle variant="H4">Flights</SubTitle>
          <Button variant="outline" size="default">
            Sell all
          </Button>
        </div>

        <div className="w-full flex flex-col items-center justify-between gap-[10.5px] md:gap-[38px]">
          {flights.map(({ id, flightIcon, flightTimes, flightDetails }) => (
            <div
              className={cn(
                'relative w-full flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0',
                id !== 2 &&
                  'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b after:border-secondary/30 after:-mx-[10px] pb-[10.5px] md:after:hidden',
              )}
              key={id}
            >
              <div className="flex items-start md:items-center justify-between gap-[10px] md:gap-[66px]">
                <Image
                  src={flightIcon}
                  width={80}
                  height={80}
                  alt="flights"
                  className={cn(
                    'border-[0.5px] rounded-[8px]',
                    id === 1
                      ? 'py-[13px] md:py-[32.3px] px-1 md:px-[11.53px]'
                      : 'py-1 md:py-[22px] px-[7px] md:px-[15px]',
                  )}
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[50px] ml-1 md:ml-0 mr-0 md:mr-[17px]">
                  {flightTimes.map(({ id, when, time }) => (
                    <div
                      className="flex flex-col items-start justify-center gap-[0.5px] md:gap-2"
                      key={id}
                    >
                      <P variant="P1">{when}</P>
                      <SubTitle variant="H5" className="font-semibold">
                        {time}
                      </SubTitle>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 items-start justify-start gap-y-2 gap-x-[10px] md:gap-x-[33px]">
                  {flightDetails.map(({ id, icon, label, title }) => (
                    <div
                      className="flex items-center justify-start gap-[3px] md:gap-[15px]"
                      key={id}
                    >
                      <Image src={icon} width={16} height={16} alt="date" />
                      <div className="flex md:flex-col items-center md:items-start gap-[3px] md:gap-0">
                        <P variant="P1" className="text-secondary">
                          {label}
                        </P>
                        <P variant="P1" className="font-semibold">
                          {title}
                        </P>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-[13px] md:gap-5">
                <Button variant="default" size="default">
                  Download ticket
                </Button>
                <Button variant="outline" size="default">
                  <Image
                    src="/icons/right-arrow.svg"
                    width={5}
                    height={9}
                    alt="right arrow"
                    className="w-4 h-4"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          'mt-2 md:mt-[18px] bg-[#F7F8FA] border border-secondary/5 rounded md:rounded-[10px] p-[10px] md:p-[30px] pb-4 md:pb-[57px]',
        )}
      >
        <div className="w-full flex items-center justify-between mb-[15px] md:mb-10">
          <SubTitle variant="H4">Hotels</SubTitle>
          <Button variant="outline" size="default">
            Sell all
          </Button>
        </div>

        <div className="w-full flex flex-col items-center justify-between gap-[10.5px] md:gap-[38px]">
          {hotels.map(({ id, hotelIcon, hotelTimes, hotelDetails }) => (
            <div
              className={cn(
                'relative w-full flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0',
                id !== 2 &&
                  'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b after:border-secondary/30 after:-mx-[10px] pb-[10.5px] md:after:hidden',
              )}
              key={id}
            >
              <div className="flex items-start md:items-center justify-between gap-[10px] md:gap-[66px]">
                <Image
                  src={hotelIcon}
                  width={80}
                  height={80}
                  alt="flights"
                  className={cn('border-[0.5px] rounded-[8px]')}
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[50px] ml-1 md:ml-0 mr-0 md:mr-[17px]">
                  {hotelTimes.map(({ id, when, time }) => (
                    <div
                      className="flex flex-col items-start justify-center gap-[0.5px] md:gap-2"
                      key={id}
                    >
                      <P variant="P1">{when}</P>
                      <SubTitle variant="H5" className="font-semibold">
                        {time}
                      </SubTitle>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 items-start justify-start gap-y-2 gap-x-[10px] md:gap-x-[33px]">
                  {hotelDetails.map(({ id, icon, label, title }) => (
                    <div
                      className="flex items-center justify-start gap-[3px] md:gap-[15px]"
                      key={id}
                    >
                      <Image src={icon} width={16} height={16} alt="date" />
                      <div className="flex md:flex-col items-center md:items-start gap-[3px] md:gap-0">
                        <P variant="P1" className="text-secondary">
                          {label}
                        </P>
                        <P variant="P1" className="font-semibold">
                          {title}
                        </P>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-[13px] md:gap-5">
                <Button variant="default" size="default">
                  Download ticket
                </Button>
                <Button variant="outline" size="default">
                  <Image
                    src="/icons/right-arrow.svg"
                    width={5}
                    height={9}
                    alt="right arrow"
                    className="w-4 h-4"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TabsContent>
  )
}
