import { Button, Flex, FlexProps, IconButton, Image, Text, Tooltip } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Cross2Icon } from '@modulz/radix-icons'
import axios from 'axios'
export const MotionFlex = motion<FlexProps>(Flex)
type SpotifyArtists = {
  external_urls: {
    spotify: string
  }
  name: string
}

type SpotifySong = {
  item?: {
    name: string
    artists: SpotifyArtists[]
    external_urls: {
      spotify: string
    }
  }
  notPlaying: boolean
}
export const Spotify = () => {
  const [nowPlaying, setNowPlaying] = useState(false)
  const [songPlaying, setSongPlaying] = useState<SpotifySong>()

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get<SpotifySong>('/api/spotify')
      if (data.notPlaying) setSongPlaying(null)
      setSongPlaying(data)
      console.log(data)
    })()
  }, [])
  const showNowPlaying = () => {
    setNowPlaying(true)
  }
  return (
    <>
      {!nowPlaying && (
        <AnimatePresence>
          <MotionFlex
            cursor={'pointer'}
            position="fixed"
            bottom={[2, 4, 0]}
            left={[2, 4, 0]}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            bg={'black'}
            p="1"
            rounded={'2xl'}
            onClick={showNowPlaying}
            zIndex={1}
          >
            <Image
              boxSize={'10'}
              draggable={'false'}
              src="https://i.ibb.co/MBqrdTC/spotify-logo-png-7053.png"
            />
          </MotionFlex>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {nowPlaying && (
          <MotionFlex
            rounded={'2xl'}
            bg={'black'}
            p="5"
            position="fixed"
            bottom={[2, 4, 0]}
            left={[2, 4, 0]}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            justify={'center'}
            alignItems={'center'}
            zIndex={1}
            maxW={'lg'}
          >
            <Image
              mr="4"
              boxSize={'10'}
              draggable={'false'}
              src="https://i.ibb.co/MBqrdTC/spotify-logo-png-7053.png"
            />
            <Text color={'gray.300'} as="a" fontWeight={'medium'}>
              {songPlaying && songPlaying.notPlaying ? (
                'Not Playing anything'
              ) : (
                <>
                  {songPlaying.item.name} -{' '}
                  {songPlaying.item.artists.map((artist) => (
                    <>{artist.name}</>
                  ))}
                </>
              )}
            </Text>
            <Flex position="absolute" bottom="100%" right={0}>
              <Tooltip label="Close">
                <IconButton
                  onClick={() => setNowPlaying(false)}
                  variant={'ghost'}
                  aria-label="Close"
                >
                  <Cross2Icon />
                </IconButton>
              </Tooltip>
            </Flex>
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  )
}
