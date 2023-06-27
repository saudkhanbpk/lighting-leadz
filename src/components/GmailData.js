import React, { useState, useEffect } from 'react'
import { automation } from './../services/GmailAutomation'
function GmailData() {
  const [loading, setLoading] = useState(true)


  const getAutomation = () => {
    automation()
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div>
      <button onClick={
        () => {
          getAutomation()
        }
      }>Start Automation process</button>
    </div>
  )
}

export default GmailData