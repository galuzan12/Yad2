import PropTypes from 'prop-types';
import {useEffect, useState, ComponentPropsWithoutRef} from 'react';
import * as S from './DynamicIcon.style';

interface IDynamicIcon extends ComponentPropsWithoutRef<'img'> {
  path: string;
}

const DynamicIcon = ({path, ...args}: IDynamicIcon) => {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const importIcon = async () => {
      const importedIcon = await import(`../../assests/${path}`);
      setIcon(importedIcon.default);
    };
    importIcon();
  }, []);

  return <S.Img alt="" src={icon} {...args} />;
};

DynamicIcon.propTypes = {
  path: PropTypes.string
};

export default DynamicIcon;
