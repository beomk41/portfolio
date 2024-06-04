import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import { SectionMethodsType } from 'pages'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import ProjectIeum1 from '@public/static/ieumpay/ieum-1.png'
import ProjectIeum2 from '@public/static/ieumpay/ieum-2.png'
import ProjectIeum3 from '@public/static/ieumpay/ieum-3.png'
import ProjectIeum4 from '@public/static/ieumpay/ieum-4.png'
import ProjectIeum5 from '@public/static/ieumpay/ieum-5.png'
import ProjectIeum6 from '@public/static/ieumpay/ieum-6.png'
import ProjectIeum7 from '@public/static/ieumpay/ieum-7.png'
import ProjectIeum8 from '@public/static/ieumpay/ieum-8.png'
import ProjectGi0 from '@public/static/getidea/getidea-0.png'
import ProjectGi1 from '@public/static/getidea/getidea-1.png'
import ProjectGi2 from '@public/static/getidea/getidea-2.png'
import ProjectGi3 from '@public/static/getidea/getidea-3.png'
import ProjectGi4 from '@public/static/getidea/getidea-4.png'
import ProjectMocka1 from '@public/static/mocka/mocka-1.png'
import ProjectMocka2 from '@public/static/mocka/mocka-2.png'
import ProjectMocka3 from '@public/static/mocka/mocka-3.png'
import ProjectMocka4 from '@public/static/mocka/mocka-4.png'
import ProjectMocka5 from '@public/static/mocka/mocka-5.png'
import ProjectMocka6 from '@public/static/mocka/mocka-6.png'
import ProjectMocka7 from '@public/static/mocka/mocka-7.png'
import ProjectMocka8 from '@public/static/mocka/mocka-8.png'
import ProjectMocka9 from '@public/static/mocka/mocka-9.png'
import ProjectMocka0 from '@public/static/mocka/mocka-0.png'
import ProjectSNL1 from '@public/static/snl/snl-1.png'
import Divider from '@components/atoms/Divider'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

type ProjectSectionProps = {
  sectionMethods: SectionMethodsType
}

type SkillTagProps = {
  title: string
}

const SkillTag = ({ title }: SkillTagProps) => (
  <div
    css={{
      borderRadius: '1rem',
      border: '1px solid gray',
      padding: '0px 4px',
      cursor: 'pointer',
      userSelect: 'none',
    }}
  >
    <Text
      css={{
        fontSize: '0.875rem',
      }}
    >
      {title}
    </Text>
  </div>
)

