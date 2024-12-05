import { Container } from '@/components/common'
import { P, Title } from '@/components/typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="background pt-[136px]">
      <Container className="mt-5 flex flex-col items-center justify-center pb-10 text-center md:mt-10 md:pb-16 lg:mt-20 lg:pb-28 xl:mt-[100px] xl:pb-[140px]">
        <Image src="/icons/404.svg" alt="404 image" width={687} height={644} />

        <Title variant="H3" className="mt-8 text-secondary-title">
          Oops... Page Not Found!
        </Title>
        <P variant="P2" className="mb-8 mt-4 w-[43%] text-secondary-body">
          Please return to the site&apos;s homepage, It looks like nothing was found at this
          location
        </P>
        <Button variant="default">
          <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    </main>
  )
}

export default NotFound
