import NavLeft from '../../organismos/NavLeft'
import styled from 'styled-components'
import ItemUser from '../../moleculas/ItemUser'

const Header = styled.header`
  flex: 3;
  display: flex;
  height: 100vh;
  flex-direction: column;
  border-right: 1px solid #e6e7e7;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1296px) {
    flex: 1;
    min-width: 70px;
  }
  @media (min-width: 1020px) {
    align-items: flex-end;

    .item-user {
      padding-right: 18px;
    }
  }
  @media (max-width: 1020px) {
    flex: 2;
  }

  @media (max-width: 600px) {
    flex: 1;
    align-items: center;
  }
  .item-user {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ContentNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Head = () => {
  return (
    <Header>
      <ContentNav>
        <NavLeft />
      </ContentNav>
      <div className="item-user">
        <ItemUser />
      </div>
    </Header>
  )
}

export default Head
