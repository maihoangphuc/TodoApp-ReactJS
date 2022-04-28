import { useReducer, useRef } from 'react'
import { Text, Input, Flex, Box, VStack, Button } from '@chakra-ui/react'
import ListItem from './component/ListItem';



const initState = {
  job: '',
  jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'


const reducer = (state, action) => {
  let newState


  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break;

    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break

    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break

    default:
      throw new Error('Invalid Action')
  }

  return newState
}


const setJob = (payload) => {
  return {
    type: 'set_job',
    payload
  }
}

const addJob = (payload) => {
  return {
    type: 'add_job',
    payload
  }
}

const deleteJob = (payload) => {
  return {
    type: 'delete_job',
    payload
  }
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, initState)
  const {job, jobs} = state

  const inputRef = useRef()
  
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <>
      <Text align='center' color='#7e8ea8' pt='40px' fontSize={['10px', '20px', '25px', '30px']}>Todo App</Text>

      <Flex>
        <VStack w='100%'>
          <Box w={['100%', '50%', '35%', '25%']} mt='40px'>
            <Flex>
              <Input
                value={job}
                ref={inputRef}
                w='100%'
                mb='10px'
                color='#906eb5'
                placeholder='Add work...'
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                borderColor='#9797a9'
                focusBorderColor='#809196'

                onChange={(e)=>{
                  dispatch(setJob(e.target.value))
                }}
              />

              <Button ml='10px' bg='#829fc7' color='#fff' disabled={!job} onClick={handleSubmit}>Add</Button>
            </Flex>
          </Box>

          {jobs.map((job, index)=>(
            <ListItem key={index} index={index} job={job} dispatch={dispatch} deleteJob={deleteJob}/>
          ))}
        </VStack>
        
      </Flex>
    </>
  );
}

export default App;
