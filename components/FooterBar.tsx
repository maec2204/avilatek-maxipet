import React from 'react';
import {
  ABOUT_FOOTER_OPTIONS,
  ACCOUNT_FOOTER_OPTIONS,
  ATENTION_FOOTER_OPTIONS,
  INFO_FOOTER_OPTIONS,
} from '../constant';
import FooterOption from './FooterOption';

function FooterBar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-center items-start md:justify-around md:items-start h-full md:h-[200px] w-full">
      <FooterOption footerOptionArray={ABOUT_FOOTER_OPTIONS} />
      <FooterOption footerOptionArray={ACCOUNT_FOOTER_OPTIONS} />
      <FooterOption footerOptionArray={INFO_FOOTER_OPTIONS} />
      <FooterOption footerOptionArray={ATENTION_FOOTER_OPTIONS} iconsGroup />
    </div>
  );
}

export default FooterBar;
