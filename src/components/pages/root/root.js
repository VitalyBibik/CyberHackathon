import styles from './root.module.scss';
import React from 'react';
import cn from 'classnames';
import SectionBlock from '../../section-block/section-block';
import MainLogo from '../../main-logo/main-logo';
import Button from '../../../ui/button';
import SvgPlus from '../../svg-icons/svg-plus';
import CheckBoxItem from '../../option-box/option-box';
import { Link } from 'react-router-dom';

function Root({ root, buttonText }) {
  const onGoNextPage = () => {
    console.log('click');
  };

  return (
    <div className={cn(styles.root)}>
      <MainLogo mainLogo={root.logoText} />
      <SectionBlock sectionBlock={root} />
      <CheckBoxItem />
      <Link to="/new-voice">
        <Button
          button={buttonText.mainButton[0]}
          icon={SvgPlus}
          onClick={onGoNextPage}
        />
      </Link>
      <SvgPlus />
    </div>
  );
}

export default Root;
