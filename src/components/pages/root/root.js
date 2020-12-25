import styles from './root.module.scss';
import React from 'react';
import cn from 'classnames';
import SectionBlock from '../../section-block/section-block';
import { mainPageText } from '../../../fixtures';
import { buttonText } from '../../../buttonText';
import MainLogo from '../../main-logo/main-logo';
import Button from '../../../ui/button';
import SvgPlus from '../../svg-icons/svg-plus';
import CheckBoxItem from '../../option-box/option-box';
import { Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import SectionVoice from '../section-voice';

function Root() {
  const { path, url } = useRouteMatch();
  console.log('path', path);

  const onGoNextPage = () => {};

  return (
    <>
      <div className={cn(styles.root)}>
        <MainLogo mainLogo={mainPageText.logoText} />
        <SectionBlock sectionBlock={mainPageText} />
        <CheckBoxItem />
        <Button button={buttonText.mainButton[0]} icon={SvgPlus} />
        <SvgPlus />
      </div>
      <div className={cn(styles.root)}>
        <Route path={`${path}/newVoice`}>
          <SectionVoice sectionVoice={mainPageText} />
        </Route>
      </div>
    </>
  );
}

export default Root;
