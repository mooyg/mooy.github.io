import {
  Button,
  Flex,
  FlexProps,
  IconButton,
  Image,
  Link,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Cross2Icon } from '@modulz/radix-icons'
import axios from 'axios'
export const MotionFlex = motion<FlexProps>(Flex)

interface Spotify {
  songURL: string
  songName: string
  songArtists: SongArtist[]
  songImage: SongImage
}

interface SongArtist {
  artistName: string
  artistURL: string
}

interface SongImage {
  height: number
  url: string
  width: number
}

export const Spotify = () => {
  const [nowPlaying, setNowPlaying] = useState(false)
  const [songPlaying, setSongPlaying] = useState<Spotify | null>()
  console.log(songPlaying)
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get<Spotify | null>('/api/spotify')
      if (!data) setSongPlaying(null)
      setSongPlaying(data)
    })()
  }, [])

  const { colorMode } = useColorMode()
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
            onClick={() => setNowPlaying(true)}
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
            bg={colorMode === 'dark' ? '#393E46' : 'blackAlpha.300'}
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
            maxW={'md'}
          >
            <Image
              mr="4"
              boxSize={'10'}
              draggable={'false'}
              src="https://i.ibb.co/MBqrdTC/spotify-logo-png-7053.png"
            />

            {songPlaying ? (
              <>
                <Image
                  mr="2"
                  maxW={'10'}
                  rounded={'lg'}
                  src={songPlaying.songImage.url}
                  alt="Album Cover"
                />
                <Link isExternal href={songPlaying.songURL}>
                  {songPlaying.songName}
                </Link>
                -
                {songPlaying.songArtists.map((artist) => (
                  <Link mx="2" href={artist.artistURL} isExternal key={artist.artistURL}>
                    {artist.artistName}
                  </Link>
                ))}
              </>
            ) : (
              'Not Playing anything'
            )}
            <Flex position="absolute" bottom="100%" right={0}>
              <Tooltip label="Close">
                <IconButton
                  onClick={() => setNowPlaying(false)}
                  variant={'ghost'}
                  aria-label="Close"
                >
                  <Cross2Icon color="black" />
                </IconButton>
              </Tooltip>
            </Flex>
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  )
}
