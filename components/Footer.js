import React from 'react';
import { Flex, Link, Image, Text } from '@chakra-ui/react';
import { FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
	return (
		<Flex
			flexDirection={{ base: 'column', md: 'row' }}
			alignItems={{ base: 'center', md: 'flex-end' }}
			h={'30vh'}
			bgGradient="linear(to-b, #FFFEFF 0%, #C9F2F6 100%)"
			justifyContent={{ base: 'flex-end', md: 'space-evenly' }}
			pb={7}
		>
			<Link
				href="https://twitter.com/ethpuntocl"
				isExternal
				mb={{ base: 6, md: 0 }}
				px={{ base: 0, md: 12 }}
			>
				<FaTwitter fontSize={50} color="#B2B2B2" />
			</Link>
			<Flex alignItems="center" mb={{ base: 2, md: 0 }}>
				<Text mr={1}>Hecho con</Text>
				<FaHeart color="#EC3238" />
				<Text mx={1}>por</Text>
				<Link href="https://twitter.com/Nate_d3v" isExternal>
					<Image src="/nate-d3v.jpg" borderRadius="full" boxSize={10} />
				</Link>
			</Flex>
			<Text mb={{ base: 0, md: 2 }}>ethereum.cl &copy; 2022</Text>
		</Flex>
	);
}
