import type { NextPage } from 'next'
import IntroSection, {
  INTRO_SECTION_PAGE_HEIGHT,
} from '@components/templates/IntroSection'
import AboutMeSection from '@components/templates/AboutMeSection'
import MySkillSection from '@components/templates/MySkillSection'
import CareerSection from '@components/templates/CareerSection'
import { useCallback, useMemo, useRef } from 'react'
import Text from '@components/atoms/Text'
import ProjectSection from '@components/templates/ProjectSection'
import { motion, useScroll, useTransform } from 'framer-motion'

export type SectionMethodsType = {
  scrollToSection: (index: number) => void
}

const HEADER_HEIGHT = 72

const Home: NextPage = () => {
  const IntroSectionRef = useRef<HTMLDivElement>(null)
  const AboutMeSectionRef = useRef<HTMLDivElement>(null)
  const MySkillSectionRef = useRef<HTMLDivElement>(null)
  const CareerSectionRef = useRef<HTMLDivElement>(null)
  const ProjectSectionRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()

  /** header motion styles */
  const headerBackgroundColor = useTransform(scrollY, (value) => {
    return value > INTRO_SECTION_PAGE_HEIGHT ? 'white' : 'black'
  })

  /** header text motion styles */
  const headerTextBackgroundColor = useTransform(scrollY, (value) => {
    return value > INTRO_SECTION_PAGE_HEIGHT ? 'black' : 'white'
  })

  const scrollToSection = useCallback((index: number) => {
    // TEMP
    const isMobile = window.innerWidth < 800

    console.log(isMobile)
    switch (index) {
      case 0:
        return window.scrollTo({
          top:
            IntroSectionRef.current?.offsetTop! -
            (!isMobile ? HEADER_HEIGHT : 0),
          behavior: 'smooth',
        })
      case 1:
        return window.scrollTo({
          top:
            AboutMeSectionRef.current?.offsetTop! -
            (!isMobile ? HEADER_HEIGHT : 0),
          behavior: 'smooth',
        })
      case 2:
        return window.scrollTo({
          top:
            MySkillSectionRef.current?.offsetTop! -
            (!isMobile ? HEADER_HEIGHT : 0),
          behavior: 'smooth',
        })

      case 3:
        return window.scrollTo({
          top:
            CareerSectionRef.current?.offsetTop! -
            (!isMobile ? HEADER_HEIGHT : 0),
          behavior: 'smooth',
        })

      case 4:
        return window.scrollTo({
          top:
            ProjectSectionRef.current?.offsetTop! -
            (!isMobile ? HEADER_HEIGHT : 0),
          behavior: 'smooth',
        })
    }
  }, [])

  const sectionMethods = useMemo(() => ({ scrollToSection }), [scrollToSection])
  // #453a33

  const headers = [
    { title: 'About Me', scrollIndex: 1 },
    { title: 'Skill', scrollIndex: 2 },
    { title: 'Project', scrollIndex: 4 },
    { title: 'Career', scrollIndex: 3 },
  ]
  return (
    <main
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          display: 'none',
          '@media (min-width: 800px)': {
            display: 'block',
          },
        }}
      >
        <motion.header
          style={{ backgroundColor: headerBackgroundColor }}
          css={{
            zIndex: 101,
            position: 'fixed',
            top: 0,
            height: HEADER_HEIGHT,
            opacity: 0.9,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            justifyContent: 'center',
            boxShadow: '0 1px 0.3rem hsl(0deg 0% 80% / 80%)',
          }}
        >
          <div
            css={{
              maxWidth: '71.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Text
              bold
              css={{
                fontSize: '2rem',
                cursor: 'pointer',
                transition: '0.2s ease',
                ':hover': {
                  color: '#007aff !important',
                },
              }}
              onClick={() => scrollToSection(0)}
              style={{
                color: headerTextBackgroundColor,
              }}
            >
              {"Beomsu's Portfolio"}
            </Text>

            <div
              css={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              {headers.map((header) => (
                <Text
                  key={header.title}
                  css={{
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: '0.2s ease',
                    ':hover': {
                      color: '#007aff !important',
                    },
                  }}
                  onClick={() => scrollToSection(header.scrollIndex)}
                  style={{
                    color: headerTextBackgroundColor,
                  }}
                >
                  {header.title}
                </Text>
              ))}
            </div>
          </div>
        </motion.header>
      </div>
      <IntroSection ref={IntroSectionRef} sectionMethods={sectionMethods} id="intro-section" />
      <AboutMeSection ref={AboutMeSectionRef} sectionMethods={sectionMethods} id="about-me-section" />
      <MySkillSection ref={MySkillSectionRef} sectionMethods={sectionMethods} id="my-skill-section" />
      <ProjectSection ref={ProjectSectionRef} sectionMethods={sectionMethods} id="project-section" />
      <CareerSection ref={CareerSectionRef} sectionMethods={sectionMethods} id="career-section" />
    </main>
  )
}

export default Home
