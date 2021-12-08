import React from 'react'
import ImgUser from '../../../atomos/Img/ImgUser'
import styled from 'styled-components'
import IconRetweet from '../../../atomos/Icons/IconRetweet.js'
import IconVerificado from '../../../atomos/Icons/IconVerificado'
import IconComentTweet from '../../../atomos/Icons/IconCommentTweet'
import IconCorazon from '../../../atomos/Icons/IconCorazon'
import IconShare from '../../../atomos/Icons/IconShare'
import IconPoints from '../../../atomos/Icons/IconPoints'
import IconCorazon2 from '../../../atomos/Icons/IconCorazon2'
const TweetDefaultStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  transition: all 0.2s;
  cursor: pointer;
  border-top: 1px solid #e1e8ed;
  &:hover {
    background-color: rgb(247, 247, 247);
  }
  padding: 0 16px;
`
const DescriptionTweet = styled.div`
  color: #0f1419;
  font-weight: 300;
  font-size: 15px;
  width: 100%;
`

const LinkTweet = styled.a`
  color: rgb(29, 155, 240);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const UserPhotoContent = styled.div`
  margin-right: 12px;
  .wrapper__img {
    img {
      border-radius: 50%;
    }
  }
`
const TweetDefaultContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const TweetDefaultContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const FollowerNames = styled.div`
  margin-left: 32px;
  padding-top: 12px;
  display: flex;
  color: #536471;
  font-size: 14px;
  font-family: 'Twitter Chirp Heavy', sans-serif;
  span {
    margin-left: 12px;
  }
  span:hover {
    text-decoration: underline;
  }
  svg {
    fill: #536471;
    width: 16px;
    height: 16px;
  }
`
const NameUser = styled.div`
  display: flex;
  color: #0f1419;
  font-weight: bold;
  align-items: center;
  svg {
    fill: rgb(29, 155, 240);
    width: 18.75px;
    height: 18.75px;
  }
`
const NameUserRandom = styled.div`
  display: flex;
  align-items: center;
`
const Point = styled.div`
  position: relative;
  width: 4.7px;
  padding: 0 4px;
  font-weight: bold;
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`
const TweetDefaultContentBody = styled.div`
   display: flex;

`
const DateTweet = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  &:hover{
    text-decoration: underline;
  }
`
const TwittOptionPoint = styled.div`
  svg {
    width: 18.75px;
    height: 18.75px;
  }
`
const InfoUser = styled.div`
  display: flex;
`
const TweetFooter = styled.div`
  display: flex;
  margin-top:15px;
  justify-content: space-between;
`
const TweetDefaultContentFull = styled.div`
  display: flex;
  padding-bottom: 12px;
`
const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  div {
    transition: 0.2s all;
    background-color: transparent;
    border-radius: 50%;
    height: 34.74px;
    width: 34.74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    fill: #0f1419;
    width: 18.75px;
  }
  span {
    font-size: 13px;
    color: #536471;
    padding: 0 12px;
  }

  &:hover {
    div {
      background-color: ${(props) => props.hover};
    }
    svg {
      fill: ${(props) => props.color};
      width: 18.75px;
    }
    span {
      color: ${(props) => props.color};
    }
  }
`
export default function TweetDefault({ desc }) {
  return (
    <TweetDefaultStyled>
      <FollowerNames>
        <IconCorazon2 />
        <span>MIguel Angel Duran and Nicolas Schurmann follow</span>
      </FollowerNames>

      <TweetDefaultContentFull>
        <UserPhotoContent>
          <div className="wrapper__img">
            <ImgUser
              url="https://pbs.twimg.com/profile_images/573984336271122432/k8vEBoCW_normal.jpeg"
              alt=""
            />
          </div>
        </UserPhotoContent>

        <TweetDefaultContent>
          <TweetDefaultContentHeader>
            <InfoUser>
              <NameUser>
                Fernando Herrera
                <span>
                  <IconVerificado />
                </span>
              </NameUser>
              <NameUserRandom>@Fernando_Her83</NameUserRandom>
              <Point>
                <span>.</span>
              </Point>
              <DateTweet>3h</DateTweet>

            </InfoUser>
            <TwittOptionPoint>
                <ContentIcon color="#00BA7C" hover="#CCF1E5">
                  <div>
                  <IconPoints />
                  </div>
                </ContentIcon>
              </TwittOptionPoint>
          </TweetDefaultContentHeader>

          <TweetDefaultContentBody>
            <DescriptionTweet>
              {desc}
              <LinkTweet href="#"> #Gil</LinkTweet>
            </DescriptionTweet>
          </TweetDefaultContentBody>
          <TweetFooter>
            <ContentIcon color="#00BA7C" hover="#CCF1E5">
              <div>
                <IconRetweet />
              </div>
              <span>1</span>
            </ContentIcon>
            <ContentIcon color="#00BA7C" hover="#CCF1E5">
              <div>
                <IconComentTweet />
              </div>
              <span>1</span>
            </ContentIcon>
            <ContentIcon color="#00BA7C" hover="#CCF1E5">
              <div>
                <IconShare />
              </div>
              <span>1</span>
            </ContentIcon>
            <ContentIcon color="#00BA7C" hover="#CCF1E5">
              <div>
                <IconCorazon />
              </div>
              <span>1</span>
            </ContentIcon>

            <ContentIcon color="#00BA7C" hover="#CCF1E5">
              <div>
                <IconCorazon />
              </div>
              <span>1</span>
            </ContentIcon>
          </TweetFooter>
        </TweetDefaultContent>
      </TweetDefaultContentFull>
    </TweetDefaultStyled>
  )
}
