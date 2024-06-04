import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import { Section } from './IntroSection.style'
import { motion } from 'framer-motion'

import IconSNL from '@public/static/logo/skills/SmartNetworkingLab.png'
import IconSSAFY from '@public/static/logo/skills/SSAFY.png'

import Image from 'next/image'
import Divider from '@components/atoms/Divider'
import { forwardRef, ForwardRefRenderFunction, ReactElement } from 'react'
import SectionTitle from '@components/organisms/SectionTitle'
import { SectionMethodsType } from 'pages'

type CareerItemType = {
  company: {
    title: string
    period: string[]
    bio: string | ReactElement
    imageComponent: ReactElement
    subbio: string | ReactElement
  }
  projectList: {
    title: string
    period: string[]
    description: (string | ReactElement)[]
  }[]
}

const CareerList: CareerItemType[] = [
  {
    company: {
      title: '삼성 청년 SW 아카데미 10기 (SSAFY)',
      imageComponent: (
        <div
  css={{
    backgroundColor: 'white',
    borderRadius: '100%',
    width: '250px',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <div
    css={{
      position: 'absolute',
      width: '250px',
      height: '250px',
      borderRadius: '100%',
      background: 'white',
      clipPath: 'circle(125px at center)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      css={{
        width: '12rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src={IconSSAFY} alt="SSAFY Logo"/>
    </div>
  </div>
</div>
      ),
      period: ['2023.07', '2024.06 (수료예정)'],
      bio: (
        <>
          삼성청년SW아카데미는 삼성전자와 멀티캠퍼스 주관하에 청년들에게 소프트웨어 개발 역량을 강화하여 취업 기회를 제공하는 교육 프로그램으로,
          약 <Text bold>1년 동안 집중적인 코딩 교육</Text>과
          <Text bold>프로젝트 실습</Text>을 통해 현업 수준의 개발자 양성을 목표로 하는 교육과정입니다.
        </>
      ),
      subbio: (
        <>
          1학기 자바 웹 개발 과정 (800시간) 이수 <br></br>
          2학기 프로젝트 집중 과정 (800시간) 이수
        </>
      ),
    },
    projectList: [
      {
        title: 'MOCKA',
        period: ['2024.04', '2024.05'],
        description: [
          <strong key="1">프로젝트 설명</strong>,
          '이 프로젝트는 삼성 청년 SW 아카데미 2학기 자율 프로젝트로,',
          '프로젝트 진행 시 필요한 API명세 작성이라는 작업을 더 쉽게 할 수 있도록 지원하는 서비스 입니다.',
          <div key="2"><strong>담당 역할:</strong> 백엔드 개발</div>,
          <strong key="3">2024.07 리팩토링 진행 예정</strong>,
        ],
      },
      {
        title: '이음페이',
        period: ['2024.02', '2024.04'],
        description: [
          <strong key="1">프로젝트 설명</strong>,
          '이 프로젝트는 삼성 청년 SW 아카데미 2학기 특화 프로젝트로, 핀테크를 주제로 진행되었습니다.',
          '기존 간편결제 시스템에서 발생하는 잔돈을 기부하여 사회공헌에 참여하는 것을 목표로 합니다.',
          <div key="2"><strong>담당 역할:</strong> 백엔드 개발</div>,
          <strong key="3">성과:</strong>,
          '핀테크 - 프로젝트 우수상 수상(1등)',
          <strong key="4">2024.06 리팩토링 진행 예정</strong>,
        ],
      },
      {
        title: 'Getidea',
        period: ['2024.01', '2024.02'],
        description: [
          <strong key="1">프로젝트 설명</strong>,
          '이 프로젝트는 삼성 청년 SW 아카데미 2학기 특화 프로젝트로, 웹기술(WebRTC)을 주제로 진행되었습니다.',
          '아이디어 기획에 어려움을 겪는 이들을 위한 온라인 협업 플랫폼입니다.',
          <div key="2"><strong>담당 역할:</strong> 백엔드 개발</div>,
          <strong key="3">성과:</strong>,
          '핀테크 - 프로젝트 우수상 수상(3등)',
        ],
      },
    ],
  },
  {
    company: {
      title: 'Smart Networking Lab',
      imageComponent: (
        <div
  css={{
    backgroundColor: 'white',
    borderRadius: '100%',
    width: '250px',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <div
    css={{
      position: 'absolute',
      width: '250px',
      height: '250px',
      borderRadius: '100%',
      background: 'white',
      clipPath: 'circle(125px at center)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      css={{
        width: '12rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src={IconSNL} alt="Smart Networking Lab Logo"/>
    </div>
  </div>
</div>
      ),
      period: ['2022.09', '2023.02'],
      bio: (
        <>
          Smart Networgkin Lab은 조선대학교 컴퓨터공학과의 연구실로
          <br />
          주로 무선 네트워크, 사물인터넷(IoT), IEEE 802.11 표준 등
          <br />
          다양한 분야에서 연구를 진행합니다.
        </>
      ),
      subbio: (
        <>
          학부연구생으로 참여하여 백엔드 포지션으로 개발 업무 수행
        </>
      ),
    },
    projectList: [
      {
        title: '의료-ICT 융합 헬스케어 기반 애플리케이션 설계 및 구현',
        period: ['2022.09', '2023.02'],
        description: [
          <strong key="1">프로젝트 설명</strong>,
          '프로젝트로 신체의 변화(온도, 압력)를 감지하는 바이오 패치와 NFC 리더간 양방향 통신을 이용하여',
          '현장 의료진에게 환자의 상태를 제공하는 애플리케이션 데모 개발',
          <div key="2"><strong>담당 역할:</strong></div>,
          '- 실시간 데이터 수집: 패치 센서와 모바일 디바이스를 활용하여 환자의 생체 정보를 실시간 수집',
          '- 데이터 처리 및 시각화: 수집된 정보를 분석하여 의료진을 시각화된 자료 생성',
          <strong key="3">성과:</strong>,
          '2023 한국전자파학회 동계 학술대회 포스터 발표 진행',
        ],
      },
      {
        title: 'XR 기반 임상 실습 교육을 위한 실시간 다중 훈련 플랫폼 개발',
        period: ['2022.12', '2023.02'],
        description: [
          <strong key="1">프로젝트 설명</strong>,
          '의학 실습 교육을 위한 3D 시뮬레이션 및 3D 실시간 상호작용 기술 개발',
          <div key="2"><strong>담당 역할:</strong></div>,
          '- 다중사용자 접속 및 동시 훈련을 고려한 XR 기반의 네트워크 기술 개발',
          '- 접속인원 증가에 따른 최대 서버 지연 및 처리율 등의 성능 평가 수행',
        ],
      },
    ],
  },
]

type CareerContentProps = {
  career: CareerItemType
}

const CareerContent = ({ career }: CareerContentProps) => (
  <motion.div
    css={{
      display: 'flex',
      width: '100%',
      maxWidth: '71.25rem',
      gap: '4rem',
      flexDirection: 'column',
      '@media (min-width: 800px)': {
        flexDirection: 'row',
      },
    }}
  >
    <div
      css={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        paddingBottom: '4rem',
        display: 'flex',
        justifyContent: 'center',

        '@media (min-width: 800px)': {
          borderRightColor: '#ccc',
          borderRightWidth: 1,
          borderBottomWidth: 0,
          borderRightStyle: 'solid',
          paddingRight: '4rem',
        },
      }}
    >
      {career.company.imageComponent}
    </div>
    <div>
      <header>
        <div>
          <Text
            css={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
            }}
          >
            {career.company.title}
          </Text>
        </div>
        <div
          css={{
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <Text
            css={{
              fontSize: '1.25rem',
              color: '#6c757d',
            }}
          >
            {career.company.period[0]} - {career.company.period[1]}
          </Text>
        </div>
      </header>
      <article>
        <Text
          css={{
            fontSize: '1.2rem',
          }}
        >
          {career.company.bio}
        </Text>
      </article>
      <article
        css={{
          marginTop: '1rem',
        }}
      >
        <Text
          css={{
            fontSize: '1.2rem',
          }}
        >
          {career.company.subbio}
        </Text>
      </article>
      <Divider
        style={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      />

      {/** TODO: 태그를 통해 사용 기술 추가하기 */}
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {career.projectList
          .sort(
            ({ period: [peroidA] }, { period: [peroidB] }) =>
              new Date(peroidB).getTime() - new Date(peroidA).getTime()
          )
          .map((project) => (
            <article key={project.title}>
              <Text
                css={{
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                ▎ {project.title}
              </Text>
              <div
                css={{
                  marginTop: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <Text
                  css={{
                    fontSize: '1.1rem',
                    color: '#6c757d',
                  }}
                >
                  {project.period[0]} - {project.period[1]}
                </Text>
              </div>
              <ul
                css={{
                  paddingLeft: '1rem',
                  li: {
                    marginBottom: '0.5rem',
                  },
                }}
              >
                {project.description.map((desc, idx) => (
                  <li key={idx}>
                    <Text>{desc}</Text>
                  </li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </div>
  </motion.div>
)

type CareerSectionProps = {
  sectionMethods: SectionMethodsType
  id: string
}

const CareerSection: ForwardRefRenderFunction<
  HTMLDivElement,
  CareerSectionProps
> = ({ sectionMethods, id }, ref) => {
  return (
    <Section
      ref={ref}
      id={id}
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
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
          title="CAREER"
          onClickScrollClip={() => sectionMethods.scrollToSection(4)}
        />

        <motion.div
          initial={{ translateY: 0, opacity: 0 }}
          whileInView={{
            translateY: -20,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            x: { duration: 1 },
            default: { ease: 'linear' },
          }}
          viewport={{
            once: true,
          }}
          css={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '3rem',
            gap: '4rem',
          }}
        >
          {CareerList.map((career) => (
            <CareerContent career={career} key={career.company.title} />
          ))}
        </motion.div>
      </Center>
    </Section>
  )
}

export default forwardRef(CareerSection)
