import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import './App.css';

function App() {
  let slug =
    window.location.pathname === '/'
      ? 'home'
      : window.location.pathname.replace('/', '');

  const story = useStoryblok(
    slug,
    // {
    //   version: 'draft',
    // },
    {
      resolve_relations: ['custom-banner.banner_items', 'selected-banner-items.banner_items'],
    },
    {
      resolveRelations: ['custom-banner.banner_items', 'selected-banner-items.banner_items'],
    }
  );

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export default App;
