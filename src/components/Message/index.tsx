import type { ReactNode } from 'react';
import { getI18n } from 'react-i18next';

import { message } from 'antd';
import type { MessageInstance } from 'antd/lib/message';

export default function showMessage(msgType: keyof MessageInstance, msgContent: string | ReactNode, objValue?: any) {
  if (typeof document === 'undefined') {
    return;
  }

  message.config({
    maxCount: 1,
  });

  let fieldMsg;
  if (objValue) {
    const key = (Object.keys(objValue) || [])[0];
    const val = objValue[key];
    fieldMsg = {
      [key]: getI18n()?.t(val),
    };
  }

  if (msgContent) {
    message[msgType]({
      content: typeof msgContent === 'string' ? getI18n()?.t(msgContent, fieldMsg) : msgContent,
      className: 'event-message',
      duration: 3,
    });
  }
}
