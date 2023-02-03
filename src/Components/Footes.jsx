
import React from 'react';
const Footer = () => {
  return (
    <div>
    <footer style={styles.footer}>
    <img src="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="" />
      <p style={styles.text}> Copyright© 2023, THG PUBLISHING PVT LTD. or its affiliated companies(The Hindu). All rights reserved.</p>
      <p>For More Details/Mail:shubhamtribhuvan8@gmail.com</p>
      <div>
         Privacy |  Policy | Terms of Use |  Sales and Refunds Legal | Site Map
      </div>
    </footer>
      
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#d2d2d7',
    padding: '20px',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: '16px',
  },
};

export default Footer;
