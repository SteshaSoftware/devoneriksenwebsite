import React from 'react'
import BookDetail from '../components/BookDetail/bookdetail';
import ReadSample from '../components/ReadSample/readSample';

function BookPage({ Title, Series, SeriesNum, BlurbHead, Blurb, LinkSample,LinkAmz, LinkBN, LinkOther, LinkGR, Cover}) {
  
  return (
    <>
    <BookDetail Title = {Title} Series = {Series} SeriesNum = {SeriesNum} BlurbHead = {BlurbHead} 
      Blurb = {Blurb} LinkSample = {LinkSample} LinkAmz = {LinkAmz} LinkBN = {LinkBN} 
      LinkOther = {LinkOther} LinkGR = {LinkGR} Cover = {Cover} />
    <ReadSample/>
    </>
  )
}

export default BookPage