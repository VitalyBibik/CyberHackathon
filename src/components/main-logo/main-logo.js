import styles from './main-logo.module.scss';
import React from 'react';
import cn from 'classnames';
import SvgNumber from '../svg-icons/svg-Number'

const MainLogo = ({mainLogo}) => {
       return (
           <div>
           <h1 className={cn(styles['main-logo'])}>{mainLogo[0].title}
               <span className={cn(styles['number-icon'])}>
                   <SvgNumber/>
               </span>
           </h1>
           </div>
       )

}
export default MainLogo;
