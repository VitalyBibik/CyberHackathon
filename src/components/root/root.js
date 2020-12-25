import styles from './root.module.scss';
import React from 'react';
import SectionBlock from '../section-block/section-block';
import { mainPageText } from '../../fixtures';
import { buttonText} from "../../buttonText";
import MainLogo from "../main-logo/main-logo";
import Button from "../../ui/button";
import SvgPlus from "../svg-icons/svg-plus";
import CheckBoxItem from '../option-box/option-box'

function Root() {
  return (
    <div className={styles.root}>
      <MainLogo mainLogo={mainPageText.logoText}/>
      <SectionBlock sectionBlock={mainPageText} />
      <CheckBoxItem/>
      <Button button={buttonText.mainButton[0]} icon={SvgPlus}/>
      <SvgPlus/>
    </div>
  );
}

export default Root;
