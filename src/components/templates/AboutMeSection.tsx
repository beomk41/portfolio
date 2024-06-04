import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import { SectionMethodsType } from 'pages'

const ABOUT_ME_FIELD = [
  { title: '이름', fields: ['김범수'] },
  { title: '생년월일', fields: ['1997.06.10'] },
  { title: '연락처', fields: ['010-4075-7464', 'kkkbs41@daum.net'] },
]

const CERTIFICATE_INFO_FIELD = [
  { title: '자격 취득', fields: ['정보처리기사 (2023.06)', 'SQLD (2023.12)', 'TOEIC-Speaking IH (2024.04)'] },
  { title: '수상 내역', fields: ['삼성 청년 SW 아카데미 1학기 관통 프로젝트 우수상 (2023.11)', '삼성 청년 SW 아카데미 2학기 자율 프로젝트 우수상 (2024.02)', '삼성 청년 SW 아카데미 2학기 특화 프로젝트 우수상 (2024.04)'] },
]

type AboutMeSectionProps = {
  sectionMethods: SectionMethodsType
  id: string
}

const AboutMeSection: ForwardRefRenderFunction<
  HTMLDivElement,
  AboutMeSectionProps
> = ({ sectionMethods, id }, ref) => {
  const theme = useTheme()

  return (
    <Section
      ref={ref}
      id={id}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: theme.colors.white,
        padding: '6rem 2rem',
      }}
    >
      <Center
        css={{
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <SectionTitle
          title="ABOUT ME"
          onClickScrollClip={() => sectionMethods.scrollToSection(1)}
        />

        <motion.div
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          viewport={{
            once: true,
          }}
          css={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            marginTop: '4rem',
            gap: '3rem',
            flexDirection: 'column',
            '@media (min-width: 800px)': {
              flexDirection: 'row',
            },
          }}
        >
          {ABOUT_ME_FIELD.map(({ fields, title }) => (
            <div
              key={title}
              css={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                flex: 1,
              }}
            >
              <Text
                css={{
                  fontSize: '2rem',
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                }}
              >
                {title}
              </Text>
              {fields.map((field) => (
                <Text
                  key={field}
                  css={{
                    fontSize: '1.25rem',
                  }}
                >
                  {field}
                </Text>
              ))}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          viewport={{
            once: true,
          }}
          css={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            marginTop: '4rem',
            gap: '3rem',
            flexDirection: 'column',
            '@media (min-width: 800px)': {
              flexDirection: 'row',
            },
          }}
        >
          {CERTIFICATE_INFO_FIELD.map(({ fields, title }) => (
            <div
              key={title}
              css={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                flex: 1,
              }}
            >
              <Text
                css={{
                  fontSize: '2rem',
                  borderBottomColor: '#cccccc',
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                }}
              >
                {title}
              </Text>
              {fields.map((field) => (
                <Text
                  key={field}
                  css={{
                    fontSize: '1.25rem',
                  }}
                >
                  {field}
                </Text>
              ))}
            </div>
          ))}
        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(AboutMeSection)
