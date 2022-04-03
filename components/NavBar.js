import Link from "next/link";
import Image from "next/image";
import { Flex, Spacer } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <nav>
            <Flex>
                <Image src="/images/logo.png" width={70} height={70}></Image>
                <Spacer />
                <Center w="100px">
                    <Link href="/">Home</Link>
                </Center>
                <Center w="100px">
                    <Link href="/about">About</Link>
                </Center>
                <Center w="100px">
                    <Link href="/notes">Notes</Link>
                </Center>
            </Flex>
        </nav>
    );
}

export default Navbar;