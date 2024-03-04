import React, { FC, PropsWithChildren } from 'react';
import styles from './CardsLayout.module.scss';

const CardsLayout: FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.container}>
      {children}
    </div>
  );

export default CardsLayout;
