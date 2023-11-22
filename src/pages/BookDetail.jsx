import React from 'react'
import BookDetail from '../components/BookDetail/bookdetail';
import Reviews from '../components/Reviews/reviews';

function BookPage({ Title, Series, SeriesNum, BlurbHead, Blurb, LinkSample,LinkAmz, 
  LinkBN, LinkOther, LinkGR, Cover, Quote1, QuoteAtt1, Quote2, QuoteAtt2, Quote3, QuoteAtt3}) {
  
  return (
    <>
    <BookDetail Title = {Title} Series = {Series} SeriesNum = {SeriesNum} BlurbHead = {BlurbHead} 
      Blurb = {Blurb} LinkSample = {LinkSample} LinkAmz = {LinkAmz} LinkBN = {LinkBN} 
      LinkOther = {LinkOther} LinkGR = {LinkGR} Cover = {Cover} />
    <Reviews Quote1 = {Quote1} QuoteAtt1 = {QuoteAtt1} Quote2 = {Quote2} QuoteAtt2={QuoteAtt2} Quote3 = {Quote3} QuoteAtt3={QuoteAtt3}/>
    </>
  )
}

export default BookPage