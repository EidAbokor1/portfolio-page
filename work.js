const filterGroup = document.querySelector('.story-filters');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const stories = [...document.querySelectorAll('.story-card')];
const storyCount = document.querySelector('#story-count');

const filterStories = (category) => {
  let count = 0;
  stories.forEach((story) => {
    story.hidden = category !== 'all' && !story.dataset.category.split(' ').includes(category);
    if (!story.hidden) count += 1;
  });
  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  });
  storyCount.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => filterStories(button.dataset.filter));
});
filterGroup.hidden = false;

// Direct story links reveal the destination even after a topic has been filtered.
const revealLinkedStory = () => {
  const target = document.getElementById(window.location.hash.slice(1));
  const story = target?.closest('.story-card');
  if (!story) return;
  if (story.hidden) filterStories('all');
  story.querySelector('details').open = true;
  requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
};
window.addEventListener('hashchange', revealLinkedStory);
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (link.hash === window.location.hash) revealLinkedStory();
  });
});
revealLinkedStory();
