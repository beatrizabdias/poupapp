import { Container } from './components/Container'
import { Aside } from './components/Aside'
import { SearchInput } from './components/SearchInput'
import { Main } from './components/Main'
import { Typography } from './components/Typography'
import Card from './components/Card'
import { DailyBudget } from './components/DailyBudget'

function App() {
  return (
    <Container>
      <Aside />
        <Main>
          <SearchInput />
          <div>
            <Typography variant="h1">
              Olá, Vinny!
            </Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
            <section>
              <Card>
                <Card.Header>
                  Orçamento diário disponível:
                </Card.Header>
                <Card.Body>
                  <DailyBudget value={200}/>

                </Card.Body>

              </Card>
            </section>
          </div>




        </Main>
    </Container>
  )
}

export default App
