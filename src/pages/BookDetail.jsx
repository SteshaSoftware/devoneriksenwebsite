import React from 'react'
import BookDetail from '../components/BookDetail/bookdetail';
import Reviews from '../components/Reviews/reviews';

function BookPage({ Title, Series, SeriesNum, BlurbHead, Blurb, LinkSample,LinkAmz, 
  LinkBN, LinkOther, LinkGR, Cover, Quotes}) {
  
  return (
    <>
    <BookDetail Title = {Title} Series = {Series} SeriesNum = {SeriesNum} BlurbHead = {BlurbHead} 
      Blurb = {Blurb} LinkSample = {LinkSample} LinkAmz = {LinkAmz} LinkBN = {LinkBN} 
      LinkOther = {LinkOther} LinkGR = {LinkGR} Cover = {Cover} />
    <Reviews quotes={Quotes}/>
    </>
  )
}

export default BookPage