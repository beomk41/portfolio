import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import IconHtml5 from '@public/static/logo/skills/html5.png'
import IconCss from '@public/static/logo/skills/css.png'
import IconJs from '@public/static/logo/skills/js.png'
import IconMysql from '@public/static/logo/skills/mysql.png'
import IconMaria from '@public/static/logo/skills/maria.png'
import IconAmazon from '@public/static/logo/skills/amazon.png'
import IconDocker from '@public/static/logo/skills/docker.png'
import IconFigma from '@public/static/logo/skills/figma.png'
import IconJira from '@public/static/logo/skills/jira-confluence.png'
import IconJava from '@public/static/logo/skills/java.png'
import IconSpringBoot from '@public/static/logo/skills/springboot.png'
import IconRedis from '@public/static/logo/skills/redis.png'
import IconMongo from '@public/static/logo/skills/Mongodb.png'
import IconVue from '@public/static/logo/skills/vue.png'
import IconJenkins from '@public/static/logo/skills/Jenkins.png'
import IconGit from '@public/static/logo/skills/git.png'
import IconNotion from '@public/static/logo/skills/notion.png'
import { Interpolation } from '@emotion/styled'
import { CSSObject, Theme, useTheme } from '@emotion/react'
import SectionTitle from '@components/organisms/SectionTitle'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { SectionMethodsType } from 'pages'

type SkillItemProps = {
  src: string | StaticImageData
  imageContainerStyle: Interpolation<Theme>
  containerStyle?: CSSObject
}

const SkillItem = ({
  src,
  imageContainerStyle,
  containerStyle,
}: SkillItemProps) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    css={{
      borderWidth: 2,
      borderColor: '#eeeeee',
      borderStyle: 'solid',
      cursor: 'pointer',
      borderRadius: '1rem',
      userSelect: 'none',
      display: 'flex',
      width: '90px',
      height: '90px',
      alignItems: 'center',
      justifyContent: 'center',
      ...containerStyle,
    }}
  >
    <div css={imageContainerStyle}>
      <Image src={src} alt='src' layout="responsive" objectFit="cover"/>
    </div>
  </motion.div>
)

const FrontendSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          FrontEnd
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'space-between',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconHtml5}
            imageContainerStyle={{
              width: '4.25rem',
            }}
          />
          <SkillItem
            src={IconCss}
            imageContainerStyle={{
              width: '3rem',
            }}
          />
          <SkillItem
            src={IconJs}
            imageContainerStyle={{
              width: '3rem',
            }}
          />
        </article>

        {/** 3 Line */}
        <article
          css={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <SkillItem
            src={IconVue}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const BackendSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Backend
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconJava}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconSpringBoot}
            imageContainerStyle={{
              width: '10rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconMysql}
            imageContainerStyle={{
              width: '8rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconMaria}
            imageContainerStyle={{
              width: '10rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconMongo}
            imageContainerStyle={{
              width: '12rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 3 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <SkillItem
            src={IconRedis}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const MobileSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Mobile App
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
        </article>
      </div>
    </section>
  )
}

const DeploymentSection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
          gap: '0.5rem',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Deployment
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconAmazon}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconDocker}
            imageContainerStyle={{
              width: '11rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        <article
          css={{
            display: 'flex',
          }}
        >
          <SkillItem
            src={IconJenkins}
            imageContainerStyle={{
              width: '11rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}

const CommunitySection = () => {
  const theme = useTheme()

  return (
    <section>
      <div
        css={{
          backgroundColor: theme.colors.white,
          padding: '2rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',
          gap: '0.5rem',
        }}
      >
        <Text
          css={{
            color: theme.colors.carrot,
            fontSize: '1.5rem',
            borderBottom: '1px solid #ccc',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Community
        </Text>
        {/** 1 Line */}
        <article
          css={{
            display: 'flex',
            width: '280px',
          }}
        >
          <SkillItem
            src={IconFigma}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 2 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <SkillItem
            src={IconNotion}
            imageContainerStyle={{
              width: '9rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 3 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <SkillItem
            src={IconJira}
            imageContainerStyle={{
              width: '10rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>

        {/** 4 Line */}
        <article
          css={{
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <SkillItem
            src={IconGit}
            imageContainerStyle={{
              width: '7rem',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </article>
      </div>
    </section>
  )
}


type MySkillSectionProps = {
  sectionMethods: SectionMethodsType
  id: string
}

const MySkillSection: ForwardRefRenderFunction<
  HTMLDivElement,
  MySkillSectionProps
> = ({ sectionMethods, id }, ref) => {
  return (
    <Section
      ref={ref}
      id={id}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffc107',
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
          title="SKILLS"
          onClickScrollClip={() => sectionMethods.scrollToSection(2)}
        />

        <motion.div
          css={{
            display: 'flex',
            marginTop: '3rem',
            justifyContent: 'center',
            width: '100%',
            gap: '2rem',
          }}
          viewport={{
            once: true,
          }}
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
        >
          <div
            css={{
              display: 'flex',
              gap: '2rem',
              flexDirection: 'column',
              '@media (min-width: 1200px)': {
                flexDirection: 'row',
              },
            }}
          >
            <BackendSection />
            <div
              css={{
                display: 'flex',
                gap: '2rem',
                flexDirection: 'column',
              }}
            >
            <FrontendSection />  
            <DeploymentSection />
            </div>
            <div
              css={{
                display: 'flex',
                gap: '2rem',
                flexDirection: 'column',
              }}
            >
              <CommunitySection />
            </div>
          </div>
        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(MySkillSection)
