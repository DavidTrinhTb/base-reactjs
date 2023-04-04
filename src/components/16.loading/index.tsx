// @ts-nocheck

import { message } from 'antd';

export default function aaaaa(msgType?: any, msgContent = 'Default Message', objValue?: any) {
  message.config({
    maxCount: 1,
  });

  let fieldMsg;
  if (objValue) {
    const key = (Object.keys(objValue) || [])[0];
    const val = objValue[key];

    fieldMsg = {
      [key]: val,
    };
  }
  message[msgType]({
    content: fieldMsg || msgContent,
    className: 'event-message',
    duration: 3,
    maxCount: 1,
  });
}
