import React from 'react';
import Button from '../Button';
import styles from './styles.css'

const SocialsButtons = () => (
  <div className={styles.buttonsWrapper}>
    <Button type="submit" text="Facebook" facebook social/>
    <Button type="submit" text="Google +" google social/>
    <Button type="submit" text="Linked In" linkedin social/>
  </div>
);

export default SocialsButtons;
