import initStoryshots from '@storybook/addon-storyshots';
import { render } from 'enzyme';

const defaultRenderTest = ({ story, context }) => {
  expect(render(story.render(context))).toMatchSnapshot();
};

initStoryshots({
  test: defaultRenderTest,
});
