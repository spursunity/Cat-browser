import React from 'react';

import CatsList from '../components/CatsList/CatsListContainer';
import CatPreview from '../components/CatPreview/CatPreviewContainer';

import styles from './styles/CatsPage.module.css';

/**
 * Page
 * Has 2 columns:
 * Left one is a list of cat cards
 * Right one is a profile of the chosen cat
 */
const CatsPage = () => {
  return (
    <div className = { styles.catsPage }>
      <CatsList />
      <CatPreview />
    </div>
  );
}


export default CatsPage;
