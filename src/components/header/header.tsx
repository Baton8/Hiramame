import { Box, Button, Flex, FlexProps, IconButton } from "@chakra-ui/react"
import { ReactNode } from "react"
import NextLink from "next/link"
import { FaUser } from "react-icons/fa"


type Props = {
}

export const Header: React.FC<Props> = ({
}) => {
  return (
    <Flex h={12} px={4} background="background.header" align="center" justify="space-between">
      <Box fontFamily="title" fontSize="2xl" fontWeight="900">mame</Box>
      <Box>
        <NextLink href="/profile" passHref={true}>
          <IconButton size="sm" icon={<FaUser/>} variant="ghost" color="text.gray" aria-label="profile"/>
        </NextLink>
      </Box>
    </Flex>
  )
}