const ProjectList = [
  {
    title: '이음페이',
    subTitle: '2024.02 - 2024.04 (삼성 청년 SW 아카데미 6人)',
    imageList: [ProjectIeum1, ProjectIeum2, ProjectIeum3, ProjectIeum4, ProjectIeum5, ProjectIeum6, ProjectIeum7, ProjectIeum8],
    description: (
      <>
        <div style={{color: '#000', fontFamily: 'AppleSDGothic'}}>
          <div>
            이음페이 서비스는 삼성 청년 SW 아카데미의 특화 프로젝트 중 핀테크 도메인을 주제로 수행한 프로젝트로{' '}
            <strong>잔돈 기부와 간편 결제</strong>를 합친 새로운 서비스 입니다.
            간편 결제 시 발생하는 잔돈을 활용하여 사회적 기여를 실천하는 이 프로젝트는, 사용자의 미사용 잔돈을 크라우드 펀딩 형태로 기부하는 방식을 도입합니다.{' '}
            이를 통해 기존 기부 과정에서 발생할 수 있는 불투명한 관리와 횡령 문제를 해결함으로써, 기부자가 자신의 기부가 어떻게 사용되는지 명확히 알 수 있게 하며,
            기부 과정의 투명성을 높여 각각의 소액 기부가 모여 큰 사회적 변화를 만들 수 있음을 보여줍니다.<br />
            <br />
            3명의 프론트엔드 개발자와 3명의 백엔드 개발자로 이루어진 팀의 7주간의 여정을 함께했습니다.
            이 프로젝트를 통해{' '}
            <strong>핀테크 도메인의 특성과 다양한 인증방식에 대하여 더 깊게 이해할 수 있던 계기</strong>
            가 되었습니다.
            <br />
            <br />
            핀테크 도메인을 주제로한 프로젝트 특성 상, 인증 절차가 매우 중요하기 때문에,
            <strong>MMS를 활용한 본인인증과, 2차 비밀번호</strong>를 도입하여 보안을 향상시켰습니다.
            또한 금융결제원API를 사용하지 않고 <strong>자체적으로 모든 기능을 구현</strong>해야 했기 때문에
            기능을 구현하는데 있어서 <strong>현직자의 컨설팅을 통해 각 기능간 서버가 분리된 MSA구조를 활용</strong>하여 기능을 구현하였습니다.
          </div>
        </div>
      </>
    ),
    subDescription: [
      { title: 'GitHub', description: <a href="https://github.com/beomk41/Ieum-Pay">https://github.com/beomk41/Ieum-Pay</a>  },
      { title: '담당 역할', 
        description: [
          <div key="1" style={{color: '#000', fontFamily: 'AppleSDGothic'}}><strong>백엔드 개발</strong><br /></div>,
          <div key="2" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>MMS를 활용한 본인인증 회원가입<br /></div>,
          <div key="3" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>2차 비밀번호(2FA)를 활용한 보안강화<br /></div>,
          <div key="4" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>MSA 구조와 BFF패턴을 활용한 기능 간 서버 분리<br /></div>,
        ]
      },
      { title: '프로젝트 성과', description: <Text>프로젝트 우수상 (1등)</Text> },
      {
        title: '기술 스택',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.25rem',
              flexWrap: 'wrap',
            }}
          >
            <SkillTag title="JAVA" />
            <SkillTag title="SpringBoot" />
            <SkillTag title="JPA" />
            <SkillTag title="MariaDB" />
            <SkillTag title="redis" />
            <SkillTag title="MongoDB" />
            <SkillTag title="EC2" />
            <SkillTag title="Docker" />
          </div>
        ),
      },
    ],
  },
  {
    title: 'MOCKA',
    subTitle: '2024.04 - 2024.05 (삼성 청년 SW 아카데미 5人)',
    imageList: [ProjectMocka1, ProjectMocka2, ProjectMocka3, ProjectMocka4, ProjectMocka5,
      ProjectMocka6, ProjectMocka7, ProjectMocka8, ProjectMocka9, ProjectMocka0],
    description: (
      <>
        <div style={{color: '#000', fontFamily: 'AppleSDGothic'}}>
          MOCKA 서비스는 삼성 청년 SW 아카데미 2학기 자율 프로젝트의 일환으로, 
          개발자들이 API 문서를 쉽게 작성하고 효율적으로 협업할 수 있도록 지원하는 서비스를 개발하는 것을 목표로 합니다. 
          이 서비스를 통해 개발 프로세스를 간소화하고 효율성을 향상시키고자 했습니다.
          <br /><br />
          2명의 프론트엔드 개발자와 3명의 백엔드 개발자로 이루어진 팀의 7주간의 여정을 함께했습니다. 
          이 프로젝트에서 저는 처음으로 <strong>DevOps 역할을 맡아 Blue-Green 무중단 배포를 포함한 CI/CD 파이프라인을 구축</strong>했습니다. 
          이를 통해 <strong>개발 및 배포 과정에서의 안정성과 효율성을 크게 향상</strong>시킬 수 있었습니다.
          <br /><br />
          <strong>Blue-Green 방식의 무중단 배포를 구현하는 과정에서 몇 가지 어려움</strong>이 있었습니다. <br />
          <strong>
          첫째, 배포 환경의 정확한 복제와 유지 <br />
          둘째, 스위칭 시 발생할 수 있는 오류를 최소화하기 위해 많은 테스트와 검증<br />
          </strong>
          그러나 이러한 어려움을 극복하면서, 무중단 배포의 장점을 실감할 수 있었으며,
          <strong>서비스 가용성을 유지하면서 새로운 기능을 배포할 수 있었고, 롤백이 필요할 경우 신속하게 이전 버전으로 복귀</strong>할 수 있었습니다.
        </div>
      </>
    ),
    subDescription: [
      { title: 'GitHub', description: <a href="https://github.com/beomk41/MOCKA">https://github.com/beomk41/MOCKA</a>  },
      { title: '담당 역할',
        description: [
          <div key="1" style={{color: '#000', fontFamily: 'AppleSDGothic'}}><strong>백엔드 개발</strong><br /></div>,
          <div key="2" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>API 명세 기반 스켈레톤 코드 생성<br /></div>,
          <div key="3" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>Blue-Green 무중단 배포를 활용한 CI/CD<br /></div>,
        ]
      },
      {
        title: '기술 스택',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.25rem',
              flexWrap: 'wrap',
            }}
          >
            <SkillTag title="JAVA" />
            <SkillTag title="SpringBoot" />
            <SkillTag title="PostgreSQL" />
            <SkillTag title="JPA" />
            <SkillTag title="Redis" />
            <SkillTag title="EC2" />
            <SkillTag title="Jenkins" />
            <SkillTag title="Nginx" />
            <SkillTag title="Docker" />
          </div>
        ),
      },
    ],
  },

  {
    title: 'Getidea',
    subTitle: '2024.01 - 2024.02 (삼성 청년 SW 아카데미 6人)',
    imageList: [
      ProjectGi1,
      ProjectGi2,
      ProjectGi3,
      ProjectGi4,
      ProjectGi0

    ],
    description: (
      <>
        <div style={{color: '#000', fontFamily: 'AppleSDGothic'}}>
          Getidea는 삼성 청년 SW 아카데미의 공통 프로젝트 중 웹기술(WebRTC)을 주제로 수행한 프로젝트로{' '}
          아이디어 기획에 어려움을 겪는 이들을 위한 온라인 협업 플랫폼입니다.
          팀원들과 실시간으로 아이디어 보드를 공동으로 구성하고 아이디어를 함께 도출할 수 있도록 설계되었으며
          다양한 아이디어 템플릿을 제공하여 창의적 사고를 자극하고, <strong>화상채팅 및 화면 공유 기능을 통해 원격 협업의 효율성</strong>을 극대화합니다.
          <br />
          <br />
          3명의 프론트엔드 개발자와 3명의 백엔드 개발자로 이루어진 팀의 7주간의 여정을 함께했습니다.
          이 프로젝트를 통해{' '}
          <strong>데이터베이스의 설계와 관리에 대하여 더 깊게 이해할 수 있던 계기</strong>
          가 되었습니다.
          <br />
          <br />
          실시간 협업이라는 메인 기능을 완성 시키기 위해서, 효율적인 데이터 전송 방식을 구상해야 했습니다.
          <strong>Web Socket과 Redis</strong>를 사용하여 변동되는 데이터만을 교환함으로
          <strong>데이터 처리 과정에서 소요되는 시간을 단축과 그림판의 되돌리기 기능을 구현</strong>할 수 있었으며, 
          <strong>Social Login 도입간 AccessToken과 RefreshToken을 사용함으로</strong> 사용자 경험 개선과 로그인 기능의 보안을 강화 할 수 있었습니다.
        </div>
      </>
    ),
    subDescription: [
      { title: 'GitHub', description: <a href="https://github.com/beomk41/GetIdea">https://github.com/beomk41/GetIdea</a>  },
      {
        title: '담당 역할',
        description: [
          <div key="1" style={{color: '#000', fontFamily: 'AppleSDGothic'}}><strong>백엔드 개발</strong><br /></div>,
          <div key="2" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>Database 설계 및 관리<br /></div>,
          <div key="3" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>실시간 협업간 성능 향상을 고려한 로직 설계 및 구현<br /></div>,
          <div key="4" style={{color: '#000', fontFamily: 'AppleSDGothic'}}>Social Login을 활용한 인증 및 인가 시스템 구현<br /></div>,
        ]
      },
      { title: '프로젝트 성과', description: <Text>프로젝트 우수상 (3등)</Text> },
      {
        title: '기술 스택',
        description: (
          <div
            css={{
              display: 'flex',
              gap: '0.25rem',
              flexWrap: 'wrap',
            }}
          >
            <SkillTag title="JAVA" />
            <SkillTag title="SpringBoot" />
            <SkillTag title="MySQL" />
            <SkillTag title="MongoDB" />
            <SkillTag title="Redis" />
            <SkillTag title="Socket.io" />
            <SkillTag title="EC2" />
            <SkillTag title="Docker" />
          </div>
        ),
      },
    ],
  },
]

