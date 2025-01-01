import React from 'react'
import BookDetail from '../components/BookDetail/bookdetail';
import Reviews from '../components/Reviews/reviews';
import BackerList from '../components/Backers/backers';

function BookPage({ Title, Series, SeriesNum, BlurbHead, Blurb, GlowTxt, LinkGlow,LinkAmz, 
  LinkBN, LinkOther, LinkGR, Cover, CoverStatus, Quotes, Backers, Page}) {
  
  return (
    <>
    <BookDetail Title = {Title} Series = {Series} SeriesNum = {SeriesNum} BlurbHead = {BlurbHead} 
      Blurb = {Blurb} GlowTxt= {GlowTxt} LinkGlow = {LinkGlow} LinkAmz = {LinkAmz} LinkBN = {LinkBN} 
      LinkOther = {Page} LinkGR = {LinkGR} Cover = {Cover} Status = {CoverStatus}/>
    {Quotes && <Reviews quotes={Quotes} />}
    {Backers && <BackerList backers={Backers} contribution={"the Theft of Fire audiobook"}/>} 
    </>
  )
}

export default BookPage