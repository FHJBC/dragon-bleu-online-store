import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { apiPlugin, storyblokInit } from "@storyblok/react";

import { AnnouncementBar, BannerItemList, SliderFourBlocks, SliderThreeBlocks, StaticBlockFourVideos, StaticBlockTwoBlocks } from './components';
import CustomBanner from './components/CustomBanner/CustomBanner';
import Feature from './components/Feature';
import Grid from './components/Grid';
import Page from './components/Page';
import TabSliderEightBlocks from './components/TabSliderEightBlocks/TabSliderEightBlocks';
import Teaser from './components/Teaser';

storyblokInit({
  accessToken: "8OwbO0ANwdLX7r5QvRi9Jgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid,
    "announcement-bar": AnnouncementBar,
    "custom-banner": CustomBanner,
    "selected-banner-items": BannerItemList,
    SliderFourBlocks: SliderFourBlocks,
    SliderThreeBlocks: SliderThreeBlocks,
    TabSliderEightBlocks: TabSliderEightBlocks,
    StaticBlockTwoBlocks: StaticBlockTwoBlocks,
    StaticBlockFourVideos: StaticBlockFourVideos,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
