import { Icon } from 'antd';
import React from 'react';
import styles from './index.less';

export default {
  Username: {
    props: {
      size: 'large',
      id: 'username',
      prefix: <Icon style={{marginRight: `12px`}}type="user" className={styles.prefixIcon} />,
      placeholder: 'Username',
    },
    rules: [
      {
        required: true,
        message: 'Please enter username!',
      },
    ],
  },
  Organization: {
    props: {
      size: 'large',
      id: 'organization',
      prefix: <Icon style={{marginRight: `12px`}}type="global" className={styles.prefixIcon} />,
      placeholder: 'organization',
    },
    rules: [
      {
        required: true,
        message: 'Please enter username!',
      },
    ],
  },
  Password: {
    props: {
      size: 'large',
      prefix: <Icon style={{marginRight: `12px`}}type="lock" className={styles.prefixIcon} />,
      type: 'password',
      id: 'password',
      placeholder: '888888',
    },
    rules: [
      {
        required: true,
        message: 'Please enter password!',
      },
    ],
  },

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

  Mobile: {
    props: {
      size: 'large',
      prefix: <Icon style={{marginRight: `12px`}}type="mobile" className={styles.prefixIcon} />,
      placeholder: 'mobile number',
    },
    rules: [
      {
        required: true,
        message: 'Please enter mobile number!',
      },
      {
        pattern: /^1\d{10}$/,
        message: 'Wrong mobile number format!',
      },
    ],
  },
  Captcha: {
    props: {
      size: 'large',
      prefix: <Icon style={{marginRight: `12px`}}type="mail" className={styles.prefixIcon} />,
      placeholder: 'captcha',
    },
    rules: [
      {
        required: true,
        message: 'Please enter Captcha!',
      },
    ],
  },
};
