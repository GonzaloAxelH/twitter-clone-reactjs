import styled from 'styled-components'
import IconStars from '../../atomos/Icons/IconStars'
import ButtonImg from '../../atomos/Buttons/ButtonImg'
import FormTweet from '../../organismos/FormTweet'
import Loader from 'react-js-loader'
import TweetDefault from './TwetsTypes/TweetDefault'
import { useState, useEffect } from 'react'
const HeadTweets = styled.div`
  height: 52px;
  border-bottom: 1px solid #eff3f4;
  display: grid;
  grid-template-columns: 12fr 1fr;
  align-items: center;
  h1 {
    margin-left: 0.5em;
    font-size: 20px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`

const TweetsContainer = styled.div`
  flex: 5;
  border-left: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
  max-height: 100vh;

  @media (max-width: 1020px) {
    max-width: 600px;
  }
`
const ListTweets = styled.div`
  overflow-y: auto;
  height: calc(100vh - 52px);
  &::-webkit-scrollbar {
    display: none;
  }
  `
const TweetsListWrapper = styled.div`
`

const ContentTweets = () => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    setTweets(localStorage.getItem('tweets') ? JSON.parse(localStorage.getItem('tweets')) : [])
  }, [])
  return <TweetsListWrapper>
        {
          tweets.map((tweet, index) => {
            return <TweetDefault key={index} desc={tweet.description} />
          })
        }
     </TweetsListWrapper>
}

const Tweets = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  })
  return (
    <TweetsContainer>
      <HeadTweets>
        <h1>Home</h1>
        <ButtonImg width="40px" height="40px" Icon={() => <IconStars />} />
      </HeadTweets>
      <ListTweets>
        <FormTweet />
        {
              loader
                ? <Loader type="default" bgColor={'#1d9bf0'} title={'bubble-loop'} color={'#FFFFFF'} size={35} />
                : <ContentTweets />
            }
      </ListTweets>
    </TweetsContainer>
  )
}
export default Tweets
