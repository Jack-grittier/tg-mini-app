import { FixtureStatsType } from '@features/fixtures'
import {
  Button,
  Caption,
  Card,
  Modal,
  Subheadline,
  Text,
} from '@telegram-apps/telegram-ui'
import styles from './stats.module.css'
import { Container } from '@widgets/Container/ui/Container.tsx'

interface PropsType {
  stats: FixtureStatsType[]
  teamAName: string // Добавляем проп для команды A
  teamHName: string // Добавляем проп для команды H
}

export const Stats = ({ stats, teamAName, teamHName }: PropsType) => {
  // Функция для замены нижних подчеркиваний на пробелы
  const formatText = (text: string) => {
    return text.replace(/_/g, ' ')
  }

  // Функция для проверки наличия данных
  const hasData = (stat: FixtureStatsType) => {
    return stat.h.length > 0 || stat.a.length > 0
  }

  return (
    <Modal
      className={styles.modal}
      header={
        <Modal.Header>
          <Text weight={'2'}>
            {teamHName} vs {teamAName}
          </Text>
        </Modal.Header>
      }
      snapPoints={[1]}
      trigger={
        <div className={styles.boxBtn}>
          <Button size={'m'} mode={'plain'} className={styles.button}>
            Match statistics
          </Button>
        </div>
      }
    >
      <Container>
        <div className={styles.container}>
          {stats.map((s, index) => {
            // Проверяем наличие данных перед рендерингом
            if (!hasData(s)) {
              return null // Если данных нет, возвращаем null, чтобы не рендерить
            }

            return (
              <div key={`stat-${s.identifier}-${index}`}>
                <Card className={styles.identifier}>
                  <Subheadline level="1" weight="2">
                    {formatText(s.identifier)}
                  </Subheadline>
                </Card>
                <div className={styles.inner}>
                  <div className={styles.valueBox}>
                    {s.h.map((_h, i) => {
                      return (
                        <div
                          className={styles.valueRow}
                          key={`identifier-${index}-${i}`}
                        >
                          <Caption level={'1'} weight={'3'}>
                            {_h.element?.second_name} ({_h.value})
                          </Caption>
                        </div>
                      )
                    })}
                  </div>

                  <div className={styles.valueBox}>
                    {s.a.map((_a, i) => {
                      return (
                        <div
                          className={styles.valueRow}
                          key={`identifier-${index}-${i}`}
                        >
                          <Caption level={'1'} weight={'3'}>
                            {_a.element?.second_name} ({_a.value})
                          </Caption>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Modal>
  )
}
