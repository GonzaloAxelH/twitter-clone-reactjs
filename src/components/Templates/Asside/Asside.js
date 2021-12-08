import styled from 'styled-components'
import InputSearch from '../../moleculas/InputSearch'
const Aside = styled.div`
  flex: 3.7;
  border-left: 1px solid #eff3f4;
  max-height: 100vh;
  @media (max-width: 1020px) {
    display: none;
  }
`
// heads

const HeadAside = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  form {
    margin: 0 0 0 0.7em;
    width: 80%;
  }
`

const AsideContent = styled.div`
  overflow-y: auto;
  height: calc(100vh - 52px);
  &::-webkit-scrollbar {
    display: none;
  }
`

const Asside = () => {
  return (
    <Aside>
      <HeadAside>
        <InputSearch />
      </HeadAside>
      <AsideContent></AsideContent>
    </Aside>
  )
}

export default Asside
