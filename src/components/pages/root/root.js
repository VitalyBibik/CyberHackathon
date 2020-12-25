import styles from './root.module.scss';
import React from 'react';
import cn from 'classnames';
import SectionBlock from '../../section-block/section-block';
import MainLogo from '../../main-logo/main-logo';
import Button from '../../../ui/button';
import SvgPlus from '../../svg-icons/svg-plus';
import CheckBoxItem from '../../option-box/option-box';


function Root({root, buttonText}) {
 console.log(root)

  const onGoNextPage = () => {};

  return (
      <div className={cn(styles.root)}>
        <MainLogo mainLogo={root.logoText} />
        <SectionBlock sectionBlock={root} />
        <CheckBoxItem />
        <Button button={buttonText.mainButton[0]} icon={SvgPlus} />
        <SvgPlus />
      </div>
  );
}

export default Root;
