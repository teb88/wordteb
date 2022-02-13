import IconCheck from '@components/Icons/IconCheck';
import IconDelete from '@components/Icons/IconDelete';

const keys = [
  [{ type: 'letters', value: 'QWERTYUIOP' }],
  [{ type: 'letters', value: 'ASDFGHJKLÑ' }],
  [
    { type: 'key', value: 'Enter', Component: IconCheck },
    { type: 'letters', value: 'ZXCVBNM' },
    { type: 'key', value: 'Backspace', Component: IconDelete },
  ],
];

export default keys;
