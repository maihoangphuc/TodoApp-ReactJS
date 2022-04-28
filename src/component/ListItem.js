import React from 'react'
import { Box, CloseButton, Flex, Spacer } from '@chakra-ui/react'

const ListItem = (props) => {

    const { index, job, dispatch, deleteJob } = props

    return (
        <>
            <Box w={['100%', '50%', '35%', '25%']}>
                <Flex alignItems='center' w='100%' gap='5px'>
                    <Box
                        w='70%'
                        h='100%'
                        color='#7e8ea8'
                    >
                        {job}
                    </Box>

                    <Spacer />

                    <CloseButton w='10%' color='#7e8ea8' onClick={()=>dispatch(deleteJob(index))}/>
                </Flex>
            </Box>
        </>
    )
}

export default ListItem