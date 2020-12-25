import styles from './section-text.module.scss';
import cn from 'classnames';

const SectionText = ({ text }) => (
  <p className={cn(styles['section-text'])}>{text}</p>
);

export default SectionText;
