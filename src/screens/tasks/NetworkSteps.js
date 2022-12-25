import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Divider, Heading, HStack, Image, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const NetworkSteps = ({ TasksDetails }) => {
    return (
        <>
            <VStack w={'full'} alignItems={'flex-start'} py={'16'}>
                {TasksDetails ?
                    "" :
                    <>
                        <Heading fontWeight={'400'} size={{ base: 'sm', md: 'lg', xl: 'lg' }}>About Volunteer Connect</Heading>
                        <Divider orientation='horizontal' />
                        <VStack pb={'5'}>
                            <Text>
                                Since 2021, VolunteerConnect has put the power of technology to good use by enabling the social sector to unlock over $14 billion worth of volunteer time. The award-winning nonprofit service has complemented and co-existed with commercial technologies to become the web’s largest and most popular volunteer recruiting platform. It serves thousands of nonprofits, a million interested volunteers a month, and has generated over $40 million in mission-related revenue from its legacy corporate volunteering product YourMatch.
                            </Text>
                        </VStack>
                    </>
                }
                <VStack pb={{ base: '5', md: '10', lg: '14', xl: '20' }} borderTop={'1px'} borderColor={'green'} pt={{ base: '5', md: '10', lg: '14', xl: '10' }} pl={{ base: '5', md: '10', lg: '14', xl: '20' }} pr={{ base: '5', md: '10', lg: '14', xl: '20' }} w={{ base: 'full', md: 'full', lg: 'full' }} m={'auto'}>
                    <Heading textColor={'green.400'} textAlign={'left'} pt={'10'} size={{ base: 'sm', md: 'md' }}>
                        Vision
                    </Heading>
                    <Text textAlign={'center'} w={'full'} color={'#707070'} fontStyle={'italic'}>
                        “Service to Humanity with Integrity”
                    </Text>
                    <Heading textColor={'green.400'} textAlign={'left'} pt={'10'} size={{ base: 'sm', md: 'md' }}>
                        Guiding Principles
                    </Heading>
                    <Text>
                        Service | Integrity | Urgency | Collaboration | Growth
                    </Text>
                </VStack>
                <Divider />
            </VStack>
            <VStack w={'full'} spacing={'24'} pt={'2'}>
                <Heading fontWeight={'300'} size={{ base: 'sm', md: 'lg', xl: 'lg' }}>Join the largest volunteer network in three steps</Heading>
                <HStack w={'full'} alignItems={'center'} justifyContent={'space-between'}>
                    <VStack>
                        <Heading textColor={'green.400'} fontSize={'4xl'} fontWeight={'900'}>1</Heading>
                        <Text>find / claim your organization</Text>
                    </VStack>
                    {/* <ChevronRightIcon textColor={'gray.300'} fontSize={'80px'} size={'4xl'} /> */}
                    <Image src='https://d3bl5qcndhcx94.cloudfront.net/rel259-8c79bb0/images/public/svg/large-arrow.svg' w={'40px'} h={'80px'} />
                    <VStack>
                        <Heading textColor={'green.400'} fontSize={'4xl'} fontWeight={'900'}>2</Heading>
                        <Text>create a personal profile</Text>
                    </VStack>
                    <Image src='https://d3bl5qcndhcx94.cloudfront.net/rel259-8c79bb0/images/public/svg/large-arrow.svg' w={'40px'} h={'80px'} />
                    <VStack w={'fit-content'}>
                        <Heading textColor={'green.400'} fontSize={'4xl'} fontWeight={'900'}>3</Heading>
                        <Text>add volunteer opportunities</Text>
                    </VStack>
                </HStack>
                <VStack>
                    <Heading>You're ready to recruit!</Heading>
                </VStack>
            </VStack>
            <HStack w={'full'} justifyContent={'space-between'} py={'24'} spacing={'14'}>
                <Text fontSize={'26px'} fontWeight={'300'}>
                    Claim your organization and take advantage of our full suite of member benefits, designed to help you save time and easily recruit and manage volunteers.
                </Text>
                <Image w={'250px'} src='https://d3bl5qcndhcx94.cloudfront.net/rel259-8c79bb0/images/public/np-landing-solutions-@2x.png' />
            </HStack>
            <VStack px={'10'} mt={'20'} bgGradient='linear(to-r, gray.100, gray.100)' w={'full'} py={'10'} borderRadius={'md'}>
                <Heading fontWeight={'600'} size={{ base: 'sm', md: 'lg', xl: 'lg' }}>Member Benefits</Heading>
                <Divider borderColor={'white'} />
                <Text fontWeight={'400'} py={'10'}>
                    Save time and repost opportunities with one click. Streamline your communication and automatically send custom greetings, questionnaires and documents to potential volunteers. Request donations.
                </Text>
                <HStack w={'full'}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Create and manage opportunities
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Match volunteers to the specific skills you need
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Create shifts for your opportunities
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Repost opportunities with just one click
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Request donations button for 501c3 organizations
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Manage your photos
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Embed volunteer opportunities on your own site
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Copy an existing opportunity to quickly create new ones
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Streamline your volunteer qualification process
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Recruit volunteers from our corporate partners
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            Manage volunteers with our early-stage volunteer engagement platform
                        </ListItem>
                    </List>
                </HStack>
            </VStack>
        </>
    )
}

export default NetworkSteps