const ProjectSection: ForwardRefRenderFunction<
  HTMLDivElement,
  ProjectSectionProps
> = ({ sectionMethods }, ref) => {
  const theme = useTheme()

  SwiperCore.use([Navigation, Pagination, Autoplay]) // 추가

  return (
    <Section
      ref={ref}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#4244ff',
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
          title="PROJECT"
          color={theme.colors.white}
          onClickScrollClip={() => sectionMethods.scrollToSection(5)}
        />

        {ProjectList.map((project) => (
          <motion.div
            key={project.title}
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
              marginTop: '4rem',
              justifyContent: 'center',
            }}
          >
            <Center
              css={{
                padding: '3rem',
                borderRadius: '1rem',
                backgroundColor: theme.colors.white,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text
                bold
                css={{
                  fontSize: '2rem',
                  color: '#000',
                }}
              >
                {project.title}
              </Text>
              <Text
                css={{
                  color: '#000',
                }}
              >
                {project.subTitle}
              </Text>

              <div
                css={{
                  display: 'flex',
                  gap: '2rem',
                  marginTop: '3rem',
                  width: '100%',
                  alignItems: 'center',
                  maxWidth: '71.25rem',
                  flexDirection: 'column',
                  '@media (min-width: 800px)': {
                    flexDirection: 'row',
                  },
                }}
              >
                <div
                  css={{
                    width: '100%',
                    '@media (min-width: 800px)': {
                      width: '50%',
                    },
                  }}
                >
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                    }}
                    loop
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {project.imageList.map((image) => (
                      <SwiperSlide key={image.src}>
                        <div
                          css={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            userSelect: 'none',
                          }}
                        >
                          <Image src={image} alt={image.src} layout="responsive" objectFit="cover"/>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div
                  css={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '@media (min-width: 800px)': {
                      width: '50%',
                    },
                  }}
                >
                  <div>{project.description}</div>

                  <div>
                    <Divider
                      style={{
                        paddingBottom: '1rem',
                        marginBottom: '1rem',
                      }}
                    />

                    <div
                      css={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      {project.subDescription.map(({ title, description }) => (
                        <div
                          key={title}
                          css={{
                            display: 'flex',
                          }}
                        >
                          <div
                            css={{
                              width: '9rem',
                            }}
                          >
                            <Text>{title}</Text>
                          </div>
                          <div>{description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Center>
          </motion.div>
        ))}
      </Center>
    </Section>
  )
}

export default forwardRef(ProjectSection)
