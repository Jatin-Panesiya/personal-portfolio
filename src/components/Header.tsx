import { Button } from '@mantine/core'
import { IoIosPerson } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex justify-between py-5 items-center container'>
        <p>LOGO</p>
        <Button className='bg-btnBg text-black hover:bg-btnBg/90 text-base font-semibold'>Contact Me {" "}<IoIosPerson className='text-xl ms-2'/></Button>
    </div>
  )
}

export default Header