import './../App.css';
import React from 'react';
import tree from './../images/tree.jpg';
import top from './../images/top.jpg';
import styled from 'styled-components';

const MovieImage = styled.img`
  height: 60%;
  width: 60%;
`;

const MovieImageSmall = styled.img`
  height: 20%;
  width: 20%;
`;

const TopBox = styled.div`
  margin: auto;
  width: 60%;
  height: 100px;
  padding: 20px;
  font-family: Verdana;
  font-size: 24px;
  color: white;
  background-color: #e6ccff;
  text-align: left;
`;

const MenuBox = styled.div`
  margin: auto;
  width: 60%;
  height: 40px;
  padding: 20px;
  font-family: Verdana;
  font-size: 12px;
  color: #e6ccff;
  background-color: white;
  text-align: left;
`;

const MovieBox = styled.div`
  margin: auto;
  width: 60%;
  padding: 20px;
  font-family: Verdana;
  font-size: 14px;
  color: white;
  background-color: #e6ccff;
  text-align: left;
`;

const MovieData1 = () => {
  return (
    <>
      <MovieBox>
        <span>
          <MovieImageSmall src="https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" />{' '}
        </span>
        <span>
          <MovieImageSmall src="https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" />{' '}
        </span>
        <span>
          <MovieImageSmall src="https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" />{' '}
        </span>

        <p>Title: Lord of the Rings - Fellowship of the Ring</p>

        <p>Overview: </p>

        <MovieImage src="https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" />
      </MovieBox>
    </>
  );
};

const MovieVideoData1 = () => {
  return (
    <>
      <MovieBox>
        <p>Name: Lord of the Rings</p>
        <iframe width="420" height="345" title="MovieTrailer" src=""></iframe>
      </MovieBox>
    </>
  );
};

const App = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${tree})`, backgroundRepeat: 'repeat' }}
      >
        <TopBox
          style={{ backgroundImage: `url(${top})`, backgroundRepeat: 'repeat' }}
        >
          MOVIE LISTING - AVATAR
        </TopBox>

        <MenuBox>
          <span>Lord of the Rings 1 #</span>
          <span>Lord of the Rings 2 #</span>
          <span>Lord of the Rings 3 #</span>
          <span>Avatar 1 #</span>
          <span>Avatar 2 #</span>
        </MenuBox>

        <MovieData1 />

        <MovieVideoData1 />
      </div>
    </>
  );
};

export default App;
