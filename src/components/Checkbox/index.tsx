import React, { FC } from 'react';
import { useField } from 'formik';

// Styles
import styles from './Checkbox.module.scss';

type CheckboxProps = {
  name: string;
  label: React.ReactNode;
};

const Checkbox: FC<CheckboxProps> = ({ name, label }) => {
  const [field, meta] = useField({ name, type: 'checkbox' });

  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          {...field}
          className={`${styles.checkbox} ${
            meta.touched && meta.error ? styles.error : ''
          }`}
        />
        <span className={styles.checkboxText}>{label}</span>
      </label>
      {meta.touched && meta.error && (
        <div className={styles.errorMessage}>{meta.error}</div>
      )}
    </div>
  );
};

export default Checkbox;
